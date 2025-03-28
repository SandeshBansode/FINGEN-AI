"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Calendar,
  Bell,
  Lightbulb,
  DollarSign,
  Target,
  Clock,
  ChevronRight,
  ArrowRight,
  RefreshCw,
  Download,
  Filter,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, Alex! Here's your financial overview.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Portfolio Value</p>
                <h3 className="text-2xl font-bold mt-1">$124,568.45</h3>
              </div>
              <div className="flex items-center text-green-600 bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 rounded-full text-xs font-medium">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>2.4%</span>
              </div>
            </div>
            <Progress value={65} className="h-1.5 mt-3" />
            <p className="text-xs text-muted-foreground mt-2">+$2,892.20 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Income</p>
                <h3 className="text-2xl font-bold mt-1">$8,942.00</h3>
              </div>
              <div className="flex items-center text-green-600 bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 rounded-full text-xs font-medium">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>3.2%</span>
              </div>
            </div>
            <Progress value={78} className="h-1.5 mt-3" />
            <p className="text-xs text-muted-foreground mt-2">+$278.00 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Expenses</p>
                <h3 className="text-2xl font-bold mt-1">$5,623.12</h3>
              </div>
              <div className="flex items-center text-red-600 bg-red-100 dark:bg-red-900/30 px-2.5 py-0.5 rounded-full text-xs font-medium">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                <span>1.8%</span>
              </div>
            </div>
            <Progress value={45} className="h-1.5 mt-3" />
            <p className="text-xs text-muted-foreground mt-2">-$103.45 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Savings Rate</p>
                <h3 className="text-2xl font-bold mt-1">37.1%</h3>
              </div>
              <div className="flex items-center text-green-600 bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 rounded-full text-xs font-medium">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>5.3%</span>
              </div>
            </div>
            <Progress value={37} className="h-1.5 mt-3" />
            <p className="text-xs text-muted-foreground mt-2">Target: 40%</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle>Portfolio Performance</CardTitle>
                    <CardDescription>Your investment growth over time</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-3.5 w-3.5 mr-1" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      1Y
                    </Button>
                    <Button variant="outline" size="sm" className="bg-accent">
                      YTD
                    </Button>
                    <Button variant="outline" size="sm">
                      3M
                    </Button>
                    <Button variant="outline" size="sm">
                      1M
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full relative">
                    {/* This would be a real chart in a production app */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Portfolio performance chart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Asset Allocation</CardTitle>
                    <CardDescription>Current distribution of your investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center mb-4">
                      <div className="h-[180px] w-[180px] relative">
                        {/* This would be a real chart in a production app */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-muted-foreground text-sm">Asset allocation chart</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-sm">US Stocks</span>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-sm">International Stocks</span>
                        </div>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                          <span className="text-sm">Bonds</span>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                          <span className="text-sm">Real Estate</span>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-gray-300 mr-2"></div>
                          <span className="text-sm">Cash</span>
                        </div>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Holdings</CardTitle>
                    <CardDescription>Your largest investments by value</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "AAPL", fullName: "Apple Inc.", value: "$12,450", change: "+2.3%", isPositive: true },
                        {
                          name: "MSFT",
                          fullName: "Microsoft Corp.",
                          value: "$10,280",
                          change: "+1.8%",
                          isPositive: true,
                        },
                        {
                          name: "AMZN",
                          fullName: "Amazon.com Inc.",
                          value: "$8,320",
                          change: "-0.7%",
                          isPositive: false,
                        },
                        {
                          name: "GOOGL",
                          fullName: "Alphabet Inc.",
                          value: "$7,540",
                          change: "+1.2%",
                          isPositive: true,
                        },
                        {
                          name: "BRK.B",
                          fullName: "Berkshire Hathaway",
                          value: "$6,780",
                          change: "+0.5%",
                          isPositive: true,
                        },
                      ].map((holding, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{holding.name}</div>
                            <div className="text-xs text-muted-foreground">{holding.fullName}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{holding.value}</div>
                            <div className={`text-xs ${holding.isPositive ? "text-green-600" : "text-red-600"}`}>
                              {holding.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Holdings
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Indices</CardTitle>
                  <CardDescription>Current market performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "S&P 500", value: "4,782.82", change: "+0.86%", isPositive: true },
                      { name: "Dow Jones", value: "38,239.98", change: "+0.68%", isPositive: true },
                      { name: "Nasdaq", value: "15,927.90", change: "+1.03%", isPositive: true },
                      { name: "Russell 2000", value: "2,043.92", change: "-0.21%", isPositive: false },
                      { name: "10-Year Treasury", value: "4.32%", change: "+0.05", isPositive: false },
                    ].map((index, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="font-medium">{index.name}</span>
                        <div className="text-right">
                          <div className="font-medium">{index.value}</div>
                          <div className={`text-xs ${index.isPositive ? "text-green-600" : "text-red-600"}`}>
                            {index.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Goals</CardTitle>
                  <CardDescription>Progress towards your targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Retirement</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">$845,000 / $1,250,000</span>
                        <span className="text-xs text-muted-foreground">2042</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Home Purchase</span>
                        <span className="text-sm font-medium">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">$84,000 / $200,000</span>
                        <span className="text-xs text-muted-foreground">2026</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Emergency Fund</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">$28,500 / $30,000</span>
                        <span className="text-xs text-muted-foreground">Ongoing</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Manage Goals
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Financial calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: "Mar 28", title: "Quarterly Tax Payment Due", type: "Tax" },
                      { date: "Apr 15", title: "401(k) Contribution", type: "Investment" },
                      { date: "Apr 22", title: "Apple (AAPL) Earnings", type: "Market" },
                      { date: "May 1", title: "Portfolio Review", type: "Planning" },
                    ].map((event, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent mr-3">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium">{event.title}</div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <span>{event.date}</span>
                            <span className="mx-1">•</span>
                            <Badge variant="outline" className="text-xs h-5">
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Financial Insights</CardTitle>
              <CardDescription>Personalized recommendations based on your financial data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start p-4 border rounded-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                    <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Savings Opportunity</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      You're spending 30% more on dining out compared to last month. Consider setting a budget to
                      increase your savings rate.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-sm mt-1">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="flex items-start p-4 border rounded-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mr-3">
                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Investment Suggestion</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your bond allocation is below target. Consider rebalancing to maintain your desired asset
                      allocation.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-sm mt-1">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="flex items-start p-4 border rounded-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mr-3">
                    <Bell className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Tax Reminder</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      You have unused tax-advantaged contribution space in your IRA. Consider maximizing your
                      contributions before the deadline.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-sm mt-1">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Details</CardTitle>
              <CardDescription>Comprehensive view of your investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground">Total Value</div>
                    <div className="text-2xl font-bold mt-1">$124,568.45</div>
                    <div className="flex items-center text-xs text-green-600 mt-1">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      <span>+$2,892.20 (2.4%)</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground">Annual Return</div>
                    <div className="text-2xl font-bold mt-1">8.2%</div>
                    <div className="flex items-center text-xs text-green-600 mt-1">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      <span>+1.3% vs benchmark</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground">Dividend Yield</div>
                    <div className="text-2xl font-bold mt-1">2.1%</div>
                    <div className="text-xs text-muted-foreground mt-1">$2,615.94 annually</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground">Risk Level</div>
                    <div className="text-2xl font-bold mt-1">Moderate</div>
                    <div className="text-xs text-muted-foreground mt-1">Volatility: 12.5%</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Portfolio Breakdown</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">By Asset Class</h4>
                      <div className="h-[250px] w-full relative">
                        {/* This would be a real chart in a production app */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-muted-foreground text-sm">Asset class breakdown chart</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-3">By Sector</h4>
                      <div className="h-[250px] w-full relative">
                        {/* This would be a real chart in a production app */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-muted-foreground text-sm">Sector breakdown chart</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">All Holdings</h3>
                    <Button variant="outline" size="sm">
                      <Filter className="h-3.5 w-3.5 mr-1" />
                      Filter
                    </Button>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-5 gap-4 p-3 bg-accent font-medium text-sm">
                      <div>Name</div>
                      <div className="text-right">Value</div>
                      <div className="text-right">Allocation</div>
                      <div className="text-right">Return</div>
                      <div className="text-right">Gain/Loss</div>
                    </div>
                    <div className="divide-y">
                      {[
                        {
                          name: "AAPL",
                          fullName: "Apple Inc.",
                          value: "$12,450",
                          allocation: "10.0%",
                          return: "+32.5%",
                          gainLoss: "+$3,050",
                          isPositive: true,
                        },
                        {
                          name: "MSFT",
                          fullName: "Microsoft Corp.",
                          value: "$10,280",
                          allocation: "8.3%",
                          return: "+28.2%",
                          gainLoss: "+$2,260",
                          isPositive: true,
                        },
                        {
                          name: "AMZN",
                          fullName: "Amazon.com Inc.",
                          value: "$8,320",
                          allocation: "6.7%",
                          return: "+15.4%",
                          gainLoss: "+$1,110",
                          isPositive: true,
                        },
                        {
                          name: "GOOGL",
                          fullName: "Alphabet Inc.",
                          value: "$7,540",
                          allocation: "6.1%",
                          return: "+18.7%",
                          gainLoss: "+$1,190",
                          isPositive: true,
                        },
                        {
                          name: "BRK.B",
                          fullName: "Berkshire Hathaway",
                          value: "$6,780",
                          allocation: "5.4%",
                          return: "+9.2%",
                          gainLoss: "+$570",
                          isPositive: true,
                        },
                        {
                          name: "TSLA",
                          fullName: "Tesla Inc.",
                          value: "$5,920",
                          allocation: "4.8%",
                          return: "-12.3%",
                          gainLoss: "-$830",
                          isPositive: false,
                        },
                        {
                          name: "VTI",
                          fullName: "Vanguard Total Stock Market ETF",
                          value: "$15,340",
                          allocation: "12.3%",
                          return: "+14.8%",
                          gainLoss: "+$1,980",
                          isPositive: true,
                        },
                        {
                          name: "VXUS",
                          fullName: "Vanguard Total International Stock ETF",
                          value: "$12,780",
                          allocation: "10.3%",
                          return: "+8.5%",
                          gainLoss: "+$1,000",
                          isPositive: true,
                        },
                        {
                          name: "BND",
                          fullName: "Vanguard Total Bond Market ETF",
                          value: "$18,450",
                          allocation: "14.8%",
                          return: "+2.1%",
                          gainLoss: "+$380",
                          isPositive: true,
                        },
                        {
                          name: "VNQ",
                          fullName: "Vanguard Real Estate ETF",
                          value: "$8,320",
                          allocation: "6.7%",
                          return: "+5.4%",
                          gainLoss: "+$425",
                          isPositive: true,
                        },
                      ].map((holding, index) => (
                        <div key={index} className="grid grid-cols-5 gap-4 p-3">
                          <div>
                            <div className="font-medium">{holding.name}</div>
                            <div className="text-xs text-muted-foreground">{holding.fullName}</div>
                          </div>
                          <div className="text-right font-medium">{holding.value}</div>
                          <div className="text-right">{holding.allocation}</div>
                          <div className={`text-right ${holding.isPositive ? "text-green-600" : "text-red-600"}`}>
                            {holding.return}
                          </div>
                          <div className={`text-right ${holding.isPositive ? "text-green-600" : "text-red-600"}`}>
                            {holding.gainLoss}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Goals</CardTitle>
              <CardDescription>Track and manage your financial objectives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">Retirement</CardTitle>
                        <Badge>On Track</Badge>
                      </div>
                      <CardDescription>Target: Age 65 (2042)</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm font-medium">68%</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Current</span>
                          <span className="font-medium">$845,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Target</span>
                          <span className="font-medium">$1,250,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Monthly Contribution</span>
                          <span className="font-medium">$1,500</span>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-3 border-t flex justify-between items-center">
                      <Button variant="link" className="p-0 h-auto">
                        Adjust Goal
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">Home Purchase</CardTitle>
                        <Badge variant="outline">In Progress</Badge>
                      </div>
                      <CardDescription>Target: 2026</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm font-medium">42%</span>
                          </div>
                          <Progress value={42} className="h-2" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Current</span>
                          <span className="font-medium">$84,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Target</span>
                          <span className="font-medium">$200,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Monthly Contribution</span>
                          <span className="font-medium">$2,000</span>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-3 border-t flex justify-between items-center">
                      <Button variant="link" className="p-0 h-auto">
                        Adjust Goal
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">Emergency Fund</CardTitle>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          Almost Complete
                        </Badge>
                      </div>
                      <CardDescription>Target: Ongoing</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm font-medium">95%</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Current</span>
                          <span className="font-medium">$28,500</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Target</span>
                          <span className="font-medium">$30,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Monthly Contribution</span>
                          <span className="font-medium">$500</span>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-3 border-t flex justify-between items-center">
                      <Button variant="link" className="p-0 h-auto">
                        Adjust Goal
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </Card>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">Goal Timeline</h3>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      View Calendar
                    </Button>
                  </div>
                  <div className="relative h-[200px] w-full">
                    {/* This would be a real chart in a production app */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Goal timeline visualization</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">Add New Goal</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Education Fund",
                        icon: <DollarSign className="h-5 w-5" />,
                        description: "Save for education expenses",
                      },
                      {
                        title: "Major Purchase",
                        icon: <Target className="h-5 w-5" />,
                        description: "Save for a large purchase",
                      },
                      {
                        title: "Custom Goal",
                        icon: <Clock className="h-5 w-5" />,
                        description: "Create a personalized goal",
                      },
                    ].map((goal, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 hover:bg-accent cursor-pointer transition-colors"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-3">
                          {goal.icon}
                        </div>
                        <h4 className="font-medium">{goal.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Financial Insights</CardTitle>
              <CardDescription>Personalized recommendations and analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Insights</h3>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mr-2">
                            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <h4 className="font-medium">Portfolio Optimization</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Your portfolio has a 12% higher concentration in technology stocks compared to your target
                          allocation. Consider rebalancing to reduce sector risk.
                        </p>
                        <div className="mt-3 flex items-center">
                          <Button variant="outline" size="sm">
                            View Rebalancing Plan
                          </Button>
                          <Button variant="ghost" size="sm" className="ml-2">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-2">
                            <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h4 className="font-medium">Savings Opportunity</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          You're spending 30% more on dining out compared to last month. Setting a budget could help you
                          save an additional $320 monthly.
                        </p>
                        <div className="mt-3 flex items-center">
                          <Button variant="outline" size="sm">
                            Create Budget
                          </Button>
                          <Button variant="ghost" size="sm" className="ml-2">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mr-2">
                            <Target className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h4 className="font-medium">Retirement Planning</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Increasing your monthly retirement contributions by just $200 could help you reach your
                          retirement goal 3 years earlier.
                        </p>
                        <div className="mt-3 flex items-center">
                          <Button variant="outline" size="sm">
                            Adjust Contributions
                          </Button>
                          <Button variant="ghost" size="sm" className="ml-2">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Financial Health Score</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center">
                          <div className="relative h-40 w-40">
                            {/* This would be a real chart in a production app */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-4xl font-bold">82</div>
                                <div className="text-sm text-muted-foreground">Very Good</div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 w-full mt-4">
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Savings Rate</div>
                              <div className="flex items-center">
                                <Progress value={85} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">85</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Debt Management</div>
                              <div className="flex items-center">
                                <Progress value={90} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">90</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Investment Diversification</div>
                              <div className="flex items-center">
                                <Progress value={75} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">75</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Retirement Readiness</div>
                              <div className="flex items-center">
                                <Progress value={78} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">78</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-3">Improvement Areas</h3>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Investment Diversification</h4>
                            <Badge variant="outline">Priority</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Increase international exposure to improve geographical diversification.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Emergency Fund</h4>
                            <Badge variant="outline">Almost Complete</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            You're close to your target. Complete this goal to improve your financial security.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">AI-Powered Forecasts</h3>
                  <div className="relative h-[300px] w-full">
                    {/* This would be a real chart in a production app */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Financial forecast visualization</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm text-muted-foreground">Projected Net Worth</div>
                      <div className="text-xl font-bold mt-1">$1.2M</div>
                      <div className="text-xs text-muted-foreground mt-1">in 10 years</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm text-muted-foreground">Retirement Income</div>
                      <div className="text-xl font-bold mt-1">$7,850/mo</div>
                      <div className="text-xs text-muted-foreground mt-1">projected at age 65</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm text-muted-foreground">Financial Independence</div>
                      <div className="text-xl font-bold mt-1">Age 58</div>
                      <div className="text-xs text-muted-foreground mt-1">estimated timeline</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <Button>
                    Get Personalized Financial Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

