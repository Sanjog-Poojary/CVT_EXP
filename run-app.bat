@echo off
SETLOCAL
TITLE CA2 CI/CD App - Local Runner

echo ==========================================
echo   CA2 - CI/CD Pipeline App - Local Run
echo ==========================================

:: Check if node_modules exists, if not run npm install
IF NOT EXIST "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    IF %ERRORLEVEL% NEQ 0 (
        echo [ERROR] npm install failed. Please check your Node.js installation.
        pause
        exit /b %ERRORLEVEL%
    )
)

echo [INFO] Starting the application on http://localhost:3000...
echo [INFO] Press Ctrl+C to stop the server.
echo.

:: Start the application
call npm start

IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] The application exited with an error.
    pause
)

ENDLOCAL
