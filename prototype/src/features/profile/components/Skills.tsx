import React from "react";
import styles from "./Skills.module.css";
import SectionContainer from "./SectionContainer";

const Skills: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M24 16L28 12L24 8M8 16L4 12L8 8M18.6667 5.33333L13.3333 26.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const skillCategories = [
    {
      label: "자격증",
      items: [
        { name: "정보처리기사", level: "고급" },
        { name: "컴퓨터활용능력 1급", level: "고급" },
        { name: "웹디자인기능사", level: "중급" },
      ],
    },
    {
      label: "공인 어학시험",
      items: [
        { name: "TOEIC 900점", level: null },
      ],
    },
    {
      label: "기술 스택",
      items: [
        { name: "React", level: "고급" },
        { name: "TypeScript", level: "고급" },
        { name: "Figma", level: "중급" },
      ],
    },
  ];

  return (
    <SectionContainer
      icon={icon}
      title="지식 · 기술"
      subtitle="자격증, 공인 어학시험, 툴, 개발스택 등을 적어주세요."
    >
      <div className={styles.content}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <h4 className={styles.categoryLabel}>{category.label}</h4>
            <div className={styles.items}>
              {category.items.map((item, idx) => (
                <div key={idx} className={styles.skillItem}>
                  <span className={styles.skillName}>{item.name}</span>
                  {item.level && (
                    <span className={styles.skillLevel}>{item.level}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;

