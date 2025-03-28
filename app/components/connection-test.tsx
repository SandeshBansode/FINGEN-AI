'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from 'lucide-react'

export function ConnectionTest() {
  const [isLoading, setIsLoading] = useState(false)
  const [testResult, setTestResult] = useState<null | { status: string; fileStatus: Record<string, boolean> }>(null)

  const runTest = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/connection-check')
      const data = await response.json()
      setTestResult(data)
    } catch (error) {
      console.error('Connection test failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>File Connection Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={runTest} 
          disabled={isLoading}
        >
          {isLoading ? 'Checking Connections...' : 'Check File Connections'}
        </Button>
        
        {testResult && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-lg font-semibold ${testResult.status === 'ok' ? 'text-green-600' : 'text-red-600'}`}>
                Status: {testResult.status === 'ok' ? 'All Connected' : 'Connection Issues'}
              </span>
              {testResult.status === 'ok' ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(testResult.fileStatus).map(([file, status]) => (
                    <tr key={file}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{file}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`inline-flex items-center gap-1 ${status ? 'text-green-600' : 'text-red-600'}`}>
                          {status ? (
                            <>
                              <CheckCircle className="h-4 w-4" />
                              Connected
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4" />
                              Missing
                            </>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

