import React, { useState } from "react";
import styles from "./FigmaProfilePage.module.css";
import GNB from "../components/layout/GNB";
import Sidebar from "../components/layout/Sidebar";
import ProfileAnchor from "../components/layout/ProfileAnchor";
import Footer from "../components/layout/Footer";
import ProfileHeader from "../features/profile/components/ProfileHeader";
import SelfBranding from "../features/profile/components/SelfBranding";
import Education from "../features/profile/components/Education";
import Career from "../features/profile/components/Career";
import Project from "../features/profile/components/Project";
import Skills from "../features/profile/components/Skills";
import Experience from "../features/profile/components/Experience";
import Awards from "../features/profile/components/Awards";
import Military from "../features/profile/components/Military";
import Attachments from "../features/profile/components/Attachments";

const FigmaProfilePage: React.FC = () => {
  const [matchingEnabled, setMatchingEnabled] = useState(true);

  return (
    <div className={styles.container}>
      <GNB />

      <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <Sidebar />

          <main className={styles.content}>
            <div className={styles.contentInner}>
              <ProfileHeader
                matchingEnabled={matchingEnabled}
                onMatchingToggle={setMatchingEnabled}
              />

              <div className={styles.sections}>
                <div id="basic" />
                <div id="selfbranding">
                  <SelfBranding />
                </div>
                <div id="education">
                  <Education />
                </div>
                <div id="career">
                  <Career />
                </div>
                <div id="project">
                  <Project />
                </div>
                <div id="skills">
                  <Skills />
                </div>
                <div id="experience">
                  <Experience />
                </div>
                <div id="awards">
                  <Awards />
                </div>
                <div id="military">
                  <Military />
                </div>
                <div id="attachments">
                  <Attachments />
                </div>
              </div>
            </div>
          </main>
        </div>

        <ProfileAnchor />
      </div>

      <Footer />
    </div>
  );
};

export default FigmaProfilePage;
