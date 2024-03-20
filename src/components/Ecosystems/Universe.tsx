import React from 'react';
import Image from 'next/image';
import { useLang } from '@/hooks/LangContext';
import styles from '@/styles/ecosystemDetail.module.css';
const ModalCloseButton = '/images/modalCloseButton.svg';

interface modalProps {
  width: number;
  close: () => void;
}

const Universe: React.FC<modalProps> = (props) => {
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
          src="/images/ecosystem/universe.png"
          alt="governance.png"
        />
        <h2 className={`${styles.title}`}>{t('monster_universe')}</h2>
        <p className={`${styles.description}`}>{t('description_monster_universe')}</p>
        <ul className={`${styles.list}`}>
          <li>{t('diverse_ecosystem')}</li>
          <li>{t('magical_landscapes')}</li>
          <li>{t('monstrous_adventures')}</li>
          <li>{t('cultural_diversity')}</li>
          <li>{t('architectural_marvels')}</li>
          <li>{t('mysterious_artifacts')}</li>
          <li>{t('endless_exploration')}</li>
          <li>{t('friendship_and_allyship')}</li>
        </ul>
        <p className={`${styles.description}`}>{t('description_monster_world')}</p>
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

export default Universe;
