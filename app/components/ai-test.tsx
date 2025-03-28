"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useChat } from "ai/react"

export function AITest() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Integration Test</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-md">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center">Ask the AI a question to test integration</p>
          ) : (
            messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block p-3 rounded-lg max-w-xs md:max-w-md ${
                    message.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea value={input} onChange={handleInputChange} placeholder="Ask a question..." className="min-h-24" />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? "Thinking..." : "Send"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

