import React, { ReactNode } from "react";
import styles from "./SectionContainer.module.css";

interface SectionContainerProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  icon,
  title,
  subtitle,
  children,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.iconWrapper}>{icon}</div>
          <div className={styles.textArea}>
            <h3 className={styles.title}>{title}</h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </div>
        
        <button className={styles.helpButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;

