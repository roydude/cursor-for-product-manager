import React from 'react'
import Card from '@components/common/Card'
import styles from './ProfileCompletion.module.css'

export interface ProfileCompletionProps {
  percentage: number
  missingItems: string[]
}

const ProfileCompletion: React.FC<ProfileCompletionProps> = ({ percentage, missingItems }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>프로필 완성도</h3>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className={styles.description}>
        프로필을 완성하면 더 많은 매칭 기회를 받을 수 있습니다.
      </p>
      {missingItems.length > 0 && (
        <div className={styles.missingSection}>
          <h4 className={styles.missingTitle}>미완성 항목</h4>
          <ul className={styles.missingList}>
            {missingItems.map((item, index) => (
              <li key={index} className={styles.missingItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  )
}

export default ProfileCompletion

