import React, { useState } from 'react'
import PageLayout from '@components/layout/PageLayout'
import ProfileCompletion from './components/ProfileCompletion'
import BasicInfo from './components/BasicInfo'
import Button from '@components/common/Button'
import styles from './ProfileManagement.module.css'
import type { Profile, BasicInfo as BasicInfoType } from './types/profile.types'

const ProfileManagement: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    id: '1',
    basicInfo: {
      name: '김민지',
      email: 'kimminji@example.com',
      phone: '010-1234-5678',
      birthDate: '2001-03-15',
      isVerified: true,
    },
    selfBranding: {
      tagline: '',
      introduction: '',
    },
    education: [],
    experience: [],
    nurseLicense: {
      licenseNumber: '',
      issueDate: '',
      status: '정상',
      approvalStatus: '대기중',
    },
    clinicalExperience: {
      yearsOfExperience: 0,
      averagePatients: 0,
      specialExperiences: {
        operatingRoom: false,
        emergencyRoom: false,
        icu: false,
        nicu: false,
        picu: false,
        dialysis: false,
        recovery: false,
        outpatient: false,
      },
      achievements: '',
    },
    nursingEducation: [],
    certifications: {
      basicCertifications: {
        bls: false,
        acls: false,
        pals: false,
        kls: false,
      },
      medicalCertifications: [],
      generalCertifications: [],
    },
    workPreferences: {
      preferredDepartments: [],
      preferredHospitalLevels: [],
      preferredEmploymentTypes: [],
      preferredWorkHours: [],
      preferredRegions: [],
      workConditions: {
        nightShiftAvailable: false,
        weekendAvailable: false,
        holidayAvailable: false,
        businessTripAvailable: false,
      },
    },
    matchingSettings: {
      isEnabled: false,
      notifications: {
        push: false,
        sms: false,
      },
    },
    completionPercentage: 45,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })

  const handleBasicInfoChange = (data: BasicInfoType) => {
    setProfile((prev) => ({
      ...prev,
      basicInfo: data,
    }))
  }

  const handleSave = () => {
    console.log('프로필 저장:', profile)
    alert('프로필이 저장되었습니다.')
  }

  const handleTempSave = () => {
    console.log('임시 저장:', profile)
    alert('임시 저장되었습니다.')
  }

  return (
    <PageLayout>
      <div className="container">
        <div className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>프로필 관리</h2>
          <p className={styles.pageSubtitle}>
            간호사 회원님의 프로필을 관리하고 매칭 설정을 조절하세요
          </p>
        </div>

        <ProfileCompletion
          percentage={profile.completionPercentage}
          missingItems={[
            '간호사 면허 정보',
            '경력 정보',
            '희망 근무 조건',
          ]}
        />

        <div className={styles.sections}>
          <BasicInfo
            data={profile.basicInfo}
            onChange={handleBasicInfoChange}
          />
          
          {/* 추가 섹션들은 다음 단계에서 구현 */}
          <div className={styles.placeholder}>
            <p>다른 섹션들은 추가로 구현됩니다...</p>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <Button variant="outline" size="lg" onClick={handleTempSave}>
            임시저장
          </Button>
          <Button variant="primary" size="lg" onClick={handleSave}>
            저장하기
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}

export default ProfileManagement

