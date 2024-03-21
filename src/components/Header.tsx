import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '@/styles/Header.module.css';
import { useLang } from '@/hooks/LangContext';
import { useNetworkCon } from '@/hooks/NetworkContext';
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import WalletPopover from './WalletPopover';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useDisconnect } from 'wagmi';
interface HeaderMenuProps {
  isMobile: boolean;
}

const injected = injectedModule();
const walletConnect = walletConnectModule({
  projectId: '1fda3af914357c73ce1abdd1e3968ce7'
});

// initialize Onboard
init({
  wallets: [injected, walletConnect],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: "https://ethereum.kyberengineering.io",
    },
    {
      id: "0x38",
      token: "BNB",
      label: "BNB Smart Chain Mainnet",
      rpcUrl: "https://bsc.kyberengineering.io",
    },
  ],
});

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
  const { netMenuOpen, toggleNetMenuOpen, chainId, changeNetwork, changeProvider } = useNetworkCon();
  const {connector} = useAccount()
  
  const updateNetwork = (id: number) => { 
    changeProvider();
    changeNetwork(id);
    toggleNetMenuOpen();
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

  if (isMobile) {
    return (
      <>
        <div className={classNames(styles.menuBtnBox)}>
          <div className={classNames(styles.dropdownContainer, { [styles.open]: netMenuOpen })}>
            {
              isConnected ?
                <button
                  className={classNames(styles.dropdownBtn, {
                    [styles.open]: netMenuOpen,
                    [styles.mobile]: isMobile ? true : false,
                  })}
                  onClick={() => toggleNetMenuOpen()}
                >
                  <Image
                    style={{ width: 25, height: 25, marginRight: 10 }}
                    src={require(`@/assets/networks/chain_${chainId}.svg`)}
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
                {networks.map((chain, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(styles.menuItem, {
                        [styles.isActive]: chainId === chain.id,
                      })}
                      onClick={() => updateNetwork(chain.id)}
                    >
                      <Image
                        style={{ width: 25, height: 25, marginRight: 10 }}
                        src={require(`@/assets/networks/chain_${chain.id}.svg`)}
                        alt="flag"
                      />
                      {chain.label}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            {
              isConnected 
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
                onClick={() => (isConnected ? disconnect() : openWeb3Modal())}
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
  } else {
    return (
      <div className={classNames(styles.menuBtnBox)}>
        <div className={classNames(styles.dropdownContainer, { [styles.open]: netMenuOpen })}>
          {
            isConnected ? 
              <button
                className={classNames(styles.dropdownBtn, {
                  [styles.open]: netMenuOpen,
                  [styles.mobile]: isMobile ? true : false,
                })}
                onClick={() => toggleNetMenuOpen()}
              >
                <Image
                  style={{ width: 25, height: 25, marginRight: 10 }}
                  src={require(`@/assets/networks/chain_${chainId}.svg`)}
                  alt="flag"
                />
                {chainId == 1 ? "Ethereum" : "BSC"}
                <Image
                  className={classNames(styles.dropndownImg, { [styles.open]: netMenuOpen })}
                  width={20}
                  height={20}
                  src="/images/down.png"
                  alt="down image"
                />
              </button>
            : null
          }
          {netMenuOpen && (
            <ul
              ref={dropdownRef}
              className={classNames(styles.menuContainer, {
                [styles.mobile]: isMobile ? true : false,
              })}
            >
              {networks.map((chain, index) => {
                return (
                  <li
                    key={index}
                    className={classNames(styles.menuItem, {
                      [styles.isActive]: chainId === chain.id,
                    })}
                    onClick={() => updateNetwork(chain.id)}
                  >
                    <Image
                      style={{ width: 25, height: 25, marginRight: 10 }}
                      src={require(`@/assets/networks/chain_${chain.id}.svg`)}
                      alt="flag"
                    />
                    {chain.label}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div>
          {
            isConnected 
            ?<WalletPopover
                trigger='click'
              >
                <button
                  className={styles.connectBtn}
                >
                  <Image
                    width={25}
                    height={25}
                    src={require('@/assets/wallet.svg')}
                    alt='wallet'
                  /> &nbsp;
                  {formatLongWalletAddress(address || "")}
                </button>
              </WalletPopover>
            :<button
              className={styles.connectBtn}
              onClick={() => (isConnected ? disconnect() : openWeb3Modal())}
            >
              Connect Wallet
            </button>
          }
        </div>
        <a href='https://app.hehe.to' target="_blank" className={styles.launchBtn}>Launch App</a>
      </div>
    );
  }
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
