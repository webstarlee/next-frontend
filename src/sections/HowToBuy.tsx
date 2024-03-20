import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '@/styles/howtobuy.module.css';
import { useParallax } from 'react-scroll-parallax';
import { useLang } from '@/hooks/LangContext';
const underlineImg = '/images/wave_line.svg';
const moreInfoArrow = '/images/more_info.svg';
const memeCoin = '/images/logo-coin.svg';

const HowToBuy: React.FC = () => {
  const { t } = useLang();
  const target = React.useRef(null);
  const communityLine = useParallax<HTMLDivElement>({
    speed: 50,
    rotate: [0, -15],
    targetElement: target.current ?? undefined,
  });
  const counts = Array(30).fill(0);

  return (
    <>
      <div id="how_to_buy" className={classNames('section', styles.mainContent)}>
        <div className={styles.howtobyParallaxContainer}>
          <div ref={communityLine.ref} className={styles.boxLineContainer}>
            {counts.map((count, index) => (
              <div key={index} className={styles.lineBoxStyle} data-count={count}>
                {t('hehe_token')}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={styles.titleContainer}>
            <div className={styles.titleHowTOBuy}>
              <span>{t('how_to_buy')}</span>
              <Image
                width={250}
                height={250}
                src={underlineImg}
                className={styles.underlineImg}
                alt="howttobu_underline_img"
              />
            </div>
            <div className={styles.titlePikachu}>$HEHE</div>
            <div className={styles.titleToken}>{t('token')}</div>
            <div className={styles.descriptionContent}>
              <span>{t('how_to_buy_description')}</span>
            </div>
          </div>
        </div>
        <div className={styles.descriptionBoxContainer}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className={styles.descriptionGrid}>
              <div className={classNames(styles.descriptionBox, styles.firstBox)}>
                <h2>1</h2>
                <p>{t('step_1_description')}</p>
                <Image
                  width={250}
                  height={250}
                  src={memeCoin}
                  className={styles.memeCoinImg}
                  alt="howtobuy_meme_coin"
                />
              </div>
            </div>
            <div className={styles.descriptionGrid}>
              <div className={classNames(styles.descriptionBox, styles.secondBox)}>
                <h2>2</h2>
                <p>{t('step_2_description')}</p>
              </div>
            </div>
            <div className={styles.descriptionGrid}>
              <div className={classNames(styles.descriptionBox, styles.thirdBox)}>
                <h2>3</h2>
                <p>{t('step_3_description')}</p>
                <div className={styles.moreInfo}>
                  <span>{t('more_info')}</span>
                  <Image
                    width={150}
                    height={60}
                    src={moreInfoArrow}
                    className={styles.moreinfoImg}
                    alt="moreinfo_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToBuy;
