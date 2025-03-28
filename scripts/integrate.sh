#!/bin/bash

# Integration script for FinAI application

echo "🔄 Starting integration process..."

# Check if all required files exist
echo "🔍 Checking for required files..."

REQUIRED_FILES=(
  "app/landing-page.tsx"
  "app/globals.css"
  "tailwind.config.js"
  "next.config.js"
  "Dockerfile"
  "docker-compose.yml"
)

for file in "${REQUIRED_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo "❌ Missing required file: $file"
    exit 1
  else
    echo "✅ Found: $file"
  fi
done

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application to verify everything compiles correctly
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
else
  echo "❌ Build failed! Please check your code for errors."
  exit 1
fi

# Run linting to catch any issues
echo "🧹 Running linter..."
npm run lint

# Check if linting was successful
if [ $? -eq 0 ]; then
  echo "✅ Linting passed!"
else
  echo "⚠️ Linting found issues. Consider fixing them before deployment."
fi

# Create a test Docker image to verify Docker configuration
echo "🐳 Testing Docker configuration..."
docker build -t finai-test .

# Check if Docker build was successful
if [ $? -eq 0 ]; then
  echo "✅ Docker build successful!"
  # Clean up test image
  docker rmi finai-test
else
  echo "❌ Docker build failed! Please check your Dockerfile for errors."
  exit 1
fi

echo "🎉 Integration process completed successfully!"
echo "📝 Next steps:"
echo "  1. Run 'npm run dev' to test the application locally"
echo "  2. Use Docker for containerized testing: 'docker-compose up'"
echo "  3. Deploy using the deploy.sh script or your preferred method"

exit 0

