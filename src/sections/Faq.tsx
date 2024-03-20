import React from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import styles from '@/styles/faq.module.css';
import Accordion from '@/components/Accordion';
import { useLang } from '@/hooks/LangContext';
const Faq: React.FC = () => {
  const { t } = useLang();
  const target = React.useRef(null);
  const communityLine = useParallax<HTMLDivElement>({
    speed: -30,
    rotate: [0, -45],
    targetElement: target.current ?? undefined,
  });

  const faqCoin = useParallax<HTMLImageElement>({
    speed: 20,
    rotate: [0, -35],
    targetElement: target.current ?? undefined,
  });

  const counts = Array(30).fill(0);
  return (
    <div className={`${styles['faq-cotainer-fluid']} container-fluid`}>
      <div className={styles.communityParallaxContainer}>
        <div ref={communityLine.ref} className={styles.boxLineContainer}>
          {counts.map((count, index) => (
            <div key={index} className={styles.lineBoxStyle} data-count={count}>
              $HEHE Token
            </div>
          ))}
        </div>
      </div>
      <Image
        ref={faqCoin.ref}
        width={50}
        height={50}
        className={styles.faqCoin}
        src="/images/icons/coin_2.svg"
        alt="notmeme-coin-one"
      />
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-5">
          <div className={`${styles['faq-title-description-text-container']}`}>
            <div className={`${styles['faq-title-text']}`}>
              <Image
                width={100}
                height={100}
                className={`${styles['faq-question-top-img']}`}
                src="/images/question_top.svg"
                alt="question_top"
              />
              <Image
                width={100}
                height={100}
                className={`${styles['faq-question-bottom-img']}`}
                src="/images/question_bottom.svg"
                alt="question_top"
              />
              {t('faq_title')}
            </div>
            <p className={`${styles['faq-description-text']}`}>{t('faq_description')}</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-7">
          <div className={`${styles['faq-container']}`}>
            <Accordion title={t('faq_question1_title')}>
              <p>{t('faq_question1_answer')}</p>
            </Accordion>
            <Accordion title={t('faq_question2_title')}>
              <p>{t('faq_question2_answer')}</p>
            </Accordion>
            <Accordion title={t('faq_question3_title')}>
              <p>{t('faq_question3_answer')}</p>
            </Accordion>
            <Accordion title={t('faq_question4_title')}>
              <p>{t('faq_question4_answer')}</p>
            </Accordion>
            <Accordion title={t('faq_question5_title')}>
              <p>{t('faq_question5_answer')}</p>
            </Accordion>
            <Image
              width={300}
              height={400}
              className={styles.faqSadPiggy}
              src="/images/sad_piggy.png"
              alt="sad paiggy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
