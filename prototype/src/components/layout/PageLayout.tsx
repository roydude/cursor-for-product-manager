import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./PageLayout.module.css";

export interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
