// AI-Powered Features for Wawa Baansoan Minimar
// Version 3.0 - Advanced AI Integration

class WawaAI {
    constructor() {
        this.init();
        this.setupChatbot();
        this.setupRoomRecommendation();
        this.setupPredictiveAnalytics();
    }

    init() {
        console.log('🤖 Initializing Wawa AI System v3.0...');
        this.loadAIModels();
    }

    // AI Chatbot System
    setupChatbot() {
        this.chatbot = {
            responses: {
                'สวัสดี': ['สวัสดีครับ! ยินดีต้อนรับสู่ Wawa Baansoan Minimar ✨', 'สวัสดีค่ะ! มีอะไรให้ช่วยเหลือไหมคะ? 😊'],
                'ห้องว่าง': ['ตอนนี้มีห้องว่าง 15 ห้อง พร้อมให้บริการครับ! 🏠', 'มีห้องที่ดีๆ รออยู่เยอะเลย! ต้องการดูรายละเอียดไหมคะ? 🌟'],
                'ราคา': ['ราคาเริ่มต้นที่ 3,500 บาท/เดือน รวมค่าน้ำค่าไฟครับ 💰', 'มีแพ็คเกจหลายแบบ ราคาเริ่มต้น 3,500 บาท ✨'],
                'สิ่งอำนวยความสะดวก': ['Wi-Fi ฟรี, แอร์, ตู้เย็น, เครื่องซักผ้าส่วนกลาง, ที่จอดรถ 🚗', 'ครบครันทุกอย่าง! Wi-Fi เร็ว แอร์เย็น ปลอดภัย 24 ชั่วโมง 🔒'],
                'จอง': ['สามารถจองได้ทันทีผ่านเว็บไซต์ หรือโทรมาที่ 099-xxx-xxxx 📞', 'กดปุ่ม "จองห้อง" ได้เลยค่ะ! ใช้เวลาแค่ 2 นาที ⚡'],
                'ตำแหน่ง': ['อยู่ใจกลางเมือง ใกล้ BTS, MRT เดินทางสะดวก 🚇', 'ทำเลดีมาก! ใกล้ห้างสรรพสินค้า ร้านอาหาร เดินทางง่าย 🛍️'],
                'ปัญหา': ['สามารถแจ้งปัญหาผ่านระบบในเว็บไซต์ได้เลยครับ 🔧', 'ทีมซ่อมบำรุงพร้อมช่วยเหลือ 24/7 ค่ะ! ⚡'],
                'default': ['ขอโทษครับ ไม่เข้าใจคำถาม กรุณาลองใหม่หรือติดต่อเจ้าหน้าที่ 😅', 'อาจจะไม่เข้าใจคำถาม ลองถามใหม่หรือโทรมาสอบถามได้ค่ะ 💭']
            },
            
            currentContext: null,
            userHistory: []
        };
    }

    // AI Room Recommendation Engine
    setupRoomRecommendation() {
        this.roomAI = {
            // User preference learning
            userPreferences: {
                budget: null,
                location: null,
                amenities: [],
                roomSize: null,
                floorLevel: null
            },

            // Room matching algorithm
            findBestMatch(userInput) {
                const rooms = this.getRoomData();
                let scores = rooms.map(room => {
                    let score = 0;
                    
                    // Budget matching
                    if (userInput.budget) {
                        if (room.price <= userInput.budget) score += 30;
                        else score -= Math.abs(room.price - userInput.budget) / 100;
                    }
                    
                    // Amenity matching
                    if (userInput.amenities) {
                        const matches = userInput.amenities.filter(a => room.amenities.includes(a));
                        score += matches.length * 10;
                    }
                    
                    // Location preference
                    if (userInput.location && room.location === userInput.location) {
                        score += 20;
                    }
                    
                    // Size preference
                    if (userInput.roomSize && room.size === userInput.roomSize) {
                        score += 15;
                    }

                    return { room, score };
                });

                return scores.sort((a, b) => b.score - a.score).slice(0, 3);
            },

            getRoomData() {
                return [
                    { id: 1, price: 3500, amenities: ['wifi', 'ac', 'fridge'], location: 'center', size: 'medium', available: true },
                    { id: 2, price: 4200, amenities: ['wifi', 'ac', 'fridge', 'balcony'], location: 'center', size: 'large', available: true },
                    { id: 3, price: 3200, amenities: ['wifi', 'ac'], location: 'suburb', size: 'small', available: true },
                    { id: 4, price: 5000, amenities: ['wifi', 'ac', 'fridge', 'balcony', 'kitchen'], location: 'center', size: 'large', available: true }
                ];
            }
        };
    }

