import React from "react";
import styles from "./Awards.module.css";
import SectionContainer from "./SectionContainer";

const Awards: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 20L10.6667 28L16 25.3333L21.3333 28L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 4V8M23.5355 6.46447L20.7071 9.29289M28 14H24M23.5355 21.5355L20.7071 18.7071M8.46447 21.5355L11.2929 18.7071M8 14H4M8.46447 6.46447L11.2929 9.29289" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const awards = [
    {
      organization: "한국문화정책학회",
      name: "제 11회 한국문화정책 대상",
      date: "2021.05",
    },
    {
      organization: "서울시",
      name: "2019 서울의 핫플레이스 소개 영상 공모전",
      date: "2019.01",
    },
    {
      organization: "교육부 & 한국청소년정책연구원",
      name: "2013 고등학교 안전 콘텐츠 공모전",
      date: "2014.01",
    },
  ];

  return (
    <SectionContainer
      icon={icon}
      title="수상 내역"
      subtitle="수상명, 수상연도 등을 적어주세요."
    >
      <div className={styles.timeline}>
        {awards.map((award, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            {index < awards.length - 1 && <div className={styles.timelineLine}></div>}
            
            <div className={styles.content}>
              <div className={styles.header}>
                <h4 className={styles.organization}>{award.organization}</h4>
                <div className={styles.date}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{award.date}</span>
                </div>
              </div>
              
              <p className={styles.name}>{award.name}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Awards;

