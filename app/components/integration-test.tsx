"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function IntegrationTest() {
  const [isLoading, setIsLoading] = useState(false)
  const [testResult, setTestResult] = useState<null | { status: string; componentsStatus: any }>(null)

  const runTest = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/integration-check")
      const data = await response.json()
      setTestResult(data)
      toast.success("Integration test successful!")
    } catch (error) {
      console.error("Integration test failed:", error)
      toast.error("Integration test failed!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Integration Test</h2>
      <p className="text-gray-600 mb-4">This component tests the integration of UI components and API routes.</p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="test-input">Test Input</Label>
          <Input id="test-input" placeholder="Type something..." />
        </div>

        <Button onClick={runTest} disabled={isLoading} className="w-full">
          {isLoading ? "Running Test..." : "Run Integration Test"}
        </Button>

        {testResult && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium">Test Result:</h3>
            <pre className="mt-2 text-sm overflow-auto">{JSON.stringify(testResult, null, 2)}</pre>

            {testResult.componentsStatus && (
              <div className="mt-4">
                <h4 className="font-medium">Components Status:</h4>
                <ul className="mt-2 space-y-1">
                  {Object.entries(testResult.componentsStatus).map(([component, status]) => (
                    <li key={component} className="flex items-center">
                      <span className={`h-2 w-2 rounded-full mr-2 ${status ? "bg-green-500" : "bg-red-500"}`}></span>
                      <span>
                        {component}: {status ? "Integrated" : "Not Integrated"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

