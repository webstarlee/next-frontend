import React, { useState, FC, ChangeEvent, useMemo, useEffect } from 'react';
import classNames from 'classnames';
// Web3 staffs
import {
  useAccount,
  useNetwork,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useContractRead,
  useBalance,
} from 'wagmi';
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core';
import { toast } from 'react-toastify';
import { useLang } from '@/hooks/LangContext';

// Contract Info
import { presaleConfig } from '../assets/contracts/presale';
import { parseEther } from 'viem';
import { usePresaleData } from '@/hooks/usePresaleData';
import TokenIcon from '@/components/TokenIcon';
import { useWeb3Modal } from '@web3modal/react';
import { div, sm } from '@/utils/math';
import { useIsMounted } from '@/hooks/useIsMounted';
import { ETH_USDT_ABI } from '../assets/contracts/eth_usdt';
import { ERC20_ABI } from '@/assets/contracts/usdt';
import { Round, useRoundsData } from '@/hooks/useRoundsData';
import { useSumUsdRaised } from '@/hooks/useSumUsdRaised';
import { Token, MAIN_CHAIN_ID, MaxUint256, TOKEN_LIST, ZERO_ADDRESS } from '@/const';
import Button from '@/components/Button.tsx';
import styles from '@/styles/Home.module.css';
import { CountDown } from './CountDown';
import TokenSelect from './TokenSelect';
import { useApproved } from '@/hooks/useApproved';
import { addrTobs58, bs58Toaddr } from '@/utils/utils';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import tokenSelectStyle from '@/styles/TokenSelect.module.css';
import { readContract, fetchBalance } from '@wagmi/core';
import PurchaseSuccessModal from './purchaseSuccessModal';

enum CurrencyType {
  Native,
  USDT,
}

const PresaleSkeleton: FC = () => (
  <div className={classNames(styles['presale-control-box-container'], styles.skeleton)}>
    <div className={styles['next-stage-waiting-container']}>
      <div className={styles['time-count-down-container']}>
        <div className={styles['time-box']}></div>
        <div className={styles['time-box']}></div>
        <div className={styles['time-box']}></div>
        <div className={styles['time-box']}></div>
      </div>
      <h3 className={styles['presale-count-down-large-text']}></h3>
      <div className={styles['progrss-bar']}></div>
      <h3 className={styles['usdt-raised-text']}></h3>
    </div>
    <div className={styles['buy-coin-control-container']}>
      <div className={styles['currency-compare-box']}>
        <p className={styles['currency-compare-text']}></p>
      </div>
      <div className={styles['pay-method-button-container']}>
        <Button
          onClick={() => console.log('skeleton')}
          className={`${styles['currency-select-btn']} btn-round btn-size-md`}
        ></Button>
        <Button
          onClick={() => console.log('skeleton')}
          className={` ${styles['currency-select-btn']} btn-round btn-size-md`}
        ></Button>
      </div>
      <div className={`${styles['currency-balance-status-box']}`}>
        <h2 className={styles['currency-balance-status-text']}></h2>
      </div>
      <div className="mb-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2 mt-2">
          <div className="from-box">
            <p className={`${styles['money-swap-title']}`}></p>
            <div className={`${styles['input-container']}`}></div>
          </div>
          <div className="to-box">
            <p className={`${styles['money-swap-title']}`}></p>
            <div className={`${styles['input-container']}`}></div>
          </div>
        </div>
      </div>

      <Button onClick={() => console.log('skeleton')} fullWidth className="large mb-3"></Button>
      <Button
        onClick={() => console.log('skeleton')}
        fullWidth
        color="white-blue"
        className="large"
      ></Button>
    </div>
  </div>
);

interface PresaleProps {
  openReferalModal: () => void;
  openPurchasedModal: () => void;
}

