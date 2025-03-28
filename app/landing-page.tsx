"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart2,
  Shield,
  DollarSign,
  TrendingUp,
  Users,
  Lightbulb,
  Check,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("tab1")
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    }
  }

  const features = [
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: "AI Investment Guidance",
      description:
        "Personalized investment recommendations based on your goals, risk tolerance, and market conditions.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Market Insights",
      description: "Stay informed with real-time market data, news, and AI-driven analysis of market trends.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Portfolio Optimization",
      description:
        "Advanced algorithms analyze your portfolio allocation and suggest improvements to maximize returns.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Financial Education",
      description: "Learn financial concepts with personalized lessons and resources tailored to your knowledge level.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Secure Transactions",
      description: "Connect your accounts with bank-level security for seamless tracking and monitoring of finances.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Intelligent Support",
      description: "Get instant answers to your financial questions from our AI assistant, available 24/7.",
    },
  ]

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      content:
        "Best financial app I've ever used. The automated analysis has helped me double my investment returns and achieve my financial goals.",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      content:
        "After trying many financial tools, this one stands out. The AI recommendations are spot-on and the interface is so easy to use.",
    },
    {
      name: "John Davidson",
      role: "Software Engineer",
      content:
        "I'm not a finance expert, but this platform makes it easy to make smart decisions with my money. Highly recommended!",
    },
  ]

  const faqs = [
    {
      question: "How does FinGen protect my financial data?",
      answer:
        "We implement bank-level encryption and security measures to ensure your data remains private and secure. We never share your personal information with third parties without your explicit consent, and we employ multiple layers of protection to safeguard all user data.",
    },
    {
      question: "Will I receive ongoing account support?",
      answer:
        "Yes, all users receive ongoing support through our AI assistant, in-app messaging, and email support. Premium users also get access to dedicated financial advisors and priority customer service for more complex queries.",
    },
    {
      question: "How accurate are your investment recommendations?",
      answer:
        "Our AI investment recommendations are based on sophisticated algorithms trained on historical market data and continuously updated with the latest financial trends. While past performance doesn't guarantee future results, our system has consistently outperformed market benchmarks in backtesting.",
    },
    {
      question: "Is initial analysis free?",
      answer:
        "Yes, we offer a complimentary initial analysis to all new users. This includes a basic portfolio review, risk assessment, and preliminary recommendations to help you understand how our platform can benefit your financial situation.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "You can cancel your subscription at any time through your account settings. There are no cancelation fees or hidden charges. Once canceled, you'll maintain access until the end of your current billing cycle.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">FinGen</span>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link href="#features" className="text-gray-500 hover:text-gray-900">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-500 hover:text-gray-900">
                Testimonials
              </Link>
              <Link href="#faq" className="text-gray-500 hover:text-gray-900">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
              Sign In
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#f0f5ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                AI-Powered Financial Assistant
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Intelligent <br />
                <span className="text-blue-600">Financial Partner</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                Take control of your finances with AI-powered insights. Make smarter financial decisions with
                personalized recommendations that evolve with your goals and adapt to market changes.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/dashboard">Get Started Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 max-w-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500k+</div>
                  <div className="text-gray-500 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$10B+</div>
                  <div className="text-gray-500 text-sm">Assets Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.8/5</div>
                  <div className="text-gray-500 text-sm">User Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-5 bg-blue-600 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Your Dashboard</h3>
                      <p className="text-sm text-blue-100">Financial Overview</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-100"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Total Balance</h4>
                      <span className="text-xs text-gray-500">Updated today</span>
                    </div>
                    <div className="text-3xl font-bold">$74,556.80</div>
                    <div className="flex items-center text-green-500 text-sm">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      <span>+2.4% this week</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Stocks</span>
                      <span className="font-medium">$45,670.50</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Crypto</span>
                      <span className="font-medium">$12,456.30</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Savings</span>
                      <span className="font-medium">$16,430.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-green-500">
                      <span>Today's Profit</span>
                      <span className="font-medium">+$1,234.50</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-700">
                    <p>
                      AI Recommendation: Consider rebalancing your portfolio to increase exposure to tech sector for
                      better returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need for Financial Success</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use the power of artificial intelligence to make smarter financial decisions and achieve your goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-blue-600">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Works Section */}
      <section className="py-16 md:py-24 bg-[#f0f5ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Our AI Works For You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our intelligent algorithms analyze your financial data to provide personalized guidance and insights
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <span>1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Investment Recommendations</h3>
                  <p className="text-gray-600">
                    Our AI analyzes thousands of investment options and matches them to your financial goals, risk
                    tolerance, and timeline.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <span>2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Predictive Financial Analysis</h3>
                  <p className="text-gray-600">
                    Using advanced machine learning models, we forecast market trends and potential impacts on your
                    portfolio.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <span>3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expense Pattern Recognition</h3>
                  <p className="text-gray-600">
                    Our AI identifies spending patterns and suggests opportunities to increase savings or reduce
                    unnecessary expenses.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <span>4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning & Adaptation</h3>
                  <p className="text-gray-600">
                    Our system continuously learns from your financial behavior and market changes to improve
                    recommendations over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="mb-6 bg-blue-600 text-white rounded-lg p-4 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center flex-shrink-0">
                  <span>?</span>
                </div>
                <div>
                  <p className="mb-2">Can you help me save for retirement?</p>
                  <p className="text-sm text-blue-200">You can type your financial questions here</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-medium mb-2">Based on your profile, I recommend:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Increase your 401(k) contribution to 15%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Consider adding a Roth IRA to diversify tax benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Adjust portfolio allocation for more growth assets given your time horizon</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Ask AI Assistant</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process makes financial management easy and accessible for everyone
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Account</h3>
              <p className="text-gray-600">
                Sign up for a free account and tell us about your financial goals and preferences
              </p>
              <div className="mt-4 text-blue-600 flex justify-center">
                <div className="h-px w-24 bg-blue-200 my-auto mr-1"></div>
                <div>2 min</div>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Set Your Goals</h3>
              <p className="text-gray-600">
                Define your financial objectives and risk tolerance for personalized insights
              </p>
              <div className="mt-4 text-blue-600 flex justify-center">
                <div className="h-px w-24 bg-blue-200 my-auto mr-1"></div>
                <div>5 min</div>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get AI Guidance</h3>
              <p className="text-gray-600">
                Receive custom investment strategies, portfolio optimization, and ongoing support
              </p>
              <div className="mt-4 text-blue-600 flex justify-center">
                <div className="h-px w-24 bg-blue-200 my-auto mr-1"></div>
                <div>Continuous</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-[#f0f5ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their financial lives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Plans for Every Financial Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your needs and financial goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 relative overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">Free</span>
                </div>
                <p className="text-gray-600 mb-6">Perfect for individuals starting their financial journey</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Basic financial insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Limited portfolio tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Access to educational content</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>

            <Card className="border-2 border-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1">POPULAR</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Personal</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mb-6">Designed for active investors seeking AI-powered insights</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Advanced portfolio analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Custom AI recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Real-time market alerts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Priority customer service</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe Now</Button>
              </div>
            </Card>

            <Card className="border-2 border-gray-200 relative overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$29.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mb-6">For professional investors and financial advisors</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Everything in Personal</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Advanced portfolio modeling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Custom reporting features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>API access for integrations</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-[#f0f5ff]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about FinGen AI</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      activeFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users making smarter financial decisions with FinGen AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/dashboard">Get Started Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white hover:bg-blue-700">
              <Link href="#features">See Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-bold mb-4">FinGen</h3>
              <p className="text-gray-400 mb-4">Your AI-powered partner for financial success</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "FAQ", "Testimonials"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "Careers", "Blog", "Press"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Terms", "Privacy", "Cookies", "Settings"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} FinGen AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

