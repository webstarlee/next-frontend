import React from 'react';
import Image from 'next/image';
import { useLang } from '@/hooks/LangContext';
import styles from '@/styles/ecosystemDetail.module.css';
const ModalCloseButton = '/images/modalCloseButton.svg';

interface modalProps {
  width: number;
  close: () => void;
}

const MonsterGo: React.FC<modalProps> = (props) => {
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
          src="/images/ecosystem/monster_go.png"
          alt="monstergo.png"
        />
        <h2 className={`${styles.title}`}>{t('monster_go')}</h2>
        <p className={`${styles.description}`}>{t('description1')}</p>
        <p className={`${styles.description}`}>{t('description2')}</p>
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

export default MonsterGo;
