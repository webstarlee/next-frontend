import React from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import styles from '@/styles/notmeme.module.css';
import { useLang } from '@/hooks/LangContext';
const Notmeme: React.FC = () => {
  const { t } = useLang();
  const target = React.useRef(null);
  const notmemeCoinOne = useParallax<HTMLImageElement>({
    speed: -20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  const notmemeCointwo = useParallax<HTMLImageElement>({
    rotate: [0, 85],
    targetElement: target.current ?? undefined,
  });
  const notmemeCoinThree = useParallax<HTMLImageElement>({
    speed: 40,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  const notmemeCoinFour = useParallax<HTMLImageElement>({
    speed: 20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  return (
    <div className={`${styles['notmeme-container-fluid']} container-fluid`}>
      <Image
        ref={notmemeCoinOne.ref}
        width={50}
        height={50}
        className={`${styles['notmeme-coin-one']}`}
        src="/images/icons/coin_2.svg"
        alt="notmeme-coin-one"
      />
      <Image
        ref={notmemeCoinThree.ref}
        width={50}
        height={50}
        className={`${styles['notmeme-coin-two']}`}
        src="/images/icons/coin_3.svg"
        alt="notmeme-coin-two"
      />
      <Image
        ref={notmemeCoinFour.ref}
        width={50}
        height={50}
        className={`${styles['notmeme-coin-three']}`}
        src="/images/icons/coin_1.svg"
        alt="notmeme-coin-three"
      />
      <div className="row">
        <h2 className={`${styles['notmeme-title-text']}`}>{t('notmeme_title')}</h2>
        <h2 className={`${styles['notmeme-subtitle-text']} mt-5`}>{t('notmeme_subtitle1')}</h2>
        <h2 className={`${styles['notmeme-subtitle-text']}`}>{t('notmeme_subtitle2')}</h2>
        <div className={`${styles['notmeme-description-text']}`}>{t('notmeme_description')}</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        <div>
          <div className={`${styles['notmeme-graph-boxs']}`}>
            <h2>{t('staking_title')}</h2>
            <p>{t('staking_description')}</p>
          </div>
          <div
            className={`${styles['notmeme-graph-boxs']} ${styles['notmeme-graph-bottom-boxes']} ${styles['brown-box']}`}
          >
            <h2>{t('rewards_title')}</h2>
            <p>{t('rewards_description')}</p>
          </div>
        </div>
        <div className={`${styles['graph-line-container']}`}>
          <Image
            ref={notmemeCointwo.ref}
            width={150}
            height={150}
            src="/images/logo-coin.svg"
            alt="pikachu_coin.png"
          />
          <div className={`${styles['graph-line-box']}`}>
            <div className={`${styles['line-boxs']}`}>
              <div className={`${styles['top-line']}`}></div>
              <div className={`${styles['bottom-line']}`}></div>
            </div>
            <div className={`${styles['line-boxs']} ${styles['flip-vertical']}`}>
              <div className={`${styles['top-line']}`}></div>
              <div className={`${styles['bottom-line']}`}></div>
            </div>
            <div className={`${styles['circle-box']}`}></div>
          </div>
          <div className={`${styles['graph-line-box']} ${styles['rotate']}`}>
            <div className={`${styles['line-boxs']}`}>
              <div className={`${styles['top-line']}`}></div>
              <div className={`${styles['bottom-line']}`}></div>
            </div>
            <div className={`${styles['line-boxs']} ${styles['flip-vertical']}`}>
              <div className={`${styles['top-line']}`}></div>
              <div className={`${styles['bottom-line']}`}></div>
            </div>
            <div className={`${styles['circle-box']}`}></div>
          </div>
        </div>
        <div>
          <div
            className={`${styles['notmeme-graph-boxs']} ${styles['right-boxs']} ${styles['brown-box']}`}
          >
            <h2>{t('governance_title')}</h2>
            <p>{t('governance_description')}</p>
          </div>
          <div
            className={`${styles['notmeme-graph-boxs']} ${styles['notmeme-graph-bottom-boxes']} ${styles['right-boxs']} mt-150`}
          >
            <h2>{t('multichain_title')}</h2>
            <p>{t('multichain_description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notmeme;
