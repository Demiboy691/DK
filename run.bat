@echo off
SETLOCAL EnableExtensions EnableDelayedExpansion

echo ===================================================
echo   DK Project Runner (pnpm Monorepo)
echo ===================================================

:: Detect package runner
where pnpm >nul 2>nul
if %ERRORLEVEL% equ 0 goto :has_pnpm
where npx >nul 2>nul
if %ERRORLEVEL% equ 0 goto :has_npx
echo [ERROR] Neither pnpm nor npx/npm was found in your PATH.
echo Please install Node.js and pnpm to run this project.
pause
exit /b 1

:has_pnpm
set PNPM_CMD=pnpm
goto :run

:has_npx
echo [INFO] pnpm is not globally installed. Falling back to npx pnpm...
set PNPM_CMD=npx pnpm
goto :run

:run
:: Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo [INFO] node_modules not found. Installing dependencies...
    call %PNPM_CMD% install
) else (
    echo [INFO] Dependencies already installed.
)

echo [INFO] Starting development server...
call %PNPM_CMD% dev

ENDLOCAL
