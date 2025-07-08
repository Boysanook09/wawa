// ===== MODERN ADMIN PANEL JAVASCRIPT - V2.0 =====

// ===== MOCK DATA FOR DEMO =====

// Default Rooms Data
const defaultRooms = [
    {
        id: 'room_001',
        number: '101',
        name: 'ห้องแฟนสวยงาม A',
        type: 'fan',
        price: 3500,
        size: 20,
        floor: 1,
        status: 'available',
        description: 'ห้องแฟนขนาด 20 ตร.ม. ในตำแหน่งที่สะดวก มีหน้าต่างกว้าง อากาศถ่ายเท',
        amenities: ['wifi', 'parking', 'balcony'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzRmNmZmZiIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iUHJvbXB0LCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuC4q+C5ieC4reC4hyAxMDE8L3RleHQ+Cjwvc3ZnPgo=',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z'
    },
    {
        id: 'room_002',
        number: '102',
        name: 'ห้องแฟนสวยงาม B',
        type: 'fan',
        price: 3500,
        size: 18,
        floor: 1,
        status: 'occupied',
        description: 'ห้องแฟน ขนาดเล็กกะทัดรัด เหมาะสำหรับคนอยู่คนเดียว',
        amenities: ['wifi', 'parking'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzEwYjk4MSIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iUHJvbXB0LCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuC4q+C5ieC4reC4hyAxMDI8L3RleHQ+Cjwvc3ZnPgo=',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z'
    },
    {
        id: 'room_003',
        number: '201',
        name: 'ห้องสแตนดาร์ด Premium',
        type: 'standard',
        price: 4500,
        size: 25,
        floor: 2,
        status: 'available',
        description: 'ห้องสแตนดาร์ดขนาดใหญ่ มีเครื่องปรับอากาศ ตู้เย็น ทีวี',
        amenities: ['wifi', 'ac', 'fridge', 'tv', 'parking'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y1OWUwYiIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iUHJvbXB0LCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuC4q+C5ieC4reC4hyAyMDE8L3RleHQ+Cjwvc3ZnPgo=',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z'
    },
    {
        id: 'room_004',
        number: '202',
        name: 'ห้องสแตนดาร์ด Deluxe',
        type: 'standard',
        price: 4800,
        size: 28,
        floor: 2,
        status: 'maintenance',
        description: 'ห้องสแตนดาร์ดพิเศษ พร้อมระเบียงและเครื่องซักผ้า',
        amenities: ['wifi', 'ac', 'fridge', 'tv', 'washing', 'parking', 'balcony'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VmNDQ0NCIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iUHJvbXB0LCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuC4q+C5ieC4reC4hyAyMDI8L3RleHQ+Cjwvc3ZnPgo=',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z'
    },
    {
        id: 'room_005',
        number: '301',
        name: 'ห้องดีลักซ์ สุดหรู',
        type: 'deluxe',
        price: 6500,
        size: 35,
        floor: 3,
        status: 'available',
        description: 'ห้องดีลักซ์หรูหรา ครบครันทุกสิ่งอำนวยความสะดวก',
        amenities: ['wifi', 'ac', 'fridge', 'tv', 'washing', 'parking', 'balcony', 'kitchen'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzg5MzNmZiIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iUHJvbXB0LCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuC4q+C5ieC4reC4hyAzMDE8L3RleHQ+Cjwvc3ZnPgo=',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z'
    },
    {
        id: 'room_006',
        number: '302',
        name: 'ห้องสตูดิโอ โมเดิร์น',
        type: 'studio',
        price: 7500,
        size: 40,
        floor: 3,
        status: 'occupied',
        description: 'ห้องสตูดิโอสไตล์โมเดิร์น เหมาะสำหรับการทำงานและพักผ่อน',
        amenities: ['wifi', 'ac', 'fridge', 'tv', 'washing', 'parking', 'balcony', 'kitchen'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VjNGE5OSIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iUHJvbXB0LCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuC4q+C5ieC4reC4hyAzMDI8L3RleHQ+Cjwvc3ZnPgo=',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: '2024-01-01T00:00:00.000Z'
    }
];

// Default Bookings Data
const defaultBookings = [
    {
        id: 'booking_001',
        bookingNumber: 'BK2024001',
        customerName: 'นางสาวสมใจ รักดี',
        roomId: 'room_002',
        roomNumber: '102',
        checkIn: '2024-07-01',
        duration: '12 เดือน',
        amount: 42000,
        status: 'confirmed',
        createdAt: '2024-06-15T10:30:00.000Z'
    },
    {
        id: 'booking_002',
        bookingNumber: 'BK2024002',
        customerName: 'นายสมชาย มีความสุข',
        roomId: 'room_006',
        roomNumber: '302',
        checkIn: '2024-07-05',
        duration: '6 เดือน',
        amount: 45000,
        status: 'checked-in',
        createdAt: '2024-06-20T14:15:00.000Z'
    },
    {
        id: 'booking_003',
        bookingNumber: 'BK2024003',
        customerName: 'นางสาวมาลี ใจดี',
        roomId: 'room_001',
        roomNumber: '101',
        checkIn: '2024-07-10',
        duration: '3 เดือน',
        amount: 10500,
        status: 'pending',
        createdAt: '2024-07-01T09:00:00.000Z'
    }
];

// Default Issues Data
const defaultIssues = [
    {
        id: 'issue_001',
        roomNumber: '202',
        title: 'เครื่องปรับอากาศเสีย',
        description: 'เครื่องปรับอากาศไม่เย็น มีเสียงดังผิดปกติ',
        urgency: 'urgent',
        status: 'pending',
        reportedBy: 'ผู้เช่าห้อง 202',
        createdAt: '2024-07-05T08:30:00.000Z'
    },
    {
        id: 'issue_002',
        roomNumber: '101',
        title: 'ก๊อกน้ำหยด',
        description: 'ก๊อกน้ำในห้องน้ำหยดตลอดเวลา',
        urgency: 'normal',
        status: 'in-progress',
        reportedBy: 'ผู้เช่าห้อง 101',
        createdAt: '2024-07-03T16:45:00.000Z'
    },
    {
        id: 'issue_003',
        roomNumber: '301',
        title: 'หลอดไฟเสีย',
        description: 'หลอดไฟในห้องนอนไม่ติด',
        urgency: 'low',
        status: 'resolved',
        reportedBy: 'ผู้เช่าห้อง 301',
        createdAt: '2024-07-01T19:20:00.000Z'
    }
];

// Default Contacts Data
const defaultContacts = [
    {
        id: 'contact_001',
        name: 'นายสมศักดิ์ ใจดี',
        phone: '089-123-4567',
        roomType: 'standard',
        message: 'สอบถามเรื่องห้องเช่า ต้องการดูห้องวันเสาร์หน้า',
        status: 'new',
        createdAt: '2024-07-06T10:15:00.000Z'
    },
    {
        id: 'contact_002',
        name: 'นางสาวอรพิน มีสุข',
        phone: '098-765-4321',
        roomType: 'fan',
        message: 'ต้องการห้องแฟนราคาไม่เกิน 4000 บาท',
        status: 'contacted',
        createdAt: '2024-07-05T14:30:00.000Z'
    },
    {
        id: 'contact_003',
        name: 'นายวิทยา รักเรียน',
        phone: '087-654-3210',
        roomType: 'deluxe',
        message: 'ต้องการห้องใหญ่ๆ สำหรับครอบครัว',
        status: 'completed',
        createdAt: '2024-07-04T11:00:00.000Z'
    }
];

// Enhanced Global Variables
let currentUser = null;
let currentSection = 'dashboard';
let rooms = [];
let bookings = [];
let issues = [];
let contacts = [];
let isLoading = false;
let toastQueue = [];
let sessionTimeout = null;

// Modern Features Configuration
const MODERN_CONFIG = {
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    toastDuration: 5000,
    animationDuration: 300,
    autosaveInterval: 10000, // 10 seconds
    maxToasts: 5,
    enableTwoFactor: false, // Future feature
    themes: ['light', 'dark', 'auto'],
    languages: ['th', 'en']
};

// Performance Monitoring
const PERFORMANCE = {
    startTime: Date.now(),
    loadTime: 0,
    interactions: 0,
    errors: []
};

// Enhanced Storage Keys
const STORAGE_KEYS = {
    rooms: 'wawa_rooms_v2',
    bookings: 'wawa_bookings_v2',
    issues: 'wawa_issues_v2',
    contacts: 'wawa_contacts_v2',
    user: 'wawa_admin_user_v2',
    settings: 'wawa_settings_v2',
    preferences: 'wawa_preferences_v2',
    theme: 'wawa_theme_v2',
    language: 'wawa_language_v2'
};

// Modern Toast Notification System
function showToast(message, type = 'info', duration = MODERN_CONFIG.toastDuration) {
    const container = document.getElementById('toastContainer') || createToastContainer();
    
    // Limit number of toasts
    const existingToasts = container.querySelectorAll('.toast');
    if (existingToasts.length >= MODERN_CONFIG.maxToasts) {
        existingToasts[0].remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${icons[type]}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close" onclick="removeToast(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    // Show animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Auto remove
    setTimeout(() => {
        if (toast.parentNode) {
            removeToast(toast.querySelector('.toast-close'));
        }
    }, duration);
    
    return toast;
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

function removeToast(closeBtn) {
    const toast = closeBtn.closest('.toast');
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), MODERN_CONFIG.animationDuration);
}

// Enhanced Loading System
function showModernLoading(text = 'กำลังประมวลผล...') {
    isLoading = true;
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        const loadingText = overlay.querySelector('.loading-text');
        const progressBar = overlay.querySelector('.progress-bar');
        
        if (loadingText) loadingText.textContent = text;
        if (progressBar) progressBar.style.width = '0%';
        
        overlay.classList.remove('hidden');
        overlay.style.display = 'flex';
        
        // Animate progress bar
        setTimeout(() => {
            if (progressBar) progressBar.style.width = '100%';
        }, 100);
    }
}

function hideModernLoading() {
    isLoading = false;
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        setTimeout(() => {
            overlay.classList.add('hidden');
            overlay.style.display = 'none';
        }, 500);
    }
}

// Quick Login Feature
function quickLogin() {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const rememberField = document.getElementById('rememberMe');
    
    if (usernameField && passwordField) {
        usernameField.value = 'admin';
        passwordField.value = 'wawa2025';
        if (rememberField) rememberField.checked = true;
        
        // Add visual feedback
        usernameField.style.background = 'rgba(74, 222, 128, 0.1)';
        passwordField.style.background = 'rgba(74, 222, 128, 0.1)';
        
        setTimeout(() => {
            usernameField.style.background = '';
            passwordField.style.background = '';
        }, 1000);
        
        showToast('ข้อมูลเข้าสู่ระบบถูกกรอกแล้ว', 'success');
    }
}

// Copy to Clipboard Feature
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('คัดลอกเรียบร้อย!', 'success', 2000);
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('คัดลอกเรียบร้อย!', 'success', 2000);
    }
}

// Enhanced Password Toggle
function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('passwordEye');
    
    if (passwordField && eyeIcon) {
        const isPassword = passwordField.type === 'password';
        passwordField.type = isPassword ? 'text' : 'password';
        eyeIcon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
        
        // Add animation
        eyeIcon.style.transform = 'scale(0.8)';
        setTimeout(() => {
            eyeIcon.style.transform = 'scale(1)';
        }, 150);
    }
}

// Two-Factor Authentication (Future Feature)
function verifyTwoFactor() {
    const codeField = document.getElementById('twoFactorCode');
    const code = codeField?.value;
    
    if (!code || code.length !== 6) {
        showToast('กรุณากรอกรหัส 6 หลัก', 'error');
        return;
    }
    
    showModernLoading('กำลังยืนยันรหัส...');
    
    // Simulate verification
    setTimeout(() => {
        hideModernLoading();
        // Mock verification (always success for demo)
        showToast('ยืนยันรหัสสำเร็จ!', 'success');
        proceedToAdminPanel();
    }, 2000);
}

// Enhanced Login Handler
function handleLogin() {
    const form = document.getElementById('adminLoginForm');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        PERFORMANCE.interactions++;
        
        const formData = new FormData(this);
        const username = formData.get('username')?.trim();
        const password = formData.get('password')?.trim();
        const rememberMe = formData.get('rememberMe');
        
        // Enhanced validation
        if (!username || !password) {
            showToast('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
            return;
        }
        
        // Add loading state to button
        const submitBtn = form.querySelector('.login-btn');
        if (submitBtn) {
            submitBtn.classList.add('loading');
        }
        
        showModernLoading('กำลังตรวจสอบข้อมูล...');
        
        try {
            // Simulate API call with realistic delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Check credentials (enhanced)
            if (username === 'admin' && password === 'wawa2025') {
                // Success
                const userData = {
                    username,
                    loginTime: new Date().toISOString(),
                    sessionId: generateSessionId(),
                    permissions: ['all'],
                    theme: 'modern'
                };
                
                // Save user data
                if (rememberMe) {
                    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(userData));
                } else {
                    sessionStorage.setItem(STORAGE_KEYS.user, JSON.stringify(userData));
                }
                
                showToast('เข้าสู่ระบบสำเร็จ!', 'success');
                
                // Redirect after short delay
                setTimeout(() => {
                    window.location.href = 'admin-dashboard.html';
                }, 1000);
                
            } else {
                throw new Error('Invalid credentials');
            }
            
        } catch (error) {
            console.error('Login error:', error);
            PERFORMANCE.errors.push({
                type: 'login_error',
                message: error.message,
                timestamp: Date.now()
            });
            
            showToast('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง', 'error');
            
            // Shake animation for form
            form.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                form.style.animation = '';
            }, 500);
            
        } finally {
            hideModernLoading();
            if (submitBtn) {
                submitBtn.classList.remove('loading');
            }
        }
    });
}