    // Predictive Analytics
    setupPredictiveAnalytics() {
        this.analytics = {
            // Predict optimal pricing
            predictOptimalPrice(roomType, season, demand) {
                const basePrice = this.getBasePrice(roomType);
                let modifier = 1.0;

                // Seasonal adjustment
                if (season === 'high') modifier += 0.15;
                else if (season === 'low') modifier -= 0.10;

                // Demand adjustment
                if (demand > 0.8) modifier += 0.20;
                else if (demand < 0.3) modifier -= 0.15;

                return Math.round(basePrice * modifier);
            },

            // Predict maintenance needs
            predictMaintenance(roomHistory) {
                const issues = roomHistory.filter(h => h.type === 'maintenance');
                const frequency = issues.length / roomHistory.length;
                
                if (frequency > 0.1) return 'high';
                else if (frequency > 0.05) return 'medium';
                else return 'low';
            },

            // Predict customer satisfaction
            predictSatisfaction(reviews, amenities, price, location) {
                let score = 70; // Base score
                
                // Review sentiment analysis (simplified)
                const positiveKeywords = ['ดี', 'สะอาด', 'สะดวก', 'ชอบ', 'แนะนำ'];
                const negativeKeywords = ['แย่', 'สกปรก', 'เสียง', 'ไม่ดี', 'ปัญหา'];
                
                reviews.forEach(review => {
                    const text = review.text.toLowerCase();
                    positiveKeywords.forEach(word => {
                        if (text.includes(word)) score += 5;
                    });
                    negativeKeywords.forEach(word => {
                        if (text.includes(word)) score -= 10;
                    });
                });

                return Math.min(100, Math.max(0, score));
            },

            getBasePrice(roomType) {
                const prices = {
                    'small': 3000,
                    'medium': 4000,
                    'large': 5000,
                    'suite': 7000
                };
                return prices[roomType] || 4000;
            }
        };
    }

    // Smart Chat Response
    getChatResponse(userMessage) {
        const message = userMessage.toLowerCase();
        this.chatbot.userHistory.push(message);

        // Intent detection
        let response = '';
        let intent = this.detectIntent(message);

        switch(intent) {
            case 'greeting':
                response = this.getRandomResponse(this.chatbot.responses['สวัสดี']);
                break;
            case 'availability':
                response = this.getRandomResponse(this.chatbot.responses['ห้องว่าง']);
                break;
            case 'pricing':
                response = this.getRandomResponse(this.chatbot.responses['ราคา']);
                break;
            case 'amenities':
                response = this.getRandomResponse(this.chatbot.responses['สิ่งอำนวยความสะดวก']);
                break;
            case 'booking':
                response = this.getRandomResponse(this.chatbot.responses['จอง']);
                break;
            case 'location':
                response = this.getRandomResponse(this.chatbot.responses['ตำแหน่ง']);
                break;
            case 'problem':
                response = this.getRandomResponse(this.chatbot.responses['ปัญหา']);
                break;
            default:
                response = this.getRandomResponse(this.chatbot.responses['default']);
        }

        return {
            response,
            intent,
            suggestions: this.getSuggestions(intent)
        };
    }

