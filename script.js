// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Global variables for enhanced functionality
let currentTrackingType = '';
let notificationTimeout = {};

// Notification System
function showNotification(title, message, type = 'info', duration = 5000) {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="notification-text">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        </div>
        <button class="notification-close" onclick="removeNotification(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after duration
    notificationTimeout[notification] = setTimeout(() => {
        removeNotification(notification.querySelector('.notification-close'));
    }, duration);
    
    return notification;
}

function removeNotification(closeBtn) {
    const notification = closeBtn.closest('.notification');
    if (notificationTimeout[notification]) {
        clearTimeout(notificationTimeout[notification]);
        delete notificationTimeout[notification];
    }
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Loading System
function showLoading(message = 'กำลังประมวลผล...') {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        const spinner = overlay.querySelector('.loading-spinner p');
        if (spinner) {
            spinner.textContent = message;
        }
        overlay.style.display = 'flex';
        overlay.style.visibility = 'visible';
        overlay.classList.remove('hidden');
    }
}

function hideLoading() {
    try {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.style.display = 'none';
            overlay.style.visibility = 'hidden';
            overlay.classList.add('hidden');
        }
    } catch (error) {
        console.error('Error hiding loading overlay:', error);
    }
}

// Success Modal System
function showSuccessModal(title, message, showTrackButton = false, trackingId = null) {
    const modal = document.getElementById('successModal');
    const titleEl = document.getElementById('successTitle');
    const messageEl = document.getElementById('successMessage');
    const trackBtn = document.getElementById('trackStatusBtn');
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    if (showTrackButton && trackingId) {
        trackBtn.classList.remove('hidden');
        trackBtn.onclick = () => {
            closeSuccessModal();
            showTrackingModal('auto');
            document.getElementById('trackingId').value = trackingId;
        };
    } else {
        trackBtn.classList.add('hidden');
    }
    
    modal.style.display = 'block';
}

function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Rooms Widget System
function updateRoomsWidget() {
    // Get room data from localStorage or set defaults
    const rooms = JSON.parse(localStorage.getItem('rooms')) || [
        { id: 1, type: 'แฟน', price: 3500, available: true },
        { id: 2, type: 'สแตนดาร์ด', price: 4500, available: true },
        { id: 3, type: 'ดีลักซ์', price: 5500, available: false },
        { id: 4, type: 'สตูดิโอ', price: 7000, available: true }
    ];
    
    const availableCount = rooms.filter(room => room.available).length;
    const totalCount = rooms.length;
    
    document.getElementById('availableRooms').textContent = availableCount;
    document.getElementById('totalRooms').textContent = totalCount;
}

function toggleRoomsWidget() {
    const widget = document.getElementById('roomsWidget');
    const icon = widget.querySelector('.minimize-btn i');
    
    widget.classList.toggle('minimized');
    icon.className = widget.classList.contains('minimized') ? 
        'fas fa-plus' : 'fas fa-minus';
}

