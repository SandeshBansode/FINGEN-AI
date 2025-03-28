"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Mic, Image, Paperclip, Settings, Download, MessageSquare, Bot, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI financial assistant. How can I help you today with your investments, financial planning, or market questions?",
      timestamp: new Date().toISOString(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState("advanced")
  const messagesEndRef = useRef(null)

  // Sample suggested questions
  const suggestedQuestions = [
    "What stocks should I consider for long-term growth?",
    "How should I diversify my portfolio?",
    "Explain dollar-cost averaging in simple terms",
    "What's the difference between ETFs and mutual funds?",
    "How much should I save for retirement?",
    "What are the tax implications of selling stocks?",
    "How do interest rate changes affect my investments?",
    "What's your analysis of the current market conditions?",
  ]

  // Sample conversation history
  const conversationHistory = [
    { id: 1, title: "Portfolio Diversification Strategy", date: "Apr 23, 2023", messages: 12 },
    { id: 2, title: "Retirement Planning Advice", date: "Apr 18, 2023", messages: 8 },
    { id: 3, title: "Tax-Loss Harvesting Explanation", date: "Apr 10, 2023", messages: 6 },
    { id: 4, title: "Market Volatility Discussion", date: "Apr 5, 2023", messages: 15 },
    { id: 5, title: "ETF vs. Individual Stocks", date: "Mar 28, 2023", messages: 9 },
  ]

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = {
        "What stocks should I consider for long-term growth?":
          "Based on your investment profile and goals, I'd recommend considering these growth-oriented stocks:\n\n1. **Technology Sector**: Companies like Microsoft (MSFT), Alphabet (GOOGL), and Amazon (AMZN) have strong fundamentals and are positioned well in cloud computing and AI.\n\n2. **Healthcare Innovation**: Companies like UnitedHealth Group (UNH) and Thermo Fisher Scientific (TMO) show consistent growth and innovation.\n\n3. **Renewable Energy**: Consider NextEra Energy (NEE) or Brookfield Renewable (BEP) for exposure to the growing clean energy transition.\n\nI'd recommend allocating no more than 5-7% of your portfolio to any single stock. Would you like me to analyze any of these specific companies in more detail?",

        "How should I diversify my portfolio?":
          "Based on your risk profile (moderate) and investment horizon (15+ years), here's a suggested diversification strategy:\n\n**Core Allocation (70%)**:\n- US Total Market Index Fund: 40%\n- International Developed Markets Fund: 20%\n- Emerging Markets Fund: 10%\n\n**Fixed Income (20%)**:\n- Investment Grade Bond Fund: 15%\n- TIPS or Inflation-Protected Securities: 5%\n\n**Alternative Investments (10%)**:\n- Real Estate (REIT) Fund: 5%\n- Commodities or Gold: 5%\n\nThis provides broad market exposure while maintaining a growth orientation suitable for your time horizon. I'd recommend rebalancing annually to maintain these target allocations. Would you like me to suggest specific funds for each category?",

        "Explain dollar-cost averaging in simple terms":
          "Dollar-cost averaging is a simple investment strategy where you invest a fixed amount of money at regular intervals, regardless of market conditions.\n\n**Here's how it works:**\n\n1. You decide on a fixed amount to invest (say $500)\n2. You choose a regular schedule (weekly, monthly, quarterly)\n3. You invest that same amount each period, no matter if the market is up or down\n\n**The benefits:**\n\n- You buy more shares when prices are low and fewer when prices are high\n- It reduces the impact of market volatility and timing risk\n- It creates a disciplined investing habit\n- It helps avoid emotional decisions based on market fluctuations\n\nFor example, if you invest $500 monthly in an S&P 500 index fund, some months you'll get more shares (when the market is down) and some months fewer (when the market is up), but over time you'll likely pay a lower average price per share than if you tried to time the market.\n\nWould you like me to show you a specific example with numbers?",

        "What's the difference between ETFs and mutual funds?":
          "**ETFs (Exchange-Traded Funds) and mutual funds are both investment vehicles that pool money from multiple investors to buy a diversified portfolio of assets, but they differ in several key ways:**\n\n**Trading:**\n- ETFs: Trade throughout the day like stocks, with prices changing constantly\n- Mutual Funds: Trade once per day after market close at the NAV (Net Asset Value)\n\n**Minimum Investment:**\n- ETFs: Can buy as little as one share (sometimes even fractional shares)\n- Mutual Funds: Often require minimum investments of $1,000-$3,000\n\n**Tax Efficiency:**\n- ETFs: Generally more tax-efficient due to their creation/redemption process\n- Mutual Funds: May generate more capital gains distributions, creating tax events\n\n**Fees:**\n- ETFs: Typically have lower expense ratios and no load fees\n- Mutual Funds: May have higher expense ratios, potential load fees, and 12b-1 fees\n\n**Transparency:**\n- ETFs: Most disclose holdings daily\n- Mutual Funds: Typically disclose holdings quarterly\n\n**Automatic Investments:**\n- ETFs: May require manual purchases (though some brokers offer automatic investing)\n- Mutual Funds: Easily set up automatic investments and dividend reinvestment\n\nBoth can be excellent investment vehicles depending on your specific needs. Would you like me to recommend which might be better for your situation?",

        default:
          "Based on my analysis of your financial situation and goals, I'd recommend focusing on these key areas:\n\n1. **Portfolio Diversification**: Your current allocation is heavily weighted toward technology stocks (42% of your portfolio). Consider reducing this to around 25-30% to decrease sector risk.\n\n2. **Retirement Planning**: Based on your current savings rate and retirement goals, you're on track to reach about 85% of your target. Consider increasing your 401(k) contributions by 2-3% to close this gap.\n\n3. **Tax Optimization**: There are several tax-loss harvesting opportunities in your portfolio that could save you approximately $1,200 in taxes this year.\n\nWould you like me to elaborate on any of these recommendations or provide specific action steps?",
      }

      // Get appropriate response or use default
      const responseContent = aiResponses[inputValue] || aiResponses["default"]

      const assistantMessage = {
        role: "assistant",
        content: responseContent,
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const handleSuggestedQuestion = (question) => {
    setInputValue(question)
    // Optional: automatically send the question
    // setMessages(prev => [...prev, { role: "user", content: question, timestamp: new Date().toISOString() }])
    // handleSendMessage()
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">AI Financial Assistant</h2>
          <p className="text-muted-foreground">Your personal AI advisor for all financial matters</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Model</SelectItem>
              <SelectItem value="advanced">Advanced Model</SelectItem>
              <SelectItem value="expert">Financial Expert Model</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 flex-1 overflow-hidden">
        {/* Sidebar */}
        <Card className="hidden lg:flex flex-col h-full">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <CardDescription>Your recent chat history</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                New Conversation
              </Button>

              <div className="space-y-2 mt-4">
                {conversationHistory.map((conversation) => (
                  <Button key={conversation.id} variant="ghost" className="w-full justify-start">
                    <div className="flex flex-col items-start">
                      <span className="font-medium truncate w-full text-left">{conversation.title}</span>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <span>{conversation.date}</span>
                        <span className="mx-1">•</span>
                        <span>{conversation.messages} messages</span>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="settings">
                <AccordionTrigger className="text-sm">Assistant Settings</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium">Language</label>
                      <Select defaultValue="en">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="zh">Chinese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium">Response Style</label>
                      <Select defaultValue="balanced">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="concise">Concise</SelectItem>
                          <SelectItem value="balanced">Balanced</SelectItem>
                          <SelectItem value="detailed">Detailed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardFooter>
        </Card>

        {/* Main Chat Area */}
        <Card className="flex flex-col h-full lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div>
              <CardTitle className="flex items-center">
                <Bot className="mr-2 h-5 w-5 text-blue-500" />
                Financial AI Assistant
              </CardTitle>
              <CardDescription>Powered by advanced financial models and market data</CardDescription>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Online
            </Badge>
          </CardHeader>

          <CardContent className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`flex gap-3 max-w-[80%] ${message.role === "assistant" ? "items-start" : "items-end flex-row-reverse"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "assistant" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                    }`}
                  >
                    {message.role === "assistant" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                  </div>
                  <div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "assistant"
                          ? "bg-gray-100 dark:bg-gray-800 rounded-tl-none"
                          : "bg-blue-100 dark:bg-blue-900 rounded-tr-none"
                      }`}
                    >
                      <div className="whitespace-pre-line">{message.content}</div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 px-1">{formatTimestamp(message.timestamp)}</div>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%] items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100 text-blue-600">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 rounded-tl-none">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                        <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex flex-wrap gap-2 mb-4">
              {suggestedQuestions.slice(0, 4).map((question, index) => (
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

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Image className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mic className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Ask me anything about finance or investing..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-2 text-xs text-muted-foreground text-center">
              Your AI assistant is trained on financial data up to April 2023
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