    detectIntent(message) {
        const intents = {
            greeting: ['สวัสดี', 'หวัดดี', 'hello', 'hi'],
            availability: ['ห้องว่าง', 'ห้องพัก', 'มีห้อง', 'ว่าง'],
            pricing: ['ราคา', 'ค่าเช่า', 'เท่าไหร่', 'เงิน', 'บาท'],
            amenities: ['สิ่งอำนวยความสะดวก', 'อำนวยความสะดวก', 'wifi', 'แอร์', 'ตู้เย็น'],
            booking: ['จอง', 'เช่า', 'booking'],
            location: ['ที่อยู่', 'ตำแหน่ง', 'location', 'อยู่ไหน'],
            problem: ['ปัญหา', 'แจ้ง', 'เสีย', 'ซ่อม']
        };

        for (let [intent, keywords] of Object.entries(intents)) {
            if (keywords.some(keyword => message.includes(keyword))) {
                return intent;
            }
        }
        return 'unknown';
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    getSuggestions(intent) {
        const suggestions = {
            greeting: ['ดูห้องพัก', 'สอบถามราคา', 'ดูสิ่งอำนวยความสะดวก'],
            availability: ['ดูรายละเอียดห้อง', 'สอบถามราคา', 'จองห้อง'],
            pricing: ['ดูห้องพัก', 'เปรียบเทียบห้อง', 'จองห้อง'],
            amenities: ['ดูห้องพัก', 'สอบถามราคา', 'ดูรีวิว'],
            booking: ['กรอกฟอร์มจอง', 'ติดต่อเจ้าหน้าที่', 'ดูเงื่อนไข'],
            location: ['ดูแผนที่', 'เส้นทางการเดินทาง', 'สถานที่ใกล้เคียง'],
            problem: ['แจ้งปัญหา', 'ติดต่อซ่อมบำรุง', 'ดูสถานะการแจ้ง'],
            unknown: ['ดูห้องพัก', 'สอบถามราคา', 'ติดต่อเจ้าหน้าที่']
        };
        return suggestions[intent] || suggestions.unknown;
    }

    // Room Recommendation API
    getRecommendations(userPreferences) {
        return this.roomAI.findBestMatch(userPreferences);
    }

    // Price Prediction API
    getPricePrediction(roomType, factors = {}) {
        const season = factors.season || 'normal';
        const demand = factors.demand || 0.5;
        return this.analytics.predictOptimalPrice(roomType, season, demand);
    }

    // Load AI Models (placeholder for future ML models)
    loadAIModels() {
        console.log('🧠 Loading AI models...');
        // Future: Load TensorFlow.js or other ML models
        setTimeout(() => {
            console.log('✅ AI models loaded successfully');
        }, 1000);
    }
}

// Smart Notification System
class SmartNotifications {
    constructor() {
        this.setupIntelligentAlerts();
    }

    setupIntelligentAlerts() {
        this.alertRules = {
            // High priority: Maintenance emergencies
            emergency: {
                keywords: ['น้ำรั่ว', 'ไฟดับ', 'แก๊สรั่ว', 'ฉุกเฉิน'],
                action: 'immediate',
                channels: ['sms', 'call', 'push', 'email']
            },
            // Medium priority: General maintenance
            maintenance: {
                keywords: ['ซ่อม', 'เสีย', 'ปัญหา'],
                action: 'within_hour',
                channels: ['push', 'email']
            },
            // Low priority: General inquiries
            inquiry: {
                keywords: ['สอบถาม', 'ถาม', 'info'],
                action: 'within_day',
                channels: ['email']
            }
        };
    }

    analyzeAndAlert(message, source = 'web') {
        const priority = this.determinePriority(message);
        const rule = this.alertRules[priority];
        
        return {
            priority,
            action: rule.action,
            channels: rule.channels,
            estimatedResponse: this.getResponseTime(rule.action),
            autoResponse: this.generateAutoResponse(priority, message)
        };
    }