function scrollToRooms() {
    document.getElementById('rooms').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function showAvailableRooms() {
    const rooms = JSON.parse(localStorage.getItem('rooms')) || [];
    const availableRooms = rooms.filter(room => room.available);
    
    if (availableRooms.length === 0) {
        showNotification('ไม่มีห้องว่าง', 'ขณะนี้ไม่มีห้องว่างให้เช่า', 'warning');
        return;
    }
    
    const roomsList = availableRooms.map(room => 
        `• ห้อง${room.type} - ฿${room.price.toLocaleString()}/เดือน`
    ).join('\n');
    
    showNotification(
        'ห้องว่างที่มีอยู่', 
        roomsList, 
        'info', 
        8000
    );
}

// Enhanced Status Tracking System
function showTrackingModal(type) {
    currentTrackingType = type;
    const modal = document.getElementById('trackingModal');
    const title = document.getElementById('trackingModalTitle');
    
    const titles = {
        booking: 'ติดตามการจอง',
        issue: 'ติดตามการแจ้งซ่อม', 
        contact: 'ติดตามข้อความติดต่อ',
        auto: 'ติดตามสถานะ'
    };
    
    title.textContent = titles[type] || 'ติดตามสถานะ';
    
    // Reset form and result
    document.getElementById('trackingId').value = '';
    document.getElementById('trackingPhone').value = '';
    document.getElementById('statusResult').classList.add('hidden');
    
    modal.style.display = 'block';
}

function closeTrackingModal() {
    document.getElementById('trackingModal').style.display = 'none';
}

function searchStatus() {
    const trackingId = document.getElementById('trackingId').value.trim();
    const phone = document.getElementById('trackingPhone').value.trim();
    
    if (!trackingId || !phone) {
        showNotification('ข้อมูลไม่ครบ', 'กรุณากรอกรหัสติดตามและเบอร์โทรศัพท์', 'error');
        return;
    }
    
    showLoading('กำลังค้นหาข้อมูล...');
    
    // Simulate API call
    setTimeout(() => {
        hideLoading();
        
        // Mock data lookup
        const mockData = getMockStatusData(trackingId, currentTrackingType);
        
        if (mockData) {
            displayStatusResult(mockData);
        } else {
            showNotification(
                'ไม่พบข้อมูล', 
                'ไม่พบข้อมูลที่ตรงกับรหัสและเบอร์โทรที่กรอก', 
                'error'
            );
        }
    }, 1500);
}

function getMockStatusData(trackingId, type) {
    // Mock database
    const mockDatabase = {
        'BK-20250115-001': {
            type: 'booking',
            title: 'สถานะการจอง',
            status: 'กำลังตรวจสอบ',
            name: 'คุณสมชาย ใจดี',
            description: 'ห้องสแตนดาร์ด - เช่า 6 เดือน',
            note: 'เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชั่วโมง',
            submitTime: '15 ม.ค. 2025 - 14:30',
            steps: [
                { status: 'completed', title: 'ส่งคำขอ', time: '15 ม.ค. 2025 - 14:30' },
                { status: 'active', title: 'กำลังตรวจสอบ', time: 'รอการดำเนินการ' },
                { status: 'pending', title: 'ติดต่อยืนยัน', time: 'รอการดำเนินการ' },
                { status: 'pending', title: 'เสร็จสิ้น', time: 'รอการดำเนินการ' }
            ]
        },
        'IS-20250115-002': {
            type: 'issue',
            title: 'สถานะการแจ้งซ่อม',
            status: 'กำลังดำเนินการ',
            name: 'คุณปัทมา สวยงาม',
            description: 'ปัญหาแอร์ไม่เย็น - ห้อง A205',
            note: 'ช่างจะเข้าดำเนินการภายในวันนี้',
            submitTime: '15 ม.ค. 2025 - 09:15',
            steps: [
                { status: 'completed', title: 'รับเรื่อง', time: '15 ม.ค. 2025 - 09:15' },
                { status: 'completed', title: 'ประเมินปัญหา', time: '15 ม.ค. 2025 - 10:30' },
                { status: 'active', title: 'กำลังดำเนินการ', time: 'ช่างกำลังซ่อม' },
                { status: 'pending', title: 'เสร็จสิ้น', time: 'รอการดำเนินการ' }
            ]
        },
        'CT-20250115-003': {
            type: 'contact',
            title: 'สถานะข้อความติดต่อ',
            status: 'ตอบกลับแล้ว',
            name: 'คุณธนากร ดีมาก',
            description: 'สอบถามราคาห้องและสิ่งอำนวยความสะดวก',
            note: 'ได้ส่งข้อมูลและราคาไปยังอีเมลแล้ว',
            submitTime: '14 ม.ค. 2025 - 16:45',
            steps: [
                { status: 'completed', title: 'รับข้อความ', time: '14 ม.ค. 2025 - 16:45' },
                { status: 'completed', title: 'ประมวลผล', time: '14 ม.ค. 2025 - 17:00' },
                { status: 'completed', title: 'ส่งตอบกลับ', time: '14 ม.ค. 2025 - 17:30' },
                { status: 'completed', title: 'เสร็จสิ้น', time: '14 ม.ค. 2025 - 17:30' }
            ]
        }
    };
    
    return mockDatabase[trackingId] || null;
}

function displayStatusResult(data) {
    const resultDiv = document.getElementById('statusResult');
    const statusTitle = document.getElementById('statusTitle');
    const statusBadge = document.getElementById('statusBadge');
    const statusType = document.getElementById('statusType');
    const statusCode = document.getElementById('statusCode');
    const statusName = document.getElementById('statusName');
    const statusDescription = document.getElementById('statusDescription');
    const statusNote = document.getElementById('statusNote');
    const submitTime = document.getElementById('submitTime');
    
    // Update header
    statusTitle.textContent = data.title;
    statusBadge.textContent = data.status;
    statusBadge.className = 'status-badge';
    
    // Update details
    statusType.textContent = getTypeDisplay(data.type);
    statusCode.textContent = document.getElementById('trackingId').value;
    statusName.textContent = data.name;
    statusDescription.textContent = data.description;
    statusNote.textContent = data.note;
    submitTime.textContent = data.submitTime;
    
    // Update timeline
    updateTimeline(data.steps);
    
    resultDiv.classList.remove('hidden');
}

function getTypeDisplay(type) {
    const types = {
        booking: 'การจองห้อง',
        issue: 'การแจ้งซ่อม',
        contact: 'ข้อความติดต่อ'
    };
    return types[type] || 'ไม่ระบุ';
}

function updateTimeline(steps) {
    const timeline = document.querySelector('.status-timeline');
    timeline.innerHTML = '';
    
    steps.forEach((step, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${step.status}`;
        
        item.innerHTML = `
            <div class="timeline-icon">
                <i class="fas ${getStepIcon(step.status)}"></i>
            </div>
            <div class="timeline-content">
                <h4>${step.title}</h4>
                <p>${step.time}</p>
            </div>
        `;
        
        timeline.appendChild(item);
    });
}

function getStepIcon(status) {
    const icons = {
        completed: 'fa-check',
        active: 'fa-clock',
        pending: 'fa-circle'
    };
    return icons[status] || 'fa-circle';
}

function printStatus() {
    window.print();
}

function contactSupport() {
    window.open('tel:0896288668');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .room-card, .about-text, .contact-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Enhanced Contact form handling with notification system
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const roomType = formData.get('roomType');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !phone || !roomType) {
        showNotification('ข้อมูลไม่ครบ', 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน', 'error');
        return;
    }
    
    // Phone number validation (Thai format)
    const phoneRegex = /^[0-9]{9,10}$/;
    if (!phoneRegex.test(phone.replace(/[-\s]/g, ''))) {
        showNotification('เบอร์โทรไม่ถูกต้อง', 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง', 'error');
        return;
    }
    
    // Email validation (if provided)
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('อีเมลไม่ถูกต้อง', 'กรุณากรอกอีเมลให้ถูกต้อง', 'error');
            return;
        }
    }
    
    showLoading('กำลังส่งข้อความ...');
    
    // Simulate API call
    setTimeout(() => {
        hideLoading();
        
        // Generate tracking ID
        const trackingId = generateTrackingId('CT');
        
        // Store contact data
        const contactData = {
            id: trackingId,
            name,
            phone,
            email,
            roomType,
            message,
            timestamp: new Date().toISOString(),
            status: 'รอการตอบกลับ'
        };
        
        // Save to localStorage (simulate database)
        saveContactData(contactData);
        
        // Reset form
        contactForm.reset();
        
        // Show success message with tracking option
        showSuccessModal(
            'ส่งข้อความสำเร็จ!', 
            `ขอบคุณคุณ${name}! เราจะติดต่อกลับภายใน 24 ชั่วโมง`,
            true,
            trackingId
        );
        
        showNotification(
            'ส่งข้อความแล้ว', 
            `รหัสติดตาม: ${trackingId}`, 
            'success'
        );
        
    }, 1500);
});

// Enhanced Issue Report form handling
const issueForm = document.getElementById('issueForm');
if (issueForm) {
    issueForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const reporterName = formData.get('issueReporterName');
        const phone = formData.get('issuePhone');
        const roomNumber = formData.get('roomNumber');
        const issueType = formData.get('issueType');
        const urgency = formData.get('issueUrgency');
        const description = formData.get('issueDescription');
        const preferredTime = formData.get('preferredTime');
        
        // Validation
        if (!reporterName || !phone || !roomNumber || !issueType || !urgency || !description) {
            showNotification('ข้อมูลไม่ครบ', 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน', 'error');
            return;
        }
        
        // Phone validation
        const phoneRegex = /^[0-9]{9,10}$/;
        if (!phoneRegex.test(phone.replace(/[-\s]/g, ''))) {
            showNotification('เบอร์โทรไม่ถูกต้อง', 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง', 'error');
            return;
        }
        
        showLoading('กำลังส่งรายงานปัญหา...');
        
        setTimeout(() => {
            hideLoading();
            
            // Generate tracking ID
            const trackingId = generateTrackingId('IS');
            
            // Store issue data
            const issueData = {
                id: trackingId,
                reporterName,
                phone,
                roomNumber,
                type: issueType,
                urgency,
                description,
                preferredTime,
                timestamp: new Date().toISOString(),
                status: urgency === 'urgent' ? 'รอดำเนินการด่วน' : 'รอดำเนินการ'
            };
            
            saveIssueData(issueData);
            
            // Reset form
            issueForm.reset();
            
            // Show success
            const urgencyText = urgency === 'urgent' ? ' (เร่งด่วน - จะได้รับการติดต่อภายใน 2 ชั่วโมง)' : '';
            showSuccessModal(
                'แจ้งปัญหาสำเร็จ!',
                `เรารับทราบปัญหาของคุณแล้ว${urgencyText}`,
                true,
                trackingId
            );
            
            showNotification(
                'แจ้งปัญหาแล้ว',
                `รหัสติดตาม: ${trackingId}`,
                'success'
            );
            
        }, 1500);
    });
}

// Enhanced Booking form submission
function handleBookingSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('bookingForm');
    const formData = new FormData(form);
    
    // Get form values
    const bookingData = {
        roomType: selectedRoom,
        monthlyPrice: selectedPrice,
        customerName: formData.get('customerName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        idCard: formData.get('idCard'),
        moveInDate: formData.get('moveInDate'),
        duration: parseInt(formData.get('duration')),
        totalPrice: updateTotalPrice(),
        specialRequests: formData.get('specialRequests'),
        timestamp: new Date().toISOString()
    };
    
    // Validation
    if (!validateBookingForm(bookingData)) {
        return;
    }
    
    // Store booking data
    currentBookingData = bookingData;
    
    // Show confirmation
    showBookingConfirmation(bookingData);
}

// Show booking confirmation
function showBookingConfirmation(data) {
    const confirmationMessage = `
ยืนยันการจอง:
• ห้อง: ${data.roomType}
• ผู้จอง: ${data.customerName}
• ระยะเวลา: ${data.duration} เดือน
• ราคารวม: ฿${data.totalPrice.toLocaleString()}
• วันที่เข้าพัก: ${formatDate(data.moveInDate)}

ยืนยันการจองหรือไม่?`;

    if (confirm(confirmationMessage)) {
        submitBooking(data);
    }
}

// Submit booking
function submitBooking(data) {
    showLoading('กำลังส่งข้อมูลการจอง...');
    
    setTimeout(() => {
        hideLoading();
        
        // Generate tracking ID
        const trackingId = generateTrackingId('BK');
        
        // Add tracking ID to data
        data.id = trackingId;
        data.status = 'รอการยืนยัน';
        
        // Save booking data
        saveBookingData(data);
        
        // Close modal
        closeBookingModal();
        
        // Show success
        showSuccessModal(
            'จองห้องสำเร็จ!',
            `เรารับข้อมูลการจองของคุณแล้ว เจ้าหน้าที่จะติดต่อยืนยันภายใน 24 ชั่วโมง`,
            true,
            trackingId
        );
        
        showNotification(
            'จองห้องแล้ว',
            `รหัสติดตาม: ${trackingId}`,
            'success'
        );
        
    }, 2000);
}

// Data Storage Functions
function saveContactData(data) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(data);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function saveIssueData(data) {
    const issues = JSON.parse(localStorage.getItem('issues')) || [];
    issues.push(data);
    localStorage.setItem('issues', JSON.stringify(issues));
}

function saveBookingData(data) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(data);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Utility Functions
function generateTrackingId(prefix) {
    const date = new Date();
    const dateStr = date.getFullYear().toString() + 
                   (date.getMonth() + 1).toString().padStart(2, '0') + 
                   date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${dateStr}-${random}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading overlay immediately and ensure it's hidden
    hideLoading();
    
    // Force hide loading overlay in case of any conflicts
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        overlay.style.visibility = 'hidden';
    }
    
    // Initialize rooms widget
    updateRoomsWidget();
    
    // Initialize form handlers
    const durationSelect = document.getElementById('duration');
    if (durationSelect) {
        durationSelect.addEventListener('change', updateTotalPrice);
    }
    
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Initialize ID card formatting
    const idCardInput = document.getElementById('idCard');
    if (idCardInput) {
        idCardInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 13) value = value.substring(0, 13);
            
            // Format: X-XXXX-XXXXX-XX-X
            if (value.length >= 1) {
                let formatted = value.substring(0, 1);
                if (value.length >= 5) formatted += '-' + value.substring(1, 5);
                if (value.length >= 10) formatted += '-' + value.substring(5, 10);
                if (value.length >= 12) formatted += '-' + value.substring(10, 12);
                if (value.length >= 13) formatted += '-' + value.substring(12, 13);
                this.value = formatted;
            }
        });
    }
    
    // Initialize move-in date (minimum today)
    const moveInDateInput = document.getElementById('moveInDate');
    if (moveInDateInput) {
        const today = new Date().toISOString().split('T')[0];
        moveInDateInput.min = today;
    }
    
    // Initialize animations and other features
    initializeAnimations();
});

// Also hide loading on window load
window.addEventListener('load', function() {
    hideLoading();
    
    // Extra protection: force hide loading overlay
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        overlay.style.visibility = 'hidden';
        overlay.classList.add('hidden');
    }
    
    console.log('✅ เว็บไซต์โหลดเสร็จสิ้น - Loading overlay ถูกซ่อนแล้ว');
});

function initializeAnimations() {
    // Add fade-in class to elements and observe them
    const elementsToAnimate = document.querySelectorAll('.feature-card, .room-card, .about-text, .contact-item, .review-card, .stat-item, .tracking-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Add hover effects
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Room detail modal (simple implementation)
document.querySelectorAll('.room-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const roomCard = this.closest('.room-card');
        const roomTitle = roomCard.querySelector('h3').textContent;
        const roomPrice = roomCard.querySelector('.room-price').textContent;
        
        // Create room type mapping
        const roomTypeMap = {
            'ห้องแฟน': 'fan',
            'ห้องสแตนดาร์ด': 'standard',
            'ห้องดีลักซ์': 'deluxe',
            'ห้องสตูดิโอ': 'studio'
        };
        
        // Scroll to contact form and pre-fill room type
        const contactSection = document.getElementById('contact');
        const roomTypeSelect = document.getElementById('roomType');
        
        roomTypeSelect.value = roomTypeMap[roomTitle] || '';
        
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Highlight the form briefly
        const contactForm = document.querySelector('.contact-form');
        contactForm.style.transform = 'scale(1.02)';
        contactForm.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            contactForm.style.transform = 'scale(1)';
        }, 300);
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to room cards
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add loading screen (optional)
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Add scroll to top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        if (window.scrollY > 500) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Utility function for formatting phone numbers
const formatPhoneNumber = (input) => {
    const phone = input.value.replace(/\D/g, '');
    if (phone.length >= 3 && phone.length <= 6) {
        input.value = phone.replace(/(\d{3})(\d+)/, '$1-$2');
    } else if (phone.length >= 7) {
        input.value = phone.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3');
    } else {
        input.value = phone;
    }
};

// Apply phone formatting to phone input
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', () => formatPhoneNumber(phoneInput));
}

// Add confirmation for external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!confirm('คุณต้องการไปยังเว็บไซต์ภายนอกหรือไม่?')) {
            e.preventDefault();
        }
    });
});

console.log('🏠 บ้านเช่า มินิม่า - Website loaded successfully!');

// ===== BOOKING SYSTEM =====

// Booking modal variables
let selectedRoom = '';
let selectedPrice = 0;
let currentBookingData = {};

// Open booking modal
function openBookingModal(roomType, price) {
    selectedRoom = roomType;
    selectedPrice = parseInt(price);
    
    const modal = document.getElementById('bookingModal');
    const modalTitle = document.getElementById('modalRoomType');
    const modalPrice = document.getElementById('modalRoomPrice');
    
    // Update modal content
    modalTitle.textContent = roomType;
    modalPrice.textContent = `${price} บาท/เดือน`;
    
    // Reset form
    document.getElementById('bookingForm').reset();
    
    // Clear total calculation
    updateTotalPrice();
    
    // Show modal
    modal.style.display = 'block';
    
    // Add animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Close booking modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Add closing animation
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        modalContent.style.transform = 'scale(0.9)';
        modalContent.style.opacity = '0';
    }, 300);
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeBookingModal();
    }
});

// Calculate total price
function updateTotalPrice() {
    const duration = document.getElementById('duration').value || 1;
    const deposit = selectedPrice; // หลักประกัน 1 เดือน
    const rentTotal = selectedPrice * parseInt(duration);
    const total = rentTotal + deposit;
    
    // Update price display
    document.getElementById('monthlyPrice').textContent = selectedPrice.toLocaleString();
    document.getElementById('durationText').textContent = `${duration} เดือน`;
    document.getElementById('rentTotal').textContent = `฿${rentTotal.toLocaleString()}`;
    document.getElementById('totalPrice').textContent = total.toLocaleString();
    document.getElementById('depositAmount').textContent = selectedPrice.toLocaleString();
    
    return total;
}

// Handle duration change
document.addEventListener('DOMContentLoaded', function() {
    const durationSelect = document.getElementById('duration');
    if (durationSelect) {
        durationSelect.addEventListener('change', updateTotalPrice);
    }
});

// Handle booking form submission
function handleBookingSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('bookingForm');
    const formData = new FormData(form);
    
    // Get form values
    const bookingData = {
        roomType: selectedRoom,
        monthlyPrice: selectedPrice,
        customerName: formData.get('customerName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        idCard: formData.get('idCard'),
        moveInDate: formData.get('moveInDate'),
        duration: parseInt(formData.get('duration')),
        totalPrice: updateTotalPrice(),
        specialRequests: formData.get('specialRequests'),
        timestamp: new Date().toISOString()
    };
    
    // Validation
    if (!validateBookingForm(bookingData)) {
        return;
    }
    
    // Store booking data
    currentBookingData = bookingData;
    
    // Show confirmation
    showBookingConfirmation(bookingData);
}

// Validate booking form
function validateBookingForm(data) {
    // Required fields
    if (!data.customerName || !data.phone || !data.idCard || !data.moveInDate) {
        alert('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน (ชื่อ-นามสกุล, เบอร์โทร, เลขบัตรประชาชน, วันที่เข้าพัก)');
        return false;
    }
    
    // Phone validation
    const phoneRegex = /^[0-9]{9,10}$/;
    if (!phoneRegex.test(data.phone.replace(/[-\s]/g, ''))) {
        alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (9-10 หลัก)');
        return false;
    }
    
    // Email validation (if provided)
    if (data.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('กรุณากรอกอีเมลให้ถูกต้อง');
            return false;
        }
    }
    
    // ID Card validation
    if (data.idCard.length !== 13 || !/^\d+$/.test(data.idCard)) {
        alert('กรุณากรอกเลขบัตรประชาชน 13 หลัก');
        return false;
    }
    
    // Move-in date validation
    const moveInDate = new Date(data.moveInDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (moveInDate < today) {
        alert('วันที่เข้าพักต้องไม่เป็นวันที่ผ่านมาแล้ว');
        return false;
    }
    
    return true;
}

// Show booking confirmation
function showBookingConfirmation(data) {
    const confirmMessage = `
🏠 ยืนยันการจองห้อง

ประเภทห้อง: ${data.roomType}
ราคา: ${data.monthlyPrice.toLocaleString()} บาท/เดือน
ระยะเวลา: ${data.duration} เดือน
วันที่เข้าพัก: ${new Date(data.moveInDate).toLocaleDateString('th-TH')}

ชื่อผู้จอง: ${data.customerName}
เบอร์โทร: ${data.phone}
${data.email ? `อีเมล: ${data.email}` : ''}

ค่าเช่ารวม: ${(data.monthlyPrice * data.duration).toLocaleString()} บาท
ค่าประกัน: ${data.monthlyPrice.toLocaleString()} บาท
รวมทั้งหมด: ${data.totalPrice.toLocaleString()} บาท

คุณต้องการยืนยันการจองหรือไม่?
    `;
    
    if (confirm(confirmMessage)) {
        submitBooking(data);
    }
}

// Submit booking
function submitBooking(data) {
    const submitBtn = document.querySelector('#bookingForm .submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'กำลังดำเนินการ...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Success
        alert(`
✅ จองห้องสำเร็จ!

ขอบคุณคุณ${data.customerName} ที่เลือกใช้บริการ
หมายเลขการจอง: BK${Date.now()}

เราจะติดต่อกลับภายใน 2 ชั่วโมง
เพื่อยืนยันรายละเอียดและนัดหมายชำระเงิน

📞 สอบถามเพิ่มเติม: 087-123-4567
        `);
        
        // Log booking data (in real app, send to server)
        console.log('Booking submitted:', data);
        
        // Reset form and close modal
        document.getElementById('bookingForm').reset();
        closeBookingModal();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Scroll to contact section
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
        
    }, 2000);
}

// ===== AI CHATBOT FUNCTIONS =====

let chatbotVisible = false;
let deferredPrompt;

// Toggle Chatbot
function toggleChatbot() {
    const chatbot = document.getElementById('aiChatbot');
    chatbotVisible = !chatbotVisible;
    
    if (chatbotVisible) {
        chatbot.classList.remove('hidden');
        // Focus on input when opening
        setTimeout(() => {
            document.getElementById('chatInput').focus();
        }, 300);
    } else {
        chatbot.classList.add('hidden');
    }
}

// Handle chat input keypress
function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Send chat message
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Get AI response
    setTimeout(() => {
        const aiResponse = window.WawaAI ? 
            window.WawaAI.ai.getChatResponse(message) : 
            getSimpleResponse(message);
        
        hideTypingIndicator();
        addMessageToChat(aiResponse.response, 'bot', aiResponse.suggestions);
    }, 1500);
}

// Send quick message
function sendQuickMessage(message) {
    document.getElementById('chatInput').value = message;
    sendChatMessage();
}

// Add message to chat
function addMessageToChat(message, sender, suggestions = []) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${message}</p>`;
    
    // Add suggestions for bot messages
    if (sender === 'bot' && suggestions.length > 0) {
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'quick-suggestions';
        suggestions.forEach(suggestion => {
            const btn = document.createElement('button');
            btn.className = 'suggestion-btn';
            btn.textContent = suggestion;
            btn.onclick = () => sendQuickMessage(suggestion);
            suggestionsDiv.appendChild(btn);
        });
        contentDiv.appendChild(suggestionsDiv);
    }
    
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'typingIndicator';
    indicator.className = 'message bot-message typing-indicator';
    indicator.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    document.getElementById('chatMessages').appendChild(indicator);
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Simple response (fallback if AI not loaded)
function getSimpleResponse(message) {
    const responses = {
        'สวัสดี': 'สวัสดีครับ! ยินดีต้อนรับสู่ Wawa Baansoan Minimar ✨',
        'ห้องว่าง': 'ตอนนี้มีห้องว่าง 15 ห้อง พร้อมให้บริการครับ! 🏠',
        'ราคา': 'ราคาเริ่มต้นที่ 3,500 บาท/เดือน รวมค่าน้ำค่าไฟครับ 💰',
        'สิ่งอำนวยความสะดวก': 'Wi-Fi ฟรี, แอร์, ตู้เย็น, เครื่องซักผ้าส่วนกลาง, ที่จอดรถ 🚗'
    };
    
    const message_lower = message.toLowerCase();
    for (let [key, response] of Object.entries(responses)) {
        if (message_lower.includes(key.toLowerCase())) {
            return { 
                response, 
                suggestions: ['ดูห้องพัก', 'จองห้อง', 'ติดต่อเจ้าหน้าที่'] 
            };
        }
    }
    
    return { 
        response: 'ขอโทษครับ ไม่เข้าใจคำถาม กรุณาลองใหม่หรือติดต่อเจ้าหน้าที่ 😅',
        suggestions: ['ห้องว่าง', 'ราคา', 'สิ่งอำนวยความสะดวก'] 
    };
}

// ===== PWA FUNCTIONS =====

// Handle PWA install prompt
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show PWA install prompt after a delay
    setTimeout(() => {
        showPWAPrompt();
    }, 5000);
});

// Show PWA install prompt
function showPWAPrompt() {
    const prompt = document.getElementById('pwaInstallPrompt');
    if (prompt && deferredPrompt) {
        prompt.classList.remove('hidden');
    }
}

// Install PWA
function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('✅ User accepted PWA install');
                showNotification('สำเร็จ!', 'ติดตั้งแอปเรียบร้อยแล้ว', 'success');
            } else {
                console.log('❌ User dismissed PWA install');
            }
            deferredPrompt = null;
            dismissPWAPrompt();
        });
    }
}

