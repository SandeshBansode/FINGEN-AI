"use client"

import { useState } from "react"

export function MarketInsights() {
  const [activeTab, setActiveTab] = useState("overview")

  const marketData = {
    indices: [
      { name: "S&P 500", value: "4,782.82", change: "+1.2%", trend: "up" },
      { name: "Dow Jones", value: "38,239.98", change: "+0.8%", trend: "up" },
      { name: "Nasdaq", value: "15,927.90", change: "+1.6%", trend: "up" },
      { name: "Russell 2000", value: "2,043.92", change: "-0.3%", trend: "down" },
    ],
    topMovers: [
      { name: "Tech Co Inc", ticker: "TECH", price: "$342.50", change: "+8.2%", trend: "up" },
      { name: "Green Energy Ltd", ticker: "GREN", price: "$78.30", change: "+6.5%", trend: "up" },
      { name: "Retail Chain Corp", ticker: "RETL", price: "$124.90", change: "-5.2%", trend: "down" },
      { name: "Healthcare Solutions", ticker: "HLTH", price: "$210.75", change: "+4.8%", trend: "up" },
    ],
    aiInsights: [
      {
        title: "Tech Sector Momentum",
        content:
          "AI analysis indicates continued strength in technology stocks, driven by advancements in artificial intelligence and cloud computing. Consider increasing exposure to quality tech companies with strong fundamentals.",
        sentiment: "positive",
      },
      {
        title: "Interest Rate Impact",
        content:
          "Recent Federal Reserve comments suggest potential rate cuts in the coming months. This could benefit growth stocks and real estate investments, while potentially reducing returns on fixed-income securities.",
        sentiment: "neutral",
      },
      {
        title: "Consumer Spending Trends",
        content:
          "AI analysis of recent economic data shows weakening consumer spending in discretionary sectors. Consider reducing exposure to luxury retail and non-essential consumer goods in the near term.",
        sentiment: "negative",
      },
    ],
    news: [
      {
        title: "Federal Reserve Signals Potential Rate Cut",
        source: "Financial Times",
        time: "2 hours ago",
        summary:
          "The Federal Reserve has indicated it may consider rate cuts in the coming months as inflation shows signs of cooling.",
      },
      {
        title: "Tech Giants Report Strong Quarterly Earnings",
        source: "Wall Street Journal",
        time: "5 hours ago",
        summary:
          "Major technology companies exceeded analyst expectations in their latest earnings reports, driven by AI and cloud services growth.",
      },
      {
        title: "Oil Prices Surge Amid Supply Concerns",
        source: "Bloomberg",
        time: "8 hours ago",
        summary:
          "Crude oil prices have risen sharply due to geopolitical tensions and production constraints in key oil-producing regions.",
      },
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">AI-Powered Market Insights</h1>
        <p className="mt-4 text-xl text-gray-600">
          Real-time market analysis and AI-generated investment opportunities
        </p>
      </div>

      {/* Market Overview */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-bold">Market Overview</h2>
          <p className="text-sm text-gray-500">Last updated: Today, 3:45 PM</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketData.indices.map((index, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-600">{index.name}</h3>
              <p className="text-xl font-bold mt-1">{index.value}</p>
              <p className={`mt-1 ${index.trend === "up" ? "text-green-600" : "text-red-600"} flex items-center`}>
                {index.trend === "up" ? (
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
                    className="lucide lucide-trending-up mr-1"
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
                    className="lucide lucide-trending-down mr-1"
                  >
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                    <polyline points="16 17 22 17 22 11" />
                  </svg>
                )}
                {index.change}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {["overview", "insights", "news", "watchlist"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div>
              <h3 className="text-lg font-bold mb-4">Today's Top Movers</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Company
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ticker
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Change
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {marketData.topMovers.map((stock, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.ticker}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.price}</td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm ${stock.trend === "up" ? "text-green-600" : "text-red-600"}`}
                        >
                          {stock.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Sector Performance</h3>
                <div className="bg-gray-100 p-4 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Sector Performance Chart</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "insights" && (
            <div>
              <h3 className="text-lg font-bold mb-4">AI-Generated Market Insights</h3>
              <div className="space-y-6">
                {marketData.aiInsights.map((insight, i) => (
                  <div
                    key={i}
                    className={`border-l-4 p-4 rounded-r-lg ${
                      insight.sentiment === "positive"
                        ? "border-green-500 bg-green-50"
                        : insight.sentiment === "negative"
                          ? "border-red-500 bg-red-50"
                          : "border-yellow-500 bg-yellow-50"
                    }`}
                  >
                    <h4 className="font-bold">{insight.title}</h4>
                    <p className="mt-2 text-gray-600">{insight.content}</p>
                    <div className="mt-2 flex items-center">
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
                        className="lucide lucide-brain text-blue-600 mr-1"
                      >
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                      </svg>
                      <span className="text-xs text-gray-500">AI-generated insight</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Personalized Investment Opportunities</h3>
                <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                  <p className="text-gray-600 mb-4">
                    Based on your investment profile and current market conditions, our AI has identified these
                    potential opportunities:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check text-green-600 mr-2 mt-1"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>
                        Consider increasing allocation to technology sector ETFs to capitalize on AI growth trends
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check text-green-600 mr-2 mt-1"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>
                        Potential opportunity in healthcare innovation funds as the sector shows signs of recovery
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check text-green-600 mr-2 mt-1"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>
                        Consider reducing exposure to consumer discretionary stocks given current economic indicators
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "news" && (
            <div>
              <h3 className="text-lg font-bold mb-4">Market News & Analysis</h3>
              <div className="space-y-6">
                {marketData.news.map((item, i) => (
                  <div key={i} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span>{item.source}</span>
                      <span className="mx-2">•</span>
                      <span>{item.time}</span>
                    </div>
                    <p className="mt-2">{item.summary}</p>
                    <div className="mt-3 flex justify-between">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Read full article
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center">
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
                          className="lucide lucide-brain mr-1"
                        >
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                        </svg>
                        Get AI summary
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "watchlist" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Your Watchlist</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
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
                    className="lucide lucide-plus mr-1"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  Add to watchlist
                </button>
              </div>

              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-list-plus mx-auto text-gray-400"
                >
                  <path d="M11 12H3" />
                  <path d="M16 6H3" />
                  <path d="M16 18H3" />
                  <path d="M18 9v6" />
                  <path d="M21 12h-6" />
                </svg>
                <h4 className="mt-4 font-medium text-gray-900">Your watchlist is empty</h4>
                <p className="mt-2 text-gray-600">Add stocks, ETFs, or cryptocurrencies to track their performance</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Create Watchlist
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Market Prediction */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
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
                className="lucide lucide-trending-up text-white"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">AI Market Prediction</h3>
            <div className="mt-2 text-gray-600">
              <p className="mb-2">Based on analysis of market trends, economic indicators, and sentiment analysis:</p>
              <div className="bg-white p-4 rounded-lg border border-gray-200 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Market Outlook (Next 30 Days)</span>
                  <span className="text-green-600 font-medium">Moderately Bullish</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>S&P 500 Prediction</span>
                      <span className="text-green-600">+2.5% to +4.0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Volatility Expectation</span>
                      <span className="text-yellow-600">Moderate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
              <span>View detailed forecast</span>
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
                className="lucide lucide-arrow-right ml-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

