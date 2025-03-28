"use client"

import { useState } from "react"

export default function Learning() {
  const [activeModule, setActiveModule] = useState(null)
  const [aiQuestion, setAiQuestion] = useState("")

  const modules = [
    {
      id: 1,
      title: "Investment Basics",
      description: "Learn the fundamentals of investing and financial markets",
      lessons: [
        { id: "l1", title: "What is Investing?", duration: "10 min" },
        { id: "l2", title: "Types of Investment Assets", duration: "15 min" },
        { id: "l3", title: "Risk and Return", duration: "12 min" },
      ],
      progress: 0,
    },
    {
      id: 2,
      title: "Stock Market Fundamentals",
      description: "Understand how the stock market works and how to analyze stocks",
      lessons: [
        { id: "l4", title: "How Stock Markets Work", duration: "15 min" },
        { id: "l5", title: "Reading Stock Charts", duration: "20 min" },
        { id: "l6", title: "Fundamental Analysis", duration: "25 min" },
      ],
      progress: 0,
    },
    {
      id: 3,
      title: "Mutual Funds & ETFs",
      description: "Discover the benefits of diversified investment vehicles",
      lessons: [
        { id: "l7", title: "What are Mutual Funds?", duration: "12 min" },
        { id: "l8", title: "ETFs Explained", duration: "15 min" },
        { id: "l9", title: "Choosing the Right Fund", duration: "18 min" },
      ],
      progress: 0,
    },
    {
      id: 4,
      title: "Retirement Planning",
      description: "Plan for a secure financial future with retirement strategies",
      lessons: [
        { id: "l10", title: "Retirement Account Types", duration: "15 min" },
        { id: "l11", title: "Calculating Retirement Needs", duration: "20 min" },
        { id: "l12", title: "Withdrawal Strategies", duration: "18 min" },
      ],
      progress: 0,
    },
  ]

  const handleAskAI = (e) => {
    e.preventDefault()
    // In a real app, this would send the question to an AI service
    console.log("AI question asked:", aiQuestion)
    setAiQuestion("")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          AI-Powered Financial Learning
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Personalized financial education tailored to your knowledge level and goals
        </p>
      </div>

      {/* Learning Path Selector */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Learning Path</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our AI has created a personalized learning journey based on your goals. Start with the basics and progress to
          more advanced topics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                activeModule === module.id
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200 dark:border-gray-700"
              }`}
              onClick={() => setActiveModule(module.id === activeModule ? null : module.id)}
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{module.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{module.description}</p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${module.progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{module.progress}% complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Module Content */}
      {activeModule && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {modules.find((m) => m.id === activeModule)?.title}
          </h2>

          <div className="space-y-4">
            {modules
              .find((m) => m.id === activeModule)
              ?.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900 dark:text-white">{lesson.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{lesson.duration}</span>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                      Start Lesson
                    </button>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">AI-assisted</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* AI Learning Assistant */}
      <div className="mt-12 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">AI Learning Assistant</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Have questions about any financial topic? Ask our AI assistant for personalized explanations.
            </p>
            <form onSubmit={handleAskAI} className="mt-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Ask anything about investing..."
                  className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
                  Ask
                </button>
              </div>
            </form>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Example: "What's the difference between stocks and bonds?" or "Explain dollar-cost averaging"
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

