"use client"

import { useState } from "react"

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    investmentStyle: "Moderate",
    riskTolerance: "Medium",
    investmentGoals: ["Retirement", "Wealth Building"],
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // In a real app, you would send this data to your backend
    console.log("Updated user profile:", user)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="investmentStyle">
                Investment Style
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="investmentStyle"
                name="investmentStyle"
                value={user.investmentStyle}
                onChange={handleInputChange}
              >
                <option>Conservative</option>
                <option>Moderate</option>
                <option>Aggressive</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Investment Style:</strong> {user.investmentStyle}
            </p>
            <p>
              <strong>Risk Tolerance:</strong> {user.riskTolerance}
            </p>
            <p>
              <strong>Investment Goals:</strong> {user.investmentGoals.join(", ")}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">AI-Powered Insights</h2>
        <p className="text-gray-600 mb-4">Based on your profile and recent market trends, our AI suggests:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Consider increasing your exposure to technology sector ETFs</li>
          <li>Review your portfolio's international diversification</li>
          <li>Explore opportunities in sustainable investing aligned with your goals</li>
        </ul>
      </div>
    </div>
  )
}