// Session Management
function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function startSessionTimeout() {
    if (sessionTimeout) clearTimeout(sessionTimeout);
    
    sessionTimeout = setTimeout(() => {
        showToast('Session หมดอายุ กรุณาเข้าสู่ระบบใหม่', 'warning');
        setTimeout(() => {
            logout();
        }, 3000);
    }, MODERN_CONFIG.sessionTimeout);
}

function resetSessionTimeout() {
    startSessionTimeout();
}

// Modern Logout
function logout() {
    localStorage.removeItem(STORAGE_KEYS.user);
    sessionStorage.removeItem(STORAGE_KEYS.user);
    showToast('ออกจากระบบแล้ว', 'info');
    setTimeout(() => {
        window.location.href = 'admin-login.html';
    }, 1000);
}

// Performance Monitoring
function trackPerformance() {
    PERFORMANCE.loadTime = Date.now() - PERFORMANCE.startTime;
    
    // Log performance data
    console.log('🚀 Performance Report:', {
        loadTime: PERFORMANCE.loadTime + 'ms',
        interactions: PERFORMANCE.interactions,
        errors: PERFORMANCE.errors.length,
        timestamp: new Date().toISOString()
    });
}

// Enhanced Error Handling
function handleError(error, context = 'Unknown') {
    console.error(`Error in ${context}:`, error);
    
    PERFORMANCE.errors.push({
        context,
        message: error.message,
        stack: error.stack,
        timestamp: Date.now()
    });
    
    showToast(`เกิดข้อผิดพลาด: ${error.message}`, 'error');
}

