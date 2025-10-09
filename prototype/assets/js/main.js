// 메인 JavaScript 파일
class ProfileManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupFormValidation();
        this.setupMatchingToggle();
        this.calculateCompletion();
    }

    setupEventListeners() {
        // 저장 버튼 이벤트
        const saveBtn = document.querySelector('.btn-primary');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveProfile());
        }

        // 임시저장 버튼 이벤트
        const tempSaveBtn = document.querySelector('.btn-secondary');
        if (tempSaveBtn) {
            tempSaveBtn.addEventListener('click', () => this.tempSave());
        }

        // 프로필 사진 업로드
        const avatarBtn = document.querySelector('.avatar-upload-btn');
        if (avatarBtn) {
            avatarBtn.addEventListener('click', () => this.uploadAvatar());
        }


        // 실시간 폼 검증
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    setupFormValidation() {
        // 이메일 검증
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', () => this.validateEmail(emailInput));
        }

        // 전화번호 검증
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('blur', () => this.validatePhone(phoneInput));
        }

        // 면허번호 검증
        const licenseInput = document.getElementById('license');
        if (licenseInput) {
            licenseInput.addEventListener('blur', () => this.validateLicense(licenseInput));
        }
    }

    setupMatchingToggle() {
        const matchingToggle = document.getElementById('matching-enabled');
        const matchingConditions = document.getElementById('matching-conditions');
        const matchingSettings = document.querySelector('.matching-settings');

        if (matchingToggle && matchingConditions) {
            matchingToggle.addEventListener('change', (e) => {
                if (e.target.checked) {
                    matchingConditions.classList.remove('hidden');
                    matchingSettings.classList.remove('disabled');
                    this.showMessage('매칭 서비스가 활성화되었습니다.', 'success');
                } else {
                    matchingConditions.classList.add('hidden');
                    matchingSettings.classList.add('disabled');
                    this.showMessage('매칭 서비스가 비활성화되었습니다.', 'info');
                }
            });

            // 초기 상태 설정
            if (matchingToggle.checked) {
                matchingConditions.classList.remove('hidden');
                matchingSettings.classList.remove('disabled');
            } else {
                matchingConditions.classList.add('hidden');
                matchingSettings.classList.add('disabled');
            }
        }
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.previousElementSibling?.textContent || field.name;
        
        if (field.hasAttribute('required') && !value) {
            this.showFieldError(field, `${fieldName}은(는) 필수 입력 항목입니다.`);
            return false;
        }

        return true;
    }

    validateEmail(emailInput) {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.showFieldError(emailInput, '올바른 이메일 형식을 입력해주세요.');
            return false;
        }
        
        this.clearFieldError(emailInput);
        return true;
    }

    validatePhone(phoneInput) {
        const phone = phoneInput.value.trim();
        const phoneRegex = /^010-\d{4}-\d{4}$/;
        
        if (phone && !phoneRegex.test(phone)) {
            this.showFieldError(phoneInput, '올바른 전화번호 형식을 입력해주세요. (예: 010-1234-5678)');
            return false;
        }
        
        this.clearFieldError(phoneInput);
        return true;
    }

    validateLicense(licenseInput) {
        const license = licenseInput.value.trim();
        const licenseRegex = /^\d{4}-\d{6}$/;
        
        if (license && !licenseRegex.test(license)) {
            this.showFieldError(licenseInput, '올바른 면허번호 형식을 입력해주세요. (예: 2024-001234)');
            return false;
        }
        
        this.clearFieldError(licenseInput);
        return true;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-message error';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#dc3545';
    }

    clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.form-message.error');
        if (existingError) {
            existingError.remove();
        }
        field.style.borderColor = '';
    }

    calculateCompletion() {
        const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
        const completedFields = Array.from(requiredFields).filter(field => field.value.trim() !== '');
        const completionPercentage = Math.round((completedFields.length / requiredFields.length) * 100);
        
        const percentageElement = document.querySelector('.completion-percentage');
        const fillElement = document.querySelector('.completion-fill');
        
        if (percentageElement) {
            percentageElement.textContent = `${completionPercentage}%`;
        }
        
        if (fillElement) {
            fillElement.style.width = `${completionPercentage}%`;
        }
    }

    saveProfile() {
        const form = document.querySelector('form') || document.querySelector('.main');
        const inputs = form.querySelectorAll('input, select, textarea');
        let isValid = true;

        // 모든 필드 검증
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            this.showMessage('프로필이 성공적으로 저장되었습니다.', 'success');
            this.calculateCompletion();
        } else {
            this.showMessage('입력 정보를 확인해주세요.', 'error');
        }
    }

    tempSave() {
        this.showMessage('임시저장되었습니다.', 'info');
    }

    uploadAvatar() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const avatarImg = document.querySelector('.avatar-img');
                    if (avatarImg) {
                        avatarImg.src = e.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }


    showMessage(message, type = 'info') {
        // 기존 메시지 제거
        const existingMessage = document.querySelector('.toast-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // 새 메시지 생성
        const messageDiv = document.createElement('div');
        messageDiv.className = `toast-message ${type}`;
        messageDiv.textContent = message;
        
        // 스타일 적용
        Object.assign(messageDiv.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '6px',
            color: '#fff',
            fontWeight: '500',
            zIndex: '1000',
            maxWidth: '300px',
            wordWrap: 'break-word',
            animation: 'slideIn 0.3s ease'
        });

        // 타입별 색상
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            info: '#17a2b8'
        };
        messageDiv.style.backgroundColor = colors[type] || colors.info;

        document.body.appendChild(messageDiv);

        // 3초 후 자동 제거
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => messageDiv.remove(), 300);
        }, 3000);
    }
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    new ProfileManager();
});
