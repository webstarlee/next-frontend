import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Button from '@/components/Button.tsx';
import styles from '@/styles/Home.module.css';
import { useLang } from '@/hooks/LangContext';
import ReferalModal from '@/components/PresaleReferalModal';
import TokenAddresses from '@/components/tokenAddresses';
import { useParallax } from 'react-scroll-parallax';
// import HeheWidget from './HeheWidget';
interface HomeProps {
  width: number;
}

const Home: React.FC<HomeProps> = ({ width = 0 }) => {
  const { t } = useLang();
  const openWhitepaper = () => {
    window.open('https://docs.pikachu.to/', '_blank', 'noreferrer');
  };

  const target = React.useRef(null);

  //referal modal
  const [openReferalModal, setOpenReferalModal] = useState(false);
  const [openTokenAddressesModal, setOpenTokenAddressesModal] = useState(false);

  const openTokenAddress = (_toggle: boolean) => {
    setOpenTokenAddressesModal(_toggle);
    if (_toggle) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };

  const handleReferalModal = (_toggle: boolean) => {
    setOpenReferalModal(_toggle);
    if (_toggle) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };

  const openStaking = () => {
    window.open('https://app.hehe.to/', '_blank', 'noreferrer');
  };

  // const heheImg = useParallax<HTMLDivElement>({
  //   speed: 30,
  //   targetElement: target.current ?? undefined,
  // });

  return (
    <>
      <div className={classNames('section', [styles.homeSection])}>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className={styles.homeLeftBox}>
            <div className={styles.leftContentBox}>
              <Image
                width={200}
                height={200}
                src="/images/logo_white.svg"
                className={styles.homeLogo}
                alt="home Logo"
              />
              <div className={styles.homeTitleBox}>
                <a
                  className={styles.certikBtn}
                  target="_blank"
                  href="https://skynet.certik.com/projects/hehe"
                >
                  <Image width={150} height={30} src="/images/certik.svg" alt="certik" />
                  Audit and KYC Verified
                </a>
                <h2 className={styles.homeTitle}>{t('the_people_meme')}</h2>
                <h2 className={classNames(styles.homeTitle, styles.textRed)}>
                  {t('pikachu_heh_token')}
                  <Image width={50} height={50} src="/images/fun.svg" alt="fun Logo" />
                </h2>
              </div>
              <div className={classNames(styles.homeBtnBox, 'hidden lg:block')}>
                <Button onClick={openWhitepaper} size="lg" className={styles.homeBtn}>
                  {t('btn_whitepaper')}
                </Button>
                <Button
                  onClick={() => openTokenAddress(true)}
                  size="lg"
                  className={classNames('margin', [styles.homeBtn])}
                >
                  {t('btn_token_address')}
                </Button>
              </div>
              <div className={styles.btnContainer}>
                <a
                  href="https://etherscan.io/token/0x488cf9905cd9f5dea7212b4571c8b1052631ab8d/"
                  target="_blank"
                >
                  <Image src="/images/etherscan.png" width={80} height={80} alt="twitter" />
                </a>

                <a
                  href="https://coinmarketcap.com/dexscan/bsc/0x9b5f52114d23bfe5302a82d5c4f59113dd070f26/"
                  target="_blank"
                >
                  <Image src="/images/coinmarketcap.svg" width={80} height={80} alt="twitter" />
                </a>

                <a
                  href="https://www.geckoterminal.com/bsc/pools/0x9b5f52114d23bfe5302a82d5c4f59113dd070f26"
                  target="_blank"
                >
                  <Image src="/images/gecko.webp" width={80} height={80} alt="twitter" />
                </a>

                <a
                  href="https://www.dextools.io/app/en/bnb/pair-explorer/0x9b5f52114d23bfe5302a82d5c4f59113dd070f26?t=1708199758836"
                  target="_blank"
                >
                  <Image src="/images/dextools.svg" width={75} height={70} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', height: 700 }}>
            <div
              // ref={heheImg.ref}
              className={classNames(styles.heheWidget)}
            >
              {/* <HeheWidget /> */}
            </div>
          </div>
          <div className={styles.mobileHomeBtnContainer}>
            <div
              className={styles.homeBtnBox}
              style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
            >
              <Button onClick={openWhitepaper} size="lg" className={styles.homeBtn}>
                {t('btn_whitepaper')}
              </Button>
              <Button onClick={() => openTokenAddress(true)} size="lg" className={styles.homeBtn}>
                {t('btn_token_address')}
              </Button>
              <Button onClick={openStaking} size="lg" className={styles.homeBtn}>
                {'Stake Now'}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.cexPlatformContainer}>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x488cF9905CD9f5dEa7212B4571c8b1052631Ab8d"
            target="_blank"
            className={classNames(styles.socialBtn)}
          >
            <span>Pancakeswap</span>
            <Image
              src="/images/pancakeswap.svg"
              style={{ marginLeft: '5px' }}
              width={30}
              height={30}
              alt="pancakeswap"
            />
          </a>

          <a
            href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x488cf9905cd9f5dea7212b4571c8b1052631ab8d"
            target="_blank"
            className={classNames(styles.socialBtn)}
          >
            <span>Uniswap</span>
            <Image
              src="/images/uniswap.svg"
              style={{ marginLeft: '5px' }}
              width={30}
              height={30}
              alt="uniswap"
            />
          </a>

          <a
            href="https://www.okx.com/web3/dex-swap#inputChain=56&inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputChain=56&outputCurrency=0x488cf9905cd9f5dea7212b4571c8b1052631ab8d"
            target="_blank"
            className={classNames(styles.socialBtn)}
          >
            <span>OKXswap</span>
            <Image
              src="/images/okx.svg"
              style={{ marginLeft: '5px' }}
              width={30}
              height={30}
              alt="okx"
            />
          </a>
        </div>
      </div>
      {openReferalModal && <ReferalModal close={() => handleReferalModal(false)} />}
      {openTokenAddressesModal && (
        <TokenAddresses
          close={() => openTokenAddress(false)}
          isMobile={width < 768 ? true : false}
        />
      )}
    </>
  );
};

export default Home;
