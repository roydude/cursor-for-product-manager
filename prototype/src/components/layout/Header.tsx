import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.logo}>메디컬 잡다</h1>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>
              공고
            </a>
            <a href="#" className={`${styles.navLink} ${styles.active}`}>
              프로필
            </a>
            <a href="#" className={styles.navLink}>
              지원현황
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
