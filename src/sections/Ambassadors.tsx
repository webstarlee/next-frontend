import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import TwitterPost from '@/components/TwitterPost';
import styles from '@/styles/ambassadors.module.css';
import { useLang } from '@/hooks/LangContext';
const moonWay = '/images/moon_way.png';
const kingCap = '/images/surprise.svg';
const cardImg1 = '/images/elonmusk/masters.png';
const cardImg2 = '/images/elonmusk/bromkens.png';

const Ambassadors: React.FC = () => {
  const { t } = useLang();
  return (
    <div id="ambassadors" className={classNames('section', [styles.mainSection])}>
      <Image
        width={500}
        height={600}
        className={styles.moonWayImg}
        src={moonWay}
        alt="moonway_img"
      />
      <div className={styles.titleContainer}>
        <h2 className={styles.titleText}>{t('ambassador_and_ceo')}</h2>
        <Image
          className={styles.kingCapImg}
          width={100}
          height={50}
          src={kingCap}
          alt="king_cap_img"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className={styles.twittContainer}>
          <div className={styles.firstTwitter}>
            <TwitterPost twittId="1625696554467344384" options={{ width: 250 }} />
          </div>
          <div className={styles.secondTwitter}>
            <TwitterPost twittId="1625696836886614018" options={{ width: 250 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassadors;
