@echo off
chcp 65001 >nul 2>&1
color 0B
title 🏠 Wawa Baansoan Minimar - Local Server

cls
echo.
echo [96m    ╔══════════════════════════════════════════════════════╗[0m
echo [96m    ║            [97m🏠 Wawa Baansoan Minimar 🏠[96m            ║[0m
echo [96m    ║                [93mLocal Web Server[96m                 ║[0m
echo [96m    ╚══════════════════════════════════════════════════════╝[0m
echo.
echo [92m    ✓ Initializing server...[0m
echo [94m    📁 Directory: %~dp0[0m
echo [93m    🌐 URL: http://localhost:8080[0m
echo [95m    📱 Mobile: Use your computer's IP address[0m
echo.
echo [97m    ═══════════════════════════════════════════════════════[0m
echo [92m    🚀 Starting Python server...[0m
echo [97m    ═══════════════════════════════════════════════════════[0m
echo.

cd /d "%~dp0"

rem Try to open browser automatically  
echo [95m    🌐 Opening browser...[0m
start http://localhost:8080 >nul 2>&1

echo [94m    🔍 Trying Python 3...[0m
rem Try Python 3 first
python -m http.server 8080 2>nul
if %errorlevel% equ 0 goto :success

echo [94m    🔍 Trying Python 2...[0m
rem Try Python 2 if Python 3 fails  
python -m SimpleHTTPServer 8080 2>nul
if %errorlevel% equ 0 goto :success

rem Try py command
echo [94m    🔍 Trying Python Launcher...[0m
py -m http.server 8080 2>nul
if %errorlevel% equ 0 goto :success

rem If Python is not available
echo.
echo [91m    ╔══════════════════════════════════════════════════════╗[0m
echo [91m    ║                    [97m❌ ERROR! ❌[91m                    ║[0m
echo [91m    ║          [97mPython is not installed or found[91m          ║[0m
echo [91m    ╚══════════════════════════════════════════════════════╝[0m
echo.
echo [93m    💡 Solutions:[0m
echo [96m       1. Install Python from https://python.org[0m
echo [96m       2. Open index.html directly in browser[0m
echo [96m       3. Use VS Code Live Server extension[0m
echo [96m       4. Use any other web server[0m
echo.
echo [95m    🔗 Quick Access:[0m
echo [97m       • Main: %~dp0index.html[0m
echo [97m       • Admin: %~dp0admin-login.html[0m
echo [97m       • Test: %~dp0test-system.html[0m
echo.
echo [93m    Press any key to open project folder...[0m
pause >nul
explorer "%~dp0"
goto :end

:success
echo.
echo [92m    ╔══════════════════════════════════════════════════════╗[0m
echo [92m    ║                  [97m🎉 SUCCESS! 🎉[92m                   ║[0m
echo [92m    ║                [97mServer is running![92m                ║[0m
echo [92m    ╚══════════════════════════════════════════════════════╝[0m
echo.
echo [96m    🌐 Server: http://localhost:8080[0m
echo [95m    📁 Files: %~dp0[0m
echo [93m    ⏹️  Stop: Press Ctrl+C[0m
echo [97m    ⏰ Time: %date% %time%[0m
echo.
echo [97m    ═══════════════════════════════════════════════════════[0m
echo [92m    🏃 Server running... Browser should open automatically[0m
echo [97m    ═══════════════════════════════════════════════════════[0m
echo.

:end
