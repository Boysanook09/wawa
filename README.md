# บ้านเช่า มินิม่า - เว็บไซต์ห้องเช่า

เว็บไซต์แสดงห้องเช่าแบบง่ายๆ สำหรับธุรกิจห้องเช่า พัฒนาด้วย HTML, CSS และ JavaScript

## คุณสมบัติ

- 🏠 แสดงข้อมูลห้องเช่าแบบต่างๆ
- 📱 Responsive Design รองรับทุกขนาดหน้าจอ
- 🎨 UI/UX ที่สวยงามและใช้งานง่าย
- 📞 ฟอร์มติดต่อสำหรับสอบถามข้อมูล
- ⚡ Performance ที่เร็วและเบา
- 🌐 รองรับภาษาไทย

## โครงสร้างไฟล์

```
Baansoan Minima/
├── index.html          # หน้าเว็บหลัก
├── style.css           # ไฟล์ CSS สำหรับจัดรูปแบบ
├── script.js           # ไฟล์ JavaScript สำหรับฟังก์ชั่นต่างๆ
└── README.md           # ไฟล์นี้
```

## การใช้งาน

1. เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์
2. หรือใช้ Live Server ใน VS Code เพื่อดูผลลัพธ์แบบ real-time

## ส่วนประกอบของเว็บไซต์

### 1. Navigation Bar
- เมนูนำทางที่ติดด้านบน
- รองรับ Mobile Menu (Hamburger)

### 2. Hero Section
- ส่วนแบนเนอร์หลักพร้อมข้อความต้อนรับ
- ปุ่ม Call-to-Action

### 3. Features Section
- แสดงจุดเด่นของที่พัก (Wi-Fi, ความปลอดภัย, ที่จอดรถ, เครื่องซักผ้า)

### 4. Rooms Section
- แสดงห้องเช่าแบบต่างๆ พร้อมรูปภาพและราคา
- ห้องแฟน (3,500 บาท/เดือน)
- ห้องสแตนดาร์ด (4,500 บาท/เดือน)
- ห้องดีลักซ์ (6,000 บาท/เดือน)
- ห้องสตูดิโอ (7,500 บาท/เดือน)

### 5. About Section
- ข้อมูลเกี่ยวกับธุรกิจ
- จุดเด่นและข้อดีต่างๆ

### 6. Contact Section
- ข้อมูลการติดต่อ
- ฟอร์มสำหรับสอบถามข้อมูล

### 7. Footer
- ลิงก์ด่วน
- ข้อมูลติดต่อ
- Social Media Links

## การปรับแต่ง

### เปลี่ยนสี Theme
แก้ไขไฟล์ `style.css` ในส่วน CSS Variables:
```css
:root {
    --primary-color: #2c5aa0;
    --secondary-color: #ff6b35;
    --accent-color: #43a047;
}
```

### เปลี่ยนข้อมูลห้องเช่า
แก้ไขไฟล์ `index.html` ในส่วน Rooms Section

### เปลี่ยนข้อมูลติดต่อ
แก้ไขไฟล์ `index.html` ในส่วน Contact Section

## การพัฒนาต่อ

### เพิ่มฟีเจอร์ที่แนะนำ:
- ระบบจองห้องออนไลน์
- Gallery รูปภาพห้องเช่า
- ระบบรีวิวจากผู้เช่า
- แผนที่ Google Maps
- ระบบหลังบ้านสำหรับจัดการข้อมูล

### เทคโนโลยีที่แนะนำสำหรับพัฒนาต่อ:
- Backend: Node.js + Express หรือ PHP
- Database: MySQL หรือ MongoDB
- Framework: React, Vue.js หรือ Angular

## เครดิต

- รูปภาพจาก Unsplash
- Font จาก Google Fonts (Prompt)
- Icons จาก Font Awesome

## License

MIT License - ใช้ได้อย่างอิสระ
