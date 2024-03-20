import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useParallax } from 'react-scroll-parallax';
import styles from '@/styles/tokenomics.module.css';
import { useLang } from '@/hooks/LangContext';
const explainerImg = '/images/tokenomics_image.svg';
const graphImg = '/images/tokenomics_graph.svg';
const cashMoneyImg = '/images/cash_money.png';

interface TokenomicsProps {
  width: number;
}

const Tokenomics: React.FC<TokenomicsProps> = ({ width }) => {
  const { t } = useLang();
  const target = React.useRef(null);
  const tokenomicsCoin = useParallax<HTMLImageElement>({
    speed: 20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  return (
    <div id="tokenomics" className={classNames('section', styles.tokenomicsSection)}>
      <div className={styles.parallaxContainer}>
        <Image
          ref={tokenomicsCoin.ref}
          width={50}
          height={50}
          className={styles.tokenOmicsCoin}
          src="/images/icons/coin_4.svg"
          alt=""
        />
      </div>
      {width > 1024 ? (
        <div className={classNames(styles.desktopContainer, 'grid grid-cols-10 gap-12')}>
          <div className="col-span-6">
            <h2 className={styles.title}>{t('tokenomics_title')}</h2>
            <div className={styles.imgBox}>
              <Image
                className={styles.explainerImg}
                width={300}
                height={300}
                src={explainerImg}
                alt="explainerImg"
              />
              <Image
                className={styles.graphImg}
                width={300}
                height={300}
                src={graphImg}
                alt="graphImg"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className={styles.totalSupplyBox}>
              <p>{t('total_supply')}</p>
              <Image
                className={styles.cashMoneyImg}
                width={50}
                height={50}
                src={cashMoneyImg}
                alt="cashMoneyImg"
              />
            </div>
            <div className={styles.totalSupplyStatusBox}>
              <div className={classNames(styles.statusText, styles.colorRed)}>
                {t('liquidity_pool')}
              </div>
              <div className={classNames(styles.statusText, styles.ColorOrange)}>
                {t('treasury_dao')}
              </div>
              <div className={classNames(styles.statusText, styles.ColorYellow)}>
                {t('pre_sale')}
              </div>
              <div className={classNames(styles.statusText, styles.ColorBlueGrey)}>
                {t('cex_listings')}
              </div>
              <div className={classNames(styles.statusText, styles.ColorGrey)}>{t('airdrop')}</div>
            </div>
            <p className={styles.totalSupplyDescription}>{t('tokenomics_description')}</p>
          </div>
        </div>
      ) : (
        <div className={classNames(styles.mobileContainer)}>
          <h2 className={styles.title}>{t('tokenomics_title')}</h2>
          <div className={styles.totalSupplyBox}>
            <p>{t('total_supply')}</p>
            <Image
              className={styles.cashMoneyImg}
              width={50}
              height={50}
              src={cashMoneyImg}
              alt="cashMoneyImg"
            />
          </div>
          <div className={styles.imgBox}>
            <Image
              className={styles.graphImg}
              width={222}
              height={222}
              src={graphImg}
              alt="graphImg"
            />
          </div>
          <div className={styles.totalSupplyStatusBox}>
            <div className={classNames(styles.statusText, styles.colorRed)}>
              {t('liquidity_pool')}
            </div>
            <div className={classNames(styles.statusText, styles.ColorOrange)}>
              {t('treasury_dao')}
            </div>
            <div className={classNames(styles.statusText, styles.ColorYellow)}>{t('pre_sale')}</div>
            <div className={classNames(styles.statusText, styles.ColorBlueGrey)}>
              {t('cex_listings')}
            </div>
            <div className={classNames(styles.statusText, styles.ColorGrey)}>{t('airdrop')}</div>
          </div>
          <p className={styles.totalSupplyDescription}>{t('tokenomics_description')}</p>
        </div>
      )}
    </div>
  );
};

export default Tokenomics;
