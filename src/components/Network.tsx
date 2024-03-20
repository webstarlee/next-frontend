import React, { useState, useRef } from 'react';
import { useNetwork, useAccount, useSwitchNetwork } from 'wagmi';
import { useWeb3Modal, Web3Button } from '@web3modal/react';
import Image from 'next/image';
import classNames from 'classnames';
import Button from '@/components/Button.tsx';
import styles from '@/styles/network.module.css';
import { useIsMounted } from '@/hooks/useIsMounted';
import { CHAIN_LIST } from '@/const';
import { useLang } from '@/hooks/LangContext';

interface networkProps {
  isMobile?: boolean;
}

const Network: React.FC<networkProps> = ({ isMobile }) => {
  const { open, close } = useWeb3Modal();
  const { chain, chains } = useNetwork();
  const { isConnected, address } = useAccount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const { switchNetwork } = useSwitchNetwork();
  const isMounted = useIsMounted();
  const { t } = useLang();

  const openWeb3Modal = () => {
    open();
  };

  const addressCut = (address: string) => {
    return '0x...' + address.slice(-4);
  };

  const handleClickNetwork = (chainId: number) => {
    switchNetwork?.(chainId);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest('button')
    ) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    // Attach the event listener on mount
    document.addEventListener('click', handleClickOutside, true);
    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const chainIcon = '/images/chains/' + chain?.id + '.png';

  return (
    <>
      {isMounted && isConnected ? (
        <>
          <div className={classNames(styles.dropdownContainer, { [styles.open]: isMenuOpen })}>
            <button
              className={classNames(styles.dropdownBtn, {
                [styles.open]: isMenuOpen,
                [styles.mobile]: isMobile ? true : false,
              })}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image
                className={styles.chainImg}
                width={20}
                height={20}
                src={chainIcon}
                alt="chain image"
              />
              {chain && chain?.name}
              <Image
                className={classNames(styles.dropndownImg, { [styles.open]: isMenuOpen })}
                width={20}
                height={20}
                src="/images/down.png"
                alt="down image"
              />
            </button>
            {isMenuOpen && (
              <ul
                ref={dropdownRef}
                className={classNames(styles.menuContainer, {
                  [styles.mobile]: isMobile ? true : false,
                })}
              >
                <li className={classNames(styles.menuItem, styles.disconnect, { [styles.mobile]: isMobile ? true : false, })} onClick={openWeb3Modal}>
                  <Image
                    className={styles.chainImg}
                    width={20}
                    height={20}
                    src='/images/logout.png'
                    alt="chain image"
                  />
                  {addressCut(address ?? '')}
                </li>

                {CHAIN_LIST.map((singleChain, index) => {
                  const singleChainIcon = '/images/chains/' + singleChain?.id + '.png';
                  return (
                    <li
                      key={index}
                      className={classNames(styles.menuItem, {
                        [styles.isActive]: chain?.id == singleChain?.id,
                      })}
                      onClick={() => handleClickNetwork(singleChain?.id)}
                    >
                      <Image
                        className={styles.chainImg}
                        width={20}
                        height={20}
                        src={singleChainIcon}
                        alt="chain image"
                      />
                      {singleChain.title}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div
            className={classNames(styles.walletBtnBox, {
              [styles.mobile]: isMobile ? true : false,
            })}
          >
            <button className={styles.walletBtn} onClick={openWeb3Modal}>
              {addressCut(address ?? '')}
            </button>
          </div>
        </>
      ) : (
        <Button onClick={() => openWeb3Modal()}>{t("btn_buy_now")}</Button>
      )}
    </>
  );
};

export default Network;
