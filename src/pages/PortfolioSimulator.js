"use client"

import { useState, useEffect } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function PortfolioSimulator() {
  const [portfolio, setPortfolio] = useState([
    { name: "Stocks", value: 60 },
    { name: "Bonds", value: 30 },
    { name: "Cash", value: 10 },
  ])

  const [risk, setRisk] = useState("Moderate")
  const [expectedReturn, setExpectedReturn] = useState(7)

  const updatePortfolio = (index, newValue) => {
    const newPortfolio = [...portfolio]
    newPortfolio[index].value = Number(newValue)
    setPortfolio(newPortfolio)
  }

  useEffect(() => {
    // Simple risk and return calculation (in a real app, this would be more complex)
    const stockPercentage = portfolio.find((item) => item.name === "Stocks")?.value || 0
    if (stockPercentage < 40) {
      setRisk("Conservative")
      setExpectedReturn(5)
    } else if (stockPercentage > 70) {
      setRisk("Aggressive")
      setExpectedReturn(9)
    } else {
      setRisk("Moderate")
      setExpectedReturn(7)
    }
  }, [portfolio])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Portfolio Simulator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Asset Allocation</h2>
          {portfolio.map((item, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">{item.name}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={item.value}
                onChange={(e) => updatePortfolio(index, e.target.value)}
                className="w-full"
              />
              <span>{item.value}%</span>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Portfolio Visualization</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolio}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {portfolio.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Analysis</h2>
        <p>
          <strong>Risk Level:</strong> {risk}
        </p>
        <p>
          <strong>Expected Annual Return:</strong> {expectedReturn}%
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
          <p>Based on your current allocation, our AI suggests:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Consider increasing your bond allocation for more stability</li>
            <li>Explore international stocks for better diversification</li>
            <li>Maintain a cash reserve for short-term needs and opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

