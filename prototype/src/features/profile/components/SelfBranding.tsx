import React from "react";
import styles from "./SelfBranding.module.css";
import SectionContainer from "./SectionContainer";

const SelfBranding: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M4 28C4 23.5817 9.37258 20 16 20C22.6274 20 28 23.5817 28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <SectionContainer
      icon={icon}
      title="셀프 브랜딩"
      subtitle="간단한 문장과 사진으로 나를 소개하세요."
    >
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h4 className={styles.heading}>안녕하세요! 긍정의 스위치 김조이입니다.</h4>
          <p className={styles.description}>
            안녕하세요! 저는 밝은 에너지를 주변에 전하는 긍정의 스위치, 김조이입니다. 
            사람들과의 소통과 협업에서 가치를 찾는 것을 중요하게 생각합니다. 
            어떤 상황에서도 열정을 잃지 않고 목표를 이루기 위해 끊임없이 도전하는 것이 제 강점입니다.
          </p>
        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageOverlay}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M16.6667 23.3333L20 20M20 20L23.3333 23.3333M20 20V28.3333M28.3333 23.75C29.6547 22.9662 30.6689 21.7507 31.2123 20.3006C31.7558 18.8505 31.7979 17.2549 31.3319 15.7778C30.8659 14.3007 29.9189 13.0297 28.6481 12.1727C27.3773 11.3157 25.8588 10.9246 24.3333 11.0583C23.6367 8.98831 22.2926 7.20378 20.5145 5.97056C18.7365 4.73734 16.6202 4.11796 14.4833 4.20166C12.3464 4.28536 10.2832 5.06792 8.60158 6.43584C6.91992 7.80375 5.70286 9.68626 5.13333 11.8C3.50567 12.0568 2.01507 12.8519 0.914473 14.0559C-0.186129 15.2599 -0.753328 16.7974 -0.689446 18.3667C-0.625564 19.936 1.05333 21.4167 2.74667 22.5333C4.44 23.65 6.65333 24.3333 8.91667 24.3333H11.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.quote}>"</span>
                <p className={styles.imageCaption}>나눌수록 더 크게 채워진다고 믿어요.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageOverlay}>
                <span className={styles.quote}>"</span>
                <p className={styles.imageCaption}>궁금한 건 끝까지 파고드는 편이에요.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageOverlay}>
                <span className={styles.quote}>"</span>
                <p className={styles.imageCaption}>사람들과 대화하며 배우는 걸 좋아해요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SelfBranding;