// Modern Initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Modern Admin Panel v2.0 Loading...');
    
    try {
        const currentPage = window.location.pathname.split('/').pop();
        console.log('📄 Current page:', currentPage);
        
        // Initialize based on current page
        if (currentPage === 'admin-login.html' || currentPage === '') {
            console.log('🔐 Initializing login page...');
            handleLogin();
            
            // Add modern interactions
            addModernInteractions();
            
        } else if (currentPage === 'admin-dashboard.html') {
            console.log('📊 Initializing dashboard...');
            initModernDashboard();
            initializeSidebar();
        }
        
        // Global initializations
        initModernFeatures();
        startSessionTimeout();
        
        // Track performance
        setTimeout(trackPerformance, 100);
        
        console.log('✅ Modern Admin Panel initialized successfully');
        
    } catch (error) {
        handleError(error, 'Initialization');
    }
});

// Modern Interactions
function addModernInteractions() {
    // Enhanced input interactions
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('.input-wrapper')?.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.closest('.input-wrapper')?.classList.remove('focused');
        });
        
        // Real-time validation
        input.addEventListener('input', () => {
            validateInput(input);
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to submit
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const submitBtn = document.querySelector('.login-btn');
            if (submitBtn && !submitBtn.disabled) {
                submitBtn.click();
            }
        }
        
        // Escape to clear form
        if (e.key === 'Escape') {
            const form = document.querySelector('#adminLoginForm');
            if (form && confirm('ต้องการล้างข้อมูลในฟอร์มหรือไม่?')) {
                form.reset();
            }
        }
    });
}

// Input Validation
function validateInput(input) {
    const value = input.value.trim();
    const wrapper = input.closest('.input-wrapper');
    
    // Remove existing validation classes
    wrapper?.classList.remove('valid', 'invalid');
    
    if (input.type === 'text' && input.name === 'username') {
        if (value.length >= 3) {
            wrapper?.classList.add('valid');
        } else if (value.length > 0) {
            wrapper?.classList.add('invalid');
        }
    }
    
    if (input.type === 'password') {
        if (value.length >= 6) {
            wrapper?.classList.add('valid');
        } else if (value.length > 0) {
            wrapper?.classList.add('invalid');
        }
    }
}

// Modern Dashboard Initialization
function initModernDashboard() {
    try {
        // Check authentication
        const userData = localStorage.getItem(STORAGE_KEYS.user) || 
                        sessionStorage.getItem(STORAGE_KEYS.user);
        
        if (!userData) {
            showToast('กรุณาเข้าสู่ระบบก่อน', 'warning');
            setTimeout(() => {
                window.location.href = 'admin-login.html';
            }, 2000);
            return;
        }
        
        currentUser = JSON.parse(userData);
        console.log('👤 User authenticated:', currentUser.username);
        
        // Initialize dashboard components
        initializeData();
        loadDashboard();
        setupModernNavigation();
        
        // Start auto-save
        startAutoSave();
        
        showToast(`ยินดีต้อนรับ ${currentUser.username}!`, 'success');
        
    } catch (error) {
        handleError(error, 'Dashboard Initialization');
    }
}

// Modern Features Initialization
function initModernFeatures() {
    // Theme management
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'modern';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Language management
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.language) || 'th';
    document.documentElement.setAttribute('lang', savedLanguage);
    
    // Add modern CSS animations
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Add interaction tracking
    document.addEventListener('click', () => PERFORMANCE.interactions++);
    document.addEventListener('keydown', () => PERFORMANCE.interactions++);
}

// Auto-save Feature
function startAutoSave() {
    setInterval(() => {
        if (currentUser && !isLoading) {
            saveAllData();
        }
    }, MODERN_CONFIG.autosaveInterval);
}

function saveAllData() {
    try {
        localStorage.setItem(STORAGE_KEYS.rooms, JSON.stringify(rooms));
        localStorage.setItem(STORAGE_KEYS.bookings, JSON.stringify(bookings));
        localStorage.setItem(STORAGE_KEYS.issues, JSON.stringify(issues));
        localStorage.setItem(STORAGE_KEYS.contacts, JSON.stringify(contacts));
        
        console.log('💾 Auto-save completed');
    } catch (error) {
        console.warn('Auto-save failed:', error);
    }
}

