"use client"

import { useState } from "react"

const questions = [
  {
    id: 1,
    text: "How would you react if your investment lost 20% of its value in a year?",
    options: [
      { text: "Sell everything immediately", score: 1 },
      { text: "Sell some investments", score: 2 },
      { text: "Do nothing", score: 3 },
      { text: "Buy more at a lower price", score: 4 },
    ],
  },
  {
    id: 2,
    text: "What's your primary investment goal?",
    options: [
      { text: "Preserve my wealth", score: 1 },
      { text: "Generate steady income", score: 2 },
      { text: "Grow my wealth over time", score: 3 },
      { text: "Aggressively maximize returns", score: 4 },
    ],
  },
  {
    id: 3,
    text: "How long do you plan to hold your investments?",
    options: [
      { text: "Less than 1 year", score: 1 },
      { text: "1-3 years", score: 2 },
      { text: "3-7 years", score: 3 },
      { text: "More than 7 years", score: 4 },
    ],
  },
  // Add more questions as needed
]

export default function RiskAssessment() {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const handleAnswer = (questionId, score) => {
    setAnswers({ ...answers, [questionId]: score })
  }

  const calculateRiskProfile = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const averageScore = totalScore / questions.length

    if (averageScore <= 1.5) return "Very Conservative"
    if (averageScore <= 2.5) return "Conservative"
    if (averageScore <= 3.5) return "Moderate"
    return "Aggressive"
  }

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions before submitting.")
      return
    }
    const riskProfile = calculateRiskProfile()
    setResult(riskProfile)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Risk Assessment</h1>

      {!result ? (
        <div>
          {questions.map((question) => (
            <div key={question.id} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(question.id, option.score)}
                    className={`w-full text-left p-3 rounded ${
                      answers[question.id] === option.score ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
          >
            Submit Assessment
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Risk Profile: {result}</h2>
          <p className="mb-4">Based on your answers, our AI has determined your risk profile. Here's what it means:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your comfort level with investment risk is {result.toLowerCase()}.</li>
            <li>
              This profile suggests a{" "}
              {result === "Aggressive" ? "higher" : result === "Very Conservative" ? "lower" : "balanced"} allocation to
              stocks versus bonds.
            </li>
            <li>Consider discussing this result with a financial advisor to fine-tune your investment strategy.</li>
          </ul>
          <button
            onClick={() => setResult(null)}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Retake Assessment
          </button>
        </div>
      )}
    </div>
  )
}

