#!/bin/bash

echo "==================================================="
echo "  DK Project Runner (pnpm Monorepo)"
echo "==================================================="

# Detect package runner
if command -v pnpm &> /dev/null; then
    PNPM_CMD="pnpm"
elif command -v npx &> /dev/null; then
    echo "[INFO] pnpm is not globally installed. Falling back to npx pnpm..."
    PNPM_CMD="npx pnpm"
else
    echo "[ERROR] Neither pnpm nor npx/npm was found in your PATH."
    echo "Please install Node.js and pnpm to run this project."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "[INFO] node_modules not found. Installing dependencies..."
    $PNPM_CMD install
else
    echo "[INFO] Dependencies already installed."
fi

echo "[INFO] Starting development server..."
$PNPM_CMD dev
