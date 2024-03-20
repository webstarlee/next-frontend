import React from 'react';
import Image from 'next/image';
import { useLang } from '@/hooks/LangContext';
import styles from '@/styles/ecosystemDetail.module.css';
const ModalCloseButton = '/images/modalCloseButton.svg';

interface modalProps {
  width: number;
  close: () => void;
}

const Protocol: React.FC<modalProps> = (props) => {
  const { t } = useLang();
  const { close, width } = props;

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={close}></div>
      <div className={styles.contentsContainer}>
        <Image
          width={500}
          height={500}
          className={styles.headerImg}
          src="/images/ecosystem/defiprotocol.png"
          alt="defiprotocol.png"
        />
        <h2 className={`${styles.title}`}>{t('defi_yield_protocol')}</h2>
        <p className={`${styles.description}`}>{t('defi_yield_description')}</p>
        <p className={`${styles.subTitle}`}>{t('governance_steps')}</p>
        <ul className={`${styles.list}`}>
          <li>{t('defi_expanding')}</li>
          <li>{t('educational_resources')}</li>
          <li>{t('nft_integration')}</li>
          <li>{t('metaverse_gaming')}</li>
          <li>{t('cross_chain_compatibility')}</li>
          <li>{t('security_and_scalability')}</li>
          <li>{t('community_engagement')}</li>
          <li>{t('environmental_responsibility')}</li>
        </ul>
        <p className={`${styles.description}`}>{t('defi_vision')}</p>
      </div>
      <div
        className={`${
          width > 1024 ? styles.closeButtonContainer : styles.closeButtonContainerMobile
        }`}
      >
        <Image onClick={close} width={50} height={50} src={ModalCloseButton} alt="close button" />
      </div>
    </div>
  );
};

export default Protocol;
