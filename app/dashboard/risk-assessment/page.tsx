"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  Shield,
  TrendingUp,
  BarChart,
  Info,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Clock,
  RefreshCw,
  Download,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Risk assessment questions
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
  {
    id: 4,
    text: "How much investment experience do you have?",
    options: [
      { text: "None", score: 1 },
      { text: "Some basic knowledge", score: 2 },
      { text: "Moderate experience", score: 3 },
      { text: "Extensive experience", score: 4 },
    ],
  },
  {
    id: 5,
    text: "What percentage of your total assets are you planning to invest?",
    options: [
      { text: "Less than 10%", score: 1 },
      { text: "10-25%", score: 2 },
      { text: "25-50%", score: 3 },
      { text: "More than 50%", score: 4 },
    ],
  },
  {
    id: 6,
    text: "How important is liquidity (ability to quickly access your money) to you?",
    options: [
      { text: "Very important", score: 1 },
      { text: "Somewhat important", score: 2 },
      { text: "Not very important", score: 3 },
      { text: "Not important at all", score: 4 },
    ],
  },
  {
    id: 7,
    text: "Which statement best describes your attitude toward investment risk?",
    options: [
      { text: "I avoid risk at all costs", score: 1 },
      { text: "I'm cautious but willing to accept small risks", score: 2 },
      { text: "I'm comfortable with moderate risk for better returns", score: 3 },
      { text: "I embrace risk for potentially higher returns", score: 4 },
    ],
  },
]

// Portfolio allocation recommendations based on risk profile
const portfolioRecommendations = {
  "Very Conservative": {
    stocks: 20,
    bonds: 60,
    cash: 15,
    alternatives: 5,
    description:
      "This conservative allocation focuses on capital preservation with minimal risk. It's suitable for investors with a short time horizon or low risk tolerance.",
    expectedReturn: "2-4%",
    volatility: "Low",
    timeHorizon: "1-3 years",
  },
  Conservative: {
    stocks: 35,
    bonds: 45,
    cash: 10,
    alternatives: 10,
    description:
      "This allocation balances safety with modest growth potential. It's appropriate for investors with a medium-short time horizon and below-average risk tolerance.",
    expectedReturn: "3-5%",
    volatility: "Low to Medium",
    timeHorizon: "3-5 years",
  },
  Moderate: {
    stocks: 55,
    bonds: 30,
    cash: 5,
    alternatives: 10,
    description:
      "This balanced allocation aims for moderate growth with moderate risk. It suits investors with a medium time horizon and average risk tolerance.",
    expectedReturn: "5-7%",
    volatility: "Medium",
    timeHorizon: "5-10 years",
  },
  Aggressive: {
    stocks: 75,
    bonds: 15,
    cash: 0,
    alternatives: 10,
    description:
      "This growth-oriented allocation seeks higher returns with higher risk. It's designed for investors with a long time horizon and above-average risk tolerance.",
    expectedReturn: "7-9%",
    volatility: "High",
    timeHorizon: "10+ years",
  },
  "Very Aggressive": {
    stocks: 90,
    bonds: 0,
    cash: 0,
    alternatives: 10,
    description:
      "This aggressive allocation maximizes growth potential with significant risk. It's suitable only for investors with a very long time horizon and high risk tolerance.",
    expectedReturn: "8-12%",
    volatility: "Very High",
    timeHorizon: "15+ years",
  },
}

// Risk metrics explanations
const riskMetricsExplanations = [
  {
    title: "Volatility",
    description:
      "Measures how much an investment's returns fluctuate over time. Higher volatility means more dramatic price swings.",
    importance:
      "Understanding volatility helps set realistic expectations about the ups and downs of your investments.",
  },
  {
    title: "Maximum Drawdown",
    description:
      "The largest percentage drop from a peak to a trough in an investment's value before a new peak is achieved.",
    importance: "Helps you understand the worst-case scenario you might face with your investments.",
  },
  {
    title: "Sharpe Ratio",
    description:
      "Measures the risk-adjusted return of an investment. A higher Sharpe ratio indicates better risk-adjusted performance.",
    importance: "Helps you compare investments by considering both returns and risk.",
  },
  {
    title: "Beta",
    description:
      "Measures an investment's volatility compared to the overall market. A beta of 1 means it moves with the market.",
    importance: "Helps you understand how your investments might perform relative to market movements.",
  },
]

