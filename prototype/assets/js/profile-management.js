// 프로필 관리 JavaScript
(function() {
    'use strict';

    // 프로필 완성도 계산
    function calculateCompletion() {
        const sections = {
            basicInfo: ['name', 'birth', 'email', 'phone'],
            nurseLicense: ['license-number', 'license-date', 'license-status'],
            workPreferences: ['preferred-hospital-size', 'preferred-work-type', 'preferred-work-hours']
        };

        let totalFields = 0;
        let completedFields = 0;

        // 각 섹션 필드 확인
        for (const section in sections) {
            sections[section].forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field) {
                    totalFields++;
                    if (field.value && field.value.trim() !== '') {
                        completedFields++;
                    }
                }
            });
        }

        // 체크박스 그룹 확인
        const checkboxGroups = [
            'preferred-dept',
            'preferred-region'
        ];

        checkboxGroups.forEach(name => {
            const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
            totalFields++;
            if (checkboxes.length > 0) {
                completedFields++;
            }
        });

        // 완성도 계산
        const completionRate = totalFields > 0 ? Math.round((completedFields / totalFields) * 100) : 0;
        
        // UI 업데이트
        const percentageEl = document.getElementById('completion-percentage');
        const fillEl = document.getElementById('completion-fill');
        
        if (percentageEl && fillEl) {
            percentageEl.textContent = completionRate + '%';
            fillEl.style.width = completionRate + '%';
        }

        // 미완성 항목 표시
        updateIncompleteItems(sections, checkboxGroups);

        return completionRate;
    }

    // 미완성 항목 표시
    function updateIncompleteItems(sections, checkboxGroups) {
        const incompleteItems = [];

        // 필수 필드 확인
        for (const section in sections) {
            sections[section].forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field && (!field.value || field.value.trim() === '')) {
                    const label = document.querySelector(`label[for="${fieldId}"]`);
                    if (label) {
                        incompleteItems.push({
                            id: fieldId,
                            name: label.textContent.replace('*', '').trim()
                        });
                    }
                }
            });
        }

        // 체크박스 그룹 확인
        checkboxGroups.forEach(name => {
            const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
            if (checkboxes.length === 0) {
                const label = document.querySelector(`label[for="${name}"]`);
                if (label) {
                    incompleteItems.push({
                        id: name,
                        name: label.textContent.replace('*', '').trim()
                    });
                }
            }
        });

        // 미완성 항목 요약 표시
        const summaryEl = document.getElementById('incomplete-items-summary');
        if (summaryEl && incompleteItems.length > 0) {
            summaryEl.innerHTML = `
                <div style="margin-top: 1rem; padding: 0.75rem; background: #FEF3C7; border-radius: 6px; border-left: 4px solid #F59E0B;">
                    <strong>⚠️ 미완성 항목 ${incompleteItems.length}개</strong>
                    <ul style="margin: 0.5rem 0 0 1.5rem; font-size: 0.875rem;">
                        ${incompleteItems.map(item => `<li>${item.name}</li>`).join('')}
                    </ul>
                </div>
            `;
        } else if (summaryEl) {
            summaryEl.innerHTML = '';
        }
    }

    // 의료기관 특화 필드 토글
    window.toggleMedicalFields = function(checkbox) {
        const card = checkbox.closest('.experience-card');
        const medicalFields = card.querySelector('.medical-specific');
        if (medicalFields) {
            medicalFields.style.display = checkbox.checked ? 'block' : 'none';
        }
    };

    // 매칭 조건 토글
    window.toggleMatchingConditions = function() {
        const checkbox = document.getElementById('matching-enabled');
        const conditions = document.getElementById('matching-conditions');
        if (conditions) {
            conditions.style.display = checkbox.checked ? 'block' : 'none';
        }
    };

    // 카드 삭제
    window.removeCard = function(button) {
        const card = button.closest('.experience-card, .education-card');
        if (card) {
            if (confirm('이 항목을 삭제하시겠습니까?')) {
                card.remove();
                calculateCompletion();
            }
        }
    };

    // 학력 추가
    window.addEducation = function() {
        const list = document.getElementById('education-list');
        const index = list.children.length;
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <button class="remove-card-btn" onclick="removeCard(this)">×</button>
            <div class="form-section">
                <div class="form-group">
                    <label class="required">학교 구분</label>
                    <select name="school-type" required>
                        <option value="">선택하세요</option>
                        <option value="university">대학교(4년)</option>
                        <option value="college">전문대학(2~3년)</option>
                        <option value="graduate">대학원</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="required">학교명</label>
                    <input type="text" name="school-name" required>
                </div>
                <div class="form-group">
                    <label class="required">상태</label>
                    <select name="school-status" required>
                        <option value="">선택하세요</option>
                        <option value="graduated">졸업</option>
                        <option value="expected">졸업예정</option>
                        <option value="enrolled">재학중</option>
                        <option value="leave">휴학</option>
                        <option value="dropped">중퇴</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="required">재학기간</label>
                    <div style="display: flex; gap: 0.5rem;">
                        <input type="month" name="school-start" required>
                        <span>~</span>
                        <input type="month" name="school-end" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="required">주전공</label>
                    <input type="text" name="major" required>
                </div>
                <div class="form-group">
                    <label>학점 입력 방식</label>
                    <div style="display: flex; gap: 1rem; margin-bottom: 0.5rem;">
                        <label class="checkbox-item">
                            <input type="radio" name="gpa-type-${index}" value="gpa" checked>
                            <span>평점</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="radio" name="gpa-type-${index}" value="percentile">
                            <span>백분위</span>
                        </label>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        <input type="number" name="gpa" placeholder="평점" step="0.01" min="0" max="4.5" style="flex: 1;">
                        <span>/</span>
                        <input type="number" name="gpa-max" placeholder="만점" step="0.1" min="0" max="5" style="flex: 1;">
                    </div>
                </div>
            </div>
        `;
        list.appendChild(card);
    };

    // 경력 추가
    window.addExperience = function() {
        const list = document.getElementById('experience-list');
        const index = list.children.length;
        const card = document.createElement('div');
        card.className = 'experience-card';
        card.innerHTML = `
            <button class="remove-card-btn" onclick="removeCard(this)">×</button>
            <div class="form-section">
                <div class="form-group">
                    <label class="required">직장명</label>
                    <input type="text" name="company-name" required>
                </div>
                <div class="form-group">
                    <label class="required">상태</label>
                    <select name="work-status" required>
                        <option value="">선택하세요</option>
                        <option value="current">재직중</option>
                        <option value="leave">휴직</option>
                        <option value="resigned">퇴사</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="required">근무 기간</label>
                    <div style="display: flex; gap: 0.5rem;">
                        <input type="month" name="work-start" required>
                        <span>~</span>
                        <input type="month" name="work-end" placeholder="재직중">
                    </div>
                </div>
                <div class="form-group">
                    <label class="required">직군/직무</label>
                    <div style="display: flex; gap: 0.5rem;">
                        <select name="job-category" required style="flex: 1;">
                            <option value="">직군 선택</option>
                            <option value="medical">의료</option>
                            <option value="admin">행정</option>
                            <option value="research">연구</option>
                        </select>
                        <select name="job-role" required style="flex: 1;">
                            <option value="">직무 선택</option>
                            <option value="nurse">간호사</option>
                            <option value="head-nurse">수간호사</option>
                            <option value="np">전문간호사</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="required">계약 형태</label>
                    <select name="contract-type" required>
                        <option value="">선택하세요</option>
                        <option value="permanent">정규직</option>
                        <option value="contract">계약직</option>
                        <option value="temporary">임시직</option>
                        <option value="freelance">프리랜서</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>주요 성과</label>
                    <textarea name="achievements" rows="4" placeholder="주요 업무 및 성과를 작성해주세요"></textarea>
                </div>
                <div class="checkbox-item" style="margin-bottom: 1rem;">
                    <input type="checkbox" id="is-medical-${index}" name="is-medical" onchange="toggleMedicalFields(this)">
                    <label for="is-medical-${index}">의료기관 경력입니다</label>
                </div>
                <div class="medical-specific" style="display: none;">
                    <div class="medical-specific-title">의료기관 특화 정보</div>
                    <div class="form-group">
                        <label>병원 등급</label>
                        <select name="hospital-grade">
                            <option value="">선택하세요</option>
                            <option value="tertiary">상급종합병원</option>
                            <option value="general">종합병원</option>
                            <option value="hospital">병원</option>
                            <option value="clinic">의원</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>진료과 경험</label>
                        <div class="checkbox-group">
                            <label class="checkbox-item">
                                <input type="checkbox" name="department" value="internal">
                                <span>내과</span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" name="department" value="surgery">
                                <span>외과</span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" name="department" value="pediatrics">
                                <span>소아과</span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" name="department" value="obstetrics">
                                <span>산부인과</span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" name="department" value="emergency">
                                <span>응급실</span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" name="department" value="icu">
                                <span>중환자실</span>
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="night-shift">
                            <span>야간/주말 근무 경험 있음</span>
                        </label>
                    </div>
                </div>
            </div>
        `;
        list.appendChild(card);
    };

    // 간호교육 추가
    window.addNursingEducation = function() {
        const list = document.getElementById('nursing-education-list');
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <button class="remove-card-btn" onclick="removeCard(this)">×</button>
            <div class="form-section">
                <div class="form-group">
                    <label class="required">연수 과정명</label>
                    <input type="text" name="course-name" placeholder="예: 신규간호사 역량강화 교육" required>
                </div>
                <div class="form-group">
                    <label class="required">이수 기관</label>
                    <input type="text" name="course-institution" placeholder="예: 대한간호협회" required>
                </div>
                <div class="form-group">
                    <label class="required">이수 기간</label>
                    <div style="display: flex; gap: 0.5rem;">
                        <input type="date" name="course-start" required>
                        <span>~</span>
                        <input type="date" name="course-end" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>이수 시간</label>
                    <input type="number" name="course-hours" placeholder="시간" min="0">
                </div>
                <div class="form-group">
                    <label>수료증</label>
                    <div class="file-upload" onclick="this.querySelector('input').click()">
                        <input type="file" accept="image/*,.pdf">
                        <div class="file-upload-text">📄 파일을 선택하거나 드래그하세요</div>
                    </div>
                </div>
            </div>
        `;
        list.appendChild(card);
    };

    // 프로필 저장
    window.saveProfile = function() {
        const completionRate = calculateCompletion();
        
        if (completionRate < 80) {
            if (!confirm('프로필 완성도가 80% 미만입니다.\n계속 저장하시겠습니까?')) {
                return;
            }
        }

        // 필수 필드 검증
        const requiredFields = document.querySelectorAll('input[required], select[required]');
        let allValid = true;
        let firstInvalidField = null;

        requiredFields.forEach(field => {
            if (!field.value || field.value.trim() === '') {
                allValid = false;
                field.style.borderColor = 'var(--danger-color)';
                if (!firstInvalidField) {
                    firstInvalidField = field;
                }
            } else {
                field.style.borderColor = '';
            }
        });

        if (!allValid) {
            alert('필수 항목을 모두 입력해주세요.');
            if (firstInvalidField) {
                firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalidField.focus();
            }
            return;
        }

        // 실제 구현에서는 API 호출
        alert('프로필이 저장되었습니다!');
        console.log('프로필 저장됨');
    };

    // 임시저장
    window.saveAsDraft = function() {
        // 실제 구현에서는 API 호출
        alert('임시저장되었습니다.');
        console.log('임시저장됨');
    };

    // 섹션 네비게이션
    function initSectionNav() {
        const navItems = document.querySelectorAll('.section-nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 활성 상태 변경
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                // 해당 섹션으로 스크롤
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // 스크롤 시 활성 섹션 업데이트
        const sections = document.querySelectorAll('.profile-section');
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').substring(1) === current) {
                    item.classList.add('active');
                }
            });
        });
    }

    // 프로필 사진 미리보기
    function initAvatarPreview() {
        const avatarInput = document.getElementById('avatar-input');
        const avatarPreview = document.getElementById('avatar-preview');
        
        if (avatarInput && avatarPreview) {
            avatarInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        avatarPreview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }

    // 실시간 완성도 계산
    function initRealtimeCompletion() {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('change', calculateCompletion);
            input.addEventListener('input', calculateCompletion);
        });
    }

    // 초기화
    document.addEventListener('DOMContentLoaded', function() {
        initSectionNav();
        initAvatarPreview();
        initRealtimeCompletion();
        calculateCompletion();
    });

})();