// Enhanced Data Loading
function initializeData() {
    try {
        // Load data with fallback to defaults
        rooms = loadDataWithFallback(STORAGE_KEYS.rooms, defaultRooms);
        bookings = loadDataWithFallback(STORAGE_KEYS.bookings, defaultBookings);
        issues = loadDataWithFallback(STORAGE_KEYS.issues, defaultIssues);
        contacts = loadDataWithFallback(STORAGE_KEYS.contacts, defaultContacts);
        
        console.log('📊 Data loaded:', {
            rooms: rooms.length,
            bookings: bookings.length,
            issues: issues.length,
            contacts: contacts.length
        });
        
    } catch (error) {
        handleError(error, 'Data Loading');
        
        // Use defaults on error
        rooms = [...defaultRooms];
        bookings = [...defaultBookings];
        issues = [...defaultIssues];
        contacts = [...defaultContacts];
    }
}

function loadDataWithFallback(key, defaultData) {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : [...defaultData];
    } catch (error) {
        console.warn(`Failed to load ${key}, using defaults:`, error);
        return [...defaultData];
    }
}

// Load Dashboard Data
function loadDashboard() {
    try {
        console.log('📊 Loading dashboard...');
        updateDashboardStats();
        loadRecentActivities();
        updateCurrentTime();
        console.log('✅ Dashboard loaded successfully');
    } catch (error) {
        console.error('❌ Error loading dashboard:', error);
        handleError(error, 'Dashboard Loading');
    }
}

// Update Dashboard Statistics
function updateDashboardStats() {
    try {
        if (rooms && Array.isArray(rooms)) {
            const totalRooms = rooms.length;
            const availableRooms = rooms.filter(r => r.status === 'available').length;
            const totalRoomsEl = document.getElementById('totalRooms');
            if (totalRoomsEl) totalRoomsEl.textContent = totalRooms;
            const statDetail = document.querySelector('#dashboard .stat-card .stat-detail');
            if (statDetail) statDetail.textContent = `ว่าง ${availableRooms} ห้อง`;
        }
        if (bookings && Array.isArray(bookings)) {
            const totalBookingsEl = document.getElementById('totalBookings');
            if (totalBookingsEl) totalBookingsEl.textContent = bookings.length;
        }
        if (issues && Array.isArray(issues)) {
            const totalIssuesEl = document.getElementById('totalIssues');
            if (totalIssuesEl) {
                const pendingIssues = issues.filter(i => i.status === 'pending').length;
                totalIssuesEl.textContent = pendingIssues;
            }
        }
        console.log('📊 Dashboard stats updated');
    } catch (error) {
        console.error('❌ Error updating dashboard stats:', error);
    }
}

