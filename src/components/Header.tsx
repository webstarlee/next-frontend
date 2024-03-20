'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Button from '@/components/Button.tsx';
import styles from '@/styles/Header.module.css';
import { useLang } from '@/hooks/LangContext';
import { useNetwork } from '@/hooks/NetworkContext';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useDisconnect } from 'wagmi';
interface HeaderMenuProps {
  isMobile: boolean;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ isMobile }) => {
  const { open: openWeb3Modal } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  
  const dropdownRef = useRef<HTMLUListElement>(null);
  const { netMenuOpen, toggleNetMenuOpen, chainId, changeNetwork } = useNetwork();

  const updateNetwork = (id: number) => {
    changeNetwork(id);
    toggleNetMenuOpen();
  };
  const [rendered, setRendered] = React.useState(false);
  React.useEffect(() => {
    setRendered(true)
  }, []);

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

  if (!rendered) {
    return ''
  }
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
                        src={require(`@/assets/networks/${chain.id}.svg`)}
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
            <button
              className={styles.connectBtn}
              onClick={() => (isConnected ? disconnect() : openWeb3Modal())}
            >
              {isConnected ? "Disconnect" : "Connect"}
            </button>
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
          <button
            className={styles.connectBtn}
            onClick={() => (isConnected ? disconnect() : openWeb3Modal())}
          >
            {isConnected ? "Disconnect" : "Connect Wallet"}
          </button>
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
      <HeaderMenu isMobile={width < 1024 ? true : false} />
    </header>
  );
};

export default Header;
