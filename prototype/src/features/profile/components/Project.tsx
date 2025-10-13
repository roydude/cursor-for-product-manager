import React from "react";
import styles from "./Project.module.css";
import SectionContainer from "./SectionContainer";

const Project: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M21.3333 4H10.6667C9.19391 4 8 5.19391 8 6.66667V25.3333C8 26.8061 9.19391 28 10.6667 28H21.3333C22.8061 28 24 26.8061 24 25.3333V6.66667C24 5.19391 22.8061 4 21.3333 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21.3333H16.0133" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const projects = [
    {
      title: "메디컬잡다 웹 플랫폼 리뉴얼",
      period: "2021.03 ~ 2021.07",
      type: "팀프로젝트 · 기여도 90%",
      description: [
        "취업매칭 서비스 분석을 통한 사업계획서 작성 및 리드 디렉터",
        "사용자의 역량을 강조하는 역량결과표 제작 및 리스크 관리 운영팀 활동",
        "기획 시스템 구축, UX가이드 제작",
      ],
      skills: ["React", "TypeScript", "Figma"],
    },
    {
      title: "병원 정보 플랫폼 개발",
      period: "2020.03 ~ 2020.08",
      type: "개인 프로젝트",
      description: [
        "ExtJS Framework를 이용한 Front-End 개발",
        "서비스 약관 검토 및 개선TF 참여",
        "UX에 사용할 그래픽자료 3D 렌더링",
        "jobda.im UX개선에 대한 프로젝트 (디자인&개발 참여)",
      ],
    },
  ];

  return (
    <SectionContainer
      icon={icon}
      title="프로젝트"
      subtitle="참여했던 개인/팀 프로젝트를 적어주세요."
    >
      <div className={styles.timeline}>
        {projects.map((project, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            {index < projects.length - 1 && <div className={styles.timelineLine}></div>}
            
            <div className={styles.content}>
              <div className={styles.header}>
                <h4 className={styles.title}>{project.title}</h4>
              </div>
              
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{project.period}</span>
                </div>
                <div className={styles.metaItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{project.type}</span>
                </div>
              </div>
              
              <div className={styles.details}>
                <ul className={styles.descriptionList}>
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                
                {project.skills && (
                  <div className={styles.skills}>
                    <span className={styles.skillsLabel}>활용 기술</span>
                    <div className={styles.skillTags}>
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Project;

