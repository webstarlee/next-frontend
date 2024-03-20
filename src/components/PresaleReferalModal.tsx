import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/presaleReferalModal.module.css';
import { useLang } from '@/hooks/LangContext';
const ModalCloseButton = '/images/modalCloseButton.svg';

interface modalProps {
  close: () => void;
}

const ReferalModal: React.FC<modalProps> = (props) => {
  const { close } = props;
  const { t } = useLang();
  const [steps] = useState([0, 25, 50, 75, 100]);
  const [value, setValue] = useState(50);
  return (
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={close}></div>

      <div className={styles.contentsContainer}>
        <h3 className={styles.title}>{t('generate_referral_link')}</h3>
        <div className={styles.topOutlineContainer}>
          <div className={styles.outline}>
            <div className={styles.icon}>
              <Image src={'/images/zeroonhand.png'} height={30} width={30} alt="zeroonahand.png" />
            </div>
            <p className={styles.explain}>
              {t('you_earn')} <span className={styles.yellowBadge}>5%</span>{' '}
              {t('from_your_referrals_purchases')}
            </p>
          </div>
          <div className={styles.outline}>
            <div className={styles.icon}>0</div>
            <p className={styles.explain}>{t('your_referral_rewards_paid_out')}</p>
          </div>
        </div>

        <div className={styles.divider}></div>
        <h3 className={styles.subTitle}>{t('create_new_link')}</h3>
        <div className={styles.receiveSection}>
          <div className={styles.you}>
            <h4>{t('you_will_receive')}</h4>
            <CustomSlider
              value={value}
              onChange={(value) => setValue(value)}
              steps={steps}
              label="%"
            />
          </div>
          <div className={styles.friend}>
            <h4>{t('friends_will_receive')}</h4>
            <div className={styles.percentLabelContainer}>
              <span>75%</span>
            </div>
          </div>
        </div>

        <button className={styles.generateReferalLinkButton}>
          {t('generate_referral_link_button')}
        </button>
        <div className={styles.divider}></div>
        <h3 className={styles.subTitle}>{t('affiliate_links')}</h3>
        <div className={styles.affiliateLinks}>
          <div className={styles.affiliateLinksHeader}>
            <p>{t('link')}</p>
            <p>{t('profit_sharing_percent')}</p>
          </div>
          <div className={styles.linkItem}>
            <p>hehe.to/add823948el</p>
            <p>0%</p>
            <div className={styles.copyButton}>
              <Image width={30} height={30} src={'/images/copy.svg'} alt="copy svg" />
              <span>{t('copy')}</span>
            </div>
          </div>
        </div>
        <div className={styles.pageNationContainer}>
          <div className={styles.pageNationButton}>
            <Image src={'/images/prev.png'} width={10} height={10} alt="prev image" />
          </div>
          <span className={styles.pageNationActive}>1</span>
          <span>2</span>
          <span>3</span>
          <div className={styles.pageNationButton}>
            <Image src={'/images/forward.png'} width={10} height={10} alt="prev image" />
          </div>
        </div>
      </div>
      <div className={`${styles.closeButtonContainer}`}>
        <Image onClick={close} width={50} height={50} src={ModalCloseButton} alt="close button" />
      </div>
    </div>
  );
};

interface sliderProps {
  value: number;
  onChange: (step: number) => void;
  steps: number[];
  label: string;
}

const CustomSlider: React.FC<sliderProps> = ({ value, onChange, steps, label }) => {
  return (
    <>
      <div className={styles.percentLabelContainer}>
        {steps?.map((step: number, index: number) => {
          return (
            <span key={index}>
              {step}
              {label}
            </span>
          );
        })}
      </div>
      <div className={styles.sliderContainer}>
        {steps?.map((step: number, index: number) => {
          const isPassed = value > step;
          const isSelected = value == step;
          const isLast = steps?.length === index + 1;
          return (
            <React.Fragment key={index}>
              <div
                key={index}
                className={`${styles.sliderItem} ${isPassed && styles.passed} ${
                  isSelected && styles.selected
                }`}
                onClick={() => onChange(step)}
              >
                <div className={styles.itemDot}></div>
              </div>
              {!isLast && (
                <div className={isPassed ? styles.passedItemLine : styles.itemLine}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default ReferalModal;
