"use client"

import { useState } from "react"

export default function FinancialGoals() {
  const [goals, setGoals] = useState([
    { id: 1, name: "Emergency Fund", target: 10000, current: 5000, deadline: "2023-12-31" },
    { id: 2, name: "Down Payment for House", target: 50000, current: 20000, deadline: "2025-06-30" },
    { id: 3, name: "Retirement Savings", target: 1000000, current: 100000, deadline: "2050-01-01" },
  ])

  const [newGoal, setNewGoal] = useState({ name: "", target: "", current: "", deadline: "" })

  const handleAddGoal = (e) => {
    e.preventDefault()
    if (newGoal.name && newGoal.target && newGoal.deadline) {
      setGoals([
        ...goals,
        { ...newGoal, id: Date.now(), target: Number(newGoal.target), current: Number(newGoal.current) || 0 },
      ])
      setNewGoal({ name: "", target: "", current: "", deadline: "" })
    }
  }

  const calculateProgress = (current, target) => {
    return Math.min((current / target) * 100, 100).toFixed(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Financial Goals Tracking</h1>

      <div className="grid gap-6 mb-8">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{goal.name}</h2>
            <p className="text-gray-600 mb-2">Target: ${goal.target.toLocaleString()}</p>
            <p className="text-gray-600 mb-2">Current: ${goal.current.toLocaleString()}</p>
            <p className="text-gray-600 mb-4">Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {calculateProgress(goal.current, goal.target)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${calculateProgress(goal.current, goal.target)}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add New Goal</h2>
        <form onSubmit={handleAddGoal} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Goal Name</label>
            <input
              type="text"
              value={newGoal.name}
              onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Target Amount ($)</label>
            <input
              type="number"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Amount ($)</label>
            <input
              type="number"
              value={newGoal.current}
              onChange={(e) => setNewGoal({ ...newGoal, current: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Deadline</label>
            <input
              type="date"
              value={newGoal.deadline}
              onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Add Goal
          </button>
        </form>
      </div>
    </div>
  )
}

