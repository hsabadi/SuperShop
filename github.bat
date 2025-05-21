@echo off
echo =============================
echo Git Auto Commit & Push Script
echo =============================

REM Step 1: Add all changes
git add .
echo ✅ Files added.

REM Step 2: Commit with message
set /p msg="📝 Enter commit message: "
git commit -m "%msg%"
echo ✅ Commit done.

REM Step 3: Pull latest changes
git pull origin main
echo 🔄 Pulled latest from GitHub.

REM Step 4: Push to GitHub
git push origin main
echo 🚀 Changes pushed to GitHub.

pause