const Presale: FC<PresaleProps> = (props) => {
  const { openReferalModal, openPurchasedModal } = props;
  const { chain } = useNetwork();
  const [amountFrom, setAmountFrom] = useState<string | number>('');
  const [amountTo, setAmountTo] = useState<string | number>('');

  const [openCoinModal, setOpenCoinMoal] = useState(false);
  const [coinFilter, setCoinFilter] = useState('');

  const [selectedToken, setSelectedToken] = useState<Token>(
    TOKEN_LIST[chain?.id || MAIN_CHAIN_ID]?.[0]
  );
  const { address, isConnected } = useAccount();
  const { open: openWeb3Modal, close } = useWeb3Modal();
  const isMounted = useIsMounted();
  const { t } = useLang();

  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref');
  const referrer = refCode ? bs58Toaddr(refCode) : ZERO_ADDRESS;

  const filteredCoins: Token[] = useMemo(() => {
    if (coinFilter) {
      const _filtered = TOKEN_LIST[chain?.id || MAIN_CHAIN_ID].filter((token) => {
        return token.name.toString().toUpperCase().includes(coinFilter.toUpperCase());
      });

      return _filtered;
    } else {
      return TOKEN_LIST[chain?.id || MAIN_CHAIN_ID];
    }
  }, [coinFilter, chain]);

  const fetchTokenData = async (token: Token) => {
    if (!token.price) {
      const _price = await readContract({
        ...presaleConfig,
        functionName: 'getTokenPrice',
        args: [token.address],
      });
      token.price = div(_price, BigInt(10 ** 18), 8);
    }
    if (address && !token.balance) {
      const _balance = await fetchBalance({
        address,
        token: token.address != ZERO_ADDRESS ? token.address : undefined,
      });
      token.balance = Number(_balance?.formatted);
    }    
  };

  useEffect(() => {
    (TOKEN_LIST[chain?.id || MAIN_CHAIN_ID] || []).forEach((token) => {
      fetchTokenData(token);
    })
  }, [chain]);

  const nativeCurrency = chain?.nativeCurrency.symbol ?? 'ETH';

  const { data: _nativeBalance } = useBalance({
    address,
  });
  const nativeBalance = Number(_nativeBalance?.formatted);

  const { approved, refetch: refetchApproved } = useApproved(
    selectedToken?.address,
    address,
    presaleConfig.address,
    +amountFrom
  );

  const { data: _purchasedAmount = 0n, refetch: refetchPurchasedAmount } = useContractRead(
    address && {
      ...presaleConfig,
      functionName: 'userDeposits',
      args: [address],
    }
  );
  const purchasedAmount = Number(_purchasedAmount) / 10 ** 18;

  let referralLink = '';
  if (typeof window !== 'undefined') {
    referralLink = `${window.location.origin}?ref=${addrTobs58(address || '')}`;
  }

  const abi = chain?.id == 1 ? ETH_USDT_ABI : ERC20_ABI;
  const { config } = usePrepareContractWrite({
    address: selectedToken?.address,
    abi,
    functionName: 'approve',
    args: [presaleConfig.address, BigInt(MaxUint256)],
  });
  const { data: approveData, write: approve } = useContractWrite(config);
  const { isLoading: isApproving, isSuccess } = useWaitForTransaction({
    hash: approveData?.hash,
    onSuccess: () => {
      toast('Approved!!!');
      refetchApproved();
    },
  });

  const { price, nativePrice, currentStep, checkPoint } = usePresaleData(
    chain?.id ?? MAIN_CHAIN_ID
  );
  const rounds = useRoundsData();
  const sumUsdRaised = useSumUsdRaised();

  if (!isMounted) return <PresaleSkeleton />;

  const changeAmountTo = (_amountFrom: number) => {
    setAmountTo(Math.floor(((selectedToken?.price || 0) * _amountFrom) / price));
  };

  const handleFromAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const _amountFrom = e.target.value;
    setAmountFrom(_amountFrom);
    changeAmountTo(+_amountFrom);
  };

  const handleToAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) return;
    const _amountTo = e.target.value;
    setAmountTo(_amountTo);
    setAmountFrom(sm((+_amountTo * price) / (selectedToken?.price || 0)));
  };

  const handleBuy = async () => {
    if (!selectedToken) return;
    const config = await prepareWriteContract({
      ...presaleConfig,
      functionName: 'buyWith',
      args: [selectedToken.address, BigInt(amountTo), referrer as `0x${string}`],
      value: selectedToken.address == ZERO_ADDRESS ? parseEther((+amountFrom+0.001).toString()) : 0n,
    });
    const { hash } = await writeContract(config);
    const data = await waitForTransaction({
      hash,
    });
    toast('Successfully bought!!!');
    openPurchasedModal();
    refetchPurchasedAmount();
  };

  const handleApprove = async () => {
    approve?.();
  };

  const handleClaim = async () => {
    const config = await prepareWriteContract({
      ...presaleConfig,
      functionName: 'claim',
    });
    const { hash } = await writeContract(config);
    const data = await waitForTransaction({
      hash,
    });
    toast('Successfully claimed!!!');
    refetchPurchasedAmount();
  };

  const handleHowToBuy = () => {
    const element = document.getElementById('how_to_buy');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMax = () => {
    const amount = selectedToken?.balance || 0;
    setAmountFrom(amount);
    changeAmountTo(amount);
  };

  const handleTokenSelect = async (token: Token) => {
    setOpenCoinMoal(false);
    await fetchTokenData(token);
    setSelectedToken(token);
  };

  const amountUSD = +amountFrom * (selectedToken?.price ?? 0);

  const errors: string[] = [];
  if (nativeBalance < 0.015) {
    errors.push(`Make sure you have 0.015 ${nativeCurrency} for gas.`);
  }
  if ((selectedToken?.balance ?? 0) < +amountFrom) {
    errors.push(`Make sure you have enough ${selectedToken?.symbol} to buy tokens.`);
  }
  if (amountUSD < 20) {
    errors.push(`Please buy $20 worth of tokens at least. You pay $${amountUSD.toFixed(2)}.`);
  }

  const _r = {
    amount: 0n,
    price: 0n,
    endTime: 0n,
    endPoint: 0n,
  } as Round;

  const prevRound = rounds[currentStep - 1] ?? _r;
  const curRound = rounds[currentStep] ?? _r;
  const nextRound = rounds[currentStep + 1] ?? curRound;

  // const sold = checkPoint - prevRound.endPoint;
  // const percent = div(sold, curRound.amount, 2) * 100;
  const sold = div(sumUsdRaised, BigInt(10 ** 18), 5) + 8000000
  const percent = (sold / 33_000_000 * 100).toFixed(2);

  const generateReferalLink = () => {
    // something to do....
    openReferalModal();
  };

  console.log(nextRound);

  return (
    <>
      <div className={`${styles['presale-control-box-container']}`}>
        <div className={`${styles['next-stage-waiting-container']}`}>
          <CountDown
            endTime={
              Number(curRound?.endTime) > Date.now() / 1000
                ? Number(curRound?.endTime)
                : Number(nextRound?.endTime)
            }
          />
          <h3 className={`${styles['presale-count-down-large-text']}`}> {t('presale_title')}</h3>
          <div className={`${styles['progrss-bar']}`}>
            {nextRound && <p className={`${styles['next-price-text']}`}>{percent}% Sold</p>}
            <div className={`${styles['progress-status']}`} style={{ width: `${percent}%` }}></div>
          </div>
          <div className={styles.priceTextContainer}>
            <p className={styles.hehePriceText}>1 $HEHE = ${price}</p>
            <p className={styles.hehePriceText} style={{textAlign: 'right'}}>{t('next_stage_price')}: ${Number(nextRound.price) / 10 ** 18}</p>
          </div>

          <h3 className={`${styles['usdt-raised-text']}`}>
            {sumUsdRaised ? (
              <>
                USDT {t('raised')}:&nbsp; ${sold.toLocaleString()}
              </>
            ) : null}
          </h3>
          {/*<h3 className={`${styles['usdt-raised-text']}`}>
            USDT {t('raised')}:<br />
            {sumUsdRaised ? (
              <>
                ${Number(div(sumUsdRaised, BigInt(10 ** 18), 5) + 8000000).toLocaleString()} /
                $33,666,666.000
              </>
            ) : null}
          </h3> */}
          <div className={styles.priceCurrentListing}>
            <div className={styles.listingItem}>
              <h3 className={styles.listItemTitle}>{t('presale_price')}</h3>
              <h2 className={styles.listItemVal}>${price}</h2>
            </div>
            <div className={styles.listingItem}>
              {/* <Image src="/images/wave.png" alt="wave.png" height={10} width={100} /> */}
              <h3 className={styles.listItemTitle}>{t('listing_price')}</h3>
              <h2 className={styles.listItemVal}>$0.000424</h2>
            </div>
          </div>
        </div>
        <div className={`${styles['buy-coin-control-container']}`}>
          {isConnected && (
            <div
              className={`${styles['usdt-raised-text']} ${
                purchasedAmount > 0 && styles['border-yellow']
              }`}
            >
              {purchasedAmount > 0 && (
                <>
                  <div>
                    <p
                      onClick={openPurchasedModal}
                      style={{ cursor: 'pointer' }}
                      className={styles['purchased-title']}
                    >
                      {t('your_purchased')} $HEHE
                    </p>
                    <p className={styles['purchased-amount']}>{purchasedAmount.toFixed(0)}</p>
                  </div>
                  <button color="white-blue" className={styles['claim-btn']} onClick={handleClaim}>
                    {t('claim')}
                  </button>
                </>
              )}
            </div>
          )}
          <div className={`${styles['currency-compare-box']}`}>
            <p className={`${styles['currency-compare-text']}`}>1 $HEHE = ${price}</p>
          </div>

          <div className="mb-3">
            <div className="from-box">
              <p className={`${styles['money-swap-title']}`}>
                Amount in {selectedToken?.symbol} {t('you_pay')}
                <a className={`${styles['max-money-btn']}`} onClick={handleMax}>
                  {t('max')}
                </a>
              </p>
              <div className={`${styles['input-container']}`}>
                <div className={styles.inputContainer}>
                  <input
                    value={amountFrom}
                    onChange={handleFromAmountChange}
                    className={`${styles['money-input']}`}
                    type="number"
                  />
                  {address ? (
                    <h2 className={`${styles['currency-balance-status-text']}`}>
                      <b>{selectedToken?.symbol}</b> Balance: {selectedToken?.balance}
                    </h2>
                  ) : (
                    ''
                  )}
                </div>
                <div className={classNames(styles.dropdownContainer)}>
                  <button
                    className={classNames(tokenSelectStyle.dropdownBtn)}
                    onClick={() => setOpenCoinMoal(true)}
                  >
                    {selectedToken ? (
                      <>
                        <TokenIcon symbol={selectedToken.symbol} />
                        {selectedToken.symbol}
                      </>
                    ) : (
                      <span>Select Coin</span>
                    )}
                    <Image src="/images/dropdownArrow.png" alt="downArrow" height={10} width={10} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles['to-box']}>
              <p className={`${styles['money-swap-title']}`}>
                <b>HEHE</b> {t('you_receive')}
              </p>
              <div className={`${styles['input-container']}`}>
                <input
                  value={amountTo}
                  onChange={handleToAmountChange}
                  className={`${styles['money-input']}`}
                  type="text"
                  pattern="[0-9]*"
                />
                <TokenIcon className={`${styles['currency-input-btn-img']}`} symbol={'pikachu'} />
              </div>
            </div>
            <h2 className={`${styles['currency-balance-status-text']}`}></h2>
            <ul className={`${Number(amountFrom) > 0 && styles['errors']}`}>
              {Number(amountFrom) > 0 && errors.map((err, i) => <li key={`err${i}`}>{err}</li>)}
            </ul>
          </div>

          {address ? (
            <>
              {selectedToken && selectedToken.address != ZERO_ADDRESS && !approved && (
                <Button
                  onClick={() => handleApprove()}
                  fullWidth
                  className="family-sfprobold mb-3"
                  disabled={isApproving}
                >
                  {isApproving ? 'Approving' : 'Approve'}
                </Button>
              )}
              <Button
                onClick={() => handleBuy()}
                fullWidth
                className="family-sfprobold mb-3"
                disabled={errors.length > 0}
              >
                {t('buy_now')}
              </Button>
            </>
          ) : (
            <Button onClick={openWeb3Modal} fullWidth className="family-sfprobold mb-3">
              {t('connect_wallet')}
            </Button>
          )}
          <Button
            onClick={handleHowToBuy}
            fullWidth
            color="white-blue"
            className="family-sfprobold"
          >
            {t('how_to_buy')}
          </Button>
        </div>
        {openCoinModal && (
          <div className={styles.coinSelectModal}>
            <div className={styles.selectContainer}>
              <div className={styles.modalHeader}>
                <div className={styles.titleContainer}>
                  <h3>Select Coin</h3>
                  <Image
                    onClick={() => setOpenCoinMoal(false)}
                    src="/images/timesIcon.png"
                    height={15}
                    width={15}
                    alt="close icon"
                  />
                </div>
                <div className={styles.searchBarContainer}>
                  <Image src="/images/searchIcon.png" height={25} width={25} alt="searchIcon" />
                  <input onChange={(e) => setCoinFilter(e.target.value)} placeholder="Search" />
                </div>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.scrollContainer}>
                <div className={styles.modalBody}>
                  {filteredCoins?.map((token, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleTokenSelect(token)}
                        className={styles.coinItem}
                      >
                        <div className={styles.coin}>
                          <TokenIcon symbol={token.symbol} />
                          <span className={styles.coinName}>{token.name}</span>
                        </div>
                        <span className={styles.coinName}>{token.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Presale;
