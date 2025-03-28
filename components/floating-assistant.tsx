"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AIAssistant } from "@/components/ai-assistant"
import { Bot } from "lucide-react"

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          <Bot size={24} />
        </Button>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

