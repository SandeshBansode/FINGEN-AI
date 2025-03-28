"use client"

import { useState } from "react"

export default function Recommendations() {
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
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Personalized Investment Recommendations
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          AI-powered investment suggestions tailored to your financial goals and risk tolerance
        </p>
      </div>

      {/* User Preferences */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Your Investment Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Risk Tolerance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Risk Tolerance</label>
            <select
              value={riskLevel}
              onChange={(e) => setRiskLevel(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">How much risk are you comfortable with?</p>
          </div>

          {/* Time Horizon */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Time Horizon</label>
            <select
              value={timeHorizon}
              onChange={(e) => setTimeHorizon(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="short">Short (1-3 years)</option>
              <option value="medium">Medium (3-10 years)</option>
              <option value="long">Long (10+ years)</option>
            </select>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">When will you need this money?</p>
          </div>

          {/* Investment Goal */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Investment Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="growth">Growth</option>
              <option value="income">Income</option>
              <option value="preservation">Capital Preservation</option>
              <option value="retirement">Retirement</option>
            </select>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">What are you investing for?</p>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Update Recommendations
          </button>
        </div>
      </div>

      {/* Portfolio Allocation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Recommended Portfolio Allocation</h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg h-64 flex items-center justify-center">
              {/* This would be a chart in a real app */}
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 mb-2">Portfolio Allocation Chart</p>
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
                      <span className="text-xs text-gray-600 dark:text-gray-300">
                        {item.name.split(" ")[0]}: {item.allocation}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Expected Annual Return</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">7-9%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Based on historical performance</p>
            </div>
          </div>

          <div className="md:w-2/3 md:pl-6">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Recommended Investments</h3>

            <div className="space-y-4">
              {getRecommendationSet().map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">{item.allocation}%</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">of portfolio</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                  <div className="mt-3 flex justify-between text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Risk: </span>
                      <span
                        className={
                          item.risk === "Low" || item.risk === "Very Low"
                            ? "text-green-600 dark:text-green-400"
                            : item.risk === "Medium" || item.risk === "Low-Medium"
                              ? "text-yellow-600 dark:text-yellow-400"
                              : "text-red-600 dark:text-red-400"
                        }
                      >
                        {item.risk}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Expected Return: </span>
                      <span className="font-medium text-gray-900 dark:text-white">{item.expectedReturn}</span>
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
                        ? "text-green-600 dark:text-green-400"
                        : risk.color === "yellow"
                          ? "text-yellow-600 dark:text-yellow-400"
                          : "text-red-600 dark:text-red-400"
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
                      className="h-5 w-5 text-yellow-500 mr-1 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Market volatility exposure:{" "}
                      {riskLevel === "conservative" ? "Low" : riskLevel === "moderate" ? "Medium" : "High"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-1 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Interest rate sensitivity:{" "}
                      {riskLevel === "conservative" ? "High" : riskLevel === "moderate" ? "Medium" : "Low"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-1 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
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
                  className={`text-lg font-bold ${riskLevel === "conservative" ? "text-green-600 dark:text-green-400" : riskLevel === "moderate" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}
                >
                  {riskLevel === "conservative" ? "+4-6%" : riskLevel === "moderate" ? "+7-10%" : "+10-15%"}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">5 Years</h4>
                <p
                  className={`text-lg font-bold ${riskLevel === "conservative" ? "text-green-600 dark:text-green-400" : riskLevel === "moderate" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}
                >
                  {riskLevel === "conservative" ? "+20-30%" : riskLevel === "moderate" ? "+40-55%" : "+60-80%"}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">10 Years</h4>
                <p
                  className={`text-lg font-bold ${riskLevel === "conservative" ? "text-green-600 dark:text-green-400" : riskLevel === "moderate" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}
                >
                  {riskLevel === "conservative" ? "+45-65%" : riskLevel === "moderate" ? "+90-120%" : "+150-200%"}
                </p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span>
                Forecasts based on 10,000+ AI-powered simulations using historical data and current market trends
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">AI Investment Insights</h3>
            <div className="mt-2 text-gray-600 dark:text-gray-300">
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
            <button className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center">
              <span>Get detailed AI analysis</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

