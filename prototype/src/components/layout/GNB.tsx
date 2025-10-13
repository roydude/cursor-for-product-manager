import React from "react";
import styles from "./GNB.module.css";

const GNB: React.FC = () => {
  return (
    <nav className={styles.gnb}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>메디컬 잡다</span>
        </div>
        
        <div className={styles.menu}>
          <a href="#" className={styles.menuItem}>채용</a>
          <a href="#" className={styles.menuItem}>병원정보</a>
          <a href="#" className={styles.menuItem}>커뮤니티</a>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.iconButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className={styles.iconButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={styles.profile}>
            <div className={styles.avatar}>김</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GNB;

