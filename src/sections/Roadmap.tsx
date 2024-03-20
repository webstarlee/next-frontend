import React from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import styles from '@/styles/roadmap.module.css';
import { useLang } from '@/hooks/LangContext';

const Roadmap: React.FC = () => {
  const { t } = useLang();
  const target = React.useRef(null);
  const roadmapCoinOne = useParallax<HTMLImageElement>({
    speed: 20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  const roadmapCointwo = useParallax<HTMLImageElement>({
    speed: -30,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  const roadmapCoinThree = useParallax<HTMLImageElement>({
    speed: 40,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  const roadmapCoinFour = useParallax<HTMLImageElement>({
    speed: -20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });
  return (
    <div className={`${styles['roadmap-container-fluid']} container-fluid`}>
      <Image
        ref={roadmapCoinOne.ref}
        width={50}
        height={50}
        className={`${styles['roadmap-coin-one']}`}
        src="/images/icons/coin_4.svg"
        alt=""
      />
      <Image
        ref={roadmapCointwo.ref}
        width={50}
        height={50}
        className={`${styles['roadmap-coin-two']}`}
        src="/images/icons/coin_2.svg"
        alt=""
      />
      <Image
        ref={roadmapCoinFour.ref}
        width={50}
        height={50}
        className={`${styles['roadmap-coin-four']}`}
        src="/images/icons/coin_3.svg"
        alt=""
      />
      <Image
        ref={roadmapCoinThree.ref}
        width={50}
        height={50}
        className={`${styles['roadmap-coin-three']}`}
        src="/images/icons/coin_2.svg"
        alt=""
      />
      <div className="row">
        <h2 className={`${styles['roadmap-title-text']}`}>{t('roadmap_title')}</h2>
        <div className={`${styles['roadmap-description-container']}`}>
          <p className={`${styles['roadmap-description-text']}`}>{t('roadmap_description')}</p>
        </div>
        <div className="col-12 relative">
          <div className={`${styles['time-line-bar']}`}></div>
          <div className="row">
            <div className="col-md-6">
              <div className={`${styles['phase-boxs']}`}>
                <div className={`${styles['arrow-animation-box']}`}>
                  <div className={`${styles['circle-box']}`}></div>
                </div>
                <div className={`${styles['phase-count-text']}`}>{t('phase_1_count')}</div>
                <h2 className={`${styles['phase-step-text']}`}>{t('phase_1_step')}</h2>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_1_description_1')}
                </p>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_1_description_2')}
                </p>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_1_description_3')}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${styles['phase-boxs']} ${styles['step-two']}`}>
                <div className={`${styles['arrow-animation-box']}`}>
                  <div className={`${styles['circle-box']}`}></div>
                </div>
                <div className={`${styles['phase-count-text']}`}>{t('phase_2_count')}</div>
                <h2 className={`${styles['phase-step-text']}`}>{t('phase_2_step')}</h2>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_2_description_1')}
                </p>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_2_description_2')}
                </p>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_2_description_3')}
                </p>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_2_description_4')}
                </p>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_2_description_5')}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${styles['phase-boxs']} ${styles['step-three']}`}>
                <div className={`${styles['arrow-animation-box']}`}>
                  <div className={`${styles['circle-box']}`}></div>
                </div>
                <div className={`${styles['phase-count-text']}`}>{t('phase_3_count')}</div>
                <h2 className={`${styles['phase-step-text']}`}>{t('phase_3_step')}</h2>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_3_description_1')}
                </p>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_3_description_2')}
                </p>
                <p className={`${styles['phase-description-text']}`}>
                  {t('phase_3_description_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
