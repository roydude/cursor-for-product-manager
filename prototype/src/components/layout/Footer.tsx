import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>© 2024 메디컬 잡다. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
