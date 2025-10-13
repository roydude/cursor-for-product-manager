import React from "react";
import styles from "./Military.module.css";
import SectionContainer from "./SectionContainer";

const Military: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L8 8V14C8 19.5228 11.5 23.9 16 28C20.5 23.9 24 19.5228 24 14V8L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10V18M12 14H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <SectionContainer
      icon={icon}
      title="병역 · 취업 우대"
      subtitle="병역, 취업 우대사항을 적어주세요."
    >
      <div className={styles.content}>
        <div className={styles.row}>
          <h4 className={styles.label}>병역</h4>
          <div className={styles.details}>
            <div className={styles.statusArea}>
              <span className={styles.badge}>군필</span>
              <span className={styles.statusText}>육군</span>
            </div>
            
            <div className={styles.period}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>2009.02 ~ 2010.12</span>
            </div>
            
            <p className={styles.info}>병장 / 만기제대</p>
          </div>
        </div>
        
        <div className={styles.row}>
          <h4 className={styles.label}>취업 우대</h4>
          <div className={styles.details}>
            <div className={styles.badges}>
              <span className={styles.badge}>장애 여부</span>
              <span className={styles.statusText}>청각장애 3급</span>
            </div>
            
            <div className={styles.badges}>
              <span className={styles.badge}>보훈 대상</span>
              <span className={styles.statusText}>국가유공자</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Military;

