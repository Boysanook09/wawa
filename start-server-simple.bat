@echo off
color 0E
title 🏠 Wawa Baansoan Minimar - Web Server

cls
echo.
echo     ██╗    ██╗ █████╗ ██╗    ██╗ █████╗ 
echo     ██║    ██║██╔══██╗██║    ██║██╔══██╗
echo     ██║ █╗ ██║███████║██║ █╗ ██║███████║
echo     ██║███╗██║██╔══██║██║███╗██║██╔══██║
echo     ╚███╔███╔╝██║  ██║╚███╔███╔╝██║  ██║
echo      ╚══╝╚══╝ ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝
echo.
echo            🏠 Baansoan Minimar 🏠
echo         ================================
echo.
echo [96m  🌐 Starting Web Server...[0m
echo [92m  📁 Project: %~dp0[0m  
echo [93m  ⚡ Port: 8080[0m
echo [95m  🚀 Opening browser...[0m
echo.

cd /d "%~dp0"

rem Open browser first
start http://localhost:8080

rem Start Python server
python -m http.server 8080 2>nul || python -m SimpleHTTPServer 8080 2>nul || (
    echo [91m❌ Python not found![0m
    echo [96m💡 Please install Python or open index.html directly[0m
    pause
    exit
)

echo [92m✅ Server stopped![0m
pause
