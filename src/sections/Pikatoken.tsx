import React from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import styles from '@/styles/pikatoken.module.css';
import classNames from 'classnames';
import { useLang } from '@/hooks/LangContext';

const PikaToken: React.FC = () => {
  const { t } = useLang();
  const target = React.useRef(null);
  const tokenCoinOne = useParallax<HTMLImageElement>({
    speed: -20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  const tokenCoinTwo = useParallax<HTMLImageElement>({
    speed: -20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  const tokenCoinThree = useParallax<HTMLImageElement>({
    speed: -20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  return (
    <div className={classNames('section', styles.pikatokenSection)}>
      <Image
        ref={tokenCoinOne.ref}
        width={50}
        height={50}
        className={`${styles['roadmap-coin-one']}`}
        src="/images/icons/coin_3.svg"
        alt=""
      />
      <Image
        ref={tokenCoinTwo.ref}
        width={50}
        height={50}
        className={`${styles['roadmap-coin-two']}`}
        src="/images/icons/coin_2.svg"
        alt=""
      />
      <Image
        ref={tokenCoinThree.ref}
        width={50}
        height={50}
        className={`${styles['roadmap-coin-three']}`}
        src="/images/icons/coin_1.svg"
        alt=""
      />
      <div className="grid grid-cols-1">
        <div className={`${styles['pikatoken-container']}`}>
          <h2 className={`${styles['pikatoken-title-text']}`}>{t('hehe_token')}</h2>
          <p className={`${styles['pikatoken-description-text']}`}>
            {t('the_people_meme_description')}
          </p>
          <Image
            width={180}
            height={180}
            className={`${styles['roadmap-piggy-img']}`}
            src="/images/piggy.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PikaToken;
