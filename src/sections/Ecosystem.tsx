import React from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import styles from '@/styles/ecosystem.module.css';
import { useLang } from '@/hooks/LangContext';
import Governance from '@/components/Ecosystems/Governance';
import MonsterGo from '@/components/Ecosystems/MonsterGo';
import Protocol from '@/components/Ecosystems/Protocol';
import Universe from '@/components/Ecosystems/Universe';

interface EcosystemProps {
  width: number;
}

const Ecosystem: React.FC<EcosystemProps> = (props) => {
  const {width} = props;
  const { t } = useLang();
  const target = React.useRef(null);
  const [openModalStatus, setOpenModalStatus] = React.useState<number>(0);
  const communityLine = useParallax<HTMLDivElement>({
    speed: -150,
    rotate: [0, 15],
    targetElement: target.current ?? undefined,
  });

  const counts = Array(30).fill(0);

  const openModal = (status: number) => {
    setOpenModalStatus(status);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setOpenModalStatus(0);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <div className={`${styles['ecosystem-container-fluid']} container-fluid`}>
        <div className={styles.communityParallaxContainer}>
          <div ref={communityLine.ref} className={styles.boxLineContainer}>
            {counts.map((count, index) => (
              <div key={index} className={styles.lineBoxStyle} data-count={count}>
                {t('ecosystem')}
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 relative">
            <div className={`${styles['ecosystem-title-text-container']} relative`}>
              <div className={`${styles['ecosystem-title-text']} ${styles['top-title']} relative`}>
                {t('the_hehe')}
                <Image width={200} height={50} src="/images/select_line_1.svg" alt="wave_line_1" />
              </div>
              <h2 className={`${styles['ecosystem-title-text']}`}>{t('ecosystem')}</h2>
            </div>
            <div className={`${styles['ecosystem-step-boxs']} ${styles['staking-box']}`}>
              <h2 className={styles.black}>{t('decentralized_governance')}</h2>
              <p>{t('community_governance_description')}</p>
              <p className={`${styles['bold']}`}  onClick={() => openModal(1)}>{t('learn_more')}</p>
            </div>
            <div className={`${styles['ecosystem-step-boxs']}`}>
              <h2>{t('defi_yield_protocol')}</h2>
              <p>{t('defi_yield_protocol_description')}</p>
              <p className={`${styles['bold']}`}  onClick={() => openModal(2)}>{t('learn_more')}</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 relative">
            <div
              className={`${styles['ecosystem-step-boxs']} ${styles['right-boxs']} ${styles['token-box']}`}
            >
              <h2>{t('hehe')}</h2>
              <h2>{t('token')}</h2>
              <p>{t('$hehe_token_description')}</p>
            </div>
            <div className={`${styles['ecosystem-step-boxs']} ${styles['right-boxs']}`}>
              <h2>{t('monster_go')}</h2>
              <p>{t('monster_go_description')}</p>
              <p className={`${styles['bold']}`}  onClick={() => openModal(3)}>{t('learn_more')}</p>
            </div>
            <div className={`${styles['ecosystem-step-boxs']} ${styles['right-boxs']}`}>
              <h2 className={styles.black}>{t('monster_universe')}</h2>
              <p>{t('monster_universe_description')}</p>
              <p className={`${styles['bold']}`} onClick={() => openModal(4)}>
                {t('learn_more')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {openModalStatus === 1 && <Governance width={width} close={closeModal} />}
      {openModalStatus === 2 && <Protocol width={width}  close={closeModal} />}
      {openModalStatus === 3 && <MonsterGo width={width}  close={closeModal} />}
      {openModalStatus === 4 && <Universe width={width}  close={closeModal} />}
    </>
  );
};

export default Ecosystem;
