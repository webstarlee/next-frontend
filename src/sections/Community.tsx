import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useParallax } from 'react-scroll-parallax';
import styles from '@/styles/Community.module.css';
import { useLang } from '@/hooks/LangContext';
const Community: React.FC = () => {
  const { t } = useLang();
  const target = React.useRef(null);
  const communityLine = useParallax<HTMLDivElement>({
    speed: -30,
    rotate: [0, -5],
    targetElement: target.current ?? undefined,
  });

  const communityCoin = useParallax<HTMLImageElement>({
    speed: 20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });

  const counts = Array(30).fill(0);

  return (
    <div id="community" className={classNames('section', styles.communitySection)}>
      <div className={styles.communityParallaxContainer}>
        <div ref={communityLine.ref} className={styles.boxLineContainer}>
          {counts.map((count, index) => (
            <div key={index} className={styles.lineBoxStyle} data-count={count}>
              {`Pikachu ${t('army')}`}
            </div>
          ))}
        </div>
      </div>
      <Image
        ref={communityCoin.ref}
        width={70}
        height={50}
        className={`${styles['community-boxs-coin']}`}
        src="/images/icons/coin_1.svg"
        alt=""
      />
      <h2 className={styles.commynityTitle}>
        {`${t('join_the')} `}
        <span>{t('community')}</span>
      </h2>
      <div className={styles.communityBtnContainer}>
        <a
          href="https://twitter.com/hehememetoken"
          target="_blank"
          className={classNames(styles.communityBtn, styles.twitter)}
        >
          <Image
            className={styles.communityIcon}
            src="/images/icons/twitter.svg"
            width={60}
            height={60}
            alt="twitter"
          />
        </a>
        <a
          href="https://t.me/hehememetoken"
          target="_blank"
          className={classNames(styles.communityBtn, styles.telegram)}
        >
          <Image
            className={styles.communityIcon}
            src="/images/icons/telegram.svg"
            width={60}
            height={60}
            alt="telegram"
          />
        </a>

        <a
          href="https://discord.gg/hehememetoken"
          target="_blank"
          className={classNames(styles.communityBtn, styles.discord)}
        >
          <Image
            className={styles.communityIcon}
            src="/images/icons/discord.svg"
            width={60}
            height={60}
            alt="discord"
          />
        </a>

        <a
          href="https://www.youtube.com/@hehememetoken"
          target="_blank"
          className={classNames(styles.communityBtn, styles.youtube)}
        >
          <Image
            className={styles.communityIcon}
            src="/images/icons/youtube.svg"
            width={60}
            height={60}
            alt="discord"
          />
        </a>
      </div>
      <div className={`${styles['meme-title-box-container']}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`${styles['meme-title-container']}`}>
            <div className={`${styles['meme-title-text']}`}>
              <Image width={180} height={30} src="/images/wave_line_2.svg" alt="wave_line_2" />
              {`Pikachu`}
            </div>
            <h2 className={`${styles['meme-title-text']}`}>{t('army')}</h2>
          </div>
          <div className={`${styles['community-box-container']}`}>
            <div className={`${styles['community-boxs']} ${styles['community-box']}`}>
              <h2 className={`${styles['community-boxs-large-text']}`}>{t('community_count')}</h2>
              <p className={`${styles['community-boxs-small-text']}`}>{t('community_label')}</p>
            </div>
            <div className={`${styles['community-boxs']} ${styles['impression-box']}`}>
              <h2 className={`${styles['community-boxs-large-text']}`}>{t('impressions_count')}</h2>
              <p className={`${styles['community-boxs-small-text']} text-bronze`}>
                {t('impressions_label')}
              </p>
            </div>
            <div className={`${styles['community-boxs']} ${styles['meme-box']}`}>
              <h2 className={`${styles['community-boxs-large-text']}`}>{t('unlimited')}</h2>
              <p className={`${styles['community-boxs-small-text']}`}>{t('meme_label')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
