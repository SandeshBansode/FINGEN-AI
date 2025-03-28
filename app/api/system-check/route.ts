import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  // Check for required files
  const requiredFiles = [
    "app/landing-page.tsx",
    "app/components/nav-menu.tsx",
    "app/components/ai-assistant.tsx",
    "app/components/floating-assistant.tsx",
    "app/api/chat/route.ts",
    "app/globals.css",
    "tailwind.config.js",
    "next.config.js",
    "Dockerfile",
    "docker-compose.yml",
    "deploy.sh",
  ]

  const fileStatus = {}

  for (const file of requiredFiles) {
    try {
      const filePath = path.join(process.cwd(), file)
      const exists = fs.existsSync(filePath)
      fileStatus[file] = exists
    } catch (error) {
      fileStatus[file] = false
    }
  }

  // Check for required dependencies in package.json
  let packageJson = {}
  const dependenciesStatus = {}

  try {
    const packageJsonPath = path.join(process.cwd(), "package.json")
    const packageJsonContent = fs.readFileSync(packageJsonPath, "utf8")
    packageJson = JSON.parse(packageJsonContent)

    const requiredDependencies = [
      "next",
      "react",
      "react-dom",
      "ai",
      "@ai-sdk/openai",
      "lucide-react",
      "recharts",
      "sonner",
      "tailwindcss",
    ]

    for (const dep of requiredDependencies) {
      dependenciesStatus[dep] = !!(
        (packageJson.dependencies && packageJson.dependencies[dep]) ||
        (packageJson.devDependencies && packageJson.devDependencies[dep])
      )
    }
  } catch (error) {
    console.error("Error checking package.json:", error)
  }

  // Check for environment variables
  const requiredEnvVars = [
    "NODE_ENV",
    // Add other required env vars here
  ]

  const envVarStatus = {}
  for (const envVar of requiredEnvVars) {
    envVarStatus[envVar] = !!process.env[envVar]
  }

  const allFilesExist = Object.values(fileStatus).every((status) => status === true)
  const allDependenciesExist = Object.values(dependenciesStatus).every((status) => status === true)

  return NextResponse.json({
    status: allFilesExist && allDependenciesExist ? "ok" : "issues_found",
    fileStatus,
    dependenciesStatus,
    envVarStatus,
    message:
      allFilesExist && allDependenciesExist
        ? "All required files and dependencies are connected and available."
        : "Some required files or dependencies are missing. Please check the details.",
  })
}

