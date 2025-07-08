# � วิธีเปิดเว็บไซต์ Wawa Baansoan Minimar

## 🚀 เปิดเว็บหลัก (ลูกค้า)

### วิธีที่ 1: เปิดโดยตรง
ดับเบิลคลิกไฟล์ `index.html` หรือลากไฟล์ไปวางในเบราว์เซอร์

### วิธีที่ 2: ใช้ Simple Browser ใน VS Code
1. กด `Ctrl+Shift+P`
2. พิมพ์ "Simple Browser: Show"
3. ใส่ URL: `file:///c:/Baansoan%20Minima/index.html`

### วิธีที่ 3: ใช้ Local Server
**สำหรับ Windows (PowerShell):**
```powershell
cd "c:\Baansoan Minima"
python -m http.server 8000
```
แล้วเปิดเบราว์เซอร์ที่ `http://localhost:8000`

**สำหรับ Windows (cmd):**
```cmd
cd "c:\Baansoan Minima"
python -m http.server 8000
```

### วิธีที่ 4: ใช้ Live Server Extension
1. ติดตั้ง "Live Server" extension ใน VS Code
2. คลิกขวาที่ `index.html`
3. เลือก "Open with Live Server"

## 🔧 เปิดระบบ Admin Panel (ผู้ดูแล)

### ข้อมูลการเข้าสู่ระบบ:
- **ชื่อผู้ใช้:** admin
- **รหัสผ่าน:** wawa2025

### เปิด Admin Login:
- **URL:** `file:///c:/Baansoan%20Minima/admin-login.html`
- **หรือ:** ดับเบิลคลิก `admin-login.html`

### เปิด Admin Dashboard (หลังจาก Login):
- **URL:** `file:///c:/Baansoan%20Minima/admin-dashboard.html`

### ทดสอบ Admin Panel:
- **URL:** `file:///c:/Baansoan%20Minima/test-admin.html`

## 🧪 ไฟล์ทดสอบระบบ

### ทดสอบระบบหลัก:
- **URL:** `file:///c:/Baansoan%20Minima/test-system.html`
- ทดสอบ Loading, Notification, Modal, Status Tracking

### ทดสอบ Admin Panel:
- **URL:** `file:///c:/Baansoan%20Minima/test-admin.html`
- ทดสอบ Login, Data, Functions, Error Handling

## ⚠️ การแก้ไขปัญหา

### ปัญหา: Admin Panel เข้าแล้วเด้งออก
**สาเหตุ:** ระบบตรวจสอบการ Login และเปลี่ยนเส้นทางอัตโนมัติ

**วิธีแก้:**
1. **ใช้ข้อมูล Login ที่ถูกต้อง:**
   - ชื่อผู้ใช้: `admin`
   - รหัสผ่าน: `wawa2025`

2. **ตรวจสอบ Console Errors:**
   - กด `F12` > Console
   - ดูข้อความ error

3. **ล้าง LocalStorage:**
   - กด `F12` > Application/Storage > Local Storage
   - ลบ `adminUser` และข้อมูล `wawa_*`

4. **ทดสอบการทำงาน:**
   - เปิด `test-admin.html`
   - ใช้ปุ่ม "Login ทันที (ข้าม Form)"
   - ตรวจสอบสถานะ

### ปัญหา: Loading Overlay ติดค้าง
**วิธีแก้:**
1. รีเฟรชหน้าเว็บ (`F5`)
2. Hard Refresh (`Ctrl+Shift+R`)
3. ตรวจสอบ Console errors

### ปัญหา: ไฟล์โหลดไม่ได้
**วิธีแก้:**
1. ตรวจสอบ path ไฟล์ให้ถูกต้อง
2. ใช้ Local Server แทนการเปิดไฟล์โดยตรง
3. ตรวจสอบไฟล์ที่จำเป็น:
   - `logo.svg`
   - `qr-code.svg`
   - `style.css`
   - `script.js`
   - `admin-style.css`
   - `admin-script.js`

## 📋 รายการไฟล์สำคัญ

### ไฟล์หลัก (ลูกค้า):
- `index.html` - หน้าหลักของเว็บไซต์
- `style.css` - สไตล์หลัก
- `script.js` - JavaScript หลัก

### ไฟล์ Admin:
- `admin-login.html` - หน้า Login Admin
- `admin-dashboard.html` - หน้า Dashboard Admin
- `admin-style.css` - สไตล์สำหรับ Admin
- `admin-script.js` - JavaScript สำหรับ Admin

### ไฟล์ทดสอบ:
- `test-system.html` - ทดสอบระบบหลัก
- `test-admin.html` - ทดสอบ Admin Panel

### ไฟล์สื่อ:
- `logo.svg` - โลโก้บริษัท
- `qr-code.svg` - QR Code สำหรับสั่งอาหาร

### ไฟล์เอกสาร:
- `README.md` - คู่มือหลัก
- `README-ADMIN.md` - คู่มือ Admin
- `HOW-TO-OPEN.md` - วิธีเปิดเว็บ (ไฟล์นี้)
- `BUGFIX-LOG.md` - บันทึกการแก้ไขปัญหา

## 🔍 ตรวจสอบปัญหาเพิ่มเติม

### เปิด Developer Tools:
1. กด `F12` หรือ `Ctrl+Shift+I`
2. ดูแท็บ Console สำหรับข้อความ error
3. ดูแท็บ Network สำหรับไฟล์ที่โหลดไม่ได้
4. ดูแท็บ Application สำหรับ LocalStorage

### ข้อความ Log ที่ควรเห็น:
- ✅ เว็บไซต์โหลดเสร็จสิ้น - Loading overlay ถูกซ่อนแล้ว
- 🚀 Admin script loaded, current page: ...
- 📋 Initializing login page...
- 📊 Initializing dashboard page...

---

**📞 หากยังมีปัญหา:**
กรุณาแจ้งอาการหรือข้อความ error ที่พบเพื่อการแก้ไขเพิ่มเติม