// Load Recent Activities
function loadRecentActivities() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;
    
    const activities = [
        { message: 'การจองใหม่จากลูกค้า นายสมชาย', time: '10 นาทีที่แล้ว', icon: 'fa-calendar-plus', class: 'activity-booking' },
        { message: 'ห้อง 202 เปลี่ยนสถานะเป็น "ซ่อมแซม"', time: '30 นาทีที่แล้ว', icon: 'fa-wrench', class: 'activity-maintenance' },
        { message: 'ได้รับชำระเงินจากห้อง 101', time: '1 ชั่วโมงที่แล้ว', icon: 'fa-money-bill', class: 'activity-payment' },
        { message: 'ข้อความใหม่จาก นางสาวมาลี', time: '2 ชั่วโมงที่แล้ว', icon: 'fa-envelope', class: 'activity-contact' }
    ];
    
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item ${activity.class}">
            <div class="activity-icon"><i class="fas ${activity.icon}"></i></div>
            <div class="activity-content">
                <p class="activity-message">${activity.message}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        </div>
    `).join('');
}

// Update Current Time
function updateCurrentTime() {
    const timeElement = document.getElementById('currentTime');
    if (!timeElement) return;
    
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const dateString = now.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
        timeElement.innerHTML = `<div class="time">${timeString}</div><div class="date">${dateString}</div>`;
    };
    
    updateTime();
    setInterval(updateTime, 1000);
}

// Show Section Function
function showSection(sectionName) {
    try {
        console.log(`🔄 Switching to section: ${sectionName}`);
        
        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => section.classList.remove('active'));
        
        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
            currentSection = sectionName;
            
            // Update page title
            const pageTitleEl = document.getElementById('pageTitle');
            if (pageTitleEl) {
                const titles = {
                    'dashboard': 'แดชบอร์ด',
                    'rooms': 'จัดการห้องเช่า',
                    'bookings': 'การจองห้อง',
                    'issues': 'รายงานปัญหา',
                    'contacts': 'ข้อความติดต่อ',
                    'ai-analytics': 'AI Analytics',
                    'settings': 'ตั้งค่าระบบ'
                };
                pageTitleEl.textContent = titles[sectionName] || sectionName;
            }
            
            // Load section data
            if (sectionName === 'rooms') {
                setTimeout(() => loadRooms(), 300);
            }
            
            console.log(`✅ Section ${sectionName} loaded`);
        }
        
    } catch (error) {
        console.error(`❌ Error showing section ${sectionName}:`, error);
    }
}

// ===== DATA LOADING FUNCTIONS =====

// Load Bookings
function loadBookings() {
    console.log('📋 Loading bookings...');
    const tableBody = document.getElementById('bookingsTableBody');
    if (!tableBody) return;
    
    if (!bookings || bookings.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8" class="no-data">ไม่มีข้อมูลการจอง</td></tr>';
        return;
    }
    
    tableBody.innerHTML = bookings.map(booking => `
        <tr>
            <td>${booking.bookingNumber || '-'}</td>
            <td>${booking.customerName || '-'}</td>
            <td>${booking.roomNumber || '-'}</td>
            <td>${booking.checkIn || '-'}</td>
            <td>${booking.duration || '-'}</td>
            <td>${booking.amount ? booking.amount.toLocaleString() : '-'} บาท</td>
            <td><span class="status-badge status-${booking.status}">${getBookingStatusText(booking.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewBooking('${booking.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-warning" onclick="editBooking('${booking.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Load Issues
function loadIssues() {
    console.log('⚠️ Loading issues...');
    const container = document.getElementById('issuesGrid');
    if (!container) return;
    
    if (!issues || issues.length === 0) {
        container.innerHTML = '<div class="no-data">ไม่มีรายงานปัญหา</div>';
        return;
    }
    
    container.innerHTML = issues.map(issue => `
        <div class="issue-card urgency-${issue.urgency}">
            <div class="issue-header">
                <h4>${issue.title}</h4>
                <span class="urgency-badge urgency-${issue.urgency}">${getUrgencyText(issue.urgency)}</span>
            </div>
            <div class="issue-content">
                <p><strong>ห้อง:</strong> ${issue.roomNumber}</p>
                <p>${issue.description}</p>
                <p><strong>รายงานโดย:</strong> ${issue.reportedBy}</p>
                <p><strong>วันที่:</strong> ${new Date(issue.createdAt).toLocaleDateString('th-TH')}</p>
            </div>
            <div class="issue-actions">
                <span class="status-badge status-${issue.status}">${getIssueStatusText(issue.status)}</span>
                <button class="btn btn-sm btn-primary" onclick="resolveIssue('${issue.id}')">
                    <i class="fas fa-check"></i> แก้ไขแล้ว
                </button>
            </div>
        </div>
    `).join('');
}

// Load Contacts
function loadContacts() {
    console.log('📞 Loading contacts...');
    const tableBody = document.getElementById('contactsTableBody');
    if (!tableBody) return;
    
    if (!contacts || contacts.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" class="no-data">ไม่มีข้อความติดต่อ</td></tr>';
        return;
    }
    
    tableBody.innerHTML = contacts.map(contact => `
        <tr>
            <td>${new Date(contact.createdAt).toLocaleDateString('th-TH')}</td>
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${getRoomTypeText(contact.roomType)}</td>
            <td>${contact.message}</td>
            <td><span class="status-badge status-${contact.status}">${getContactStatusText(contact.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="replyContact('${contact.id}')">
                    <i class="fas fa-reply"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Helper Functions for Status Text
function getBookingStatusText(status) {
    const statusMap = {
        'pending': 'รอยืนยัน',
        'confirmed': 'ยืนยันแล้ว',
        'checked-in': 'เช็คอินแล้ว',
        'cancelled': 'ยกเลิก'
    };
    return statusMap[status] || status;
}

function getIssueStatusText(status) {
    const statusMap = {
        'pending': 'รอดำเนินการ',
        'in-progress': 'กำลังแก้ไข',
        'resolved': 'แก้ไขแล้ว'
    };
    return statusMap[status] || status;
}

function getUrgencyText(urgency) {
    const urgencyMap = {
        'urgent': 'เร่งด่วน',
        'normal': 'ปกติ',
        'low': 'ไม่เร่งด่วน'
    };
    return urgencyMap[urgency] || urgency;
}

function getContactStatusText(status) {
    const statusMap = {
        'new': 'ใหม่',
        'contacted': 'ติดต่อแล้ว',
        'completed': 'เสร็จสิ้น'
    };
    return statusMap[status] || status;
}

function getRoomTypeText(type) {
    const typeMap = {
        'fan': 'ห้องแฟน',
        'standard': 'ห้องสแตนดาร์ด',
        'deluxe': 'ห้องดีลักซ์',
        'studio': 'ห้องสตูดิโอ'
    };
    return typeMap[type] || type;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    .input-wrapper.focused {
        transform: translateY(-2px);
    }
    
    .input-wrapper.valid {
        border-color: #4ade80 !important;
    }
    
    .input-wrapper.invalid {
        border-color: #f87171 !important;
    }
`;
document.head.appendChild(style);

// ===== NAVIGATION FUNCTIONS =====

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar && mainContent) {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('sidebar-collapsed');
        
        // Save state to localStorage
        const isCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
        
        console.log('🔄 Sidebar toggled:', isCollapsed ? 'collapsed' : 'expanded');
    }
}

// ===== INITIALIZATION FUNCTIONS =====

// Initialize Default Data
function initializeDefaultData() {
    console.log('📊 Initializing default data...');
    
    try {
        // Initialize rooms if not exist
        if (!localStorage.getItem('rooms') || JSON.parse(localStorage.getItem('rooms')).length === 0) {
            localStorage.setItem('rooms', JSON.stringify(defaultRooms));
            console.log('✅ Default rooms data initialized');
        }
        
        // Initialize bookings if not exist
        if (!localStorage.getItem('bookings') || JSON.parse(localStorage.getItem('bookings')).length === 0) {
            localStorage.setItem('bookings', JSON.stringify(defaultBookings));
            console.log('✅ Default bookings data initialized');
        }
        
        // Initialize issues if not exist
        if (!localStorage.getItem('issues') || JSON.parse(localStorage.getItem('issues')).length === 0) {
            localStorage.setItem('issues', JSON.stringify(defaultIssues));
            console.log('✅ Default issues data initialized');
        }
        
        // Initialize contacts if not exist
        if (!localStorage.getItem('contacts') || JSON.parse(localStorage.getItem('contacts')).length === 0) {
            localStorage.setItem('contacts', JSON.stringify(defaultContacts));
            console.log('✅ Default contacts data initialized');
        }
        
        // Load data into global variables
        rooms = JSON.parse(localStorage.getItem('rooms')) || defaultRooms;
        bookings = JSON.parse(localStorage.getItem('bookings')) || defaultBookings;
        issues = JSON.parse(localStorage.getItem('issues')) || defaultIssues;
        contacts = JSON.parse(localStorage.getItem('contacts')) || defaultContacts;
        
        console.log('📊 All default data initialized successfully!');
        
    } catch (error) {
        console.error('❌ Error initializing default data:', error);
        
        // Fallback to default data
        rooms = defaultRooms;
        bookings = defaultBookings;
        issues = defaultIssues;
        contacts = defaultContacts;
    }
}

// Initialize Sidebar State
function initializeSidebar() {
    console.log('🔧 Initializing sidebar...');
    
    // Restore collapsed state
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState === 'true') {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (sidebar && mainContent) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('sidebar-collapsed');
        }
    }
    
    // Initialize navigation event listeners
    const navItems = document.querySelectorAll('.nav-item a');
    console.log(`🔗 Found ${navItems.length} navigation items`);
    
    navItems.forEach((item, index) => {
        // Remove existing event listeners
        item.removeEventListener('click', handleNavClick);
        
        // Add new event listener
        item.addEventListener('click', handleNavClick);
        
        console.log(`✅ Nav item ${index + 1} initialized:`, item.getAttribute('href'));
    });
    
    console.log('✅ Sidebar initialization completed');
}

// Handle Navigation Click
function handleNavClick(e) {
    e.preventDefault();
    
    const clickedItem = e.currentTarget;
    const sectionName = clickedItem.getAttribute('data-section') || clickedItem.getAttribute('href').replace('#', '');
    
    console.log(`🖱️ Navigation clicked: ${sectionName}`);
    
    // Update active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => nav.classList.remove('active'));
    clickedItem.parentElement.classList.add('active');
    
    // Show section
    showSection(sectionName);
}

// Filter Functions
function filterRooms() {
    console.log('🔍 Filtering rooms...');
    if (typeof loadRooms === 'function') {
        loadRooms();
    }
}

function filterBookings() {
    console.log('🔍 Filtering bookings...');
    if (typeof loadBookings === 'function') {
        loadBookings();
    }
}

function filterIssues() {
    console.log('🔍 Filtering issues...');
    if (typeof loadIssues === 'function') {
        loadIssues();
    }
}

// Booking Functions
function viewBooking(bookingId) {
    console.log('👁️ Viewing booking:', bookingId);
    showToast('ดูข้อมูลการจอง: ' + bookingId, 'info');
}

function editBooking(bookingId) {
    console.log('✏️ Editing booking:', bookingId);
    showToast('แก้ไขการจอง: ' + bookingId, 'info');
}

// Issue Functions
function resolveIssue(issueId) {
    console.log('✅ Resolving issue:', issueId);
    
    if (issues && Array.isArray(issues)) {
        const issueIndex = issues.findIndex(i => i.id === issueId);
        if (issueIndex !== -1) {
            issues[issueIndex].status = 'resolved';
            saveDataToStorage(STORAGE_KEYS.issues, issues);
            showToast('แก้ไขปัญหาเรียบร้อย', 'success');
            
            if (currentSection === 'issues') {
                loadIssues();
            }
        }
    }
}

// Contact Functions
function replyContact(contactId) {
    console.log('📞 Replying to contact:', contactId);
    showToast('ตอบกลับข้อความ: ' + contactId, 'info');
}

// AI Analytics Functions
function initializeAIAnalytics() {
    console.log('🤖 Initializing AI Analytics...');
    
    // Update AI metrics with random values for demo
    updateAIMetrics();
    
    // Refresh AI insights
    refreshAIInsights();
}

function updateAIMetrics() {
    const metrics = {
        chatInteractions: Math.floor(Math.random() * 500) + 100,
        chatSatisfaction: Math.floor(Math.random() * 20) + 80 + '%',
        avgResponseTime: (Math.random() * 2).toFixed(1) + 's',
        recommendationAccuracy: Math.floor(Math.random() * 20) + 75 + '%',
        conversionRate: Math.floor(Math.random() * 30) + 15 + '%',
        roomMatches: Math.floor(Math.random() * 500) + 200,
        occupancyPrediction: Math.floor(Math.random() * 30) + 65 + '%',
        revenueProjection: '+' + Math.floor(Math.random() * 20) + 5 + '%',
        maintenanceAlerts: Math.floor(Math.random() * 5) + 1,
        pageLoadTime: (Math.random() * 2 + 0.5).toFixed(1) + 's',
        errorRate: '0.0' + Math.floor(Math.random() * 9) + '%',
        uptime: '99.' + Math.floor(Math.random() * 9) + '%'
    };
    
    // Update elements
    Object.keys(metrics).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = metrics[key];
        }
    });
}

