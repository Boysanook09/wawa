// ===== MODERN FEATURE ENHANCEMENTS =====

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('wawa_theme_v2') || 'light';
    setTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wawa_theme_v2', theme);
    
    const themeToggle = document.querySelector('.theme-toggle i');
    if (themeToggle) {
        themeToggle.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Modern Loading
function initModernLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
            startEntranceAnimations();
        }, 2000);
    });
}

// Admin Panel Access
function openAdminPanel() {
    window.open('admin-login.html', '_blank');
}

// Virtual Tour
function startVirtualTour() {
    alert('🎥 Virtual Tour 360° กำลังจะเปิดให้บริการเร็วๆ นี้!');
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const step = target / 100;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 20);
    });
}

// Scroll Progress
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = Math.min(scrollPercent, 100) + '%';
    }
}

// Entrance Animations
function startEntranceAnimations() {
    setTimeout(() => {
        const heroText = document.querySelector('.hero-text');
        if (heroText) heroText.style.opacity = '1';
    }, 200);
    
    setTimeout(() => {
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) heroVisual.style.opacity = '1';
    }, 400);
}

// Modern Initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Modern Features Loading...');
    
    try {
        initTheme();
        initModernLoading();
        
        // Scroll events
        window.addEventListener('scroll', updateScrollProgress);
        
        // Counter animation on hero stats visibility
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(heroStats);
        }
        
        console.log('✅ Modern Features Initialized');
        
    } catch (error) {
        console.error('❌ Modern Features Error:', error);
    }
});

// Add styles
const style = document.createElement('style');
style.textContent = `
    .hero-text, .hero-visual {
        opacity: 0;
        transition: opacity 0.8s ease;
    }
`;
document.head.appendChild(style);