    determinePriority(message) {
        const text = message.toLowerCase();
        
        if (this.alertRules.emergency.keywords.some(k => text.includes(k))) {
            return 'emergency';
        } else if (this.alertRules.maintenance.keywords.some(k => text.includes(k))) {
            return 'maintenance';
        } else {
            return 'inquiry';
        }
    }

    getResponseTime(action) {
        const times = {
            'immediate': '5 นาที',
            'within_hour': '1 ชั่วโมง',
            'within_day': '24 ชั่วโมง'
        };
        return times[action] || '24 ชั่วโมง';
    }

    generateAutoResponse(priority, message) {
        const responses = {
            emergency: 'ได้รับแจ้งเหตุฉุกเฉินแล้ว ทีมงานจะติดต่อกลับภายใน 5 นาที',
            maintenance: 'ได้รับแจ้งปัญหาแล้ว ทีมช่างจะดำเนินการภายใน 1 ชั่วโมง',
            inquiry: 'ขอบคุณสำหรับการสอบถาม เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชั่วโมง'
        };
        return responses[priority];
    }
}

// Performance Analytics
class PerformanceAnalytics {
    constructor() {
        this.metrics = {};
        this.startTracking();
    }

    startTracking() {
        // Track page load performance
        this.trackPageLoad();
        
        // Track user interactions
        this.trackInteractions();
        
        // Track errors
        this.trackErrors();
    }

    trackPageLoad() {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            this.metrics.pageLoad = {
                loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
                firstPaint: this.getFirstPaint(),
                timestamp: Date.now()
            };
            this.sendMetrics('pageLoad', this.metrics.pageLoad);
        });
    }

    trackInteractions() {
        // Track button clicks
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                this.trackEvent('button_click', {
                    element: e.target.textContent || e.target.closest('button').textContent,
                    timestamp: Date.now()
                });
            }
        });

        // Track form submissions
        document.addEventListener('submit', (e) => {
            this.trackEvent('form_submit', {
                form: e.target.id || 'unknown',
                timestamp: Date.now()
            });
        });
    }

    trackErrors() {
        window.addEventListener('error', (e) => {
            this.trackEvent('javascript_error', {
                message: e.message,
                filename: e.filename,
                line: e.lineno,
                timestamp: Date.now()
            });
        });
    }

    getFirstPaint() {
        const paintEntries = performance.getEntriesByType('paint');
        const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
        return firstPaint ? firstPaint.startTime : null;
    }

    trackEvent(eventName, data) {
        if (!this.metrics.events) this.metrics.events = [];
        this.metrics.events.push({ eventName, data });
        this.sendMetrics('event', { eventName, data });
    }

    sendMetrics(type, data) {
        // In a real app, send to analytics service
        console.log(`📊 Analytics [${type}]:`, data);
        
        // Send to service worker for offline storage
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'PERFORMANCE_METRIC',
                metric: { type, data, timestamp: Date.now() }
            });
        }
    }

    getReport() {
        return {
            performance: this.metrics,
            recommendations: this.generateRecommendations()
        };
    }

    generateRecommendations() {
        const recommendations = [];
        
        if (this.metrics.pageLoad && this.metrics.pageLoad.loadTime > 3000) {
            recommendations.push('พิจารณาลดขนาดไฟล์หรือใช้ CDN เพื่อเพิ่มความเร็ว');
        }
        
        if (this.metrics.events && this.metrics.events.filter(e => e.eventName === 'javascript_error').length > 5) {
            recommendations.push('มี JavaScript Error เกิดขึ้นบ่อย ควรตรวจสอบและแก้ไข');
        }
        
        return recommendations;
    }
}

// Initialize AI Systems
const wawaAI = new WawaAI();
const smartNotifications = new SmartNotifications();
const performanceAnalytics = new PerformanceAnalytics();

// Export for global access
window.WawaAI = {
    ai: wawaAI,
    notifications: smartNotifications,
    analytics: performanceAnalytics
};

console.log('🤖 Wawa AI System v3.0 Initialized Successfully!');
