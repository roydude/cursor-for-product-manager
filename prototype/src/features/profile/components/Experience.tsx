import React from "react";
import styles from "./Experience.module.css";
import SectionContainer from "./SectionContainer";

const Experience: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6.66667 9.33333H25.3333C26.8061 9.33333 28 10.5272 28 12V24C28 25.4728 26.8061 26.6667 25.3333 26.6667H6.66667C5.19391 26.6667 4 25.4728 4 24V12C4 10.5272 5.19391 9.33333 6.66667 9.33333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3333 26.6667V6.66667C21.3333 5.95942 21.0524 5.28115 20.5523 4.78105C20.0522 4.28095 19.3739 4 18.6667 4H13.3333C12.6261 4 11.9478 4.28095 11.4477 4.78105C10.9476 5.28115 10.6667 5.95942 10.6667 6.66667V26.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const experiences = [
    {
      type: "동아리",
      name: "잡다 서포터즈",
      period: "2021.03 ~ 활동중",
      description: [
        "잡다 서포터즈 활동",
        "매년 창업 콘텐츠 발표회 참여 및 운영",
      ],
    },
    {
      type: "학회",
      name: "한국 생명공학회",
      period: "2018.02 ~ 2018.12",
      description: [
        "2018년도 제 33회 동아리 연합회 회장",
      ],
    },
    {
      type: "대외활동",
      name: "자인 합창단",
      period: "2015.04 ~ 2017.03",
      description: [
        "자인 합창단 활동",
        "자선 공연 진행 및 공연 단장으로 활동",
      ],
    },
    {
      type: "봉사활동",
      name: "국립중앙의료원 자원봉사",
      period: "2015.04 ~ 2016.04",
      description: ["환자 이송 보조 및 병동 관리"],
    },
  ];

  return (
    <SectionContainer
      icon={icon}
      title="경험"
      subtitle="대내외 활동, 해외 경험, 봉사 경험 등을 적어주세요."
    >
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            {index < experiences.length - 1 && <div className={styles.timelineLine}></div>}
            
            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.titleArea}>
                  <span className={styles.badge}>{exp.type}</span>
                  <h4 className={styles.name}>{exp.name}</h4>
                </div>
              </div>
              
              <div className={styles.period}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{exp.period}</span>
              </div>
              
              {exp.description.length > 0 && (
                <ul className={styles.descriptionList}>
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;

