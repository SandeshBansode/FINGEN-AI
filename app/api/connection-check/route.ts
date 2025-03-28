import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  // Check for required files
  const requiredFiles = [
    'app/landing-page.tsx',
    'app/components/nav-menu.tsx',
    'app/components/ai-assistant.tsx',
    'app/components/floating-assistant.tsx',
    'app/api/chat/route.ts',
    'app/globals.css',
    'tailwind.config.js',
    'next.config.js',
  ];

  const fileStatus = {};
  
  for (const file of requiredFiles) {
    try {
      const filePath = path.join(process.cwd(), file);
      const exists = fs.existsSync(filePath);
      fileStatus[file] = exists;
    } catch (error) {
      fileStatus[file] = false;
    }
  }

  const allFilesExist = Object.values(fileStatus).every(status => status === true);

  return NextResponse.json({
    status: allFilesExist ? 'ok' : 'missing_files',
    fileStatus,
    message: allFilesExist 
      ? 'All required files are connected and available.' 
      : 'Some required files are missing. Please check the fileStatus for details.',
  });
}

