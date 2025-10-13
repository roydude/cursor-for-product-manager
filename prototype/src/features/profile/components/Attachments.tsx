import React from "react";
import styles from "./Attachments.module.css";
import SectionContainer from "./SectionContainer";

const Attachments: React.FC = () => {
  const icon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M18.6667 17.3333L9.33333 26.6667C8.27247 27.7275 6.81594 28.3187 5.3 28.3187C3.78406 28.3187 2.32753 27.7275 1.26667 26.6667C0.205802 25.6058 -0.385345 24.1493 -0.385345 22.6333C-0.385345 21.1174 0.205802 19.6609 1.26667 18.6L10.6 9.26667C11.3014 8.56529 12.2493 8.17041 13.2375 8.17041C14.2257 8.17041 15.1736 8.56529 15.875 9.26667C16.5764 9.96804 16.9713 10.9159 16.9713 11.9042C16.9713 12.8924 16.5764 13.8403 15.875 14.5417L6.525 23.8833C6.17431 24.234 5.70037 24.4315 5.20625 24.4315C4.71213 24.4315 4.23819 24.234 3.8875 23.8833C3.53681 23.5327 3.33931 23.0587 3.33931 22.5646C3.33931 22.0705 3.53681 21.5965 3.8875 21.2458L12.5417 12.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const attachments = {
    portfolio: [
      { name: "2024_Portfolio.pdf", type: "PDF" },
    ],
    resume: [
      { name: "경력기술서_김조이.pdf", type: "PDF" },
      { name: "Resume_KimJoy_2024.pdf", type: "PDF" },
    ],
    urls: [
      { name: "https://github.com/kimjoy", type: "GitHub" },
    ],
  };

  return (
    <SectionContainer
      icon={icon}
      title="첨부 자료"
      subtitle="포트폴리오, 경력기술서, URL 등을 첨부해주세요."
    >
      <div className={styles.content}>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>포트폴리오</h4>
          <div className={styles.fileList}>
            {attachments.portfolio.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.fileName}>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>경력기술서</h4>
          <div className={styles.fileList}>
            {attachments.resume.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.fileName}>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>URL</h4>
          <div className={styles.fileList}>
            {attachments.urls.map((url, index) => (
              <div key={index} className={styles.fileItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46999L11.75 5.17999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11C13.5705 10.4259 13.0226 9.95083 12.3934 9.60707C11.7642 9.26331 11.0685 9.05889 10.3533 9.00768C9.63819 8.95646 8.92037 9.05967 8.24861 9.31023C7.57685 9.56079 6.96689 9.95295 6.45996 10.46L3.45996 13.46C2.54917 14.403 2.04516 15.6661 2.05655 16.977C2.06795 18.288 2.59379 19.5421 3.52083 20.4691C4.44787 21.3962 5.70193 21.922 7.01291 21.9334C8.32389 21.9448 9.58691 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.fileName}>{url.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Attachments;

