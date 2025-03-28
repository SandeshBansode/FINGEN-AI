import { NextResponse } from "next/server"
import os from "os"

export async function GET() {
  const memoryUsage = process.memoryUsage()
  const uptime = process.uptime()

  // Check if OpenAI API key is configured
  const isOpenAIConfigured = !!process.env.OPENAI_API_KEY

  return NextResponse.json({
    status: "ok",
    version: process.env.npm_package_version || "1.0.0",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    uptime: `${Math.floor(uptime / 60)} minutes, ${Math.floor(uptime % 60)} seconds`,
    system: {
      platform: process.platform,
      nodeVersion: process.version,
      memory: {
        total: `${Math.round(os.totalmem() / 1024 / 1024)} MB`,
        free: `${Math.round(os.freemem() / 1024 / 1024)} MB`,
        usage: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
      },
      cpus: os.cpus().length,
    },
    services: {
      openai: isOpenAIConfigured ? "configured" : "not_configured",
    },
  })
}

