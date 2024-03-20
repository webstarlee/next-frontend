import React from 'react';
import Image from 'next/image';
import { useLang } from '@/hooks/LangContext';
import styles from '@/styles/ecosystemDetail.module.css';
const ModalCloseButton = '/images/modalCloseButton.svg';

interface modalProps {
  width: number;
  close: () => void;
}

const Governance: React.FC<modalProps> = (props) => {
  const { t } = useLang();
  const { close,width } = props;
  return (
    <div className={styles.container} >
      <div className={styles.backdrop} onClick={close}></div>
      <div className={styles.contentsContainer}>
        <Image
          width={500}
          height={500}
          className={styles.headerImg}
          src="/images/ecosystem/governance.png"
          alt="governance.png"
        />
        <h2 className={`${styles.title} ${styles.black}`}>{t('decentralized_governance')}</h2>
        <p className={`${styles.description}`}>
          {t('ecosystem_detail_governance_description_one')}
        </p>
        <p className={`${styles.subTitle}`}>{t('governance_steps')}</p>
        <ul className={`${styles.list}`}>
          <li>{t('proposal_submission')}</li>
          <li>{t('discussion_debate')}</li>
          <li>{t('voting')}</li>
          <li>{t('implementation')}</li>
          <li>{t('monitoring_evaluation')}</li>
        </ul>
        <p className={`${styles.description}`}>{t('governance_model')}</p>
        <p className={`${styles.description}`}>{t('ecosystem_evolution')}</p>
      </div>
      <div className={`${width> 1024 ? styles.closeButtonContainer: styles.closeButtonContainerMobile}`}>
        <Image onClick={close} width={50} height={50} src={ModalCloseButton} alt="close button" />
      </div>
    </div>
    
  );
};

export default Governance;
