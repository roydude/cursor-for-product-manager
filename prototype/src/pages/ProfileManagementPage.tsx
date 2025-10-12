import { useState, useEffect, useRef } from 'react';
import { Camera, Check, ChevronRight, X, Plus, User, GraduationCap, Briefcase, Award, Target, Settings, Bell, Heart, ClipboardList, HelpCircle, MessageSquare, LogOut } from 'lucide-react';
import theme from '@styles/theme';

const ProfileManagementPage = () => {
  const [activeSection, setActiveSection] = useState('basic');
  const [activeMenu, setActiveMenu] = useState('profile');
  const [matchingEnabled, setMatchingEnabled] = useState(false);
  const [profileProgress, setProfileProgress] = useState(65);
  
  const sectionRefs = {
    basic: useRef<HTMLDivElement>(null),
    license: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    career: useRef<HTMLDivElement>(null),
    preferences: useRef<HTMLDivElement>(null),
    matching: useRef<HTMLDivElement>(null)
  };

  // 왼쪽 메인 메뉴
  const mainMenuItems = [
    { id: 'profile', label: '프로필 관리', icon: User },
    { id: 'applications', label: '지원 현황', icon: ClipboardList },
    { id: 'saved', label: '관심 공고', icon: Heart },
    { id: 'messages', label: '메시지', icon: MessageSquare, badge: 3 },
    { id: 'settings', label: '계정 설정', icon: Settings },
    { id: 'help', label: '고객센터', icon: HelpCircle }
  ];

  // 섹션 네비게이션
  const sections = [
    { id: 'basic', label: '기본 정보', icon: User, progress: 90 },
    { id: 'license', label: '간호사 면허', icon: Award, progress: 100 },
    { id: 'education', label: '학력', icon: GraduationCap, progress: 80 },
    { id: 'career', label: '경력', icon: Briefcase, progress: 60 },
    { id: 'preferences', label: '희망 근무조건', icon: Target, progress: 40 },
    { id: 'matching', label: '매칭 설정', icon: Settings, progress: 50 }
  ];

  // 미완성 항목
  const incompleteItems = [
    { section: 'career', items: ['최근 근무지 담당업무 입력'] },
    { section: 'preferences', items: ['희망 진료과 선택', '희망 연봉 입력'] }
  ];

  // 스크롤 감지로 현재 섹션 자동 변경
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = sectionRefs[section.id as keyof typeof sectionRefs].current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 앵커 클릭으로 스크롤 이동
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs[sectionId as keyof typeof sectionRefs].current;
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background.alternative, fontFamily: 'Pretendard, -apple-system, sans-serif' }}>
      {/* GNB - Sticky Header */}
      <nav style={{ backgroundColor: theme.colors.background.default, borderBottom: `1px solid ${theme.colors.border.subtle}` }} className="sticky top-0 z-50 shadow-sm">
        <div className="max-w-full px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold" style={{ color: theme.colors.brand.primary }}>메디컬잡다</div>
              <div className="hidden md:flex space-x-6">
                <a href="#" style={{ color: theme.colors.text.default }} className="hover:text-blue-600 font-medium transition">채용정보</a>
                <a href="#" style={{ color: theme.colors.text.default }} className="hover:text-blue-600 font-medium transition">역량검사</a>
                <a href="#" style={{ color: theme.colors.text.brand, borderBottomColor: theme.colors.brand.primary }} className="font-semibold border-b-2 pb-1">커리어 관리</a>
                <a href="#" style={{ color: theme.colors.text.default }} className="hover:text-blue-600 font-medium transition">상급·종합병원 정보</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <Bell size={20} style={{ color: theme.colors.icon.default }} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.status.error }}></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.accent.skyblue.subtle }}>
                  <User size={18} style={{ color: theme.colors.brand.primary }} />
                </div>
                <span className="font-medium" style={{ color: theme.colors.text.default }}>김민지 님</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 3단 레이아웃 */}
      <div className="flex">
        {/* 왼쪽 사이드바 - 메인 메뉴 */}
        <aside style={{ backgroundColor: theme.colors.background.default, borderRight: `1px solid ${theme.colors.border.subtle}` }} className="w-64 min-h-screen sticky top-16">
          <div className="p-4">
            <nav className="space-y-1">
              {mainMenuItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition`}
                    style={{
                      backgroundColor: activeMenu === item.id ? theme.colors.accent.skyblue.subtle : 'transparent',
                      color: activeMenu === item.id ? theme.colors.text.brand : theme.colors.text.default
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon size={20} />
                      <span className={activeMenu === item.id ? 'font-medium' : ''}>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: theme.colors.status.error, color: theme.colors.white }}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* 로그아웃 */}
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition hover:bg-gray-50" style={{ color: theme.colors.text.default }}>
              <LogOut size={20} />
              <span>로그아웃</span>
            </button>
          </div>
        </aside>

        {/* 중앙 - 메인 콘텐츠 */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* 페이지 헤더 */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2" style={{ color: theme.colors.text.default }}>프로필 관리</h1>
              <p style={{ color: theme.colors.text.subtle }}>프로필을 완성하면 더 많은 매칭 기회를 받을 수 있습니다</p>
            </div>

            {/* 모든 섹션 */}
            <div className="space-y-6">
              {/* 기본 정보 섹션 */}
              <div ref={sectionRefs.basic} style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.border.default}` }} className="rounded-lg shadow-sm scroll-mt-24">
                <div className="p-6" style={{ borderBottom: `1px solid ${theme.colors.border.default}` }}>
                  <div className="flex items-center space-x-3">
                    <User size={24} style={{ color: theme.colors.brand.primary }} />
                    <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.default }}>기본 정보</h2>
                    <span className="ml-auto text-sm" style={{ color: theme.colors.text.subtle }}>90% 완성</span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {/* 프로필 사진 */}
                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: theme.colors.text.default }}>
                      프로필 사진
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="relative w-24 h-24 rounded-full flex items-center justify-center overflow-hidden group cursor-pointer border-2" style={{ backgroundColor: theme.colors.background.subtle, borderColor: theme.colors.border.default }}>
                        <User size={40} style={{ color: theme.colors.icon.disabled }} />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                          <Camera size={24} style={{ color: theme.colors.white }} />
                        </div>
                      </div>
                      <div>
                        <button className="px-4 py-2 rounded-lg hover:bg-gray-50 transition text-sm font-medium" style={{ border: `1px solid ${theme.colors.border.default}` }}>
                          사진 업로드
                        </button>
                        <p className="text-xs mt-2" style={{ color: theme.colors.text.subtle }}>JPG, PNG 파일 (최대 5MB)</p>
                      </div>
                    </div>
                  </div>

                  {/* 기본 정보 폼 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        이름 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="김민지"
                        className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                        style={{ 
                          border: `1px solid ${theme.colors.border.default}`, 
                          color: theme.colors.text.default
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        생년월일 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                      </label>
                      <input
                        type="date"
                        defaultValue="2002-03-15"
                        className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                        style={{ 
                          border: `1px solid ${theme.colors.border.default}`, 
                          color: theme.colors.text.default
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        이메일 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                      </label>
                      <input
                        type="email"
                        defaultValue="minji.kim@example.com"
                        className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                        style={{ 
                          border: `1px solid ${theme.colors.border.default}`, 
                          color: theme.colors.text.default
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        휴대전화번호 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="tel"
                          defaultValue="010-1234-5678"
                          className="flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                          style={{ 
                            border: `1px solid ${theme.colors.border.default}`, 
                            color: theme.colors.text.default
                          }}
                        />
                        <button className="px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm font-medium whitespace-nowrap" style={{ backgroundColor: theme.colors.background.subtle, color: theme.colors.text.default }}>
                          인증완료
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                      한 줄 소개
                    </label>
                    <input
                      type="text"
                      placeholder="나를 한 줄로 표현해보세요 (예: 환자 케어에 진심인 신규 간호사입니다)"
                      className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                      style={{ 
                        border: `1px solid ${theme.colors.border.default}`, 
                        color: theme.colors.text.default
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                      간단 소개글
                    </label>
                    <textarea
                      rows={4}
                      placeholder="자신을 소개하는 글을 작성해주세요"
                      className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none resize-none"
                      style={{ 
                        border: `1px solid ${theme.colors.border.default}`, 
                        color: theme.colors.text.default
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* 간호사 면허 섹션 */}
              <div ref={sectionRefs.license} style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.border.default}` }} className="rounded-lg shadow-sm scroll-mt-24">
                <div className="p-6" style={{ borderBottom: `1px solid ${theme.colors.border.default}` }}>
                  <div className="flex items-center space-x-3">
                    <Award size={24} style={{ color: theme.colors.brand.primary }} />
                    <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.default }}>간호사 면허</h2>
                    <span className="ml-auto flex items-center space-x-2">
                      <span className="text-sm font-medium" style={{ color: theme.colors.accent.green.default }}>100% 완성</span>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.accent.green.default }}>
                        <Check size={14} style={{ color: theme.colors.white }} />
                      </div>
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: theme.colors.accent.skyblue.subtle, border: `1px solid ${theme.colors.brand.primaryLight}` }}>
                    <div className="flex items-start space-x-3">
                      <Award size={20} style={{ color: theme.colors.brand.primary }} />
                      <div>
                        <p className="text-sm font-medium" style={{ color: theme.colors.text.strong }}>간호사 면허 인증</p>
                        <p className="text-xs mt-1" style={{ color: theme.colors.text.subtle }}>
                          면허번호를 입력하시면 보건복지부 DB와 연동하여 자동으로 확인됩니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        면허번호 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="123456"
                        className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                        style={{ 
                          border: `1px solid ${theme.colors.border.default}`, 
                          color: theme.colors.text.default
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        면허 취득일 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                      </label>
                      <input
                        type="date"
                        defaultValue="2024-02-15"
                        className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                        style={{ 
                          border: `1px solid ${theme.colors.border.default}`, 
                          color: theme.colors.text.default
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        면허 상태
                      </label>
                      <select className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none" style={{ border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.default }}>
                        <option>정상</option>
                        <option>정지</option>
                        <option>취소</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        승인 상태
                      </label>
                      <div className="px-4 py-2 rounded-lg flex items-center space-x-2" style={{ backgroundColor: theme.colors.accent.green.default + '20', border: `1px solid ${theme.colors.accent.green.default}` }}>
                        <Check size={18} style={{ color: theme.colors.accent.green.default }} />
                        <span className="text-sm font-medium" style={{ color: theme.colors.accent.green.default }}>승인 완료</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: theme.colors.text.default }}>
                      의료진 특화 자격증
                    </label>
                    <div className="space-y-2">
                      {['BLS (Basic Life Support)', 'ACLS (Advanced Cardiac Life Support)', 'PALS (Pediatric Advanced Life Support)'].map((cert, idx) => (
                        <label key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition" style={{ border: `1px solid ${theme.colors.border.default}` }}>
                          <input type="checkbox" defaultChecked={idx === 0} className="w-5 h-5 rounded border-gray-300 focus:ring-blue-500" style={{ accentColor: theme.colors.brand.primary }} />
                          <span className="text-sm" style={{ color: theme.colors.text.default }}>{cert}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 학력 섹션 */}
              <div ref={sectionRefs.education} style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.border.default}` }} className="rounded-lg shadow-sm scroll-mt-24">
                <div className="p-6" style={{ borderBottom: `1px solid ${theme.colors.border.default}` }}>
                  <div className="flex items-center space-x-3">
                    <GraduationCap size={24} style={{ color: theme.colors.brand.primary }} />
                    <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.default }}>학력</h2>
                    <span className="ml-auto text-sm" style={{ color: theme.colors.text.subtle }}>80% 완성</span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <p className="text-sm" style={{ color: theme.colors.text.subtle }}>학력 정보를 입력해주세요</p>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition" style={{ border: `1px solid ${theme.colors.brand.primary}`, color: theme.colors.brand.primary }}>
                      <Plus size={18} />
                      <span className="font-medium">학력 추가</span>
                    </button>
                  </div>

                  <div className="rounded-lg p-4" style={{ border: `1px solid ${theme.colors.border.default}` }}>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold" style={{ color: theme.colors.text.default }}>서울대학교</h4>
                      <button style={{ color: theme.colors.icon.subtle }} className="hover:text-red-600 transition">
                        <X size={20} />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                            학교 구분 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                          </label>
                          <select className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none" style={{ border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.default }}>
                            <option>대학교(4년)</option>
                            <option>전문대학(2~3년)</option>
                            <option>대학원</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                            상태 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                          </label>
                          <select className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none" style={{ border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.default }}>
                            <option>졸업예정</option>
                            <option>졸업</option>
                            <option>재학중</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                            주전공 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                          </label>
                          <input
                            type="text"
                            defaultValue="간호학과"
                            className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                            style={{ 
                              border: `1px solid ${theme.colors.border.default}`, 
                              color: theme.colors.text.default
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                            학점
                          </label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              defaultValue="3.8"
                              className="flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                              style={{ 
                                border: `1px solid ${theme.colors.border.default}`, 
                                color: theme.colors.text.default
                              }}
                            />
                            <span style={{ color: theme.colors.text.subtle }}>/</span>
                            <input
                              type="text"
                              defaultValue="4.5"
                              className="flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                              style={{ 
                                border: `1px solid ${theme.colors.border.default}`, 
                                color: theme.colors.text.default
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                          재학기간
                        </label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="date"
                            defaultValue="2021-03-01"
                            className="flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                            style={{ 
                              border: `1px solid ${theme.colors.border.default}`, 
                              color: theme.colors.text.default
                            }}
                          />
                          <span style={{ color: theme.colors.text.subtle }}>~</span>
                          <input
                            type="date"
                            defaultValue="2025-02-28"
                            className="flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                            style={{ 
                              border: `1px solid ${theme.colors.border.default}`, 
                              color: theme.colors.text.default
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 경력 섹션 */}
              <div ref={sectionRefs.career} style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.border.default}` }} className="rounded-lg shadow-sm scroll-mt-24">
                <div className="p-6" style={{ borderBottom: `1px solid ${theme.colors.border.default}` }}>
                  <div className="flex items-center space-x-3">
                    <Briefcase size={24} style={{ color: theme.colors.brand.primary }} />
                    <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.default }}>경력</h2>
                    <span className="ml-auto text-sm font-medium" style={{ color: theme.colors.status.warning }}>60% 완성 - 담당업무 입력 필요</span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <p className="text-sm" style={{ color: theme.colors.text.subtle }}>의료기관 경력을 입력해주세요</p>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition" style={{ border: `1px solid ${theme.colors.brand.primary}`, color: theme.colors.brand.primary }}>
                      <Plus size={18} />
                      <span className="font-medium">경력 추가</span>
                    </button>
                  </div>

                  <div className="rounded-lg p-8 text-center" style={{ border: `2px dashed ${theme.colors.border.default}` }}>
                    <Briefcase size={48} className="mx-auto mb-4" style={{ color: theme.colors.icon.disabled }} />
                    <p className="font-medium mb-2" style={{ color: theme.colors.text.subtle }}>아직 등록된 경력이 없습니다</p>
                    <p className="text-sm mb-4" style={{ color: theme.colors.text.subtle }}>
                      신규 간호사의 경우 실습 경험이나 아르바이트 경력을 추가해보세요
                    </p>
                    <button className="px-6 py-2 rounded-lg hover:opacity-90 transition font-medium" style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.white }}>
                      첫 경력 추가하기
                    </button>
                  </div>
                </div>
              </div>

              {/* 희망 근무조건 섹션 */}
              <div ref={sectionRefs.preferences} style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.border.default}` }} className="rounded-lg shadow-sm scroll-mt-24">
                <div className="p-6" style={{ borderBottom: `1px solid ${theme.colors.border.default}` }}>
                  <div className="flex items-center space-x-3">
                    <Target size={24} style={{ color: theme.colors.brand.primary }} />
                    <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.default }}>희망 근무조건</h2>
                    <span className="ml-auto text-sm font-medium" style={{ color: theme.colors.status.warning }}>40% 완성 - 진료과·연봉 입력 필요</span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#FFF9E5', border: `1px solid ${theme.colors.status.warning}` }}>
                    <div className="flex items-start space-x-3">
                      <Target size={20} style={{ color: theme.colors.status.warning }} />
                      <div>
                        <p className="text-sm font-medium" style={{ color: theme.colors.text.strong }}>희망 근무조건은 매칭에 활용됩니다</p>
                        <p className="text-xs mt-1" style={{ color: theme.colors.text.subtle }}>
                          정확하게 입력할수록 나에게 맞는 병원을 추천받을 확률이 높아집니다
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: theme.colors.text.default }}>
                      희망 진료과 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['내과', '외과', '소아과', '산부인과', '응급의학과', '정형외과', '신경과', '정신건강의학과', 'ICU/중환자실'].map((dept, idx) => (
                        <label key={idx} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition" style={{ border: `1px solid ${theme.colors.border.default}` }}>
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500" style={{ accentColor: theme.colors.brand.primary }} />
                          <span className="text-sm" style={{ color: theme.colors.text.default }}>{dept}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        희망 병원 규모
                      </label>
                      <select className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none" style={{ border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.default }}>
                        <option>상급종합병원</option>
                        <option>종합병원</option>
                        <option>병원</option>
                        <option>의원</option>
                        <option>무관</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                        희망 근무 형태
                      </label>
                      <select className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none" style={{ border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.default }}>
                        <option>정규직</option>
                        <option>계약직</option>
                        <option>파트타임</option>
                        <option>무관</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                      희망 지역 <span style={{ color: theme.colors.accent.red.default }}>*</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['서울', '경기', '인천', '부산', '대구', '대전', '광주', '울산', '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'].map((region, idx) => (
                        <label key={idx} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition" style={{ border: `1px solid ${theme.colors.border.default}` }}>
                          <input type="checkbox" defaultChecked={idx === 0} className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500" style={{ accentColor: theme.colors.brand.primary }} />
                          <span className="text-sm" style={{ color: theme.colors.text.default }}>{region}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.text.default }}>
                      희망 연봉 (만원) <span style={{ color: theme.colors.accent.red.default }}>*</span>
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        placeholder="최소"
                        className="flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                        style={{ 
                          border: `1px solid ${theme.colors.border.default}`, 
                          color: theme.colors.text.default
                        }}
                      />
                      <span style={{ color: theme.colors.text.subtle }}>~</span>
                      <input
                        type="number"
                        placeholder="최대"
                        className="flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                        style={{ 
                          border: `1px solid ${theme.colors.border.default}`, 
                          color: theme.colors.text.default
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: theme.colors.text.default }}>
                      근무 가능 시간
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'day', label: '주간 근무 가능' },
                        { id: 'night', label: '야간 근무 가능' },
                        { id: 'weekend', label: '주말 근무 가능' },
                        { id: 'holiday', label: '휴일 근무 가능' }
                      ].map(option => (
                        <label key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition" style={{ border: `1px solid ${theme.colors.border.default}` }}>
                          <input type="checkbox" defaultChecked={option.id === 'day'} className="w-5 h-5 rounded border-gray-300 focus:ring-blue-500" style={{ accentColor: theme.colors.brand.primary }} />
                          <span className="text-sm" style={{ color: theme.colors.text.default }}>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 매칭 설정 섹션 */}
              <div ref={sectionRefs.matching} style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.border.default}` }} className="rounded-lg shadow-sm scroll-mt-24">
                <div className="p-6" style={{ borderBottom: `1px solid ${theme.colors.border.default}` }}>
                  <div className="flex items-center space-x-3">
                    <Settings size={24} style={{ color: theme.colors.brand.primary }} />
                    <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.default }}>매칭 설정</h2>
                    <span className="ml-auto text-sm" style={{ color: theme.colors.text.subtle }}>50% 완성</span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="rounded-lg p-6" style={{ border: `2px solid ${theme.colors.brand.primaryLight}`, background: `linear-gradient(to right, ${theme.colors.accent.skyblue.subtle}, ${theme.colors.background.default})` }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: matchingEnabled ? theme.colors.brand.primary : theme.colors.icon.disabled }}>
                          <Heart size={24} style={{ color: theme.colors.white }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: theme.colors.text.default }}>매칭 서비스</h3>
                          <p className="text-sm" style={{ color: theme.colors.text.subtle }}>
                            {matchingEnabled ? '매칭이 활성화되었습니다' : '매칭 서비스를 이용해보세요'}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setMatchingEnabled(!matchingEnabled)}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition`}
                        style={{ backgroundColor: matchingEnabled ? theme.colors.brand.primary : theme.colors.icon.disabled }}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full shadow-lg transition`}
                          style={{ 
                            backgroundColor: theme.colors.white,
                            transform: matchingEnabled ? 'translateX(1.75rem)' : 'translateX(0.25rem)'
                          }}
                        />
                      </button>
                    </div>
                    
                    {matchingEnabled && (
                      <div className="rounded-lg p-4" style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.brand.primaryLight}` }}>
                        <p className="text-sm mb-2" style={{ color: theme.colors.text.default }}>
                          <span className="font-semibold" style={{ color: theme.colors.brand.primary }}>H.X 큐레이터</span>가 나에게 맞는 병원을 찾아 연락드립니다
                        </p>
                        <ul className="text-xs space-y-1" style={{ color: theme.colors.text.subtle }}>
                          <li>• 희망 조건에 맞는 병원을 전문가가 직접 찾아드립니다</li>
                          <li>• 상급병원 불합격 시에도 새로운 기회를 제안받습니다</li>
                          <li>• 언제든지 매칭을 끄고 켤 수 있습니다</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {matchingEnabled && (
                    <>
                      <div>
                        <h4 className="text-sm font-semibold mb-3" style={{ color: theme.colors.text.default }}>알림 설정</h4>
                        <div className="space-y-2">
                          {[
                            { id: 'push', label: '푸시 알림', desc: '앱에서 실시간 알림을 받습니다' },
                            { id: 'email', label: '이메일 알림', desc: '이메일로 매칭 제안을 받습니다' },
                            { id: 'sms', label: 'SMS 알림', desc: '문자로 중요한 알림을 받습니다' }
                          ].map(option => (
                            <label key={option.id} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition" style={{ border: `1px solid ${theme.colors.border.default}` }}>
                              <input type="checkbox" defaultChecked className="w-5 h-5 mt-0.5 rounded border-gray-300 focus:ring-blue-500" style={{ accentColor: theme.colors.brand.primary }} />
                              <div className="flex-1">
                                <p className="text-sm font-medium" style={{ color: theme.colors.text.default }}>{option.label}</p>
                                <p className="text-xs mt-1" style={{ color: theme.colors.text.subtle }}>{option.desc}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-3" style={{ color: theme.colors.text.default }}>최근 매칭 제안</h4>
                        <div className="space-y-3">
                          {[
                            { hospital: '서울대학교병원', dept: '내과병동', date: '2025-10-08', status: '검토중' },
                            { hospital: '삼성서울병원', dept: 'ICU', date: '2025-10-05', status: '거절' }
                          ].map((match, idx) => (
                            <div key={idx} className="rounded-lg p-4 hover:border-blue-300 transition" style={{ border: `1px solid ${theme.colors.border.default}` }}>
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold" style={{ color: theme.colors.text.default }}>{match.hospital}</h5>
                                <span className={`text-xs px-2 py-1 rounded-full`} style={{
                                  backgroundColor: match.status === '검토중' ? '#FFF9E5' : theme.colors.background.subtle,
                                  color: match.status === '검토중' ? theme.colors.status.warning : theme.colors.text.subtle
                                }}>
                                  {match.status}
                                </span>
                              </div>
                              <p className="text-sm mb-1" style={{ color: theme.colors.text.subtle }}>{match.dept}</p>
                              <p className="text-xs" style={{ color: theme.colors.text.subtlest }}>제안일: {match.date}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* 오른쪽 사이드바 - 프로필 완성도 & 앵커 네비게이션 */}
        <aside className="w-80 p-6">
          <div className="sticky top-24 space-y-4">
            {/* 프로필 완성도 카드 */}
            <div className="rounded-lg shadow-sm p-6" style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.border.default}` }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.text.default }}>프로필 완성도</h3>
              
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle cx="64" cy="64" r="56" stroke={theme.colors.border.default} strokeWidth="8" fill="none" />
                    <circle 
                      cx="64" 
                      cy="64" 
                      r="56" 
                      stroke={theme.colors.brand.primary} 
                      strokeWidth="8" 
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - profileProgress / 100)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold" style={{ color: theme.colors.brand.primary }}>{profileProgress}%</span>
                  </div>
                </div>
                <p className="text-sm text-center mt-4" style={{ color: theme.colors.text.subtle }}>
                  프로필을 완성하면<br />더 많은 매칭 기회를 받아요!
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold" style={{ color: theme.colors.text.default }}>완성이 필요한 항목</h4>
                {incompleteItems.map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left p-3 rounded-lg hover:bg-red-100 transition"
                    style={{ backgroundColor: theme.colors.accent.red.subtle, border: `1px solid ${theme.colors.accent.red.default}` }}
                    onClick={() => scrollToSection(item.section)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium" style={{ color: theme.colors.accent.red.default }}>
                          {sections.find(s => s.id === item.section)?.label}
                        </p>
                        <p className="text-xs mt-1" style={{ color: theme.colors.accent.red.default }}>{item.items[0]}</p>
                      </div>
                      <ChevronRight size={16} style={{ color: theme.colors.accent.red.default }} className="mt-1" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 섹션 앵커 네비게이션 */}
            <div className="rounded-lg shadow-sm" style={{ backgroundColor: theme.colors.background.default, border: `1px solid ${theme.colors.border.default}` }}>
              <div className="p-3" style={{ borderBottom: `1px solid ${theme.colors.border.default}` }}>
                <h4 className="text-sm font-semibold" style={{ color: theme.colors.text.default }}>빠른 이동</h4>
              </div>
              <nav className="p-2">
                {sections.map(section => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition`}
                      style={{
                        backgroundColor: activeSection === section.id ? theme.colors.accent.skyblue.subtle : 'transparent',
                        color: activeSection === section.id ? theme.colors.text.brand : theme.colors.text.default
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={18} />
                        <span className="text-sm font-medium">{section.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">{section.progress}%</span>
                        {section.progress === 100 && (
                          <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.accent.green.default }}>
                            <Check size={10} style={{ color: theme.colors.white }} />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* 저장 버튼 */}
            <button className="w-full px-4 py-3 rounded-lg hover:opacity-90 transition font-semibold shadow-lg" style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.white }}>
              모든 변경사항 저장
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProfileManagementPage;

