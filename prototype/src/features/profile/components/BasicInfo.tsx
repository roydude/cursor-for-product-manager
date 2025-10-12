import React from 'react'
import Card from '@components/common/Card'
import Input from '@components/common/Input'
import Button from '@components/common/Button'
import styles from './BasicInfo.module.css'
import type { BasicInfo as BasicInfoType } from '../types/profile.types'

export interface BasicInfoProps {
  data: BasicInfoType
  onChange: (data: BasicInfoType) => void
}

const BasicInfo: React.FC<BasicInfoProps> = ({ data, onChange }) => {
  const handleChange = (field: keyof BasicInfoType, value: string | boolean) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <Card>
      <h3 className={styles.sectionTitle}>기본 정보</h3>
      <div className={styles.content}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            {data.profileImage ? (
              <img src={data.profileImage} alt="프로필 사진" className={styles.avatarImage} />
            ) : (
              <div className={styles.avatarPlaceholder}>
                <span>사진 없음</span>
              </div>
            )}
          </div>
          <Button variant="outline" size="sm">
            사진 변경
          </Button>
        </div>
        <div className={styles.formGrid}>
          <Input
            label="이름"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            fullWidth
          />
          <Input
            label="생년월일"
            type="date"
            value={data.birthDate}
            onChange={(e) => handleChange('birthDate', e.target.value)}
            required
            fullWidth
          />
          <Input
            label="이메일"
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            fullWidth
          />
          <Input
            label="휴대전화"
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            required
            fullWidth
          />
        </div>
        {data.isVerified && (
          <div className={styles.verifiedBadge}>
            ✓ 본인인증 완료
          </div>
        )}
      </div>
    </Card>
  )
}

export default BasicInfo