export default function RiskAssessmentPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showAssessment, setShowAssessment] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [riskProfile, setRiskProfile] = useState<string | null>(null)
  const [assessmentComplete, setAssessmentComplete] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Calculate risk profile based on answers
  const calculateRiskProfile = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const averageScore = totalScore / questions.length

    if (averageScore <= 1.5) return "Very Conservative"
    if (averageScore <= 2.5) return "Conservative"
    if (averageScore <= 3.5) return "Moderate"
    if (averageScore <= 4.5) return "Aggressive"
    return "Very Aggressive"
  }

  // Handle answer selection
  const handleAnswer = (questionId: number, score: number) => {
    setAnswers({ ...answers, [questionId]: score })
  }

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const profile = calculateRiskProfile()
      setRiskProfile(profile)
      setAssessmentComplete(true)
      setShowResults(true)
    }
  }

  // Handle previous question
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  // Start a new assessment
  const startNewAssessment = () => {
    setAnswers({})
    setCurrentQuestion(0)
    setRiskProfile(null)
    setAssessmentComplete(false)
    setShowResults(false)
    setShowAssessment(true)
  }

  // Get risk tolerance value for progress bar
  const getRiskToleranceValue = (profile: string | null) => {
    switch (profile) {
      case "Very Conservative":
        return 20
      case "Conservative":
        return 40
      case "Moderate":
        return 60
      case "Aggressive":
        return 80
      case "Very Aggressive":
        return 100
      default:
        return 60 // Default to Moderate
    }
  }

  // Get portfolio allocation for the current risk profile
  const getPortfolioAllocation = () => {
    if (!riskProfile) return portfolioRecommendations["Moderate"]
    return portfolioRecommendations[riskProfile as keyof typeof portfolioRecommendations]
  }

  // Get color for risk profile
  const getRiskProfileColor = (profile: string | null) => {
    switch (profile) {
      case "Very Conservative":
        return "text-blue-600"
      case "Conservative":
        return "text-green-600"
      case "Moderate":
        return "text-yellow-600"
      case "Aggressive":
        return "text-orange-600"
      case "Very Aggressive":
        return "text-red-600"
      default:
        return "text-yellow-600" // Default to Moderate
    }
  }

  // Get background color for risk profile
  const getRiskProfileBgColor = (profile: string | null) => {
    switch (profile) {
      case "Very Conservative":
        return "bg-blue-100"
      case "Conservative":
        return "bg-green-100"
      case "Moderate":
        return "bg-yellow-100"
      case "Aggressive":
        return "bg-orange-100"
      case "Very Aggressive":
        return "bg-red-100"
      default:
        return "bg-yellow-100" // Default to Moderate
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Risk Assessment</h1>
          <p className="text-muted-foreground mt-1">
            Understand your risk tolerance and get personalized investment recommendations
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowAssessment(true)}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Update Risk Profile
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {showAssessment && !showResults ? (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Risk Tolerance Questionnaire</CardTitle>
              <Badge variant="outline" className="px-3">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
            </div>
            <CardDescription>
              Answer these questions to help us determine your risk tolerance and investment preferences
            </CardDescription>
            <Progress value={(currentQuestion / questions.length) * 100} className="h-2 mt-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{questions[currentQuestion].text}</h3>
                <RadioGroup
                  value={answers[questions[currentQuestion].id]?.toString()}
                  onValueChange={(value) => handleAnswer(questions[currentQuestion].id, Number.parseInt(value))}
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 rounded-md border hover:bg-accent transition-colors"
                    >
                      <RadioGroupItem value={option.score.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
              Previous
            </Button>
            <Button onClick={handleNextQuestion} disabled={!answers[questions[currentQuestion].id]}>
              {currentQuestion < questions.length - 1 ? "Next" : "Complete Assessment"}
            </Button>
          </CardFooter>
        </Card>
      ) : showResults ? (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Your Risk Assessment Results</CardTitle>
              <Badge className={`${getRiskProfileBgColor(riskProfile)} ${getRiskProfileColor(riskProfile)}`}>
                {riskProfile}
              </Badge>
            </div>
            <CardDescription>
              Based on your answers, we've determined your risk profile and investment recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Very Conservative</span>
                  <span>Very Aggressive</span>
                </div>
                <Progress value={getRiskToleranceValue(riskProfile)} className="h-3" />
                <div className="flex justify-between items-center mt-4">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Your Risk Tolerance</div>
                    <div className={`text-2xl font-bold ${getRiskProfileColor(riskProfile)}`}>{riskProfile}</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={startNewAssessment}>
                    Retake Assessment
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Recommended Portfolio Allocation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative h-48 w-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">Expected Return</div>
                          <div className="text-xl font-bold">{getPortfolioAllocation().expectedReturn}</div>
                        </div>
                      </div>
                      {/* This would be a real chart in a production app */}
                      <div className="h-full w-full rounded-full border-8 border-blue-500 border-r-green-500 border-b-yellow-500 border-l-purple-500 animate-[spin_10s_linear_infinite]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Stocks</span>
                          <span className="text-sm font-medium">{getPortfolioAllocation().stocks}%</span>
                        </div>
                        <Progress value={getPortfolioAllocation().stocks} className="h-2 bg-gray-200 dark:bg-gray-700">
                          <div className="h-full bg-blue-500 rounded-full"></div>
                        </Progress>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Bonds</span>
                          <span className="text-sm font-medium">{getPortfolioAllocation().bonds}%</span>
                        </div>
                        <Progress value={getPortfolioAllocation().bonds} className="h-2 bg-gray-200 dark:bg-gray-700">
                          <div className="h-full bg-green-500 rounded-full"></div>
                        </Progress>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Cash</span>
                          <span className="text-sm font-medium">{getPortfolioAllocation().cash}%</span>
                        </div>
                        <Progress value={getPortfolioAllocation().cash} className="h-2 bg-gray-200 dark:bg-gray-700">
                          <div className="h-full bg-yellow-500 rounded-full"></div>
                        </Progress>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Alternatives</span>
                          <span className="text-sm font-medium">{getPortfolioAllocation().alternatives}%</span>
                        </div>
                        <Progress
                          value={getPortfolioAllocation().alternatives}
                          className="h-2 bg-gray-200 dark:bg-gray-700"
                        >
                          <div className="h-full bg-purple-500 rounded-full"></div>
                        </Progress>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-accent rounded-md text-sm">{getPortfolioAllocation().description}</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Investment Profile Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <Clock className="h-8 w-8 text-blue-500 mb-2" />
                        <h4 className="font-medium">Time Horizon</h4>
                        <p className="text-sm text-muted-foreground">{getPortfolioAllocation().timeHorizon}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
                        <h4 className="font-medium">Expected Return</h4>
                        <p className="text-sm text-muted-foreground">
                          {getPortfolioAllocation().expectedReturn} annually
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <BarChart className="h-8 w-8 text-orange-500 mb-2" />
                        <h4 className="font-medium">Volatility</h4>
                        <p className="text-sm text-muted-foreground">{getPortfolioAllocation().volatility}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <Button
                  onClick={() => {
                    setShowResults(false)
                    setActiveTab("overview")
                  }}
                >
                  Return to Overview
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Risk Details</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="education">Risk Education</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Risk Profile</CardTitle>
                  <CardDescription>Based on your investment preferences and goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Risk Tolerance</span>
                        <span className="text-sm font-medium">Moderate</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 mr-2 text-blue-500" />
                          <h3 className="font-semibold">Conservative</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Focus on preserving capital with minimal risk</p>
                      </div>
                      <div className="flex flex-col p-4 border rounded-lg bg-accent">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                          <h3 className="font-semibold">Moderate</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Balance between growth and capital preservation</p>
                      </div>
                      <div className="flex flex-col p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                          <BarChart className="h-5 w-5 mr-2 text-blue-500" />
                          <h3 className="font-semibold">Aggressive</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Focus on growth with higher risk tolerance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Risk Analysis</CardTitle>
                    <CardDescription>Assessment of your current investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Overall Risk</span>
                          <span className="text-sm font-medium">Medium</span>
                        </div>
                        <Progress value={55} className="h-2" />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Volatility</span>
                          <span className="text-sm font-medium">Medium-Low</span>
                        </div>
                        <Progress value={40} className="h-2" />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Market Risk</span>
                          <span className="text-sm font-medium">Medium</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Liquidity Risk</span>
                          <span className="text-sm font-medium">Low</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Alerts</CardTitle>
                    <CardDescription>Potential issues in your portfolio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start p-4 border rounded-lg">
                        <AlertTriangle className="h-5 w-5 mr-3 text-amber-500 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Concentration Risk</h3>
                          <p className="text-sm text-muted-foreground">
                            Technology sector represents 45% of your portfolio. Consider diversifying.
                          </p>
                          <Button variant="link" className="p-0 h-auto text-sm mt-1">
                            View Recommendations
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start p-4 border rounded-lg">
                        <AlertTriangle className="h-5 w-5 mr-3 text-amber-500 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Liquidity Risk</h3>
                          <p className="text-sm text-muted-foreground">
                            Some investments may be difficult to sell quickly without affecting price.
                          </p>
                          <Button variant="link" className="p-0 h-auto text-sm mt-1">
                            Learn More
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start p-4 border rounded-lg">
                        <AlertTriangle className="h-5 w-5 mr-3 text-amber-500 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Interest Rate Sensitivity</h3>
                          <p className="text-sm text-muted-foreground">
                            Your bond holdings may be vulnerable to rising interest rates.
                          </p>
                          <Button variant="link" className="p-0 h-auto text-sm mt-1">
                            View Impact Analysis
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment History</CardTitle>
                  <CardDescription>Track how your risk profile has changed over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative h-[200px] w-full">
                      {/* This would be a real chart in a production app */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">Risk profile history visualization</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      <div className="flex flex-col p-4 border rounded-lg">
                        <div className="text-sm text-muted-foreground">Initial Assessment</div>
                        <div className="font-medium">Conservative</div>
                        <div className="text-xs text-muted-foreground mt-1">Jan 15, 2023</div>
                      </div>
                      <div className="flex flex-col p-4 border rounded-lg">
                        <div className="text-sm text-muted-foreground">Previous Assessment</div>
                        <div className="font-medium">Conservative-Moderate</div>
                        <div className="text-xs text-muted-foreground mt-1">Jun 22, 2023</div>
                      </div>
                      <div className="flex flex-col p-4 border rounded-lg bg-accent">
                        <div className="text-sm text-muted-foreground">Current Assessment</div>
                        <div className="font-medium">Moderate</div>
                        <div className="text-xs text-muted-foreground mt-1">Dec 10, 2023</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={startNewAssessment}>
                    Take New Assessment
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Risk Analysis</CardTitle>
                  <CardDescription>Comprehensive breakdown of your portfolio's risk factors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Risk Metrics</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="font-medium">Volatility (Standard Deviation)</span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="w-80 text-sm">
                                      Measures how much an investment's returns fluctuate over time.
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <Badge>12.5%</Badge>
                          </div>
                          <Progress value={62.5} className="h-2" />
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="font-medium">Maximum Drawdown</span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="w-80 text-sm">
                                      The largest percentage drop from peak to trough in your portfolio's value.
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <Badge>18.3%</Badge>
                          </div>
                          <Progress value={45.8} className="h-2" />
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="font-medium">Sharpe Ratio</span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="w-80 text-sm">Measures risk-adjusted return. Higher is better.</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <Badge>1.2</Badge>
                          </div>
                          <Progress value={60} className="h-2" />
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="font-medium">Beta</span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="w-80 text-sm">
                                      Measures your portfolio's volatility relative to the market.
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <Badge>0.95</Badge>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Risk Breakdown by Category</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Market Risk</span>
                              <span className="text-sm font-medium">45%</span>
                            </div>
                            <Progress value={45} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Sector Risk</span>
                              <span className="text-sm font-medium">25%</span>
                            </div>
                            <Progress value={25} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Interest Rate Risk</span>
                              <span className="text-sm font-medium">15%</span>
                            </div>
                            <Progress value={15} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Currency Risk</span>
                              <span className="text-sm font-medium">10%</span>
                            </div>
                            <Progress value={10} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Liquidity Risk</span>
                              <span className="text-sm font-medium">5%</span>
                            </div>
                            <Progress value={5} className="h-2" />
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-accent rounded-md text-sm">
                          <p>
                            Your portfolio's risk is primarily driven by market and sector exposure. Consider
                            diversifying across more sectors to reduce concentration risk.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Risk Comparison</h3>
                      <div className="relative h-[250px] w-full">
                        {/* This would be a real chart in a production app */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-muted-foreground text-sm">Risk/return comparison visualization</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-center">
                              <h4 className="font-medium">Your Portfolio</h4>
                              <div className="mt-2">
                                <div className="text-sm text-muted-foreground">Risk</div>
                                <div className="font-medium">Medium</div>
                              </div>
                              <div className="mt-2">
                                <div className="text-sm text-muted-foreground">Return</div>
                                <div className="font-medium">6.8%</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-center">
                              <h4 className="font-medium">Benchmark</h4>
                              <div className="mt-2">
                                <div className="text-sm text-muted-foreground">Risk</div>
                                <div className="font-medium">Medium</div>
                              </div>
                              <div className="mt-2">
                                <div className="text-sm text-muted-foreground">Return</div>
                                <div className="font-medium">7.2%</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-center">
                              <h4 className="font-medium">Optimized</h4>
                              <div className="mt-2">
                                <div className="text-sm text-muted-foreground">Risk</div>
                                <div className="font-medium">Medium</div>
                              </div>
                              <div className="mt-2">
                                <div className="text-sm text-muted-foreground">Return</div>
                                <div className="font-medium">7.9%</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stress Test Scenarios</CardTitle>
                  <CardDescription>How your portfolio might perform in different market conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Market Crash</CardTitle>
                          <CardDescription>Similar to 2008 financial crisis</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-3xl font-bold text-red-600">-22.5%</div>
                          <p className="text-sm text-muted-foreground mt-2">Estimated portfolio impact</p>
                          <Separator className="my-3" />
                          <div className="text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Recovery Time</span>
                              <span className="font-medium">~18 months</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Probability</span>
                              <span className="font-medium">Low</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Recession</CardTitle>
                          <CardDescription>Economic downturn lasting 6-12 months</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-3xl font-bold text-amber-600">-12.8%</div>
                          <p className="text-sm text-muted-foreground mt-2">Estimated portfolio impact</p>
                          <Separator className="my-3" />
                          <div className="text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Recovery Time</span>
                              <span className="font-medium">~9 months</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Probability</span>
                              <span className="font-medium">Medium</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Interest Rate Spike</CardTitle>
                          <CardDescription>Rapid 2% increase in interest rates</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="text-3xl font-bold text-amber-600">-8.3%</div>
                          <p className="text-sm text-muted-foreground mt-2">Estimated portfolio impact</p>
                          <Separator className="my-3" />
                          <div className="text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Recovery Time</span>
                              <span className="font-medium">~6 months</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Probability</span>
                              <span className="font-medium">Medium-High</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="p-4 bg-accent rounded-md">
                      <h4 className="font-medium mb-2 flex items-center">
                        <Info className="h-4 w-4 mr-2" />
                        How to interpret these results
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        These stress tests estimate how your portfolio might perform during various market scenarios.
                        They help you understand potential downside risks and recovery periods. Consider if you're
                        comfortable with these potential outcomes or if you should adjust your risk exposure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Recommendations</CardTitle>
                  <CardDescription>Suggested adjustments based on your risk profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Current Allocation</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">US Stocks</span>
                              <span className="text-sm font-medium">45%</span>
                            </div>
                            <Progress value={45} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">International Stocks</span>
                              <span className="text-sm font-medium">15%</span>
                            </div>
                            <Progress value={15} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Bonds</span>
                              <span className="text-sm font-medium">25%</span>
                            </div>
                            <Progress value={25} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Real Estate</span>
                              <span className="text-sm font-medium">10%</span>
                            </div>
                            <Progress value={10} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Cash</span>
                              <span className="text-sm font-medium">5%</span>
                            </div>
                            <Progress value={5} className="h-2" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Recommended Allocation</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">US Stocks</span>
                              <span className="text-sm font-medium">35% (-10%)</span>
                            </div>
                            <Progress value={35} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">International Stocks</span>
                              <span className="text-sm font-medium">20% (+5%)</span>
                            </div>
                            <Progress value={20} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Bonds</span>
                              <span className="text-sm font-medium">30% (+5%)</span>
                            </div>
                            <Progress value={30} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Real Estate</span>
                              <span className="text-sm font-medium">10% (0%)</span>
                            </div>
                            <Progress value={10} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Cash</span>
                              <span className="text-sm font-medium">5% (0%)</span>
                            </div>
                            <Progress value={5} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Specific Recommendations</h3>
                      <div className="space-y-4">
                        <div className="flex items-start p-4 border rounded-lg">
                          <CheckCircle className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Reduce Technology Exposure</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your portfolio is overweight in technology stocks (32% vs. benchmark 22%). Consider
                              reducing exposure by 10% to decrease sector concentration risk.
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              View Rebalancing Plan
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-start p-4 border rounded-lg">
                          <CheckCircle className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Increase International Diversification</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your international exposure is below target. Consider adding 5% to international equities
                              to improve geographical diversification.
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              View Recommended Funds
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-start p-4 border rounded-lg">
                          <CheckCircle className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Adjust Bond Duration</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your bond portfolio has a long average duration (8.5 years), making it vulnerable to
                              interest rate increases. Consider shifting to intermediate-term bonds (3-5 years).
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              View Bond Alternatives
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-start p-4 border rounded-lg">
                          <CheckCircle className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Consider Tax-Efficient Investments</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your taxable account could benefit from more tax-efficient investments. Consider municipal
                              bonds or ETFs instead of actively managed mutual funds.
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              View Tax-Efficient Options
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <Button>
                        Apply Recommendations
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expected Outcomes</CardTitle>
                  <CardDescription>Projected performance after implementing recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <h4 className="font-medium">Expected Return</h4>
                            <div className="mt-2 flex items-center justify-center">
                              <div className="text-2xl font-bold">6.8%</div>
                              <div className="text-sm text-green-600 ml-2">+0.3%</div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Annual average (10yr)</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <h4 className="font-medium">Risk (Volatility)</h4>
                            <div className="mt-2 flex items-center justify-center">
                              <div className="text-2xl font-bold">11.2%</div>
                              <div className="text-sm text-green-600 ml-2">-1.3%</div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Standard deviation</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <h4 className="font-medium">Sharpe Ratio</h4>
                            <div className="mt-2 flex items-center justify-center">
                              <div className="text-2xl font-bold">1.35</div>
                              <div className="text-sm text-green-600 ml-2">+0.15</div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Risk-adjusted return</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative h-[250px] w-full">
                      {/* This would be a real chart in a production app */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">Projected performance comparison visualization</p>
                      </div>
                    </div>

                    <div className="p-4 bg-accent rounded-md">
                      <h4 className="font-medium mb-2">Summary of Improvements</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                          <span>Slightly higher expected return with lower overall risk</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                          <span>Better diversification across sectors and geographies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                          <span>Reduced vulnerability to interest rate changes</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                          <span>Improved tax efficiency in taxable accounts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                          <span>Better alignment with your moderate risk profile</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding Investment Risk</CardTitle>
                  <CardDescription>
                    Learn about different types of risk and how they affect your investments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Risk vs. Return</h3>
                        <div className="relative h-[200px] w-full">
                          {/* This would be a real chart in a production app */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-muted-foreground text-sm">Risk/return relationship visualization</p>
                          </div>
                        </div>
                        <p className="text-sm mt-3">
                          The risk-return tradeoff is the principle that potential return rises with an increase in
                          risk. Low levels of risk are associated with low potential returns, whereas high levels of
                          risk are associated with high potential returns.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Types of Investment Risk</h3>
                        <div className="space-y-3">
                          {riskMetricsExplanations.map((risk, index) => (
                            <div key={index} className="p-3 border rounded-lg">
                              <h4 className="font-medium">{risk.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{risk.description}</p>
                              <p className="text-sm mt-1">
                                <span className="font-medium">Why it matters:</span> {risk.importance}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Risk Management Strategies</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Diversification</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm">
                              Spreading investments across various asset classes, sectors, and geographies to reduce the
                              impact of any single investment's performance on your overall portfolio.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-sm mt-2">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Asset Allocation</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm">
                              Determining the optimal mix of asset classes (stocks, bonds, cash, etc.) based on your
                              risk tolerance, time horizon, and financial goals.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-sm mt-2">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Dollar-Cost Averaging</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm">
                              Investing a fixed amount regularly, regardless of market conditions, to reduce the impact
                              of market volatility and avoid timing the market.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-sm mt-2">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Rebalancing</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm">
                              Periodically adjusting your portfolio to maintain your target asset allocation as market
                              movements cause it to drift over time.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-sm mt-2">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Hedging</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm">
                              Using specific investment strategies or instruments to offset potential losses in other
                              parts of your portfolio.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-sm mt-2">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Risk Budgeting</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm">
                              Allocating risk across different investments rather than focusing solely on capital
                              allocation, ensuring risk is distributed according to your preferences.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-sm mt-2">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <Button variant="outline">
                        View Educational Resources
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}

