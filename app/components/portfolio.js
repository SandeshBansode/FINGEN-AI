"use client"

import { useState } from "react"

export function Portfolio() {
  const [connected, setConnected] = useState(false)
  const [optimizing, setOptimizing] = useState(false)

  const portfolioData = {
    totalValue: "$124,567.89",
    totalGrowth: "+12.4%",
    allocation: [
      { name: "Stocks", value: 60, color: "#3B82F6" },
      { name: "Bonds", value: 20, color: "#10B981" },
      { name: "Cash", value: 10, color: "#F59E0B" },
      { name: "Alternatives", value: 10, color: "#EF4444" },
    ],
    accounts: [
      { name: "Retirement Account", value: "$78,234.56", growth: "+8.2%", trend: "up" },
      { name: "Brokerage Account", value: "$32,456.78", growth: "+18.5%", trend: "up" },
      { name: "Savings Account", value: "$13,876.55", growth: "+1.2%", trend: "up" },
    ],
    holdings: [
      {
        name: "Tech Growth ETF",
        ticker: "TECH",
        value: "$28,456.78",
        growth: "+22.4%",
        trend: "up",
        risk: "Medium-High",
      },
      { name: "S&P 500 Index Fund", ticker: "SPY", value: "$35,678.90", growth: "+15.2%", trend: "up", risk: "Medium" },
      { name: "Corporate Bond Fund", ticker: "BOND", value: "$24,567.89", growth: "+3.5%", trend: "up", risk: "Low" },
      {
        name: "Real Estate Trust",
        ticker: "REIT",
        value: "$12,345.67",
        growth: "-2.8%",
        trend: "down",
        risk: "Medium",
      },
      { name: "Cash Reserve", ticker: "CASH", value: "$13,876.55", growth: "+1.2%", trend: "up", risk: "Very Low" },
    ],
    optimizationSuggestions: [
      {
        action: "Reduce",
        asset: "Real Estate Trust (REIT)",
        reason: "Underperforming sector",
        impact: "+1.2% expected return",
      },
      {
        action: "Increase",
        asset: "Tech Growth ETF (TECH)",
        reason: "Strong growth potential",
        impact: "+2.5% expected return",
      },
      {
        action: "Rebalance",
        asset: "Bond allocation",
        reason: "Interest rate sensitivity",
        impact: "Reduced volatility",
      },
    ],
  }

  const handleConnectAccounts = () => {
    // In a real app, this would open an account connection flow
    setConnected(true)
  }

  const handleOptimizePortfolio = () => {
    setOptimizing(true)
    // Simulate optimization process
    setTimeout(() => {
      setOptimizing(false)
    }, 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Portfolio Tracking & Management
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Track, manage, and optimize your investments with AI-powered insights
        </p>
      </div>

      {!connected ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
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
            className="lucide lucide-link mx-auto text-blue-500"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Connect Your Investment Accounts</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Link your brokerage, retirement, and bank accounts to get a complete view of your financial portfolio.
          </p>
          <button
            onClick={handleConnectAccounts}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium"
          >
            Connect Accounts
          </button>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            We use bank-level encryption to keep your data secure. We never store your credentials.
          </p>
        </div>
      ) : (
        <>
          {/* Portfolio Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio Overview</h2>
              <div className="mt-2 md:mt-0">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{portfolioData.totalValue}</span>
                <span
                  className={`ml-2 ${portfolioData.totalGrowth.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                >
                  {portfolioData.totalGrowth}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Asset Allocation Chart */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Asset Allocation</h3>
                <div className="h-48 relative">
                  {/* This would be a real chart in a production app */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-8 border-gray-200 dark:border-gray-600 relative">
                      {portfolioData.allocation.map((asset, index) => (
                        <div
                          key={index}
                          className="absolute inset-0"
                          style={{
                            borderWidth: "16px",
                            borderColor: `${asset.color} transparent transparent transparent`,
                            borderRadius: "50%",
                            transform: `rotate(${index * 90}deg)`,
                            clipPath: `polygon(50% 50%, 100% 0, 100% 50%, 50% 50%)`,
                          }}
                        ></div>
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-medium">Allocation</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {portfolioData.allocation.map((asset, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: asset.color }}></div>
                      <span className="text-sm dark:text-gray-300">
                        {asset.name}: {asset.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connected Accounts */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Connected Accounts</h3>
                <div className="space-y-4">
                  {portfolioData.accounts.map((account, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">{account.name}</span>
                      <div className="text-right">
                        <div className="font-medium text-gray-900 dark:text-white">{account.value}</div>
                        <div className={account.trend === "up" ? "text-green-600" : "text-red-600"}>
                          {account.growth}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
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
                    className="lucide lucide-plus-circle mr-1"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                  <span>Add account</span>
                </button>
              </div>

              {/* Risk Analysis */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">AI Risk Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Overall Portfolio Risk</span>
                      <span className="text-yellow-600 font-medium">Medium</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Diversification Score</span>
                      <span className="text-green-600 font-medium">Good</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Market Volatility Exposure</span>
                      <span className="text-yellow-600 font-medium">Moderate</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "55%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
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
                      className="lucide lucide-brain text-blue-500 mr-1"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                    </svg>
                    <span>AI-powered risk assessment updated daily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Holdings Table */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Holdings</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Asset
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Ticker
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Growth
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      AI Forecast
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {portfolioData.holdings.map((holding, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {holding.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {holding.ticker}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {holding.value}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${holding.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {holding.growth}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            holding.risk === "Low" || holding.risk === "Very Low"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : holding.risk === "Medium" || holding.risk === "Medium-Low"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          }`}
                        >
                          {holding.risk}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          {holding.trend === "up" ? (
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
                              className="lucide lucide-trending-up text-green-600 mr-1"
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
                              className="lucide lucide-trending-down text-red-600 mr-1"
                            >
                              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                              <polyline points="16 17 22 17 22 11" />
                            </svg>
                          )}
                          <span>{holding.trend === "up" ? "Positive" : "Negative"}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Portfolio Optimization */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI Portfolio Optimization</h2>
              <button
                onClick={handleOptimizePortfolio}
                disabled={optimizing}
                className="mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center disabled:opacity-50"
              >
                {optimizing ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Optimizing...
                  </>
                ) : (
                  <>
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
                      className="lucide lucide-sparkles mr-1"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                    Optimize Portfolio
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4">
              {portfolioData.optimizationSuggestions.map((suggestion, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 rounded-full p-2 ${
                        suggestion.action === "Increase"
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200"
                          : suggestion.action === "Reduce"
                            ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200"
                            : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {suggestion.action === "Increase" ? (
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
                          className="lucide lucide-arrow-up-right"
                        >
                          <path d="m7 7 10 10" />
                          <path d="M17 7v10H7" />
                        </svg>
                      ) : suggestion.action === "Reduce" ? (
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
                          className="lucide lucide-arrow-down-right"
                        >
                          <path d="m7 7 10 10" />
                          <path d="M17 7h-10v10" />
                        </svg>
                      ) : (
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
                          className="lucide lucide-refresh-cw"
                        >
                          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                          <path d="M21 3v5h-5" />
                          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                          <path d="M3 21v-5h5" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {suggestion.action} {suggestion.asset}
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">{suggestion.reason}</p>
                      <div className="mt-2 text-sm font-medium text-green-600">{suggestion.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
              <div className="flex items-start">
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
                  className="lucide lucide-lightbulb text-blue-600 dark:text-blue-400 mr-2"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">AI Insight</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Based on your investment goals and market conditions, these optimizations could improve your
                    expected annual return by 2.8% while maintaining a similar risk profile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Forecast */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI Performance Forecast</h2>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg h-64 flex items-center justify-center mb-6">
              <p className="text-gray-500 dark:text-gray-400">Interactive Performance Forecast Chart</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 dark:text-white">1-Year Forecast</h3>
                <div className="mt-2">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+8.5% to +12.3%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Expected return range</p>
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
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
                      className="lucide lucide-info text-blue-500 mr-1"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <span>Based on 10,000 simulations</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 dark:text-white">5-Year Forecast</h3>
                <div className="mt-2">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+42% to +68%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Expected return range</p>
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
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
                      className="lucide lucide-info text-blue-500 mr-1"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <span>Compound annual growth rate</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 dark:text-white">Retirement Projection</h3>
                <div className="mt-2">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">On Track</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">For your retirement goal</p>
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
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
                      className="lucide lucide-info text-blue-500 mr-1"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <span>Based on current savings rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

