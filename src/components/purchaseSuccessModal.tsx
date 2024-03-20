import React from 'react';
import Image from 'next/image';
import styles from '@/styles/purchaseSuccessModal.module.css';
const ModalCloseButton = '/images/modalCloseButton.svg';

interface modalProps {
  close: () => void;
}

const PurchaseSuccessModal: React.FC<modalProps> = (props) => {
  const { close } = props;
  const handleAddTokenWallet = async () => {
    try {
      const { ethereum } = window as any
      await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: "0x488cF9905CD9f5dEa7212B4571c8b1052631Ab8d",  // ERC20 token address
            symbol: `HEHE`,
            decimals: 18,
            image: 'https://hehe.to/images/tokens/pikachu.svg',
          },
        },
      })
    } catch (ex) {
      console.error(ex)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={close}></div>

      <div className={styles.contentsContainer}>
        <div className={styles.pikachuCoinImageContainer}>
          <Image height={150} width={150} src="/images/logo-coin.svg" alt="pikachu" />
        </div>
        <div>
          <h4 className={styles.amount}>1,000,000</h4>
          <h4 className={styles.alert}>$HEHE purchased!</h4>
        </div>
        <div>
          <button className={styles.buyagainButton} style={{marginBottom: 10}}>Buy again</button>
          <button className={styles.buyagainButton} onClick={handleAddTokenWallet}>Add Token to wallet</button>
        </div>
      </div>
      <div className={`${styles.closeButtonContainer}`}>
        <Image onClick={close} width={50} height={50} src={ModalCloseButton} alt="close button" />
      </div>
    </div>
  );
};

export default PurchaseSuccessModal;
