#!/bin/bash

# Enhanced deployment script for FinAI application

echo "🚀 Starting deployment process..."

# Check for required environment variables
echo "🔍 Checking environment variables..."
REQUIRED_ENV_VARS=("OPENAI_API_KEY" "NODE_ENV")
MISSING_ENV_VARS=()

for var in "${REQUIRED_ENV_VARS[@]}"; do
  if [ -z "${!var}" ]; then
    MISSING_ENV_VARS+=("$var")
  fi
done

if [ ${#MISSING_ENV_VARS[@]} -ne 0 ]; then
  echo "❌ Missing required environment variables: ${MISSING_ENV_VARS[*]}"
  echo "Please set these environment variables before deploying."
  exit 1
fi

# Run system check
echo "🔍 Running system check..."
if [ -f "scripts/verify-connections.sh" ]; then
  bash ./scripts/verify-connections.sh
  if [ $? -ne 0 ]; then
    echo "❌ System check failed! Please fix the issues before deploying."
    exit 1
  fi
else
  echo "⚠️ Verification script not found. Continuing without verification."
fi

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t finai-app:latest .

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Docker image built successfully!"
else
  echo "❌ Docker image build failed!"
  exit 1
fi

# Tag the image for your registry (update with your registry details)
echo "🏷️ Tagging Docker image..."
docker tag finai-app:latest ${DOCKER_REGISTRY:-your-registry.com}/finai-app:latest

# Push to registry
echo "📤 Pushing to registry..."
docker push ${DOCKER_REGISTRY:-your-registry.com}/finai-app:latest

# Deploy to environment
echo "🌐 Deploying to ${DEPLOY_ENV:-production} environment..."
if [ "${DEPLOY_ENV}" == "production" ]; then
  echo "⚠️ Deploying to PRODUCTION environment!"
  echo "Press Ctrl+C within 5 seconds to cancel..."
  sleep 5
fi

# Add your deployment commands here, e.g.:
# kubectl apply -f k8s/deployment.yaml
# or
# ssh user@server "cd /path/to/app && docker-compose pull && docker-compose up -d"

echo "🎉 Deployment process completed successfully!"
echo "📝 Next steps:"
echo "  1. Verify the deployment is working correctly"
echo "  2. Check logs for any errors"
echo "  3. Run post-deployment tests"

exit 0

