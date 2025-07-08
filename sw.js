// Service Worker for Wawa Baansoan Minimar PWA
// Version 3.0 - Enhanced with AI Features

const CACHE_NAME = 'wawa-minimar-v3.0';
const STATIC_CACHE = 'wawa-static-v3.0';
const DYNAMIC_CACHE = 'wawa-dynamic-v3.0';

// Assets to cache immediately
const STATIC_ASSETS = [
    './',
    './index.html',
    './admin-login.html',
    './admin-dashboard.html',
    './style.css',
    './admin-style.css',
    './script.js',
    './admin-script.js',
    './modern-features.js',
    './manifest.json',
    './logo.svg',
    './qr-code.svg',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Prompt:wght@300;400;500;600;700&display=swap'
];

// Install event - cache static assets
self.addEventListener('install', event => {
    console.log('💾 Service Worker Installing...');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('📦 Caching static assets...');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('✅ Static assets cached successfully');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Failed to cache static assets:', error);
            })
    );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
    console.log('🚀 Service Worker Activating...');
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('🗑️ Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('✅ Old caches cleaned');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip chrome-extension and other protocols
    if (!url.protocol.startsWith('http')) return;

    event.respondWith(
        caches.match(request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Serve from cache
                    return cachedResponse;
                }

                // Fetch from network and cache
                return fetch(request)
                    .then(response => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone response for caching
                        const responseToCache = response.clone();

                        caches.open(DYNAMIC_CACHE)
                            .then(cache => {
                                cache.put(request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => {
                        // Return offline page for HTML requests
                        if (request.headers.get('accept').includes('text/html')) {
                            return caches.match('./index.html');
                        }
                    });
            })
    );
});

// Background sync for offline data
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        console.log('🔄 Background sync triggered');
        event.waitUntil(syncOfflineData());
    }
});

// Push notifications
self.addEventListener('push', event => {
    console.log('📱 Push notification received');
    
    const options = {
        body: event.data ? event.data.text() : 'มีข้อมูลใหม่จาก Wawa Baansoan Minimar',
        icon: './logo.svg',
        badge: './logo.svg',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'ดูรายละเอียด',
                icon: './logo.svg'
            },
            {
                action: 'close',
                title: 'ปิด'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Wawa Baansoan Minimar', options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Sync offline data function
async function syncOfflineData() {
    try {
        // Get offline data from IndexedDB or localStorage
        const offlineData = await getOfflineData();
        
        if (offlineData.length > 0) {
            // Send data to server
            for (const data of offlineData) {
                await fetch('/api/sync', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }
            
            // Clear offline data after successful sync
            await clearOfflineData();
            console.log('✅ Offline data synced successfully');
        }
    } catch (error) {
        console.error('❌ Failed to sync offline data:', error);
    }
}

// Get offline data (placeholder - implement with IndexedDB)
async function getOfflineData() {
    // Implementation would connect to IndexedDB
    return [];
}

// Clear offline data (placeholder - implement with IndexedDB)
async function clearOfflineData() {
    // Implementation would clear IndexedDB
    return true;
}

// Performance monitoring
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'PERFORMANCE_METRIC') {
        console.log('📊 Performance metric:', event.data.metric);
        // Send to analytics service
    }
});

console.log('🚀 Wawa Baansoan Minimar Service Worker v3.0 Loaded');
