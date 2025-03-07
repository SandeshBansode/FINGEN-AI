"use client"

import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ChatBot } from "./components/ChatBot"
import { NewsTicker } from "./components/NewsTicker"
import Home from "./pages/Home"
import Learning from "./pages/Learning"
import Recommendations from "./pages/Recommendations"
import MarketInsights from "./pages/MarketInsights"
import Portfolio from "./pages/Portfolio"
import MarketAnalysis from "./pages/MarketAnalysis"
import EducationalResources from "./pages/EducationalResources"
import UserProfile from "./pages/UserProfile"
import PortfolioSimulator from "./pages/PortfolioSimulator"
import RiskAssessment from "./pages/RiskAssessment"
import FinancialGoals from "./pages/FinancialGoals"

function App() {
  const [showChat, setShowChat] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
        <NewsTicker />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow bg-gray-50 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/market-insights" element={<MarketInsights />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/market-analysis" element={<MarketAnalysis />} />
            <Route path="/educational-resources" element={<EducationalResources />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/portfolio-simulator" element={<PortfolioSimulator />} />
            <Route path="/risk-assessment" element={<RiskAssessment />} />
            <Route path="/financial-goals" element={<FinancialGoals />} />
          </Routes>
        </main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowChat(!showChat)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
          >
            {showChat ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            )}
          </button>
        </div>
        {showChat && <ChatBot onClose={() => setShowChat(false)} />}
      </div>
    </Router>
  )
}

export default App