function refreshAIInsights() {
    console.log('🔄 Refreshing AI insights...');
    showToast('AI Insights อัปเดตแล้ว', 'success');
}

function updateChatAnalytics() {
    console.log('📊 Updating chat analytics...');
    showToast('Chat Analytics อัปเดตแล้ว', 'info');
}

// Storage Helper
function saveDataToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`💾 Saved ${key} to storage`);
    } catch (error) {
        console.error(`❌ Failed to save ${key}:`, error);
    }
}

// ===== ROOM MANAGEMENT FUNCTIONS =====

// Room Management Variables
let currentEditingRoom = null;
let roomImageFiles = [];
let currentImageIndex = 0;

// Open Add Room Modal
function openAddRoomModal() {
    currentEditingRoom = null;
    document.getElementById('roomModalTitle').textContent = 'เพิ่มห้องใหม่';
    document.getElementById('saveRoomBtn').innerHTML = '<i class="fas fa-save"></i> บันทึก';
    
    // Reset form
    document.getElementById('roomForm').reset();
    resetImagePreview();
    
    // Show modal
    document.getElementById('roomModal').classList.remove('hidden');
    
    // Focus on first input
    setTimeout(() => {
        document.getElementById('roomNumber').focus();
    }, 300);
    
    console.log('📝 Opening add room modal');
}

// Open Edit Room Modal
function openEditRoomModal(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (!room) {
        showToast('ไม่พบข้อมูลห้อง', 'error');
        return;
    }
    
    currentEditingRoom = room;
    document.getElementById('roomModalTitle').textContent = 'แก้ไขข้อมูลห้อง';
    document.getElementById('saveRoomBtn').innerHTML = '<i class="fas fa-save"></i> อัปเดต';
    
    // Fill form with room data
    fillRoomForm(room);
    
    // Show modal
    document.getElementById('roomModal').classList.remove('hidden');
    
    console.log('✏️ Opening edit room modal for room:', roomId);
}

// Fill Room Form
function fillRoomForm(room) {
    document.getElementById('roomNumber').value = room.number || '';
    document.getElementById('roomName').value = room.name || '';
    document.getElementById('roomType').value = room.type || '';
    document.getElementById('roomPrice').value = room.price || '';
    document.getElementById('roomSize').value = room.size || '';
    document.getElementById('roomFloor').value = room.floor || '';
    document.getElementById('roomStatus').value = room.status || 'available';
    document.getElementById('roomDescription').value = room.description || '';
    
    // Set amenities
    const amenityCheckboxes = document.querySelectorAll('input[name="amenities"]');
    amenityCheckboxes.forEach(checkbox => {
        checkbox.checked = room.amenities && room.amenities.includes(checkbox.value);
    });
    
    // Set image if exists
    if (room.image) {
        const previewImg = document.getElementById('previewImage');
        const placeholder = document.querySelector('.upload-placeholder');
        const removeBtn = document.getElementById('removeImageBtn');
        
        previewImg.src = room.image;
        previewImg.classList.remove('hidden');
        placeholder.style.display = 'none';
        removeBtn.style.display = 'inline-flex';
    } else {
        resetImagePreview();
    }
}

// Close Room Modal
function closeRoomModal() {
    document.getElementById('roomModal').classList.add('hidden');
    currentEditingRoom = null;
    resetImagePreview();
    console.log('❌ Room modal closed');
}

// Preview Room Image
function previewRoomImage(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            showToast('ขนาดไฟล์ใหญ่เกินไป (ไม่เกิน 5MB)', 'error');
            input.value = '';
            return;
        }
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
            showToast('กรุณาเลือกไฟล์รูปภาพ', 'error');
            input.value = '';
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewImg = document.getElementById('previewImage');
            const placeholder = document.querySelector('.upload-placeholder');
            const removeBtn = document.getElementById('removeImageBtn');
            
            previewImg.src = e.target.result;
            previewImg.classList.remove('hidden');
            placeholder.style.display = 'none';
            removeBtn.style.display = 'inline-flex';
        };
        reader.readAsDataURL(file);
        
        console.log('📷 Image selected:', file.name);
    }
}

