import React from "react";
import styles from "./Career.module.css";
import SectionContainer from "./SectionContainer";

const Career: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M21.3333 9.33333H10.6667C9.19391 9.33333 8 10.5272 8 12V24C8 25.4728 9.19391 26.6667 10.6667 26.6667H21.3333C22.8061 26.6667 24 25.4728 24 24V12C24 10.5272 22.8061 9.33333 21.3333 9.33333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 9.33333V8C20 7.29276 19.719 6.61448 19.219 6.11438C18.7189 5.61428 18.0406 5.33333 17.3333 5.33333H14.6667C13.9594 5.33333 13.2811 5.61428 12.781 6.11438C12.281 6.61448 12 7.29276 12 8V9.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const careers = [
    {
      company: "마이다스인",
      period: "2020.04 ~ 재직중",
      status: "재직중",
      description: [
        "취업매칭 서비스 분석을 통한 사업계획서 작성 및 리드 디렉터",
        "사용자의 역량을 강조하는 역량결과표 제작 및 리스크 관리 운영팀 활동",
        "기획 시스템 구축, UX가이드 제작",
      ],
    },
    {
      company: "메타넷",
      period: "2017.05 ~ 2019.04",
      status: "퇴사",
      description: [
        "ExtJS Framework를 이용한 Front-End 개발",
        "서비스 약관 검토 및 개선TF 참여",
        "UX에 사용할 그래픽자료 3D 렌더링",
        "jobda.im UX개선에 대한 프로젝트 (디자인&개발 참여)",
      ],
    },
    {
      company: "잡다인턴",
      period: "2017.04 ~ 2017.06",
      status: "수료",
      description: [
        "취업 준비생 조사를 통해 회원가입 절차 업그레이드 및 유지보수",
        "한국대학교 취업 컨설팅 리서치 및 자료 제작",
      ],
    },
  ];

  return (
    <SectionContainer
      icon={icon}
      title="경력"
      subtitle="직장, 인턴쉽, 아르바이트 등의 업무 경험을 적어주세요."
    >
      <div className={styles.timeline}>
        {careers.map((career, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            {index < careers.length - 1 && <div className={styles.timelineLine}></div>}
            
            <div className={styles.content}>
              <div className={styles.header}>
                <h4 className={styles.company}>{career.company}</h4>
                <div className={styles.period}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{career.period}</span>
                </div>
              </div>
              
              <div className={styles.details}>
                <div className={styles.statusBadge}>{career.status}</div>
                <ul className={styles.descriptionList}>
                  {career.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Career;

