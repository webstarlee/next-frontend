import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/tokenAddressesModal.module.css';
import { useLang } from '@/hooks/LangContext';
const ModalCloseButton = '/images/modalCloseButton.svg';

interface modalProps {
  close: () => void;
  isMobile: boolean;
}

const TokenAddresses: React.FC<modalProps> = (props) => {
  const { close, isMobile } = props;
  const { t } = useLang();
  const [steps] = useState([0, 25, 50, 75, 100]);
  const [value, setValue] = useState(50);

  const gotoTokenAddress = (scan_address: string) => {
    window.open(`https://${scan_address}/0x488cf9905cd9f5dea7212b4571c8b1052631ab8d/`, '_blank', 'noreferrer');
  }

  const addressCut = () => {
    if (isMobile) {
      return "0x488...ab8d"
    } else {
      return "0x488cf9905cd9f5dea7212b4571c8b1052631ab8d";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={close}></div>

      <div className={styles.contentsContainer}>
        <h3 className={styles.title}>HEHE TOKEN ADDRESSES</h3>
        <button onClick={() => gotoTokenAddress("etherscan.io/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/icons/eth.svg" alt="eth icon" />
            <p>ETH</p>
          </div>
          <div className={styles.addressContainer}>
            <p>{addressCut()}</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button>

        <button onClick={() => gotoTokenAddress("bscscan.com/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/tokens/bnb.svg" alt="eth icon" />
            <p>BNB Chain</p>
          </div>
          <div className={styles.addressContainer}>
            <p>{addressCut()}</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button>

        <button onClick={() => gotoTokenAddress("polygonscan.com/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/icons/polygon.svg" alt="eth icon" />
            <p>Polygon</p>
          </div>
          <div className={styles.addressContainer}>
            <p>{addressCut()}</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button>

        <button onClick={() => gotoTokenAddress("optimistic.etherscan.io/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/chains/10.png" alt="eth icon" />
            <p>Optimism</p>
          </div>
          <div className={styles.addressContainer}>
            <p>{addressCut()}</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button>

        <button onClick={() => gotoTokenAddress("arbiscan.io/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/chains/42161.png" alt="eth icon" />
            <p>Arbitrum</p>
          </div>
          <div className={styles.addressContainer}>
            <p>{addressCut()}</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button>

        <button onClick={() => gotoTokenAddress("gnosisscan.io/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/chains/100.png" alt="eth icon" />
            <p>Gnosis</p>
          </div>
          <div className={styles.addressContainer}>
            <p>{addressCut()}</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button>

        <button onClick={() => gotoTokenAddress("avascan.info/blockchain/c/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/chains/43114.png" alt="eth icon" />
            <p>Avalanche</p>
          </div>
          <div className={styles.addressContainer}>
            <p>{addressCut()}</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button>

        <button onClick={() => gotoTokenAddress("ftmscan.com/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/chains/250.png" alt="eth icon" />
            <p>Fantom</p>
          </div>
          <div className={styles.addressContainer}>
            <p>{addressCut()}</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button>

        {/* <button onClick={() => gotoTokenAddress("ftmscan.com/token")} className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/chains/8217.png" alt="eth icon" />
            <p>Klaytn</p>
          </div>
          <div className={styles.addressContainer}>
            <p>0x488cf9905cd9f5dea7212b4571c8b1052631ab8d</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button> */}

        {/* <button className={styles.tokenAddressBtn}>
          <div className={styles.tokenNameBox}>
            <Image width={30} height={30} src="/images/chains/1313161554.png" alt="eth icon" />
            <p>Aurora</p>
          </div>
          <div className={styles.addressContainer}>
            <p>0x488cf9905cd9f5dea7212b4571c8b1052631ab8d</p>
            <Image width={30} height={30} src="/images/arrow_site.png" alt="arrow icon" />
          </div>
        </button> */}

      </div>
      <div className={`${styles.closeButtonContainer}`}>
        <Image onClick={close} width={50} height={50} src={ModalCloseButton} alt="close button" />
      </div>
    </div>
  );
};

export default TokenAddresses;
