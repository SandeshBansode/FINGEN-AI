#!/bin/bash

# Enhanced deployment verification script for FinAI application

echo "🔍 Starting deployment verification..."

# Set default URL if not provided
DEPLOYMENT_URL=${DEPLOYMENT_URL:-http://localhost:3000}

# Check if the application is running
echo "🌐 Checking if the application is accessible..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $DEPLOYMENT_URL)

if [ "$HTTP_STATUS" -eq 200 ]; then
  echo "✅ Application is accessible!"
else
  echo "❌ Application is not accessible. HTTP Status: $HTTP_STATUS"
  exit 1
fi

# Check for critical endpoints
echo "🧩 Checking critical endpoints..."

# Check health endpoint
HEALTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $DEPLOYMENT_URL/api/health)
if [ "$HEALTH_STATUS" -eq 200 ]; then
  echo "✅ Health endpoint is accessible!"
  
  # Get health details
  HEALTH_DETAILS=$(curl -s $DEPLOYMENT_URL/api/health)
  echo "Health details: $HEALTH_DETAILS"
else
  echo "❌ Health endpoint is not accessible. HTTP Status: $HEALTH_STATUS"
  exit 1
fi

# Check system check endpoint
SYSTEM_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $DEPLOYMENT_URL/api/system-check)
if [ "$SYSTEM_STATUS" -eq 200 ]; then
  echo "✅ System check endpoint is accessible!"
else
  echo "❌ System check endpoint is not accessible. HTTP Status: $SYSTEM_STATUS"
  exit 1
fi

# Check test page
TEST_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $DEPLOYMENT_URL/test)
if [ "$TEST_STATUS" -eq 200 ]; then
  echo "✅ Test page is accessible!"
else
  echo "❌ Test page is not accessible. HTTP Status: $TEST_STATUS"
  exit 1
fi

# Check for OpenAI API configuration
OPENAI_CONFIG=$(curl -s $DEPLOYMENT_URL/api/health | grep -o '"openai":"configured"')
if [ -n "$OPENAI_CONFIG" ]; then
  echo "✅ OpenAI API is properly configured!"
else
  echo "⚠️ OpenAI API may not be properly configured. Please check your environment variables."
fi

echo "🎉 Deployment verification completed successfully!"
echo "📝 Your application is now live and functioning correctly at: $DEPLOYMENT_URL"

exit 0

