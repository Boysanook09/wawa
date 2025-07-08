/* ===== ENHANCED USABILITY FEATURES ===== */

// Enhanced Usability System
class UsabilityEnhancer {
    constructor() {
        this.init();
        this.setupAccessibility();
        this.setupUserHelpers();
        this.setupSmartFeatures();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.addSkipLink();
        this.enhanceForms();
        this.addTooltips();
        this.setupKeyboardNavigation();
        this.addLoadingStates();
        this.setupNotifications();
        this.addHelpSystem();
        this.setupResponsiveHelpers();
        console.log('🚀 Usability Enhancer loaded');
    }

    // Add skip navigation link for accessibility
    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'ข้ามไปยังเนื้อหาหลัก';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content ID if not exists
        const mainContent = document.querySelector('main, .container, #app');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
        }
    }

    // Enhanced form functionality
    enhanceForms() {
        // Auto-focus first input in forms
        document.querySelectorAll('form').forEach(form => {
            const firstInput = form.querySelector('input, select, textarea');
            if (firstInput && !firstInput.hasAttribute('autofocus')) {
                firstInput.focus();
            }

            // Add form validation feedback
            form.addEventListener('submit', (e) => {
                this.validateForm(form, e);
            });

            // Real-time validation
            form.querySelectorAll('input, select, textarea').forEach(field => {
                field.addEventListener('blur', () => {
                    this.validateField(field);
                });

                field.addEventListener('input', () => {
                    this.clearFieldError(field);
                });
            });
        });

        // Enhanced select dropdowns
        this.enhanceSelects();

        // Character counters for textareas
        this.addCharacterCounters();

        // Auto-resize textareas
        this.autoResizeTextareas();
    }

    enhanceSelects() {
        document.querySelectorAll('select').forEach(select => {
            if (!select.classList.contains('enhanced')) {
                select.classList.add('enhanced');
                
                // Add search functionality for long selects
                if (select.options.length > 10) {
                    this.makeSelectSearchable(select);
                }
            }
        });
    }

    makeSelectSearchable(select) {
        const wrapper = document.createElement('div');
        wrapper.className = 'searchable-select';
        select.parentNode.insertBefore(wrapper, select);
        wrapper.appendChild(select);

        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'พิมพ์เพื่อค้นหา...';
        searchInput.className = 'select-search';
        wrapper.insertBefore(searchInput, select);

        let originalOptions = Array.from(select.options);

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            select.innerHTML = '';

            originalOptions
                .filter(option => option.text.toLowerCase().includes(searchTerm))
                .forEach(option => select.appendChild(option.cloneNode(true)));
        });

        searchInput.addEventListener('focus', () => {
            select.style.display = 'block';
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                select.style.display = 'none';
            }
        });
    }

    addCharacterCounters() {
        document.querySelectorAll('textarea[maxlength]').forEach(textarea => {
            if (!textarea.nextElementSibling?.classList.contains('char-counter')) {
                const counter = document.createElement('div');
                counter.className = 'char-counter';
                textarea.parentNode.insertBefore(counter, textarea.nextSibling);

                const updateCounter = () => {
                    const current = textarea.value.length;
                    const max = textarea.maxLength;
                    counter.textContent = `${current}/${max} ตัวอักษร`;
                    
                    if (current > max * 0.9) {
                        counter.style.color = '#ef4444';
                    } else if (current > max * 0.8) {
                        counter.style.color = '#f59e0b';
                    } else {
                        counter.style.color = '#6b7280';
                    }
                };

                textarea.addEventListener('input', updateCounter);
                updateCounter();
            }
        });
    }

    autoResizeTextareas() {
        document.querySelectorAll('textarea.auto-resize').forEach(textarea => {
            const resize = () => {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            };

            textarea.addEventListener('input', resize);
            resize();
        });
    }

    validateForm(form, event) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault();
            this.showNotification('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน', 'error');
            
            // Focus first invalid field
            const firstInvalid = form.querySelector('.field-error');
            if (firstInvalid) {
                firstInvalid.focus();
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Required validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'กรุณากรอกข้อมูลนี้';
        }

        // Email validation
        if (field.type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'กรุณากรอกอีเมลให้ถูกต้อง';
        }

        // Phone validation
        if (field.type === 'tel' && value && !this.isValidPhone(value)) {
            isValid = false;
            errorMessage = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง';
        }

        // Min length validation
        if (field.minLength && value.length < field.minLength) {
            isValid = false;
            errorMessage = `ต้องมีอย่างน้อย ${field.minLength} ตัวอักษร`;
        }

        this.showFieldValidation(field, isValid, errorMessage);
        return isValid;
    }

    showFieldValidation(field, isValid, errorMessage) {
        // Remove existing error
        this.clearFieldError(field);

        if (!isValid) {
            field.classList.add('field-error');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error-message';
            errorDiv.textContent = errorMessage;
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        } else {
            field.classList.add('field-valid');
        }
    }

    clearFieldError(field) {
        field.classList.remove('field-error', 'field-valid');
        const errorMessage = field.parentNode.querySelector('.field-error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    isValidPhone(phone) {
        return /^[0-9+\-\s()]{8,15}$/.test(phone);
    }

    // Add helpful tooltips
    addTooltips() {
        // Auto-generate tooltips for form fields with title attribute
        document.querySelectorAll('[title]').forEach(element => {
            if (!element.querySelector('.tooltip-content')) {
                this.createTooltip(element, element.title);
                element.removeAttribute('title'); // Prevent browser default tooltip
            }
        });

        // Add helpful tooltips for common elements
        this.addHelpfulTooltips();
    }

    createTooltip(element, text) {
        element.classList.add('tooltip');
        
        const tooltipContent = document.createElement('div');
        tooltipContent.className = 'tooltip-content';
        tooltipContent.textContent = text;
        element.appendChild(tooltipContent);
    }

    addHelpfulTooltips() {
        const tooltipMap = {
            'input[type="password"]': 'รหัสผ่านควรมีอย่างน้อย 8 ตัวอักษร',
            'input[type="email"]': 'กรอกอีเมลในรูปแบบ example@domain.com',
            'input[type="tel"]': 'กรอกเบอร์โทรศัพท์ เช่น 08X-XXX-XXXX',
            'input[required]': 'ข้อมูลนี้จำเป็นต้องกรอก',
            'button[type="submit"]': 'คลิกเพื่อส่งข้อมูล',
        };

        Object.entries(tooltipMap).forEach(([selector, tooltip]) => {
            document.querySelectorAll(selector).forEach(element => {
                if (!element.classList.contains('tooltip')) {
                    this.createTooltip(element, tooltip);
                }
            });
        });
    }

    // Enhanced keyboard navigation
    setupKeyboardNavigation() {
        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Alt + H = Show help
            if (e.altKey && e.key === 'h') {
                e.preventDefault();
                this.toggleHelpModal();
            }

            // Alt + S = Focus search
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                const searchInput = document.querySelector('input[type="search"], .search-input');
                if (searchInput) {
                    searchInput.focus();
                }
            }

            // Escape = Close modals
            if (e.key === 'Escape') {
                this.closeAllModals();
            }

            // Enter = Submit forms (when focused on input)
            if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
                const form = e.target.closest('form');
                if (form && e.target.type !== 'textarea') {
                    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
                    if (submitBtn) {
                        submitBtn.click();
                    }
                }
            }
        });

        // Improve tab navigation
        this.enhanceTabNavigation();
    }

    enhanceTabNavigation() {
        // Add tab index to interactive elements without it
        const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [onclick], [role="button"]');
        
        interactiveElements.forEach((element, index) => {
            if (!element.hasAttribute('tabindex') && !element.disabled) {
                element.tabIndex = 0;
            }
        });

        // Visual focus indicators
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    // Loading states for better UX
    addLoadingStates() {
        // Auto-add loading states to forms
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
                if (submitBtn) {
                    this.setLoadingState(submitBtn, true);
                    
                    // Remove loading state after 3 seconds (fallback)
                    setTimeout(() => {
                        this.setLoadingState(submitBtn, false);
                    }, 3000);
                }
            });
        });

        // Add loading states to AJAX buttons
        document.querySelectorAll('[data-loading]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.setLoadingState(button, true);
            });
        });
    }

    setLoadingState(element, isLoading) {
        if (isLoading) {
            element.classList.add('btn-loading');
            element.disabled = true;
            element.setAttribute('data-original-text', element.textContent);
            element.textContent = 'กำลังดำเนินการ...';
        } else {
            element.classList.remove('btn-loading');
            element.disabled = false;
            const originalText = element.getAttribute('data-original-text');
            if (originalText) {
                element.textContent = originalText;
                element.removeAttribute('data-original-text');
            }
        }
    }

    // Notification system
    setupNotifications() {
        // Create notification container
        if (!document.querySelector('.notification-container')) {
            const container = document.createElement('div');
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
    }

    showNotification(message, type = 'info', duration = 5000) {
        const container = document.querySelector('.notification-container');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };

        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icons[type] || icons.info}</span>
                <span class="notification-text">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        container.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Auto-remove
        if (duration > 0) {
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }, duration);
        }

        return notification;
    }

    // Help system
    addHelpSystem() {
        // Add floating help button
        const helpBtn = document.createElement('button');
        helpBtn.className = 'fab help-fab';
        helpBtn.innerHTML = '<i class="fas fa-question"></i>';
        helpBtn.onclick = () => this.toggleHelpModal();
        helpBtn.setAttribute('aria-label', 'ความช่วยเหลือ');
        helpBtn.title = 'ความช่วยเหลือ (Alt + H)';
        
        // Position based on existing FAB
        const existingFab = document.querySelector('.fab');
        if (existingFab) {
            helpBtn.style.bottom = '96px';
        }
        
        document.body.appendChild(helpBtn);

        // Create help modal
        this.createHelpModal();
    }

    createHelpModal() {
        const modal = document.createElement('div');
        modal.className = 'help-modal modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-life-ring"></i> ความช่วยเหลือ</h3>
                    <button class="modal-close" onclick="this.closest('.modal').style.display='none'">×</button>
                </div>
                <div class="modal-body">
                    <div class="help-section">
                        <h4>🚀 เริ่มต้นใช้งาน</h4>
                        <ul>
                            <li>คลิก "จองห้องพัก" เพื่อดูห้องว่างและทำการจอง</li>
                            <li>ใช้ "แจ้งปัญหา" เมื่อพบปัญหาในห้องพัก</li>
                            <li>ตรวจสอบ "สถานะการจอง" เพื่อดูความคืบหน้า</li>
                        </ul>
                    </div>
                    
                    <div class="help-section">
                        <h4>⌨️ คีย์บอร์ดลัด</h4>
                        <ul>
                            <li><kbd>Alt + H</kbd> - เปิดความช่วยเหลือ</li>
                            <li><kbd>Alt + S</kbd> - โฟกัสช่องค้นหา</li>
                            <li><kbd>Esc</kbd> - ปิดหน้าต่าง</li>
                            <li><kbd>Tab</kbd> - เนวิเกทด้วยคีย์บอร์ด</li>
                        </ul>
                    </div>
                    
                    <div class="help-section">
                        <h4>📱 การใช้งานบนมือถือ</h4>
                        <ul>
                            <li>ปัดขึ้น-ลง เพื่อเลื่อนดูเนื้อหา</li>
                            <li>แตะสองครั้ง เพื่อซูมเข้า-ออก</li>
                            <li>ใช้เมนูหลักเพื่อเนวิเกท</li>
                        </ul>
                    </div>
                    
                    <div class="help-section">
                        <h4>🆘 ความช่วยเหลือเพิ่มเติม</h4>
                        <div class="help-contacts">
                            <a href="tel:0896288668" class="help-contact">
                                <i class="fas fa-phone"></i> 089-628-8668
                            </a>
                            <a href="#" onclick="openLineSupport()" class="help-contact">
                                <i class="fab fa-line"></i> @WawaRental
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    toggleHelpModal() {
        const modal = document.querySelector('.help-modal');
        if (modal) {
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        }
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Setup accessibility features
    setupAccessibility() {
        // Add ARIA labels to interactive elements without them
        document.querySelectorAll('button, a, input, select, textarea').forEach(element => {
            if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
                const label = this.generateAriaLabel(element);
                if (label) {
                    element.setAttribute('aria-label', label);
                }
            }
        });

        // Add role attributes
        document.querySelectorAll('[onclick]:not(button):not(a)').forEach(element => {
            if (!element.getAttribute('role')) {
                element.setAttribute('role', 'button');
            }
        });

        // Announce page changes to screen readers
        this.setupAriaLiveRegion();
    }

    generateAriaLabel(element) {
        const tagName = element.tagName.toLowerCase();
        const type = element.type;
        const text = element.textContent?.trim();
        const placeholder = element.placeholder;
        const title = element.title;

        if (text) return text;
        if (placeholder) return placeholder;
        if (title) return title;

        // Generate based on context
        if (tagName === 'button') {
            if (type === 'submit') return 'ส่งข้อมูล';
            if (element.classList.contains('close')) return 'ปิด';
            return 'ปุ่ม';
        }

        if (tagName === 'a') {
            return element.href ? 'ลิงก์' : 'ลิงก์';
        }

        if (tagName === 'input') {
            switch (type) {
                case 'search': return 'ช่องค้นหา';
                case 'email': return 'ช่องอีเมล';
                case 'password': return 'ช่องรหัสผ่าน';
                case 'tel': return 'ช่องเบอร์โทร';
                case 'submit': return 'ส่งข้อมูล';
                default: return 'ช่องกรอกข้อมูล';
            }
        }

        return null;
    }

    setupAriaLiveRegion() {
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'aria-live-region';
        document.body.appendChild(liveRegion);
    }

    announceToScreenReader(message) {
        const liveRegion = document.getElementById('aria-live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    // Responsive helpers
    setupResponsiveHelpers() {
        // Auto-adjust viewport for mobile
        if (!document.querySelector('meta[name="viewport"]')) {
            const viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0, user-scalable=yes';
            document.head.appendChild(viewport);
        }

        // Add touch-friendly classes
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
        }

        // Detect and handle orientation changes
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.announceToScreenReader('หน้าจอหมุน กรุณารอสักครู่');
            }, 100);
        });

        // Handle connection changes
        if ('onLine' in navigator) {
            window.addEventListener('online', () => {
                this.showNotification('เชื่อมต่ออินเทอร์เน็ตแล้ว', 'success');
            });

            window.addEventListener('offline', () => {
                this.showNotification('ไม่มีการเชื่อมต่ออินเทอร์เน็ต', 'warning', 0);
            });
        }
    }

    // Smart features
    setupSmartFeatures() {
        // Auto-save form data
        this.setupAutoSave();
        
        // Smart suggestions
        this.setupSmartSuggestions();
        
        // Gesture support
        this.setupGestureSupport();
    }

    setupAutoSave() {
        document.querySelectorAll('form[data-autosave]').forEach(form => {
            const formId = form.id || `form_${Date.now()}`;
            const inputs = form.querySelectorAll('input, textarea, select');

            // Load saved data
            inputs.forEach(input => {
                const savedValue = localStorage.getItem(`autosave_${formId}_${input.name}`);
                if (savedValue && !input.value) {
                    input.value = savedValue;
                }
            });

            // Save on input
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    localStorage.setItem(`autosave_${formId}_${input.name}`, input.value);
                });
            });

            // Clear on submit
            form.addEventListener('submit', () => {
                inputs.forEach(input => {
                    localStorage.removeItem(`autosave_${formId}_${input.name}`);
                });
            });
        });
    }

    setupSmartSuggestions() {
        // Smart phone number formatting
        document.querySelectorAll('input[type="tel"]').forEach(input => {
            input.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 3) {
                    value = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                }
                e.target.value = value;
            });
        });

        // Auto-complete suggestions
        document.querySelectorAll('input[data-suggestions]').forEach(input => {
            const suggestions = JSON.parse(input.getAttribute('data-suggestions'));
            this.addAutoComplete(input, suggestions);
        });
    }

    addAutoComplete(input, suggestions) {
        const wrapper = document.createElement('div');
        wrapper.className = 'autocomplete-wrapper';
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        const suggestionsList = document.createElement('div');
        suggestionsList.className = 'autocomplete-suggestions';
        wrapper.appendChild(suggestionsList);

        input.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase();
            const filtered = suggestions.filter(s => 
                s.toLowerCase().includes(value)
            ).slice(0, 5);

            suggestionsList.innerHTML = '';
            
            if (filtered.length > 0 && value) {
                filtered.forEach(suggestion => {
                    const item = document.createElement('div');
                    item.className = 'suggestion-item';
                    item.textContent = suggestion;
                    item.onclick = () => {
                        input.value = suggestion;
                        suggestionsList.innerHTML = '';
                        input.focus();
                    };
                    suggestionsList.appendChild(item);
                });
                suggestionsList.style.display = 'block';
            } else {
                suggestionsList.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                suggestionsList.style.display = 'none';
            }
        });
    }

    setupGestureSupport() {
        if ('ontouchstart' in window) {
            let touchStartX = 0;
            let touchStartY = 0;

            document.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            });

            document.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                const deltaX = touchEndX - touchStartX;
                const deltaY = touchEndY - touchStartY;

                // Swipe gestures
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                        // Swipe right
                        this.handleSwipeRight();
                    } else {
                        // Swipe left
                        this.handleSwipeLeft();
                    }
                }
            });
        }
    }

    handleSwipeRight() {
        // Go back in navigation
        if (window.history.length > 1) {
            window.history.back();
        }
    }

    handleSwipeLeft() {
        // Go forward in navigation
        window.history.forward();
    }
}

// Enhanced notification system (global function)
function showNotification(message, type = 'info', duration = 5000) {
    if (window.usabilityEnhancer) {
        return window.usabilityEnhancer.showNotification(message, type, duration);
    }
    
    // Fallback notification
    console.log(`${type.toUpperCase()}: ${message}`);
    alert(message);
}

// Enhanced success modal
function showSuccessModal(title, message, trackingId = null) {
    const modal = document.createElement('div');
    modal.className = 'success-modal modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header success">
                <h3><i class="fas fa-check-circle"></i> ${title}</h3>
            </div>
            <div class="modal-body">
                <p>${message}</p>
                ${trackingId ? `<div class="tracking-code">รหัสอ้างอิง: <strong>${trackingId}</strong></div>` : ''}
                <div class="success-actions">
                    <button class="btn-enhanced" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-check"></i> เข้าใจแล้ว
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Auto-close after 10 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 10000);
    
    return modal;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.usabilityEnhancer = new UsabilityEnhancer();
    });
} else {
    window.usabilityEnhancer = new UsabilityEnhancer();
}

console.log('🎯 Enhanced Usability Features loaded');
