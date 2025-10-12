/**
 * 메디컬 잡다 프로필 관리 타입 정의
 */

// 기본 정보
export interface BasicInfo {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  profileImage?: string;
  isVerified: boolean;
}

// 셀프 브랜딩
export interface SelfBranding {
  tagline: string; // 한 줄 소개 (50자 이내)
  introduction: string; // 간단 소개글
}

// 학력 정보
export interface Education {
  id: string;
  schoolType:
    | "고등학교"
    | "전문대학(2년제)"
    | "전문대학(3년제)"
    | "대학교(4년제)"
    | "대학원(석사)"
    | "대학원(박사)";
  schoolName: string;
  major: string;
  status: "졸업" | "재학중" | "휴학" | "중퇴";
  startDate: string;
  endDate?: string;
  gpa?: number;
  gpaScale?: "4.0" | "4.3" | "4.5" | "100";
  hasMinor: boolean;
  minorName?: string;
  hasDoubleMajor: boolean;
  doubleMajorName?: string;
}

// 경력 정보
export interface Experience {
  id: string;
  companyName: string;
  status: "재직중" | "퇴사";
  startDate: string;
  endDate?: string;
  position: string;
  jobCategory: string;
  contractType: "정규직" | "계약직" | "임시직" | "프리랜서" | "인턴" | "파견직";

  // 의료기관 특화 필드
  isMedicalInstitution: boolean;
  hospitalLevel?: "상급종합병원" | "종합병원" | "병원" | "의원" | "요양병원";
  departments?: string[]; // 진료과 경험
  hasNightShift: boolean;
  hasWeekendShift: boolean;
  description?: string;
}

// 간호사 면허 정보
export interface NurseLicense {
  licenseNumber: string;
  issueDate: string;
  status: "정상" | "정지" | "취소";
  approvalStatus: "대기중" | "승인" | "반려";
  rejectReason?: string;
}

// 임상 경험
export interface ClinicalExperience {
  yearsOfExperience: number;
  averagePatients: number;
  specialExperiences: {
    operatingRoom: boolean; // 수술실
    emergencyRoom: boolean; // 응급실
    icu: boolean; // 중환자실
    nicu: boolean; // 신생아중환자실
    picu: boolean; // 소아중환자실
    dialysis: boolean; // 투석실
    recovery: boolean; // 회복실
    outpatient: boolean; // 외래
  };
  achievements: string; // 업무 성과 및 주요 경험
}

// 간호교육 이수
export interface NursingEducation {
  id: string;
  courseName: string;
  institution: string;
  startDate: string;
  endDate: string;
  hours: number;
  certificateUrl?: string;
}

// 자격증
export interface Certifications {
  // 의료진 특화 자격증
  basicCertifications: {
    bls: boolean; // Basic Life Support
    acls: boolean; // Advanced Cardiovascular Life Support
    pals: boolean; // Pediatric Advanced Life Support
    kls: boolean; // Korean Life Support
  };
  // 기타 의료 자격증
  medicalCertifications: Array<{
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
  }>;
  // 일반 자격증
  generalCertifications: Array<{
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
  }>;
}

// 희망 근무 조건
export interface WorkPreferences {
  preferredDepartments: string[]; // 희망 진료과
  preferredHospitalLevels: ("상급종합병원" | "종합병원" | "병원" | "의원")[];
  preferredEmploymentTypes: ("정규직" | "계약직" | "임시직" | "프리랜서")[];
  preferredWorkHours: ("주간" | "야간" | "교대근무" | "유연근무")[];
  preferredRegions: string[]; // 희망 지역
  workConditions: {
    nightShiftAvailable: boolean;
    weekendAvailable: boolean;
    holidayAvailable: boolean;
    businessTripAvailable: boolean;
  };
  expectedSalary?: {
    min: number;
    max: number;
  };
}

// 매칭 설정
export interface MatchingSettings {
  isEnabled: boolean;
  notifications: {
    push: boolean;
    sms: boolean;
  };
}

// 전체 프로필
export interface Profile {
  id: string;
  basicInfo: BasicInfo;
  selfBranding: SelfBranding;
  education: Education[];
  experience: Experience[];
  nurseLicense: NurseLicense;
  clinicalExperience: ClinicalExperience;
  nursingEducation: NursingEducation[];
  certifications: Certifications;
  workPreferences: WorkPreferences;
  matchingSettings: MatchingSettings;
  completionPercentage: number;
  createdAt: string;
  updatedAt: string;
}

// 프로필 완성도 계산용
export interface CompletionStatus {
  percentage: number;
  missingItems: string[];
  completedSections: string[];
}

// 폼 필드 에러
export interface FieldError {
  field: string;
  message: string;
}

// 프로필 저장 결과
export interface SaveResult {
  success: boolean;
  message: string;
  errors?: FieldError[];
}
