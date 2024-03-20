import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useParallax } from 'react-scroll-parallax';
import Button from '@/components/Button.tsx';
import TwitterPost from '@/components/TwitterPost';
import styles from '@/styles/Home.module.css'

interface HomeProps {
    width: number;
}

const Home: React.FC<HomeProps> = ({ width = 1366 }) => {

    const openWhitepaper = () => {
        window.open("https://docs.pikachu.to/", "_blank", "noreferrer");
    }

    const getPikachuToken = () => {
        const targetElement = document.getElementById("presale_section");

        // Scroll to the target element with smooth scrolling
        targetElement?.scrollIntoView({ behavior: "smooth" });
    }

    const [idIndex, setIdIndex] = React.useState("1338502080911306755")

    const twitterIds = [
        "1338502080911306755",
        "1055517521082609664",
        "1055349794221117440",
        "1055585815718322178",
        "1256856981177987072",
        "1433254957101109254"
    ]

    const handleTwitterId = (isNext: boolean) => {
        const currentIndex = twitterIds.indexOf(idIndex)
        if (isNext) {
            if (currentIndex == twitterIds.length - 1) {
                setIdIndex(twitterIds[0])
            } else {
                setIdIndex(twitterIds[currentIndex + 1])
            }
        } else {
            if (currentIndex == 0) {
                const lastIndex = twitterIds.length - 1;
                setIdIndex(twitterIds[lastIndex])
            } else {
                setIdIndex(twitterIds[currentIndex - 1])
            }
        }
    }

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
    const replyToVitalik = useParallax<HTMLDivElement>({
        speed: -20,
        targetElement: target.current ?? undefined,
    });
    const myFeedTwo = useParallax<HTMLDivElement>({
        speed: 10,
        targetElement: target.current ?? undefined,
    });
    const myFeedOne = useParallax<HTMLDivElement>({
        speed: -10,
        targetElement: target.current ?? undefined,
    });
    const howDoTheyKnow = useParallax<HTMLDivElement>({
        speed: -20,
        targetElement: target.current ?? undefined,
    });
    const myFeedThree = useParallax<HTMLDivElement>({
        speed: 20,
        targetElement: target.current ?? undefined,
    });
    const hehImg = useParallax<HTMLDivElement>({
        speed: 45,
        targetElement: target.current ?? undefined,
    });

    return (
        <div className={classNames('section', [styles.homeSection])}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={styles.homeLeftBox}>
                    <div className={styles.leftContentBox}>
                        <Image
                            width={200}
                            height={200}
                            src="/images/home_img.svg"
                            className={styles.homeLogo}
                            alt="home Logo"
                        />
                        <div className={styles.homeTitleBox}>
                            <h2 className={styles.homeTitle}>The People&apos;s meme</h2>
                            <h2 className={classNames(styles.homeTitle, styles.textRed)}>
                                PIKACHU - $HEHE TOKEN
                                <Image
                                    width={50}
                                    height={50}
                                    src="/images/fun.svg"
                                    alt="fun Logo"
                                />
                            </h2>
                        </div>
                        {width && width < 1024 ?
                            <div className={styles.carouselBox}>
                                {twitterIds.map((twitId, index) =>
                                    twitId == idIndex ? <div key={index}><TwitterPost twittId={twitId} options={{ width: 250 }} /></div>:""
                                )}
                                <div className={styles.twitterLoder}>
                                    <div className={styles.twitterLoaderBox}></div>
                                    <div className={styles.twitterLoaderShadow}></div>
                                </div>
                                <button className={styles.preBtn} onClick={() => handleTwitterId(false)}>
                                    <Image width={20} height={20} src="/images/arrow_next.svg" className={styles.arrowPevImg} alt="" />
                                </button>
                                <button className={styles.nextBtn} onClick={() => handleTwitterId(true)}>
                                    <Image width={20} height={20} src="/images/arrow_next.svg" className={styles.arrowNextImg} alt="" />
                                </button>
                            </div>
                            :
                            ""
                        }
                        <div className={styles.homeBtnBox}>
                            <Button onClick={getPikachuToken} size='lg' className={styles.homeBtn}>Get Pikachu tokens</Button>
                            <Button onClick={openWhitepaper} size='lg' className={styles.homeBtn}>Whitepaper</Button>
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.homeRightParallax, 'hidden lg:block')}>
                    <div ref={emojiSnot.ref} className={classNames(styles.emojiSnot, styles.headerParallaxImg)}></div>
                    <div ref={emojiSmileOne.ref} className={classNames(styles.emojiSmileOne, styles.headerParallaxImg)}></div>
                    <div ref={emojiSmileTwo.ref} className={classNames(styles.emojiSmileTwo, styles.headerParallaxImg)}></div>
                    <div ref={replyToVitalik.ref} className={classNames(styles.replyToVitalik, styles.headerParallaxImg)}>
                        {width >= 1024 ? <TwitterPost twittId='1433254957101109254' options={{ width: 300 }} /> : ""}
                    </div>
                    <div ref={myFeedTwo.ref} className={classNames(styles.myFeedTwo, styles.headerParallaxImg)}>
                        {width >= 1024 ? <TwitterPost twittId='1256856981177987072' options={{ width: 300 }} /> : ""}
                    </div>
                    <div ref={myFeedOne.ref} className={classNames(styles.myFeedOne, styles.headerParallaxImg)}>
                        {width >= 1024 ? <TwitterPost twittId='1055585815718322178' options={{ width: 300 }} /> : ""}
                    </div>
                    <div ref={howDoTheyKnow.ref} className={classNames(styles.howDoTheyKnow, styles.headerParallaxImg)}>
                        {width >= 1024 ? <TwitterPost twittId='1055349794221117440' options={{ width: 300 }} /> : ""}
                    </div>
                    <div ref={myFeedThree.ref} className={classNames(styles.myFeedThree, styles.headerParallaxImg)}>
                        {width >= 1024 ? <TwitterPost twittId='1055517521082609664' options={{ width: 300 }} /> : ""}
                    </div>
                    <div ref={hehImg.ref} className={classNames(styles.hehImg, styles.headerParallaxImg)}>
                        {width >= 1024 ? <TwitterPost twittId='1338502080911306755' options={{ width: 300 }} /> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;