@echo off
chcp 65001 >nul 2>&1
setlocal enabledelayedexpansion

rem Set colors
set "RED=[91m"
set "GREEN=[92m"
set "YELLOW=[93m"
set "BLUE=[94m"
set "MAGENTA=[95m"
set "CYAN=[96m"
set "WHITE=[97m"
set "RESET=[0m"

color 0A
cls

echo.
echo %CYAN%╔══════════════════════════════════════════════════════════════╗%RESET%
echo %CYAN%║                %WHITE%🏠 Wawa Baansoan Minimar 🏠%CYAN%                  ║%RESET%
echo %CYAN%║                   %YELLOW%Modern Website Server%CYAN%                    ║%RESET%
echo %CYAN%╚══════════════════════════════════════════════════════════════╝%RESET%
echo.
echo %GREEN%✓ Initializing local web server...%RESET%
echo %BLUE%📁 Project Directory: %CD%%RESET%
echo %YELLOW%⚡ Starting server on port 8080...%RESET%
echo.

cd /d "%~dp0"

rem Check if port 8080 is already in use
netstat -an | find ":8080" >nul 2>&1
if %errorlevel% equ 0 (
    echo %YELLOW%⚠️  Port 8080 is already in use. Trying port 8081...%RESET%
    set PORT=8081
) else (
    set PORT=8080
)

echo %BLUE%🔍 Checking Python installation...%RESET%

rem Try Python 3 first
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo %GREEN%✓ Python 3 found!%RESET%
    echo %MAGENTA%🚀 Starting server with Python 3...%RESET%
    echo.
    echo %CYAN%╔══════════════════════════════════════════════════════════════╗%RESET%
    echo %CYAN%║                    %GREEN%🎉 SERVER RUNNING! 🎉%CYAN%                     ║%RESET%
    echo %CYAN%║                                                              ║%RESET%
    echo %CYAN%║  %WHITE%🌐 URL: http://localhost:!PORT!%CYAN%                              ║%RESET%
    echo %CYAN%║  %WHITE%📱 Mobile: http://[your-ip]:!PORT!%CYAN%                          ║%RESET%
    echo %CYAN%║                                                              ║%RESET%
    echo %CYAN%║  %YELLOW%💡 Tips:%CYAN%                                                 ║%RESET%
    echo %CYAN%║     %WHITE%• Open the URL above in your browser%CYAN%                ║%RESET%
    echo %CYAN%║     %WHITE%• Press Ctrl+C to stop the server%CYAN%                   ║%RESET%
    echo %CYAN%║     %WHITE%• Files auto-refresh when changed%CYAN%                   ║%RESET%
    echo %CYAN%╚══════════════════════════════════════════════════════════════╝%RESET%
    echo.
    echo %GREEN%📂 Serving files from: %~dp0%RESET%
    echo %BLUE%⏰ Started at: %date% %time%%RESET%
    echo.
    
    rem Try to open browser automatically
    echo %MAGENTA%🌐 Opening browser...%RESET%
    start http://localhost:!PORT! >nul 2>&1
    
    python -m http.server !PORT!
    goto :end
)

rem Try Python 2 if Python 3 fails
python2 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo %GREEN%✓ Python 2 found!%RESET%
    echo %MAGENTA%🚀 Starting server with Python 2...%RESET%
    echo.
    start http://localhost:!PORT! >nul 2>&1
    python2 -m SimpleHTTPServer !PORT!
    goto :end
)

rem Check for py command (Python Launcher)
py --version >nul 2>&1
if %errorlevel% equ 0 (
    echo %GREEN%✓ Python Launcher found!%RESET%
    echo %MAGENTA%🚀 Starting server with Python Launcher...%RESET%
    echo.
    start http://localhost:!PORT! >nul 2>&1
    py -m http.server !PORT!
    goto :end
)

rem If Python is not available
echo.
echo %RED%╔══════════════════════════════════════════════════════════════╗%RESET%
echo %RED%║                      %WHITE%❌ ERROR! ❌%RED%                          ║%RESET%
echo %RED%║                                                              ║%RESET%
echo %RED%║            %WHITE%Python is not installed or not in PATH%RED%           ║%RESET%
echo %RED%╚══════════════════════════════════════════════════════════════╝%RESET%
echo.
echo %YELLOW%💡 Solutions:%RESET%
echo %WHITE%   1. %CYAN%Install Python from https://python.org%RESET%
echo %WHITE%   2. %CYAN%Or open index.html directly in your browser%RESET%
echo %WHITE%   3. %CYAN%Or use VS Code Live Server extension%RESET%
echo %WHITE%   4. %CYAN%Or use any other web server (Apache, Nginx, etc.)%RESET%
echo.
echo %MAGENTA%🔗 Quick Links:%RESET%
echo %WHITE%   • %BLUE%File Location: %~dp0index.html%RESET%
echo %WHITE%   • %BLUE%Admin Panel: %~dp0admin-login.html%RESET%
echo %WHITE%   • %BLUE%System Test: %~dp0test-system.html%RESET%
echo.
echo %WHITE%Press any key to open the project folder...%RESET%
pause >nul
explorer "%~dp0"

:end
echo.
echo %YELLOW%👋 Server stopped. Thank you for using Wawa Baansoan Minimar!%RESET%
echo %BLUE%📞 Support: github.com/copilot%RESET%
echo.
pause
