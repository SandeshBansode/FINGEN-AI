"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your financial assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message to the chat
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Hardcoded detailed responses based on keywords in the user's input
      const userQuestion = input.toLowerCase()
      let response = ""

      if (userQuestion.includes("invest") || userQuestion.includes("portfolio")) {
        response =
          "Based on financial best practices, a well-diversified investment portfolio typically includes a mix of stocks, bonds, and alternative investments. For long-term growth, consider allocating 60-70% to equities, 20-30% to fixed income, and 5-10% to alternatives like REITs or commodities. Remember that your specific allocation should be tailored to your risk tolerance, time horizon, and financial goals."
      } else if (userQuestion.includes("retirement") || userQuestion.includes("401k") || userQuestion.includes("ira")) {
        response =
          "Retirement planning is crucial for financial security. The general guideline is to save 15-20% of your annual income for retirement. Consider maximizing contributions to tax-advantaged accounts like 401(k)s (contribution limit of $22,500 in 2023, plus $7,500 catch-up if over 50) and IRAs ($6,500 in 2023, plus $1,000 catch-up). A diversified portfolio that gradually becomes more conservative as you approach retirement is typically recommended."
      } else if (
        userQuestion.includes("budget") ||
        userQuestion.includes("save") ||
        userQuestion.includes("spending")
      ) {
        response =
          "Effective budgeting follows the 50/30/20 rule: allocate 50% of your income to needs (housing, food, utilities), 30% to wants (entertainment, dining out), and 20% to savings and debt repayment. Track your expenses using budgeting apps, set up automatic transfers to savings accounts, and review your budget monthly. For emergency funds, aim to save 3-6 months of essential expenses in a high-yield savings account."
      } else if (userQuestion.includes("debt") || userQuestion.includes("loan") || userQuestion.includes("credit")) {
        response =
          "When managing debt, prioritize high-interest debt first (typically credit cards with 15-25% APR). Consider the debt avalanche method (paying highest interest rate first) for cost efficiency or the debt snowball method (paying smallest balances first) for psychological wins. Maintain a credit utilization ratio below 30% and always pay at least the minimum payment on time. For student loans, explore income-driven repayment plans or refinancing options if interest rates have decreased."
      } else if (userQuestion.includes("tax") || userQuestion.includes("taxes")) {
        response =
          "Tax-efficient investing strategies include maximizing contributions to tax-advantaged accounts (401(k)s, IRAs, HSAs), holding tax-efficient investments like index ETFs in taxable accounts, and considering municipal bonds for tax-free income. Tax-loss harvesting can offset capital gains, and holding investments for over a year qualifies for lower long-term capital gains rates (0%, 15%, or 20% depending on income) versus short-term gains taxed as ordinary income."
      } else if (userQuestion.includes("estate") || userQuestion.includes("will") || userQuestion.includes("trust")) {
        response =
          "Estate planning essentials include creating a will, establishing durable powers of attorney for healthcare and finances, and potentially setting up trusts to minimize estate taxes and avoid probate. Review beneficiary designations on retirement accounts and insurance policies regularly, as these supersede will instructions. Consider a revocable living trust for privacy and probate avoidance, and an advance healthcare directive to outline your medical preferences."
      } else {
        response =
          "Thank you for your question about personal finance. Financial planning is highly individualized and depends on factors like your income, expenses, goals, risk tolerance, and time horizon. I recommend starting with a clear budget, building an emergency fund, paying down high-interest debt, and then focusing on long-term investments through tax-advantaged accounts. Would you like more specific information about budgeting, investing, retirement planning, or debt management?"
      }

      setTimeout(() => {
        const assistantMessage: Message = {
          role: "assistant",
          content: response,
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto h-[500px] flex flex-col">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="text-lg font-medium flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          Financial Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-muted rounded-bl-none"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg rounded-bl-none px-4 py-2">
              <div className="flex space-x-2">
                <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div
                  className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            placeholder="Ask a financial question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

