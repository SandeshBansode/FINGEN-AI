"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function MarketAnalysis() {
  const [stockData, setStockData] = useState([])
  const [selectedStock, setSelectedStock] = useState("AAPL")

  useEffect(() => {
    // In a real app, this would fetch data from an API
    const mockData = [
      { date: "2023-01-01", AAPL: 150, GOOGL: 2800, MSFT: 310 },
      { date: "2023-02-01", AAPL: 155, GOOGL: 2850, MSFT: 315 },
      { date: "2023-03-01", AAPL: 160, GOOGL: 2900, MSFT: 320 },
      { date: "2023-04-01", AAPL: 165, GOOGL: 2950, MSFT: 325 },
      { date: "2023-05-01", AAPL: 170, GOOGL: 3000, MSFT: 330 },
    ]
    setStockData(mockData)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Market Analysis</h1>

      <div className="mb-6">
        <label htmlFor="stock-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Stock
        </label>
        <select
          id="stock-select"
          value={selectedStock}
          onChange={(e) => setSelectedStock(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="AAPL">Apple (AAPL)</option>
          <option value="GOOGL">Google (GOOGL)</option>
          <option value="MSFT">Microsoft (MSFT)</option>
        </select>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={stockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={selectedStock} stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">AI Market Insights</h2>
          <p className="text-gray-600">
            Based on recent trends and AI analysis, {selectedStock} shows strong potential for growth in the coming
            months. Key factors include upcoming product launches and positive market sentiment.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Risk Assessment</h2>
          <p className="text-gray-600">
            Current market volatility for {selectedStock} is moderate. Consider diversifying your portfolio to mitigate
            potential risks. Our AI recommends maintaining a balanced approach with a mix of growth and value stocks.
          </p>
        </div>
      </div>
    </div>
  )
}

