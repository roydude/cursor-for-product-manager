import React, { useEffect, useState } from "react";
import styles from "./ProfileAnchor.module.css";

interface AnchorItem {
  id: string;
  label: string;
  completed: boolean;
  required?: boolean;
}

const ProfileAnchor: React.FC = () => {
  const [activeSection, setActiveSection] = useState("selfbranding");

  const sections: AnchorItem[] = [
    { id: "basic", label: "기본 정보", completed: true, required: true },
    { id: "selfbranding", label: "셀프 브랜딩", completed: true },
    { id: "education", label: "학력", completed: false, required: true },
    { id: "career", label: "경력", completed: false },
    { id: "project", label: "프로젝트", completed: false },
    { id: "skills", label: "지식 · 기술", completed: false },
    { id: "experience", label: "경험", completed: false },
    { id: "awards", label: "수상 내역", completed: false },
    { id: "military", label: "병역 · 취업 우대", completed: false },
    { id: "attachments", label: "첨부 자료", completed: false },
  ];

  const completedCount = sections.filter((s) => s.completed).length;
  const completionRate = Math.round((completedCount / sections.length) * 100);

  useEffect(() => {
    const sectionIds = sections.map((s) => s.id);

    const handleScroll = () => {
      const sectionElements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      const currentSection = sectionElements.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside className={styles.anchor}>
      <div className={styles.card}>
        {/* 헤더 */}
        <div className={styles.header}>
          <h3 className={styles.title}>프로필 항목</h3>
          <p className={styles.subtitle}>
            <span className={styles.subtitleLight}>필수 정보만 채우고 </span>
            <span className={styles.subtitleUnderline}>
              입사제안을 받아 보세요!
            </span>
          </p>
        </div>

        {/* 완성도 */}
        <div className={styles.completion}>
          <div className={styles.completionHeader}>
            <span className={styles.completionText}>
              {completionRate}% 완성
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>

        {/* 섹션 리스트 */}
        <div className={styles.sectionList}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`${styles.sectionItem} ${
                activeSection === section.id ? styles.active : ""
              } ${section.completed ? styles.completed : ""}`}
              onClick={() => scrollToSection(section.id)}
            >
              <div className={styles.sectionLabel}>
                <span className={styles.sectionName}>{section.label}</span>
                {section.required && (
                  <span className={styles.requiredBadge}>필수</span>
                )}
              </div>
              <div className={styles.checkbox}>
                {section.completed && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 하단 배너 */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <p className={styles.bannerTitle}>
            상급·종합병원 채용 전형, 동시에 해결하기
          </p>
          <button className={styles.bannerButton}>
            <span>역량검사란?</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProfileAnchor;
