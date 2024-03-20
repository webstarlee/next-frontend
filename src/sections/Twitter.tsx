import React, { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/twitter.module.css';
import classNames from 'classnames';
import { useParallax } from 'react-scroll-parallax';
import TwitterPost from '@/components/TwitterPost';

interface TwitterProps {
  width: number;
}

const Twitter: FC<TwitterProps> = ({ width }) => {
  const [idIndex, setIdIndex] = React.useState('1338502080911306755');

  const twitterIds = [
    '1338502080911306755',
    '1055517521082609664',
    '1055349794221117440',
    '1055585815718322178',
    '1256856981177987072',
    '1433254957101109254',
  ];

  const handleTwitterId = (isNext: boolean) => {
    const currentIndex = twitterIds.indexOf(idIndex);
    if (isNext) {
      if (currentIndex == twitterIds.length - 1) {
        setIdIndex(twitterIds[0]);
      } else {
        setIdIndex(twitterIds[currentIndex + 1]);
      }
    } else {
      if (currentIndex == 0) {
        const lastIndex = twitterIds.length - 1;
        setIdIndex(twitterIds[lastIndex]);
      } else {
        setIdIndex(twitterIds[currentIndex - 1]);
      }
    }
  };

  const target = React.useRef(null);
  const emojiSnot = useParallax<HTMLDivElement>({
    speed: -15,
    rotate: [-60, 10],
    targetElement: target.current ?? undefined,
  });
  const emojiSmileOne = useParallax<HTMLDivElement>({
    speed: -10,
    rotate: [-55, 0],
    targetElement: target.current ?? undefined,
  });
  const emojiSmileTwo = useParallax<HTMLDivElement>({
    speed: 10,
    rotate: [-10, 60],
    targetElement: target.current ?? undefined,
  });
  const hehImg = useParallax<HTMLDivElement>({
    speed: 45,
    targetElement: target.current ?? undefined,
  });

  return (
    <div id="presale_section" className={classNames('section', styles.presaleSection)}>
      <div
        className={classNames('grid grid-cols-1 lg:grid-cols-2', styles['presale-main-content'])}
      >
        <div>
          <Image
            className={`${styles['presale-bg-image']}`}
            width={570}
            height={700}
            src="/images/pikachu_st.png"
            alt="presale-bg-image"
          />
        </div>
        {width && width < 1024 ? (
          <div className={classNames(styles.carouselBox, 'carousel-box')}>
            {twitterIds.map((twitId, index) =>
              twitId == idIndex ? (
                <div key={index}>
                  <TwitterPost twittId={twitId} options={{ width: 250 }} />
                </div>
              ) : (
                ''
              )
            )}
            <div className={styles.twitterLoder}>
              <div className={styles.twitterLoaderBox}></div>
              <div className={styles.twitterLoaderShadow}></div>
            </div>
            <button className={styles.preBtn} onClick={() => handleTwitterId(false)}>
              <Image
                width={20}
                height={20}
                src="/images/arrow_next.svg"
                className={styles.arrowPevImg}
                alt=""
              />
            </button>
            <button className={styles.nextBtn} onClick={() => handleTwitterId(true)}>
              <Image
                width={20}
                height={20}
                src="/images/arrow_next.svg"
                className={styles.arrowNextImg}
                alt=""
              />
            </button>
          </div>
        ) : (
          <div className={styles.twitterContainer}>
            <div className={classNames(styles.homeRightParallax, 'hidden lg:block')}>
              <div
                ref={emojiSnot.ref}
                className={classNames(styles.emojiSnot, styles.headerParallaxImg)}
              ></div>
              <div
                ref={emojiSmileOne.ref}
                className={classNames(styles.emojiSmileOne, styles.headerParallaxImg)}
              ></div>
              <div
                ref={emojiSmileTwo.ref}
                className={classNames(styles.emojiSmileTwo, styles.headerParallaxImg)}
              ></div>
              <div ref={hehImg.ref} className={classNames(styles.hehImg, styles.headerParallaxImg, "big-post-twitter")}>
                <TwitterPost twittId="1338502080911306755" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Twitter;