// Remove Room Image
function removeRoomImage() {
    const previewImg = document.getElementById('previewImage');
    const placeholder = document.querySelector('.upload-placeholder');
    const removeBtn = document.getElementById('removeImageBtn');
    const fileInput = document.getElementById('roomImage');
    
    previewImg.src = '';
    previewImg.classList.add('hidden');
    placeholder.style.display = 'block';
    removeBtn.style.display = 'none';
    fileInput.value = '';
    
    console.log('🗑️ Room image removed');
}

// Reset Image Preview
function resetImagePreview() {
    const previewImg = document.getElementById('previewImage');
    const placeholder = document.querySelector('.upload-placeholder');
    const removeBtn = document.getElementById('removeImageBtn');
    const fileInput = document.getElementById('roomImage');
    
    if (previewImg) previewImg.classList.add('hidden');
    if (placeholder) placeholder.style.display = 'block';
    if (removeBtn) removeBtn.style.display = 'none';
    if (fileInput) fileInput.value = '';
}

// Save Room
function saveRoom() {
    const form = document.getElementById('roomForm');
    const formData = new FormData(form);
    
    // Validate required fields
    const roomNumber = formData.get('roomNumber').trim();
    const roomName = formData.get('roomName').trim();
    const roomType = formData.get('roomType');
    const roomPrice = formData.get('roomPrice');
    
    if (!roomNumber || !roomName || !roomType || !roomPrice) {
        showToast('กรุณากรอกข้อมูลที่จำเป็น (*)', 'error');
        return;
    }
    
    // Check for duplicate room number (except current editing room)
    const existingRoom = rooms.find(r => 
        r.number === roomNumber && 
        (!currentEditingRoom || r.id !== currentEditingRoom.id)
    );
    
    if (existingRoom) {
        showToast('หมายเลขห้องนี้มีอยู่แล้ว', 'error');
        return;
    }
    
    // Show loading
    const saveBtn = document.getElementById('saveRoomBtn');
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> กำลังบันทึก...';
    saveBtn.disabled = true;
    
    setTimeout(() => {
        try {
            // Get amenities
            const amenities = [];
            const amenityCheckboxes = document.querySelectorAll('input[name="amenities"]:checked');
            amenityCheckboxes.forEach(checkbox => {
                amenities.push(checkbox.value);
            });
            
            // Get image
            let imageUrl = '';
            const fileInput = document.getElementById('roomImage');
            const previewImg = document.getElementById('previewImage');
            
            if (fileInput.files && fileInput.files[0]) {
                // In real app, upload to server and get URL
                // For demo, use the preview image data URL
                imageUrl = previewImg.src;
            } else if (currentEditingRoom && currentEditingRoom.image) {
                // Keep existing image if no new image selected
                imageUrl = currentEditingRoom.image;
            }
            
            // Create room object
            const roomData = {
                id: currentEditingRoom ? currentEditingRoom.id : generateId(),
                number: roomNumber,
                name: roomName,
                type: roomType,
                price: parseInt(roomPrice),
                size: formData.get('roomSize') ? parseFloat(formData.get('roomSize')) : null,
                floor: formData.get('roomFloor') || null,
                status: formData.get('roomStatus'),
                description: formData.get('roomDescription').trim(),
                amenities: amenities,
                image: imageUrl,
                createdAt: currentEditingRoom ? currentEditingRoom.createdAt : new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            if (currentEditingRoom) {
                // Update existing room
                const index = rooms.findIndex(r => r.id === currentEditingRoom.id);
                if (index !== -1) {
                    rooms[index] = roomData;
                    console.log('✅ Room updated:', roomData);
                    showToast('อัปเดตข้อมูลห้องสำเร็จ', 'success');
                }
            } else {
                // Add new room
                rooms.unshift(roomData);
                console.log('✅ Room added:', roomData);
                showToast('เพิ่มห้องใหม่สำเร็จ', 'success');
            }
            
            // Save to localStorage
            saveDataToStorage(STORAGE_KEYS.rooms, rooms);
            
            // Update UI
            if (currentSection === 'rooms') {
                loadRooms();
            }
            
            // Close modal
            closeRoomModal();
            
        } catch (error) {
            console.error('❌ Error saving room:', error);
            showToast('เกิดข้อผิดพลาดในการบันทึก', 'error');
        } finally {
            // Reset button
            saveBtn.innerHTML = originalText;
            saveBtn.disabled = false;
        }
    }, 1500);
}

// Delete Room
function deleteRoom(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (!room) {
        showToast('ไม่พบข้อมูลห้อง', 'error');
        return;
    }
    
    // Confirm deletion
    if (!confirm(`ต้องการลบห้อง ${room.number} - ${room.name} หรือไม่?`)) {
        return;
    }
    
    try {
        // Remove from array
        const index = rooms.findIndex(r => r.id === roomId);
        if (index !== -1) {
            rooms.splice(index, 1);
            
            // Save to localStorage
            saveDataToStorage(STORAGE_KEYS.rooms, rooms);
            
            // Update UI
            if (currentSection === 'rooms') {
                loadRooms();
            }
            
            console.log('🗑️ Room deleted:', roomId);
            showToast('ลบห้องสำเร็จ', 'success');
        }
    } catch (error) {
        console.error('❌ Error deleting room:', error);
        showToast('เกิดข้อผิดพลาดในการลบ', 'error');
    }
}

// Load Rooms
function loadRooms() {
    const container = document.getElementById('roomsGrid');
    if (!container) return;
    
    // Show loading
    container.innerHTML = `
        <div class="loading-card">
            <i class="fas fa-spinner fa-spin fa-2x"></i>
            <p>กำลังโหลดข้อมูลห้อง...</p>
        </div>
    `;
    
    setTimeout(() => {
        if (rooms.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-bed fa-3x"></i>
                    <h3>ยังไม่มีข้อมูลห้อง</h3>
                    <p>เริ่มต้นโดยการเพิ่มห้องใหม่</p>
                    <button class="btn btn-primary" onclick="openAddRoomModal()">
                        <i class="fas fa-plus"></i> เพิ่มห้องแรก
                    </button>
                </div>
            `;
            return;
        }
        
        // Filter rooms
        const filteredRooms = getFilteredRooms();
        
        if (filteredRooms.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search fa-2x"></i>
                    <h3>ไม่พบห้องที่ตรงตามเงื่อนไข</h3>
                    <p>ลองเปลี่ยนตัวกรองหรือเพิ่มห้องใหม่</p>
                </div>
            `;
            return;
        }
        
        // Render rooms
        container.innerHTML = filteredRooms.map(room => `
            <div class="room-card" data-room-id="${room.id}">
                <div class="room-image">
                    ${room.image ? 
                        `<img src="${room.image}" alt="${room.name}" onclick="viewRoomImage('${room.id}')">` :
                        `<div class="no-image">
                            <i class="fas fa-camera"></i>
                            <p>ไม่มีรูปภาพ</p>
                        </div>`
                    }
                    <div class="room-status-badge status-${room.status}">
                        ${getStatusText(room.status)}
                    </div>
                </div>
                <div class="room-details">
                    <div class="room-header">
                        <div class="room-number">${room.number}</div>
                        <div class="room-price">${room.price?.toLocaleString()} ฿</div>
                    </div>
                    <div class="room-name">${room.name}</div>
                    <div class="room-type">${getTypeText(room.type)}</div>
                    
                    <div class="room-info">
                        ${room.size ? `<span><i class="fas fa-ruler"></i> ${room.size} ตร.ม.</span>` : ''}
                        ${room.floor ? `<span><i class="fas fa-building"></i> ชั้น ${room.floor}</span>` : ''}
                    </div>
                    
                    ${room.amenities && room.amenities.length > 0 ? `
                        <div class="room-amenities">
                            ${room.amenities.slice(0, 4).map(amenity => `
                                <div class="amenity-tag">
                                    <i class="${getAmenityIcon(amenity)}"></i>
                                    ${getAmenityText(amenity)}
                                </div>
                            `).join('')}
                            ${room.amenities.length > 4 ? `<div class="amenity-tag">+${room.amenities.length - 4}</div>` : ''}
                        </div>
                    ` : ''}
                    
                    <div class="room-actions">
                        <button class="btn btn-view" onclick="viewRoom('${room.id}')" title="ดูรายละเอียด">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-edit" onclick="openEditRoomModal('${room.id}')" title="แก้ไข">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-delete" onclick="deleteRoom('${room.id}')" title="ลบ">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        console.log(`📋 Loaded ${filteredRooms.length} rooms`);
    }, 800);
}

// Get Filtered Rooms
function getFilteredRooms() {
    const statusFilter = document.getElementById('roomStatusFilter')?.value || '';
    const typeFilter = document.getElementById('roomTypeFilter')?.value || '';
    
    return rooms.filter(room => {
        const statusMatch = !statusFilter || room.status === statusFilter;
        const typeMatch = !typeFilter || room.type === typeFilter;
        return statusMatch && typeMatch;
    });
}

// View Room Details
function viewRoom(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (!room) {
        showToast('ไม่พบข้อมูลห้อง', 'error');
        return;
    }
    
    // Create detailed view modal (simplified for demo)
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>รายละเอียดห้อง ${room.number}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${room.image ? `<img src="${room.image}" style="width: 100%; border-radius: 8px; margin-bottom: 15px;">` : ''}
                <h4>${room.name}</h4>
                <p><strong>ประเภท:</strong> ${getTypeText(room.type)}</p>
                <p><strong>ราคา:</strong> ${room.price?.toLocaleString()} บาท/เดือน</p>
                <p><strong>สถานะ:</strong> ${getStatusText(room.status)}</p>
                ${room.size ? `<p><strong>ขนาด:</strong> ${room.size} ตร.ม.</p>` : ''}
                ${room.floor ? `<p><strong>ชั้น:</strong> ${room.floor}</p>` : ''}
                ${room.description ? `<p><strong>รายละเอียด:</strong> ${room.description}</p>` : ''}
                ${room.amenities && room.amenities.length > 0 ? `
                    <p><strong>สิ่งอำนวยความสะดวก:</strong></p>
                    <ul>
                        ${room.amenities.map(amenity => `<li>${getAmenityText(amenity)}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    console.log('👁️ Viewing room details:', roomId);
}

// View Room Image
function viewRoomImage(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (!room || !room.image) {
        showToast('ไม่พบรูปภาพห้อง', 'error');
        return;
    }
    
    // Show image in gallery modal
    const galleryModal = document.getElementById('imageGalleryModal');
    const galleryImage = document.getElementById('galleryImage');
    
    galleryImage.src = room.image;
    galleryModal.classList.remove('hidden');
    
    console.log('🖼️ Viewing room image:', roomId);
}

// Close Image Gallery
function closeImageGallery() {
    document.getElementById('imageGalleryModal').classList.add('hidden');
}

// Navigation functions for gallery (if multiple images)
function previousImage() {
    // Implementation for multiple images
    console.log('⬅️ Previous image');
}

function nextImage() {
    // Implementation for multiple images
    console.log('➡️ Next image');
}

// Generate ID
function generateId() {
    return 'room_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Update showSection to handle rooms
const originalShowSectionForRooms = showSection;
showSection = function(sectionName) {
    originalShowSectionForRooms(sectionName);
    
    if (sectionName === 'rooms') {
        setTimeout(() => {
            loadRooms();
        }, 300);
    } else if (sectionName === 'ai-analytics') {
        setTimeout(() => {
            initializeAIAnalytics();
        }, 300);
    }
};

console.log('🏠 Room Management module loaded successfully!');

// ===== DOCUMENT READY INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Content Loaded - Initializing Admin Panel...');
    
    try {
        // Initialize all systems
        initializeSidebar();
        initializeDefaultData();
        
        // Load default section (dashboard)
        showSection('dashboard');
        
        console.log('✅ Admin Panel initialized successfully!');
        
    } catch (error) {
        console.error('❌ Error initializing Admin Panel:', error);
    }
});

// Backup initialization for when DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    // DOMContentLoaded has not fired yet
    console.log('📄 Waiting for DOM to load...');
} else {
    // DOMContentLoaded has already fired
    console.log('📄 DOM already loaded - Initializing immediately...');
    
    setTimeout(() => {
        try {
            initializeSidebar();
            initializeDefaultData();
            showSection('dashboard');
            console.log('✅ Admin Panel initialized successfully (immediate)!');
        } catch (error) {
            console.error('❌ Error in immediate initialization:', error);
        }
    }, 100);
}

// Window load fallback
window.addEventListener('load', function() {
    console.log('🌐 Window loaded - Force reinitialize navigation...');
    setTimeout(() => {
        try {
            forceReinitializeNavigation();
        } catch (error) {
            console.error('❌ Error in window load initialization:', error);
        }
    }, 200);
});

// Force reinitialize navigation
function forceReinitializeNavigation() {
    console.log('🔧 Force reinitializing navigation...');
    
    const navItems = document.querySelectorAll('.sidebar-nav a');
    console.log(`🔗 Found ${navItems.length} navigation items for force init`);
    
    navItems.forEach((item, index) => {
        // Remove ALL existing event listeners
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        // Add fresh event listener
        newItem.addEventListener('click', handleNavClick);
        
        console.log(`✅ Force reinit nav item ${index + 1}:`, newItem.getAttribute('data-section') || newItem.getAttribute('href'));
    });
    
    console.log('✅ Force navigation reinitialization completed');
}
