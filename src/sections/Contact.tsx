import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '@/styles/contact.module.css';
import { useLang } from '@/hooks/LangContext';
const contactHeheImg = '/images/logo.svg';
const contactTwitterImg = '/images/icons/contact_twitter.png';
const contactTelegramImg = '/images/icons/contact_telegram.png';
const contactDiscordImg = '/images/icons/contact_discord.png';

const Contact: React.FC = () => {
  const { t } = useLang();
  return (
    <div className={`${styles['contact-container']} container-fluid`}>
      <div className="row">
        <h2 className={`${styles['contact-title-text']}`}>{t('contact')}</h2>
        <div className={styles.imgBox}>
          <a href="https://dev--heheto.netlify.app/">
            <Image
              className={styles.contactImg}
              width={300}
              height={300}
              src={contactHeheImg}
              alt="explainerImg"
            />
          </a>
        </div>
        <div className={styles.contactBtnContainer}>
          <a
            href="https://twitter.com/hehememetoken"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <button className={styles.contactBtn}>
              <Image
                className={styles.twitterImg}
                width={100}
                height={100}
                src={contactTwitterImg}
                alt="contactTwitterImg"
              />
              Twitter
            </button>
          </a>
          <a href="https://t.me/hehememetoken" target="_blank" style={{ textDecoration: 'none' }}>
            <button className={`${styles.contactBtn} ${styles.rightBtn}`}>
              <Image
                className={styles.twitterImg}
                width={100}
                height={100}
                src={contactTelegramImg}
                alt="contactTelegramImg"
              />
              Telegram
            </button>
          </a>
          <a href="https://discord.gg/hehememetoken" target="_blank" style={{ textDecoration: 'none' }}>
            <button className={`${styles.contactBtn} ${styles.rightBtn}`}>
              <Image
                className={styles.twitterImg}
                width={100}
                height={100}
                src={contactDiscordImg}
                alt="contactDiscordImg"
              />
              Discord
            </button>
          </a>
        </div>
        <div className={styles.contactDescriptionContainer}>
          <p className={styles.descriptionText}>{t('contact_description')}</p>
        </div>
      </div>
      <Image
        width={300}
        height={400}
        className={styles.footerSadPiggy}
        src="/images/sad_piggy.png"
        alt="sad_piggy"
      />
    </div>
  );
};

export default Contact;