// Dismiss PWA prompt
function dismissPWAPrompt() {
    const prompt = document.getElementById('pwaInstallPrompt');
    if (prompt) {
        prompt.classList.add('hidden');
    }
    // Don't show again for this session
    localStorage.setItem('pwaPromptDismissed', 'true');
}

// Check if PWA prompt should be shown
function checkPWAPrompt() {
    const dismissed = localStorage.getItem('pwaPromptDismissed');
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    
    if (!dismissed && !isStandalone && deferredPrompt) {
        setTimeout(showPWAPrompt, 10000); // Show after 10 seconds
    }
}

// Initialize PWA features
document.addEventListener('DOMContentLoaded', () => {
    checkPWAPrompt();
    
    // Add CSS for typing indicator
    const style = document.createElement('style');
    style.textContent = `
        .typing-dots {
            display: flex;
            gap: 4px;
            padding: 8px 0;
        }
        
        .typing-dots span {
            width: 6px;
            height: 6px;
            background: #667eea;
            border-radius: 50%;
            animation: typingDots 1.4s infinite;
        }
        
        .typing-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .typing-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes typingDots {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-10px); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});

// Console message
console.log('🏠 Wawa Baansoan Minimar - Enhanced Website loaded successfully!');
console.log('📱 Features: Booking System, Status Tracking, Real-time Notifications');
console.log('🛠️ Admin Panel: /admin-login.html');
