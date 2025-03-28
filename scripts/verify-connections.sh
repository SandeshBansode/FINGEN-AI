#!/bin/bash

# Script to verify all file connections

echo "🔍 Checking file connections..."

# Define required files
REQUIRED_FILES=(
  "app/landing-page.tsx"
  "app/components/nav-menu.tsx"
  "app/components/ai-assistant.tsx"
  "app/components/floating-assistant.tsx"
  "app/api/chat/route.ts"
  "app/globals.css"
  "tailwind.config.js"
  "next.config.js"
)

# Check each file
MISSING_FILES=()
for file in "${REQUIRED_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ Found: $file"
  else
    echo "❌ Missing: $file"
    MISSING_FILES+=("$file")
  fi
done

# Summary
if [ ${#MISSING_FILES[@]} -eq 0 ]; then
  echo "🎉 All files are connected and available!"
else
  echo "⚠️ Some files are missing. Please check the above list."
  exit 1
fi

# Check API routes
echo "🔍 Checking API routes..."
if [ -d "app/api" ]; then
  echo "✅ API directory exists"
else
  echo "❌ API directory is missing"
  exit 1
fi

echo "🎉 All connections verified successfully!"
exit 0

