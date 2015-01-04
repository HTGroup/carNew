echo off
cls
title Start car
color 71
RMDIR /S /Q ".tmp/public"
RMDIR /S /Q "upload"
tasklist /FI "IMAGENAME eq Open Server x64.exe" | find /i "Open Server x64.exe"
IF ERRORLEVEL 1 start "" "../OpenServer/Open Server x64.exe"
START cmd /k "grunt --gruntfile GruntFile2.js"
START cmd /k "nodemon app.js -w api -w config"
exit