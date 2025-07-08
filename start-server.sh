#!/bin/bash
echo "Starting Wawa Baansoan Minimar Website..."
echo ""
echo "Opening browser at: http://localhost:8080"
echo "Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")"

# Try Python 3 first
if command -v python3 &> /dev/null; then
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    python -m http.server 8080 2>/dev/null || python -m SimpleHTTPServer 8080
else
    echo "Error: Python is not installed"
    echo "Please install Python or open index.html directly in your browser"
fi
