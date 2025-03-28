"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { X, Send, Bot, User, ChevronRight, Search, Clock, Star, Bookmark, ThumbsUp } from "lucide-react"

interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [activeTab, setActiveTab] = useState("chat")
  const [messages, setMessages] = useState<{ role: string; content: string; timestamp?: Date }[]>([
    {
      role: "assistant",
      content: "Hi there! I'm your AI financial assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Suggested questions
  const suggestedQuestions = [
    "How should I diversify my portfolio?",
    "What's the difference between stocks and bonds?",
    "How much should I save for retirement?",
    "Explain dollar-cost averaging",
    "What are ETFs and how do they work?",
    "How can I reduce my investment taxes?",
  ]

  // Learning resources
  const learningResources = [
    {
      title: "Investment Basics",
      description: "Learn the fundamentals of investing and building wealth",
      duration: "15 min",
      level: "Beginner",
      rating: 4.9,
    },
    {
      title: "Understanding Market Volatility",
      description: "How to stay calm and make smart decisions during market turbulence",
      duration: "12 min",
      level: "Intermediate",
      rating: 4.8,
    },
    {
      title: "Retirement Planning Strategies",
      description: "Effective approaches to secure your financial future",
      duration: "20 min",
      level: "All Levels",
      rating: 4.7,
    },
    {
      title: "Tax-Efficient Investing",
      description: "Maximize your returns by minimizing your tax burden",
      duration: "18 min",
      level: "Advanced",
      rating: 4.9,
    },
  ]

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input, timestamp: new Date() }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Detailed hardcoded responses based on keywords
    const userQuestion = input.toLowerCase()
    let response = ""

    if (userQuestion.includes("invest") || userQuestion.includes("portfolio")) {
      response =
        "Based on modern portfolio theory, a well-diversified investment strategy should include a mix of asset classes with different correlation patterns. For someone with moderate risk tolerance, I recommend:\n\n• 40% in broad market US equity index funds (e.g., S&P 500)\n• 20% in international developed markets\n• 10% in emerging markets\n• 20% in investment-grade bonds\n• 5% in REITs for real estate exposure\n• 5% in commodities or gold as an inflation hedge\n\nThis allocation provides growth potential while managing volatility through diversification. Remember to rebalance annually to maintain your target allocation."
    } else if (userQuestion.includes("retirement") || userQuestion.includes("401k") || userQuestion.includes("ira")) {
      response =
        "For retirement planning, the 4% rule suggests you need approximately 25 times your annual expenses saved by retirement. To achieve this:\n\n1. Maximize tax-advantaged accounts: Contribute at least enough to your 401(k) to get the full employer match, then consider a Roth IRA for tax-free growth if eligible.\n\n2. Create a retirement income ladder: Consider building a bond ladder or using annuities for guaranteed income to cover essential expenses, with growth investments for discretionary spending.\n\n3. Plan for healthcare costs: The average couple may need $300,000 for healthcare in retirement, so consider HSA contributions if eligible.\n\n4. Adjust your asset allocation: Generally, subtract your age from 110 to get your equity percentage, increasing bond allocation as you approach retirement."
    } else if (userQuestion.includes("market") || userQuestion.includes("stock") || userQuestion.includes("economy")) {
      response =
        "Market analysis requires examining both fundamental and technical factors. Currently, key economic indicators show:\n\n• Inflation: Gradually moderating but still above central bank targets\n• Interest rates: Central banks maintaining restrictive policy with potential for easing in coming quarters\n• Corporate earnings: Showing resilience but growth rates slowing\n• Valuation metrics: P/E ratios slightly above historical averages\n• Economic growth: Moderate but positive, with services outperforming manufacturing\n\nHistorically, markets tend to anticipate economic changes 6-9 months in advance. Rather than timing the market, dollar-cost averaging into a diversified portfolio aligned with your risk tolerance is typically the most effective strategy for long-term investors."
    } else if (userQuestion.includes("debt") || userQuestion.includes("loan") || userQuestion.includes("credit")) {
      response =
        "When managing debt, prioritize based on both interest rates and psychological factors:\n\n1. High-interest debt (credit cards, typically 15-25% APR): Prioritize these aggressively, as no investment reliably outperforms this interest rate\n\n2. Medium-interest debt (personal loans, 6-12%): Evaluate whether to accelerate payments or invest the difference\n\n3. Low-interest debt (mortgages, federal student loans, 3-5%): Often beneficial to make minimum payments while investing the difference\n\nDebt reduction strategies:\n• Debt avalanche: Focus on highest interest rate first (mathematically optimal)\n• Debt snowball: Focus on smallest balance first (psychologically motivating)\n• Consolidation: Consider for simplification and potentially lower rates\n• Refinancing: Worthwhile when you can reduce rates by at least 1% with reasonable fees\n\nMaintain a credit utilization ratio below 30% to optimize your credit score."
    } else if (userQuestion.includes("tax") || userQuestion.includes("taxes")) {
      response =
        "Tax-efficient investing can significantly improve your after-tax returns. Consider these strategies:\n\n1. Asset location optimization:\n   • Hold tax-inefficient investments (bonds, REITs) in tax-advantaged accounts\n   • Keep tax-efficient investments (index ETFs, growth stocks) in taxable accounts\n\n2. Tax-loss harvesting: Strategically realize losses to offset gains and up to $3,000 of ordinary income annually\n\n3. Tax-advantaged accounts hierarchy (generally):\n   • HSA (triple tax advantage for healthcare)\n   • 401(k)/403(b) with employer match\n   • Roth IRA/Roth 401(k) for tax-free growth\n   • Traditional IRA/401(k) for tax-deferred growth\n   • 529 plans for education expenses\n\n4. Municipal bonds: Consider for tax-free income in high tax brackets\n\n5. Qualified dividend investing: Qualified dividends are taxed at lower capital gains rates versus ordinary dividends"
    } else {
      response =
        "Financial planning should be personalized to your specific situation, but here are foundational principles:\n\n1. Emergency fund: Maintain 3-6 months of essential expenses in high-yield savings accounts or money market funds\n\n2. Protection: Ensure adequate insurance coverage (health, life, disability, property & casualty)\n\n3. Debt management: Eliminate high-interest debt while strategically managing low-interest debt\n\n4. Retirement planning: Save 15-20% of income, utilizing tax-advantaged accounts\n\n5. Tax efficiency: Minimize tax drag through strategic asset location and tax-loss harvesting\n\n6. Estate planning: Create essential documents (will, powers of attorney, advance directives)\n\n7. Investment strategy: Develop a diversified portfolio aligned with your goals, time horizon, and risk tolerance\n\nI recommend reviewing your financial plan annually or when experiencing major life changes (marriage, children, job changes, etc.)."
    }

    // Simulate AI response with delay
    setTimeout(() => {
      const assistantMessage = { role: "assistant", content: response, timestamp: new Date() }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
    setActiveTab("chat")
  }

  const formatTime = (date?: Date) => {
    if (!date) return ""
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl h-[600px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <div className="font-semibold">Financial Assistant</div>
              <div className="text-xs text-gray-500">Powered by AI</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="learn">Learn</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={18} />
            </Button>
          </div>
        </div>

        <TabsContent value="chat" className="flex-1 flex flex-col overflow-hidden m-0 p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`flex gap-2 max-w-[80%] ${
                    message.role === "assistant" ? "items-start" : "items-end flex-row-reverse"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      message.role === "assistant"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <Bot size={16} className="text-white" />
                    ) : (
                      <User size={16} className="text-gray-700 dark:text-gray-300" />
                    )}
                  </div>
                  <div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "assistant"
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                      }`}
                    >
                      {message.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 px-1">{formatTime(message.timestamp)}</div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[80%] items-start">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          <div className="px-4 py-2 border-t">
            <div className="flex flex-wrap gap-2 mb-2">
              {suggestedQuestions.slice(0, 3).map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your finances..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <Send size={16} />
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="learn" className="flex-1 overflow-hidden m-0 p-0">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                <Input placeholder="Search learning resources..." className="pl-10" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <h3 className="font-medium text-lg mb-4">Recommended for You</h3>
              <div className="space-y-4">
                {learningResources.map((resource, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{resource.title}</h4>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark size={16} />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{resource.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center text-xs">
                            <Clock size={12} className="mr-1" />
                            {resource.duration}
                          </div>
                          <div className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full">
                            {resource.level}
                          </div>
                        </div>
                        <div className="flex items-center text-xs">
                          <Star size={12} className="text-yellow-500 mr-1 fill-current" />
                          {resource.rating}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between items-center">
                      <div className="text-xs text-gray-500">4,320 learners</div>
                      <Button size="sm" className="h-8">
                        Start Learning
                        <ChevronRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="flex-1 overflow-hidden m-0 p-0">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                <Input placeholder="Search conversation history..." className="pl-10" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <h3 className="font-medium text-lg mb-4">Recent Conversations</h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Portfolio Diversification",
                    date: "Today",
                    preview: "How should I diversify my investments?",
                  },
                  { title: "Retirement Planning", date: "Yesterday", preview: "Am I on track for retirement?" },
                  { title: "Tax Strategies", date: "Mar 15", preview: "How can I reduce my investment taxes?" },
                  {
                    title: "Market Analysis",
                    date: "Mar 10",
                    preview: "What's your take on current market conditions?",
                  },
                  { title: "Emergency Fund", date: "Mar 5", preview: "How much should I keep in my emergency fund?" },
                ].map((conversation, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{conversation.title}</h4>
                      <span className="text-xs text-gray-500">{conversation.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">{conversation.preview}</p>
                    <div className="flex justify-end mt-2">
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsUp size={12} className="mr-1" />
                        Helpful
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Card>
    </div>
  )
}

