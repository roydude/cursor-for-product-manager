import React from "react";
import styles from "./ProfileHeader.module.css";
import Toggle from "../../../components/common/Toggle";

interface ProfileHeaderProps {
  matchingEnabled: boolean;
  onMatchingToggle: (enabled: boolean) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  matchingEnabled,
  onMatchingToggle,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>내 프로필</h1>
          <span className={styles.updateDate}>2025.10.13 업데이트</span>
        </div>
        
        <div className={styles.matchingToggle}>
          <span className={styles.toggleLabel}>입사제안 받기</span>
          <Toggle 
            checked={matchingEnabled} 
            onChange={onMatchingToggle}
          />
        </div>
      </div>
      
      <p className={styles.guide}>
        프로필을 100% 완성하면 더 많은 채용 제안을 받을 수 있어요.
      </p>
      
      <div className={styles.profileCard}>
        <div className={styles.profileInfo}>
          <div className={styles.avatar}>
            <img 
              src="https://via.placeholder.com/80" 
              alt="프로필" 
              className={styles.avatarImage}
            />
          </div>
          
          <div className={styles.details}>
            <div className={styles.nameRow}>
              <h2 className={styles.name}>김조이</h2>
              <span className={styles.badge}>여</span>
            </div>
            
            <div className={styles.infoRow}>
              <span className={styles.infoItem}>1990. 01. 01</span>
              <span className={styles.divider}>|</span>
              <span className={styles.infoItem}>010-1234-4321</span>
              <span className={styles.divider}>|</span>
              <span className={styles.infoItem}>joykim@midasin.com</span>
            </div>
          </div>
        </div>
        
        <button className={styles.editButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;

