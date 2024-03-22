import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '@/styles/Header.module.css';
import { useNetworkCon } from '@/hooks/NetworkContext';
import WalletPopover from './WalletPopover';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useDisconnect, useNetwork } from 'wagmi';
interface HeaderMenuProps {
  isMobile: boolean;
}

const networks = [
  {
    id: 1,
    label: 'Ethereum'
  },
  {
    id: 56,
    label: 'BSC'
  }
]

const HeaderMenu: React.FC<HeaderMenuProps> = ({ isMobile }) => {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open: openWeb3Modal } = useWeb3Modal();
  const dropdownRef = useRef<HTMLUListElement>(null);
  const { netMenuOpen, toggleNetMenuOpen, changeNetwork, changeProvider } = useNetworkCon();
  const {connector} = useAccount()
  const {chain} = useNetwork()
  const [connectionStat, setConnectionStat] = useState<boolean>();
  const [addr, setAddr] = useState<string>()

  useEffect(() => {
    setConnectionStat(isConnected);
    setAddr(address);
  }, [address, isConnected])

  const updateNetwork = (id: number) => { 
    changeProvider();
    changeNetwork(id);
  };

  const formatLongWalletAddress = (address: string): string => {
    if (typeof address !== "string" || address.length < 6) {
      return "";
    }
    const prefix = address.substring(0, 3);
    const suffix = address.slice(-4);
    const middle = "...";
    const formattedAddress = `${prefix}${middle}${suffix}`;
  
    return formattedAddress;
  };

  // if (isMobile) {
    return (
      <>
        <div className={classNames(styles.menuBtnBox)}>
          <div className={classNames(styles.dropdownContainer, { [styles.open]: netMenuOpen })}>
            {
              connectionStat ?
                <button
                  className={classNames(styles.dropdownBtn, {
                    [styles.open]: netMenuOpen,
                    [styles.mobile]: isMobile ? true : false,
                  })}
                  onClick={() => toggleNetMenuOpen()}
                >
                  <Image
                    style={{ width: 25, height: 25, marginRight: 10 }}
                    src={require(`@/assets/networks/chain_${chain?.id || 1}.svg`)}
                    alt="flag"
                  />
                  <Image
                    className={classNames(styles.dropndownImg, { [styles.open]: netMenuOpen })}
                    width={20}
                    height={20}
                    src="/images/down.png"
                    alt="down image"
                  />
                </button>
              :null
            }
            {netMenuOpen && (
              <ul
                ref={dropdownRef}
                className={classNames(styles.menuContainer, {
                  [styles.mobile]: isMobile ? true : false,
                })}
              >
                {networks.map((network, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(styles.menuItem, {
                        [styles.isActive]: chain?.id === network.id,
                      })}
                      onClick={() => updateNetwork(network.id)}
                    >
                      <Image
                        style={{ width: 25, height: 25, marginRight: 10 }}
                        src={require(`@/assets/networks/chain_${network.id}.svg`)}
                        alt="flag"
                      />
                      {network.label}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            {
              connectionStat 
              ?<WalletPopover
                  trigger='click'
                >
                  <button
                    className={styles.connectBtn}
                  >
                    <Image
                      width={25}
                      height={25}
                      src={require(`@/assets/wallet.svg`)}
                      alt="Disconnect"
                    />
                  </button>
                </WalletPopover>
              :<button
                className={styles.connectBtn}
                onClick={() => (connectionStat ? disconnect() : openWeb3Modal())}
              >
                <Image
                  width={25}
                  height={25}
                  src={require('@/assets/wallet.svg')}
                  alt='wallet'
                  style={{ minWidth: '25px'}}
                />
              </button>
            }
          </div>
          <a href='https://app.hehe.to' target="_blank" className={styles.launchBtn}>App</a>
        </div>
      </>
    );
  // }
  //  else {
  //   return (
  //     <div className={classNames(styles.menuBtnBox)}>
  //       <div className={classNames(styles.dropdownContainer, { [styles.open]: netMenuOpen })}>
  //         {
  //           connectionStat ? 
  //             <button
  //               className={classNames(styles.dropdownBtn, {
  //                 [styles.open]: netMenuOpen,
  //                 [styles.mobile]: isMobile ? true : false,
  //               })}
  //               onClick={() => toggleNetMenuOpen()}
  //             >
  //               <Image
  //                 style={{ width: 25, height: 25, marginRight: 10 }}
  //                 src={require(`@/assets/networks/chain_${chain?.id}.svg`)}
  //                 alt="flag"
  //               />
  //               {chain?.id == 1 ? "Ethereum" : "BSC"}
  //               <Image
  //                 className={classNames(styles.dropndownImg, { [styles.open]: netMenuOpen })}
  //                 width={20}
  //                 height={20}
  //                 src="/images/down.png"
  //                 alt="down image"
  //               />
  //             </button>
  //           : null
  //         }
  //         {netMenuOpen && (
  //           <ul
  //             ref={dropdownRef}
  //             className={classNames(styles.menuContainer, {
  //               [styles.mobile]: isMobile ? true : false,
  //             })}
  //           >
  //             {networks.map((network, index) => {
  //               return (
  //                 <li
  //                   key={index}
  //                   className={classNames(styles.menuItem, {
  //                     [styles.isActive]: chain?.id === network.id,
  //                   })}
  //                   onClick={() => updateNetwork(network.id)}
  //                 >
  //                   <Image
  //                     style={{ width: 25, height: 25, marginRight: 10 }}
  //                     src={require(`@/assets/networks/chain_${network.id}.svg`)}
  //                     alt="flag"
  //                   />
  //                   {network.label}
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         )}
  //       </div>
  //       <div>
  //         {
  //           connectionStat 
  //           ?<WalletPopover
  //               trigger='click'
  //             >
  //               <button
  //                 className={styles.connectBtn}
  //               >
  //                 <Image
  //                   width={25}
  //                   height={25}
  //                   src={require('@/assets/wallet.svg')}
  //                   alt='wallet'
  //                 /> &nbsp;
  //                 {formatLongWalletAddress(addr || "")}
  //               </button>
  //             </WalletPopover>
  //           :<button
  //             className={styles.connectBtn}
  //             onClick={() => (connectionStat ? disconnect() : openWeb3Modal())}
  //           >
  //             Connect Wallet
  //           </button>
  //         }
  //       </div>
  //       <a href='https://app.hehe.to' target="_blank" className={styles.launchBtn}>Launch App</a>
  //     </div>
  //   );
  // }
};

interface HeaderProps {
  width: number;
}

const Header: React.FC<HeaderProps> = ({ width }) => {
  const [fixed, setFixed] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  return (
    <header className={classNames(styles.header, { [styles.isSticky]: fixed })}>
      <Image
        className={styles.logo}
        src="/images/logo.svg"
        alt="pikachu Logo"
        width={100}
        height={100}
        priority
      />
      <HeaderMenu isMobile={width < 768 ? true : false} />
    </header>
  );
};

export default Header;
