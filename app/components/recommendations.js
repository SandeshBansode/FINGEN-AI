"use client"

import { useState } from "react"

export function Recommendations() {
  const [riskLevel, setRiskLevel] = useState("moderate")
  const [timeHorizon, setTimeHorizon] = useState("medium")
  const [goal, setGoal] = useState("growth")

  const recommendations = {
    conservative: [
      {
        name: "Treasury Bond ETF",
        type: "Bond ETF",
        risk: "Low",
        expectedReturn: "3-4%",
        allocation: 40,
        description: "A fund that invests in U.S. Treasury bonds, offering stable returns with minimal risk.",
      },
      {
        name: "Blue Chip Dividend Fund",
        type: "Stock Fund",
        risk: "Low-Medium",
        expectedReturn: "4-6%",
        allocation: 30,
        description: "Invests in established companies with a history of paying dividends.",
      },
      {
        name: "Corporate Bond Fund",
        type: "Bond Fund",
        risk: "Low-Medium",
        expectedReturn: "4-5%",
        allocation: 20,
        description: "Invests in investment-grade corporate bonds for steady income.",
      },
      {
        name: "Money Market Fund",
        type: "Cash Equivalent",
        risk: "Very Low",
        expectedReturn: "2-3%",
        allocation: 10,
        description: "Highly liquid investments for capital preservation and modest returns.",
      },
    ],
    moderate: [
      {
        name: "S&P 500 Index Fund",
        type: "Stock Index Fund",
        risk: "Medium",
        expectedReturn: "7-9%",
        allocation: 40,
        description: "Tracks the performance of the 500 largest U.S. companies.",
      },
      {
        name: "Global Equity Fund",
        type: "International Stock Fund",
        risk: "Medium",
        expectedReturn: "6-8%",
        allocation: 25,
        description: "Invests in stocks from developed and emerging markets worldwide.",
      },
      {
        name: "Corporate Bond Fund",
        type: "Bond Fund",
        risk: "Low-Medium",
        expectedReturn: "4-5%",
        allocation: 25,
        description: "Invests in investment-grade corporate bonds for steady income.",
      },
      {
        name: "Real Estate Investment Trust",
        type: "REIT",
        risk: "Medium",
        expectedReturn: "5-7%",
        allocation: 10,
        description: "Invests in income-producing real estate properties.",
      },
    ],
    aggressive: [
      {
        name: "Growth Stock Fund",
        type: "Stock Fund",
        risk: "High",
        expectedReturn: "10-12%",
        allocation: 50,
        description: "Focuses on companies with high growth potential but higher volatility.",
      },
      {
        name: "Small Cap Index Fund",
        type: "Stock Fund",
        risk: "High",
        expectedReturn: "9-11%",
        allocation: 20,
        description: "Invests in smaller companies with high growth potential.",
      },
      {
        name: "Emerging Markets Fund",
        type: "International Stock Fund",
        risk: "High",
        expectedReturn: "8-12%",
        allocation: 20,
        description: "Invests in stocks from rapidly developing economies.",
      },
      {
        name: "Technology Sector Fund",
        type: "Sector Fund",
        risk: "Very High",
        expectedReturn: "10-15%",
        allocation: 10,
        description: "Concentrated investments in technology companies.",
      },
    ],
  }

  const getRecommendationSet = () => {
    if (riskLevel === "conservative") return recommendations.conservative
    if (riskLevel === "aggressive") return recommendations.aggressive
    return recommendations.moderate
  }

  const getRiskLevel = (level) => {
    switch (level) {
      case "conservative":
        return { level: "Low", color: "green", percentage: 30 }
      case "moderate":
        return { level: "Medium", color: "yellow", percentage: 60 }
      case "aggressive":
        return { level: "High", color: "red", percentage: 90 }
      default:
        return { level: "Medium", color: "yellow", percentage: 60 }
    }
  }

  const risk = getRiskLevel(riskLevel)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Personalized Investment Recommendations</h1>
        <p className="mt-4 text-xl text-gray-600">
          AI-powered investment suggestions tailored to your financial goals and risk tolerance
        </p>
      </div>

      {/* User Preferences */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6">Your Investment Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Risk Tolerance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Risk Tolerance</label>
            <select
              value={riskLevel}
              onChange={(e) => setRiskLevel(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
            <p className="mt-1 text-sm text-gray-500">How much risk are you comfortable with?</p>
          </div>

          {/* Time Horizon */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Horizon</label>
            <select
              value={timeHorizon}
              onChange={(e) => setTimeHorizon(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="short">Short (1-3 years)</option>
              <option value="medium">Medium (3-10 years)</option>
              <option value="long">Long (10+ years)</option>
            </select>
            <p className="mt-1 text-sm text-gray-500">When will you need this money?</p>
          </div>

          {/* Investment Goal */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Investment Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="growth">Growth</option>
              <option value="income">Income</option>
              <option value="preservation">Capital Preservation</option>
              <option value="retirement">Retirement</option>
            </select>
            <p className="mt-1 text-sm text-gray-500">What are you investing for?</p>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Update Recommendations
          </button>
        </div>
      </div>

      {/* Portfolio Allocation */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6">Recommended Portfolio Allocation</h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="bg-gray-100 p-4 rounded-lg h-64 flex items-center justify-center">
              {/* This would be a chart in a real app */}
              <div className="text-center">
                <p className="text-gray-500 mb-2">Portfolio Allocation Chart</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {getRecommendationSet().map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-1"
                        style={{
                          backgroundColor:
                            index === 0 ? "#3B82F6" : index === 1 ? "#10B981" : index === 2 ? "#F59E0B" : "#EF4444",
                        }}
                      ></div>
                      <span className="text-xs">
                        {item.name.split(" ")[0]}: {item.allocation}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-lg">Expected Annual Return</h3>
              <p className="text-2xl font-bold text-blue-600">7-9%</p>
              <p className="text-sm text-gray-500">Based on historical performance</p>
            </div>
          </div>

          <div className="md:w-2/3 md:pl-6">
            <h3 className="font-bold text-lg mb-4">Recommended Investments</h3>

            <div className="space-y-4">
              {getRecommendationSet().map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{item.allocation}%</p>
                      <p className="text-sm text-gray-600">of portfolio</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">{item.description}</p>
                  </div>
                  <div className="mt-3 flex justify-between text-sm">
                    <div>
                      <span className="text-gray-600">Risk: </span>
                      <span
                        className={
                          item.risk === "Low" || item.risk === "Very Low"
                            ? "text-green-600"
                            : item.risk === "Medium" || item.risk === "Low-Medium"
                              ? "text-yellow-600"
                              : "text-red-600"
                        }
                      >
                        {item.risk}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Expected Return: </span>
                      <span className="font-medium">{item.expectedReturn}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Risk Analysis & Forecasting */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Automated Risk Analysis & Forecasting</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Risk Assessment</h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Overall Portfolio Risk</span>
                  <span
                    className={`font-medium ${
                      risk.color === "green"
                        ? "text-green-600"
                        : risk.color === "yellow"
                          ? "text-yellow-600"
                          : "text-red-600"
                    }`}
                  >
                    {risk.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      risk.color === "green" ? "bg-green-500" : risk.color === "yellow" ? "bg-yellow-500" : "bg-red-500"
                    }`}
                    style={{ width: `${risk.percentage}%` }}
                  ></div>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Based on your selected risk tolerance and investment goals
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Risk Factors</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
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
                      className="lucide lucide-alert-circle text-yellow-500 mr-1 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Market volatility exposure:{" "}
                      {riskLevel === "conservative" ? "Low" : riskLevel === "moderate" ? "Medium" : "High"}
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-alert-circle text-yellow-500 mr-1 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Interest rate sensitivity:{" "}
                      {riskLevel === "conservative" ? "High" : riskLevel === "moderate" ? "Medium" : "Low"}
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-alert-circle text-yellow-500 mr-1 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Diversification level:{" "}
                      {riskLevel === "conservative" ? "High" : riskLevel === "moderate" ? "Medium" : "Focused"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">AI-Driven Forecasting</h3>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg h-48 flex items-center justify-center mb-4">
              <p className="text-gray-500 dark:text-gray-400">Interactive Forecast Chart</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">1 Year</h4>
                <p
                  className={`text-lg font-bold ${riskLevel === "conservative" ? "text-green-600" : riskLevel === "moderate" ? "text-blue-600" : "text-purple-600"}`}
                >
                  {riskLevel === "conservative" ? "+4-6%" : riskLevel === "moderate" ? "+7-10%" : "+10-15%"}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">5 Years</h4>
                <p
                  className={`text-lg font-bold ${riskLevel === "conservative" ? "text-green-600" : riskLevel === "moderate" ? "text-blue-600" : "text-purple-600"}`}
                >
                  {riskLevel === "conservative" ? "+20-30%" : riskLevel === "moderate" ? "+40-55%" : "+60-80%"}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">10 Years</h4>
                <p
                  className={`text-lg font-bold ${riskLevel === "conservative" ? "text-green-600" : riskLevel === "moderate" ? "text-blue-600" : "text-purple-600"}`}
                >
                  {riskLevel === "conservative" ? "+45-65%" : riskLevel === "moderate" ? "+90-120%" : "+150-200%"}
                </p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 flex items-center">
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
              <span>
                Forecasts based on 10,000+ AI-powered simulations using historical data and current market trends
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
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
                className="lucide lucide-lightbulb text-white"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">AI Investment Insights</h3>
            <div className="mt-2 text-gray-600">
              <p className="mb-2">
                Based on your {riskLevel} risk profile and {timeHorizon} time horizon, our AI recommends:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Focus on diversification across asset classes to balance risk and return</li>
                <li>Consider dollar-cost averaging to reduce the impact of market volatility</li>
                <li>Review and rebalance your portfolio quarterly to maintain your target allocation</li>
                <li>For your {goal} goal, prioritize investments with consistent growth potential</li>
              </ul>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
              <span>Get detailed AI analysis</span>
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

