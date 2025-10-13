import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  const menuItems = [
    { label: "홈" },
    { label: "프로필 관리", active: true },
    { label: "지원 현황" },
    { label: "매칭 현황" },
    { label: "북마크" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>마이페이지</h2>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`${styles.navItem} ${item.active ? styles.active : ""}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className={styles.guide}>
        <p className={styles.guideText}>
          지금은 메디컬 잡다 관련된 핵심 기능만 반영돼있고, 계정 비밀번호 설정,
          제휴 서비스 신청 등 다른 기능은 하단의 'MY JOBDA 바로가기' 버튼을
          클릭해서 설정할 수 있음을 안내하는 가이드 텍스트
        </p>
      </div>

      <a href="#" className={styles.helpLink}>
        <span>MY JOBDA 바로가기</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </aside>
  );
};

export default Sidebar;
