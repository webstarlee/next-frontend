import React from 'react';
import styles from '@/styles/airdrop.module.css';
import TwitterPost from '@/components/TwitterPost';
import { useLang } from '@/hooks/LangContext';
function MyIframe() {
  return (
    <iframe
      src="https://gleam.io/xKLkf/wall-street-memes-50000-airdrop"
      style={{ width: '100%', height: '650px', maxWidth: '550px' }}
    ></iframe>
  );
}

const Airdrop: React.FC = () => {
  const { t } = useLang();
  return (
    <div id="airdrop" className={`${styles['airdrop-container-fluid']} container-fluid`}>
      <div className={`${styles['airdrop-container-row']} row`}>
        <div className="col-md-6 col-sm-12">
          <div className={`${styles['airdrop-title-des-container']}`}>
            <div className={`${styles['airdrop-title-box']}`}>
              <h2>
                $336,660
                <br />
                {t('airdrop_amount')}
              </h2>
            </div>
            <div className={`${styles['airdrop-description-box']}`}>{t('airdrop_description')}</div>
          </div>
        </div>
        <div className={`${styles['airdrop-iframe-container']} big-post-twitter col-md-6 col-sm-12`}>
          <TwitterPost twittId="1709957825823133942" options={{ width: 500 }} />
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
