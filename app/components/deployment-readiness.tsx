"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertTriangle, Loader2 } from "lucide-react"

type CheckResult = {
  name: string
  status: "success" | "warning" | "error"
  message: string
}

export function DeploymentReadiness() {
  const [isChecking, setIsChecking] = useState(false)
  const [results, setResults] = useState<CheckResult[]>([])
  const [overallStatus, setOverallStatus] = useState<"success" | "warning" | "error" | null>(null)

  const runChecks = async () => {
    setIsChecking(true)
    setResults([])

    const checks: CheckResult[] = []
    let hasError = false
    let hasWarning = false

    // Check system status
    try {
      const systemRes = await fetch("/api/system-check")
      const systemData = await systemRes.json()

      if (systemData.status === "ok") {
        checks.push({
          name: "File Structure",
          status: "success",
          message: "All required files are present and connected.",
        })
      } else {
        hasWarning = true
        checks.push({
          name: "File Structure",
          status: "warning",
          message: "Some files may be missing or not properly connected.",
        })
      }
    } catch (error) {
      hasError = true
      checks.push({
        name: "File Structure",
        status: "error",
        message: "Failed to check file structure.",
      })
    }

    // Check health endpoint
    try {
      const healthRes = await fetch("/api/health")
      const healthData = await healthRes.json()

      checks.push({
        name: "Health Check",
        status: "success",
        message: "Health endpoint is working properly.",
      })

      // Check OpenAI configuration
      if (healthData.services?.openai === "configured") {
        checks.push({
          name: "OpenAI API",
          status: "success",
          message: "OpenAI API is properly configured.",
        })
      } else {
        hasWarning = true
        checks.push({
          name: "OpenAI API",
          status: "warning",
          message: "OpenAI API key may not be properly configured.",
        })
      }
    } catch (error) {
      hasError = true
      checks.push({
        name: "Health Check",
        status: "error",
        message: "Health endpoint is not working properly.",
      })
    }

    // Check AI chat endpoint
    try {
      const chatRes = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Hello" }],
        }),
      })

      if (chatRes.ok) {
        checks.push({
          name: "AI Chat",
          status: "success",
          message: "AI chat endpoint is working properly.",
        })
      } else {
        const errorData = await chatRes.json()
        hasWarning = true
        checks.push({
          name: "AI Chat",
          status: "warning",
          message: `AI chat endpoint returned an error: ${errorData.error || "Unknown error"}`,
        })
      }
    } catch (error) {
      hasWarning = true
      checks.push({
        name: "AI Chat",
        status: "warning",
        message: "Failed to test AI chat endpoint.",
      })
    }

    // Set overall status
    if (hasError) {
      setOverallStatus("error")
    } else if (hasWarning) {
      setOverallStatus("warning")
    } else {
      setOverallStatus("success")
    }

    setResults(checks)
    setIsChecking(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployment Readiness Check</CardTitle>
        <CardDescription>Verify that all components are properly connected and ready for deployment</CardDescription>
      </CardHeader>
      <CardContent>
        {overallStatus && (
          <Alert
            variant={overallStatus === "success" ? "default" : overallStatus === "warning" ? "default" : "destructive"}
            className={`mb-4 ${
              overallStatus === "success"
                ? "bg-green-50 text-green-800 border-green-200"
                : overallStatus === "warning"
                  ? "bg-yellow-50 text-yellow-800 border-yellow-200"
                  : ""
            }`}
          >
            {overallStatus === "success" && <CheckCircle className="h-4 w-4" />}
            {overallStatus === "warning" && <AlertTriangle className="h-4 w-4" />}
            {overallStatus === "error" && <XCircle className="h-4 w-4" />}
            <AlertDescription>
              {overallStatus === "success" && "All systems are ready for deployment!"}
              {overallStatus === "warning" && "Some issues were found that may affect deployment."}
              {overallStatus === "error" && "Critical issues were found that will prevent successful deployment."}
            </AlertDescription>
          </Alert>
        )}

        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-2 p-3 border rounded-md">
                {result.status === "success" && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                {result.status === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />}
                {result.status === "error" && <XCircle className="h-5 w-5 text-red-500 mt-0.5" />}
                <div>
                  <h3 className="font-medium">{result.name}</h3>
                  <p className="text-sm text-gray-600">{result.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={runChecks} disabled={isChecking} className="w-full">
          {isChecking ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Running Checks...
            </>
          ) : (
            "Check Deployment Readiness"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

