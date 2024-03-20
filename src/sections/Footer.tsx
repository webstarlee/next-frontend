import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '@/styles/footer.module.css';
import { useLang } from '@/hooks/LangContext';
const Footer: React.FC = () => {
  const { t } = useLang();
  return (
    <>
      <div className={classNames('section', styles.footerSection)}>
        <div className={styles.termPrivacyBox}>
          <span className={styles.footerCopyrightText}>{t('footer_copyright')}</span>
          <a
            href="/assets/Pikachu_hehe_Terms_Of_Service.pdf"
            target="_blank"
            className={styles.footerCopyrightText}
          >
            {t('terms_and_conditions')}
          </a>
          <a
            href="/assets/Pikachu_hehe_Privacy_Policy.pdf"
            target="_blank"
            className={styles.footerCopyrightText}
          >
            {t('privacy_policy')}
          </a>
          <a
            href="/assets/Pikachu_hehe_Cookies_Policy.pdf"
            target="_blank"
            className={styles.footerCopyrightText}
          >
            {t('cookies_policy')}
          </a>
        </div>
        <div className={styles.termPrivacyBox}>
          <span className={styles.footerDescriptioText}>{t('cryptocurrency_disclaimer')}</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
