"use client"

import { useState } from "react"
import { Home } from "./components/home"
import { Learning } from "./components/learning"
import { Recommendations } from "./components/recommendations"
import { MarketInsights } from "./components/market-insights"
import { Portfolio } from "./components/portfolio"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { ChatBot } from "./components/chatbot"
import { NewsTicker } from "./components/news-ticker"

export default function FinancialAssistant() {
  const [activeTab, setActiveTab] = useState("home")
  const [showChat, setShowChat] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />
      case "learning":
        return <Learning />
      case "recommendations":
        return <Recommendations />
      case "insights":
        return <MarketInsights />
      case "portfolio":
        return <Portfolio />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <NewsTicker />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">{renderContent()}</main>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        >
          {showChat ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          )}
        </button>
      </div>
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
      <Footer />
    </div>
  )
}

