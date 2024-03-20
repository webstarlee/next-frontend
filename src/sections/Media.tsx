import React, { useMemo } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '@/styles/media.module.css';
import { useLang } from '@/hooks/LangContext';
import Slider, { Settings } from 'react-slick';
import twitterPost from '@/assets/post.json';

type CustomSliderSettings = Settings;
interface MediaProps {
  width: number;
}
const Media: React.FC<MediaProps> = ({ width }) => {
  const { t } = useLang();
  const mediaSlider = React.useRef<Slider>();

  const showNumber = useMemo(() => {
    if (width > 1366) return 4;
    if (width > 1024) return 3;
    if (width > 768) return 2;
    if (width <= 768) return 1;
  }, [width]);
  const showToScroll = useMemo(() => {
    if (width > 1024) return 2;
    return 1;
  }, [width]);
  const settings: CustomSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: showNumber,
    slidesToScroll: showToScroll,
    autoplay: true,
    prevArrow: <></>,
    nextArrow: <></>,
  };
  const nextSlider = () => {
    mediaSlider.current?.slickNext();
  };

  const prevSlider = () => {
    mediaSlider.current?.slickPrev();
  };
  return (
    <div id="hehe_media" className={classNames('section', styles.mediaSection)}>
      <h2 className={styles.mediaTitle}>
        <span>{t('hehe_in_the_media_title')}</span> {t('in_the_media')}
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <Image
          className={styles.sliderControlBtn}
          onClick={prevSlider}
          width={50}
          height={50}
          alt="prevBtn"
          src="/images/slidePrevBtn.png"
        />
        <div className={styles.mediaContainer}>
          <Slider ref={mediaSlider as React.RefObject<Slider>} {...settings}>
            <div className={styles.mediaBoxContainer}>
              <div className={`${styles.mediaBox} ${styles.mediaBoxFlexStart}`}>
                <a
                  className={styles.mediaUrlLink}
                  style={{ marginBottom: '10px' }}
                  target="_blank"
                  href="https://twitter.com/elonmusk/status/1055349794221117440"
                >
                  <div className={styles.postHeader}>
                    <Image
                      src={`/images/postAvatar/11.jpg`}
                      alt="postPrfle"
                      width={30}
                      height={30}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                      }}
                    />
                    <div className={styles.postInfo}>
                      <p className={styles.posterName}>Elon Musk</p>
                      <p className={styles.posterHandle}>@elonmusk</p>
                    </div>
                  </div>
                </a>
                <a href="https://twitter.com/elonmusk/status/1055349794221117440" target="_blank">
                  <Image
                    style={{ height: '120px', width: '300px' }}
                    width={400}
                    height={200}
                    src="/images/how_do_they_know.jpg"
                    alt="abt_img"
                  />
                </a>
                <p>How&apos;d they know!?</p>
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                  <a
                    className={styles.mediaUrlLink}
                    target="_blank"
                    href="https://twitter.com/elonmusk/status/1055349794221117440"
                  >
                    <Image
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      height={10}
                      width={10}
                      src="/images/rightArrowBlack.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.mediaBoxContainer}>
              <div className={`${styles.mediaBox} ${styles.mediaBoxFlexStart}`}>
                <a
                  className={styles.mediaUrlLink}
                  style={{ marginBottom: '10px' }}
                  target="_blank"
                  href="https://twitter.com/elonmusk/status/1433254957101109254"
                >
                  <div className={styles.postHeader}>
                    <Image
                      src={`/images/postAvatar/11.jpg`}
                      alt="postPrfle"
                      width={30}
                      height={30}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                      }}
                    />
                    <div className={styles.postInfo}>
                      <p className={styles.posterName}>Elon Musk</p>
                      <p className={styles.posterHandle}>@elonmusk</p>
                    </div>
                  </div>
                </a>
                <a href="https://twitter.com/elonmusk/status/1433254957101109254" target="_blank">
                  <Image
                    style={{ height: '150px', width: '300px' }}
                    width={400}
                    height={200}
                    src="/images/reply.jpg"
                    alt="abt_img"
                  />
                </a>
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                  <a
                    className={styles.mediaUrlLink}
                    target="_blank"
                    href="https://twitter.com/elonmusk/status/1433254957101109254"
                  >
                    <Image
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      height={10}
                      width={10}
                      src="/images/rightArrowBlack.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.mediaBoxContainer}>
              <div className={`${styles.mediaBox} ${styles.mediaBoxFlexStart}`}>
                <a
                  className={styles.mediaUrlLink}
                  style={{ marginBottom: '10px' }}
                  target="_blank"
                  href="https://twitter.com/elonmusk/status/1055585815718322178?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1055585815718322178%7Ctwgr%5E96af6b115ac04102bf91786e4054644750de7418%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fdev--heheto.netlify.app%2F"
                >
                  <div className={styles.postHeader}>
                    <Image
                      src={`/images/postAvatar/11.jpg`}
                      alt="postPrfle"
                      width={30}
                      height={30}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                      }}
                    />
                    <div className={styles.postInfo}>
                      <p className={styles.posterName}>Elon Musk</p>
                      <p className={styles.posterHandle}>@elonmusk</p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://twitter.com/elonmusk/status/1055585815718322178?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1055585815718322178%7Ctwgr%5E96af6b115ac04102bf91786e4054644750de7418%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fdev--heheto.netlify.app%2F"
                  target="_blank"
                >
                  <Image
                    style={{ height: '120px', width: '300px' }}
                    width={400}
                    height={200}
                    src="/images/myfeedrn.jpg"
                    alt="abt_img"
                  />
                </a>
                <p>My twitter feed rn</p>
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                  <a
                    className={styles.mediaUrlLink}
                    target="_blank"
                    href="https://twitter.com/elonmusk/status/1055585815718322178?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1055585815718322178%7Ctwgr%5E96af6b115ac04102bf91786e4054644750de7418%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fdev--heheto.netlify.app%2F"
                  >
                    <Image
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      height={10}
                      width={10}
                      src="/images/rightArrowBlack.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.mediaBoxContainer}>
              <div className={`${styles.mediaBox} ${styles.mediaBoxFlexStart}`}>
                <a className={styles.mediaUrlLink} target="_blank" href="https://twitter.com/elonmusk/status/1256856981177987072?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1256856981177987072%7Ctwgr%5E96af6b115ac04102bf91786e4054644750de7418%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fdev--heheto.netlify.app%2F">
                  <div className={styles.postHeader}>
                    <Image
                      src={`/images/postAvatar/11.jpg`}
                      alt="postPrfle"
                      width={30}
                      height={30}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                      }}
                    />
                    <div className={styles.postInfo}>
                      <p className={styles.posterName}>Elon Musk</p>
                      <p className={styles.posterHandle}>@elonmusk</p>
                    </div>
                  </div>
                </a>

                <p className={styles.postContent}>
                  <Image
                    style={{
                      height: '20px',
                      width: '20px',
                      display: 'inline',
                      marginRight: '10px',
                    }}
                    src="/images/twitterX.png"
                    height={10}
                    width={10}
                    alt="twitter"
                  />
                  Anyone think they can get a good multiplayer Minecraft working on Teslas?
                  Or maybe create a game that interacts virtually with reality like Pokémon Go while driving...
                </p>
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                  <a className={styles.mediaUrlLink} target="_blank" href="https://twitter.com/elonmusk/status/1256856981177987072?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1256856981177987072%7Ctwgr%5E96af6b115ac04102bf91786e4054644750de7418%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fdev--heheto.netlify.app%2F">
                    <Image
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      height={10}
                      width={10}
                      src="/images/rightArrowBlack.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.mediaBoxContainer}>
              <div className={`${styles.mediaBox} ${styles.mediaBoxFlexStart}`}>
                <a className={styles.mediaUrlLink} target="_blank" href="https://twitter.com/elonmusk/status/1055517521082609664?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1055517521082609664%7Ctwgr%5E96af6b115ac04102bf91786e4054644750de7418%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fdev--heheto.netlify.app%2F">
                  <div className={styles.postHeader}>
                    <Image
                      src={`/images/postAvatar/11.jpg`}
                      alt="postPrfle"
                      width={30}
                      height={30}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                      }}
                    />
                    <div className={styles.postInfo}>
                      <p className={styles.posterName}>Elon Musk</p>
                      <p className={styles.posterHandle}>@elonmusk</p>
                    </div>
                  </div>
                </a>

                <p className={styles.postContent}>
                  <Image
                    style={{
                      height: '20px',
                      width: '20px',
                      display: 'inline',
                      marginRight: '10px',
                    }}
                    src="/images/twitterX.png"
                    height={10}
                    width={10}
                    alt="twitter"
                  />
                  Send me ur dankest memes!!
                </p>
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                  <a className={styles.mediaUrlLink} target="_blank" href="https://twitter.com/elonmusk/status/1055517521082609664?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1055517521082609664%7Ctwgr%5E96af6b115ac04102bf91786e4054644750de7418%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fdev--heheto.netlify.app%2F">
                    <Image
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      height={10}
                      width={10}
                      src="/images/rightArrowBlack.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>

            {twitterPost.map((post, key) => {
              return (
                <div key={key} className={styles.mediaBoxContainer}>
                  <div className={`${styles.mediaBox} ${styles.mediaBoxFlexStart}`}>
                    <a className={styles.mediaUrlLink} target="_blank" href={post.url}>
                      <div className={styles.postHeader}>
                        <Image
                          src={`/images/postAvatar/${post.avatar}.jpg`}
                          alt="postPrfle"
                          width={30}
                          height={30}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                          }}
                        />
                        <div className={styles.postInfo}>
                          <p className={styles.posterName}>{post.username}</p>
                          <p className={styles.posterHandle}>{post.handle}</p>
                        </div>
                      </div>
                    </a>

                    <p className={styles.postContent}>
                      <Image
                        style={{
                          height: '20px',
                          width: '20px',
                          display: 'inline',
                          marginRight: '10px',
                        }}
                        src="/images/twitterX.png"
                        height={10}
                        width={10}
                        alt="twitter"
                      />
                      {/* {post.content} */}
                      {post.content.toString().slice(0, 130)}...
                    </p>
                    <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                      <a className={styles.mediaUrlLink} target="_blank" href={post.url}>
                        <Image
                          style={{
                            width: '15px',
                            height: '15px',
                          }}
                          height={10}
                          width={10}
                          src="/images/rightArrowBlack.svg"
                          alt="arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.mediaBoxContainer}>
              <div className={styles.mediaBox}>
                <a href="https://youtu.be/ZK8R-yGm_Cw" target="_blank">
                  <Image
                    width={20}
                    height={20}
                    src="/images/playButton.png"
                    alt="playButton"
                    style={{
                      width: '40px',
                      height: '40px',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                  <Image
                    style={{ height: '120px', width: '300px' }}
                    width={400}
                    height={200}
                    src="/images/abt.jpg"
                    alt="abt_img"
                  />
                </a>
                <p>
                  {
                    <Image
                      style={{
                        height: '15px',
                        width: '20px',
                        display: 'inline',
                        marginRight: '10px',
                      }}
                      src="/images/youtub.png"
                      height={10}
                      width={10}
                      alt="twitter"
                    />
                  }
                  {t('media_box_2_text')?.slice(0, 50)}
                </p>
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                  <a
                    className={styles.mediaUrlLink}
                    target="_blank"
                    href="https://youtu.be/ZK8R-yGm_Cw"
                  >
                    <Image
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      height={10}
                      width={10}
                      src="/images/rightArrowBlack.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.mediaBoxContainer}>
              <div className={styles.mediaBox}>
                <a href="https://www.youtube.com/watch?v=c5f3-v5axJE" target="_blank">
                  <Image
                    width={20}
                    height={20}
                    src="/images/playButton.png"
                    alt="playButton"
                    style={{
                      width: '40px',
                      height: '40px',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                  <Image
                    width={400}
                    height={300}
                    style={{ height: '120px', width: '300px' }}
                    src="/images/b3p.jpg"
                    alt="b3p_img"
                  />
                </a>
                <p>{t('media_box_3_text')}</p>
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                  <a
                    className={styles.mediaUrlLink}
                    href="https://www.youtube.com/watch?v=c5f3-v5axJE"
                  >
                    <Image
                      style={{
                        width: '15px',
                        height: '15px',
                      }}
                      height={10}
                      width={10}
                      src="/images/rightArrowBlack.svg"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <Image
          className={styles.sliderControlBtn}
          onClick={nextSlider}
          width={50}
          height={50}
          alt="nextBtn"
          src="/images/slideNextBtn.png"
        />
      </div>
    </div>
  );
};

export default Media;
