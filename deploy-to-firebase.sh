#!/bin/bash

echo "Building Next.js application..."
npm run build

echo "Deploying to Firebase..."
firebase deploy --only hosting

echo "Deployment complete!"

