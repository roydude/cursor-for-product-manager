import React from "react";
import styles from "./Education.module.css";
import SectionContainer from "./SectionContainer";

const Education: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M4 12L16 6L28 12L16 18L4 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20L16 26L28 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16L16 22L28 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const educationList = [
    {
      degree: "대학원",
      school: "서울대학교 대학원",
      period: "2015.03 ~ 2017.02",
      major: "주전공 : 생명공학과 (학점 3.9/4.0)",
      thesis: "진화생물학 관점에서 본 사회문화적 창발현상 연구.pdf",
      description:
        "현대의 진화생물학에 의해 이루어진 생명에 대한 지식의 확대와 인간이 만들어낸 사회문화에 대한 문헌 연구를 진행",
    },
    {
      degree: "대학교",
      school: "서울대학교",
      period: "2011.03 ~ 2015.02",
      major: "주전공 : 문화경영학과 (학점 3.2/4.5)",
      doubleMajor: "복수전공 : 기계정보학과 (학점 4.0/4.5)",
    },
  ];

  return (
    <SectionContainer
      icon={icon}
      title="학력"
      subtitle="학력 정보를 적어주세요."
    >
      <div className={styles.timeline}>
        {educationList.map((edu, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            {index < educationList.length - 1 && (
              <div className={styles.timelineLine}></div>
            )}

            <div className={styles.content}>
              <div className={styles.header}>
                <h4 className={styles.degree}>{edu.degree}</h4>
                <div className={styles.period}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 2V6M8 2V6M3 10H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className={styles.details}>
                <p className={styles.school}>{edu.school}</p>
                <p className={styles.major}>{edu.major}</p>
                {edu.doubleMajor && (
                  <p className={styles.major}>{edu.doubleMajor}</p>
                )}

                {edu.thesis && (
                  <div className={styles.thesis}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 2V9H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{edu.thesis}</span>
                  </div>
                )}

                {edu.description && (
                  <p className={styles.description}>{edu.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Education;
