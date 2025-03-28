"use client"

import { useState } from "react"
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  Play,
  Clock,
  Award,
  BarChart2,
  Search,
  ThumbsUp,
  MessageSquare,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LearningPage() {
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock learning path data
  const learningPaths = [
    {
      id: 1,
      title: "Investment Fundamentals",
      description: "Master the basics of investing and build a solid foundation",
      progress: 65,
      modules: 8,
      completedModules: 5,
      estimatedTime: "4 hours",
      difficulty: "beginner",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Stock Market Mastery",
      description: "Learn how to analyze and invest in individual stocks",
      progress: 30,
      modules: 12,
      completedModules: 4,
      estimatedTime: "6 hours",
      difficulty: "intermediate",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Retirement Planning",
      description: "Prepare for a secure financial future with strategic planning",
      progress: 10,
      modules: 6,
      completedModules: 1,
      estimatedTime: "3 hours",
      difficulty: "beginner",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Advanced Portfolio Management",
      description: "Optimize your investment portfolio for maximum returns",
      progress: 0,
      modules: 10,
      completedModules: 0,
      estimatedTime: "5 hours",
      difficulty: "advanced",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Tax-Efficient Investing",
      description: "Minimize tax impact and maximize after-tax returns",
      progress: 0,
      modules: 7,
      completedModules: 0,
      estimatedTime: "3.5 hours",
      difficulty: "intermediate",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const currentModules = [
    {
      id: 1,
      pathId: 1,
      title: "Understanding Risk and Return",
      description: "Learn the fundamental relationship between risk and potential returns",
      progress: 75,
      estimatedTime: "30 minutes",
      lastAccessed: "2 days ago",
    },
    {
      id: 2,
      pathId: 2,
      title: "Reading Financial Statements",
      description: "How to analyze company balance sheets, income statements, and cash flow",
      progress: 40,
      estimatedTime: "45 minutes",
      lastAccessed: "Yesterday",
    },
    {
      id: 3,
      pathId: 3,
      title: "Retirement Account Types",
      description: "Compare 401(k)s, IRAs, Roth accounts, and other retirement vehicles",
      progress: 20,
      estimatedTime: "25 minutes",
      lastAccessed: "3 days ago",
    },
  ]

  const popularCourses = [
    {
      id: 1,
      title: "ETFs vs. Mutual Funds",
      description: "Understanding the key differences and when to choose each",
      students: 2345,
      rating: 4.8,
      difficulty: "beginner",
      duration: "1.5 hours",
    },
    {
      id: 2,
      title: "Value Investing Principles",
      description: "Learn the investment approach popularized by Warren Buffett",
      students: 1876,
      rating: 4.9,
      difficulty: "intermediate",
      duration: "2 hours",
    },
    {
      id: 3,
      title: "Technical Analysis Fundamentals",
      description: "Using charts and patterns to make trading decisions",
      students: 3210,
      rating: 4.7,
      difficulty: "intermediate",
      duration: "2.5 hours",
    },
    {
      id: 4,
      title: "Cryptocurrency Investing",
      description: "Understanding blockchain assets and investment strategies",
      students: 4150,
      rating: 4.6,
      difficulty: "intermediate",
      duration: "3 hours",
    },
  ]

  const aiLearningTopics = [
    {
      id: 1,
      title: "Dollar-Cost Averaging",
      description: "Learn how regular investments can reduce risk and potentially increase returns",
      questions: [
        "What is dollar-cost averaging?",
        "How does it reduce investment risk?",
        "When should I use this strategy?",
        "Can you show me an example calculation?",
      ],
    },
    {
      id: 2,
      title: "Emergency Fund Basics",
      description: "Understanding why and how to build your financial safety net",
      questions: [
        "How much should I have in my emergency fund?",
        "Where should I keep my emergency savings?",
        "How do I build an emergency fund while paying off debt?",
        "When should I use my emergency fund?",
      ],
    },
    {
      id: 3,
      title: "Index Fund Investing",
      description: "The power of passive investing through market index funds",
      questions: [
        "What are index funds and how do they work?",
        "What's the difference between ETFs and index mutual funds?",
        "Which index funds should beginners consider?",
        "How do index funds compare to actively managed funds?",
      ],
    },
  ]

  // Filter learning paths based on difficulty and search query
  const filteredLearningPaths = learningPaths.filter((path) => {
    const matchesDifficulty = difficultyFilter === "all" || path.difficulty === difficultyFilter
    const matchesSearch =
      path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDifficulty && matchesSearch
  })

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Financial Education</h2>
          <p className="text-muted-foreground">Personalized learning paths to improve your financial knowledge</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              className="pl-8 w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="my-learning" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="my-learning">My Learning</TabsTrigger>
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="ai-tutor">AI Tutor</TabsTrigger>
        </TabsList>

        <TabsContent value="my-learning" className="space-y-6">
          {/* Current Progress */}
          <div>
            <h3 className="text-lg font-medium mb-4">Continue Learning</h3>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {currentModules.map((module) => (
                <Card key={module.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{module.estimatedTime}</span>
                        </div>
                        <span>Last accessed: {module.lastAccessed}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Continue
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Paths */}
          <div>
            <h3 className="text-lg font-medium mb-4">My Learning Paths</h3>
            <div className="space-y-4">
              {filteredLearningPaths
                .filter((path) => path.progress > 0)
                .map((path) => (
                  <Card key={path.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 flex items-center justify-center">
                        <div className="text-center">
                          <div className="relative w-24 h-24 mx-auto">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xl font-bold">{path.progress}%</span>
                            </div>
                            <svg className="w-24 h-24" viewBox="0 0 36 36">
                              <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#e6e6e6"
                                strokeWidth="3"
                                strokeDasharray="100, 100"
                              />
                              <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="3"
                                strokeDasharray={`${path.progress}, 100`}
                              />
                            </svg>
                          </div>
                          <div className="mt-2 text-sm">
                            <span className="font-medium">
                              {path.completedModules}/{path.modules}
                            </span>{" "}
                            modules completed
                          </div>
                        </div>
                      </div>
                      <div className="p-6 md:w-3/4">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                            <p className="text-muted-foreground mb-4">{path.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {path.estimatedTime}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                {path.modules} modules
                              </Badge>
                              <Badge
                                variant={
                                  path.difficulty === "beginner"
                                    ? "secondary"
                                    : path.difficulty === "intermediate"
                                      ? "default"
                                      : "destructive"
                                }
                              >
                                {path.difficulty.charAt(0).toUpperCase() + path.difficulty.slice(1)}
                              </Badge>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Button>Continue Learning</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>My Achievements</CardTitle>
              <CardDescription>Track your learning progress and earned credentials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Investment Basics", completed: true, icon: <BookOpen className="h-8 w-8" /> },
                  { name: "Risk Management", completed: true, icon: <BarChart2 className="h-8 w-8" /> },
                  { name: "Portfolio Theory", completed: false, icon: <BarChart2 className="h-8 w-8" /> },
                  { name: "Advanced Analysis", completed: false, icon: <BarChart2 className="h-8 w-8" /> },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                      achievement.completed
                        ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                        : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-full ${
                        achievement.completed
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                          : "bg-gray-100 text-gray-400 dark:bg-gray-700"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <h4 className="font-medium mt-2 text-center">{achievement.name}</h4>
                    {achievement.completed ? (
                      <Badge variant="success" className="mt-2">
                        Completed
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="mt-2">
                        In Progress
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discover" className="space-y-6">
          {/* Featured Learning Paths */}
          <div>
            <h3 className="text-lg font-medium mb-4">Featured Learning Paths</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredLearningPaths.map((path) => (
                <Card key={path.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <Badge
                          className={
                            path.difficulty === "beginner"
                              ? "bg-green-500"
                              : path.difficulty === "intermediate"
                                ? "bg-blue-500"
                                : "bg-purple-500"
                          }
                        >
                          {path.difficulty.charAt(0).toUpperCase() + path.difficulty.slice(1)}
                        </Badge>
                        <h3 className="text-xl font-bold mt-2">{path.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground mb-4">{path.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {path.estimatedTime}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {path.modules} modules
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full">{path.progress > 0 ? "Continue Learning" : "Start Learning"}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-medium mb-4">Popular Courses</h3>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {popularCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge
                        variant={
                          course.difficulty === "beginner"
                            ? "secondary"
                            : course.difficulty === "intermediate"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                      </Badge>
                    </div>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <ThumbsUp className="mr-1 h-4 w-4 text-yellow-500" />
                        <span>{course.rating}/5</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 text-sm">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Course
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Roadmaps */}
          <Card>
            <CardHeader>
              <CardTitle>Personalized Learning Roadmap</CardTitle>
              <CardDescription>Based on your goals and current knowledge level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-8">
                  {[
                    {
                      title: "Financial Foundations",
                      status: "completed",
                      description: "Basic concepts and terminology",
                    },
                    {
                      title: "Investment Fundamentals",
                      status: "in-progress",
                      description: "Understanding different investment vehicles",
                    },
                    {
                      title: "Portfolio Construction",
                      status: "upcoming",
                      description: "Building a diversified investment portfolio",
                    },
                    {
                      title: "Advanced Strategies",
                      status: "upcoming",
                      description: "Optimization techniques and alternative investments",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative pl-10">
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          step.status === "completed"
                            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                            : step.status === "in-progress"
                              ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                              : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                        }`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : step.status === "in-progress" ? (
                          <Play className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      {step.status === "in-progress" && (
                        <Button variant="link" className="p-0 h-auto mt-1 text-blue-600 dark:text-blue-400">
                          Continue Learning
                        </Button>
                      )}
                      {step.status === "upcoming" && (
                        <Button variant="link" className="p-0 h-auto mt-1 text-muted-foreground">
                          Start when ready
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-tutor" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                AI Financial Tutor
              </CardTitle>
              <CardDescription>Get personalized explanations on any financial topic, 24/7</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
                <h3 className="text-lg font-medium mb-2">How the AI Tutor Works</h3>
                <p className="mb-4">
                  Our AI tutor can explain any financial concept in simple terms, answer your questions, and adapt to
                  your learning style.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400 mb-3">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium mb-1">Ask Questions</h4>
                    <p className="text-sm text-muted-foreground">Ask anything about finance or investing</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 mb-3">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium mb-1">Get Explanations</h4>
                    <p className="text-sm text-muted-foreground">Receive clear, jargon-free answers</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400 mb-3">
                      <Award className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium mb-1">Master Concepts</h4>
                    <p className="text-sm text-muted-foreground">Build knowledge at your own pace</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Popular Topics to Explore</h3>
              <div className="space-y-4">
                {aiLearningTopics.map((topic) => (
                  <Card key={topic.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{topic.title}</CardTitle>
                      <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {topic.questions.map((question, index) => (
                          <Button key={index} variant="outline" className="w-full justify-start text-left">
                            <MessageSquare className="mr-2 h-4 w-4 flex-shrink-0" />
                            <span>{question}</span>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Zap className="mr-2 h-4 w-4" />
                        Start Learning
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button size="lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with AI Tutor
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

