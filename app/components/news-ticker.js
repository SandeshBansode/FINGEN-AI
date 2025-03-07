"use client"

import { useState, useEffect } from "react"

export function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const newsItems = [
    { text: "S&P 500 up 1.2% on tech earnings", trend: "up" },
    { text: "Federal Reserve signals potential rate cut", trend: "up" },
    { text: "Oil prices drop 3% amid supply concerns", trend: "down" },
    { text: "Tech sector leads market gains for third straight day", trend: "up" },
    { text: "Bitcoin surges 5% crossing $60,000 mark", trend: "up" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, []) // Removed unnecessary dependency: newsItems.length

  return (
    <div className="bg-gray-800 text-white py-1 px-4 overflow-hidden">
      <div className="flex items-center">
        <div className="mr-3 font-bold text-sm">MARKET NEWS</div>
        <div className="flex items-center">
          {newsItems[currentIndex].trend === "up" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-up text-green-400 mr-1"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-down text-red-400 mr-1"
            >
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
              <polyline points="16 17 22 17 22 11" />
            </svg>
          )}
          <span className="text-sm">{newsItems[currentIndex].text}</span>
        </div>
      </div>
    </div>
  )
}

