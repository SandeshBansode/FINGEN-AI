"use client"

import { useState } from "react"
import {
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Filter,
  Download,
  RefreshCw,
  Zap,
  AlertCircle,
  Info,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PortfolioPage() {
  const [timeRange, setTimeRange] = useState("1Y")

  // Mock portfolio data
  const portfolioSummary = {
    totalValue: 124567.89,
    totalReturn: 23.4,
    todayChange: 1.2,
    riskScore: 65,
  }

  const portfolioHoldings = [
    {
      id: 1,
      name: "Apple Inc.",
      ticker: "AAPL",
      shares: 25,
      avgPrice: 145.75,
      currentPrice: 173.5,
      value: 4337.5,
      return: 19.04,
      allocation: 15.2,
      sector: "Technology",
    },
    {
      id: 2,
      name: "Microsoft Corp.",
      ticker: "MSFT",
      shares: 15,
      avgPrice: 280.25,
      currentPrice: 332.7,
      value: 4990.5,
      return: 18.72,
      allocation: 17.5,
      sector: "Technology",
    },
    {
      id: 3,
      name: "Amazon.com Inc.",
      ticker: "AMZN",
      shares: 12,
      avgPrice: 145.3,
      currentPrice: 178.9,
      value: 2146.8,
      return: 23.13,
      allocation: 7.5,
      sector: "Consumer Discretionary",
    },
    {
      id: 4,
      name: "Tesla Inc.",
      ticker: "TSLA",
      shares: 20,
      avgPrice: 220.45,
      currentPrice: 185.3,
      value: 3706.0,
      return: -15.94,
      allocation: 13.0,
      sector: "Consumer Discretionary",
    },
    {
      id: 5,
      name: "Alphabet Inc.",
      ticker: "GOOGL",
      shares: 18,
      avgPrice: 125.8,
      currentPrice: 142.3,
      value: 2561.4,
      return: 13.12,
      allocation: 9.0,
      sector: "Communication Services",
    },
    {
      id: 6,
      name: "Johnson & Johnson",
      ticker: "JNJ",
      shares: 15,
      avgPrice: 160.25,
      currentPrice: 152.5,
      value: 2287.5,
      return: -4.84,
      allocation: 8.0,
      sector: "Healthcare",
    },
    {
      id: 7,
      name: "JPMorgan Chase & Co.",
      ticker: "JPM",
      shares: 22,
      avgPrice: 135.4,
      currentPrice: 182.3,
      value: 4010.6,
      return: 34.64,
      allocation: 14.1,
      sector: "Financials",
    },
    {
      id: 8,
      name: "Vanguard Total Bond Market ETF",
      ticker: "BND",
      shares: 45,
      avgPrice: 82.3,
      currentPrice: 72.4,
      value: 3258.0,
      return: -12.03,
      allocation: 11.4,
      sector: "Fixed Income",
    },
    {
      id: 9,
      name: "Vanguard Real Estate ETF",
      ticker: "VNQ",
      shares: 18,
      avgPrice: 95.4,
      currentPrice: 84.2,
      value: 1515.6,
      return: -11.74,
      allocation: 5.3,
      sector: "Real Estate",
    },
  ]

  const sectorAllocation = [
    { sector: "Technology", allocation: 32.7, benchmark: 28.5, difference: 4.2 },
    { sector: "Consumer Discretionary", allocation: 20.5, benchmark: 15.2, difference: 5.3 },
    { sector: "Communication Services", allocation: 9.0, benchmark: 10.5, difference: -1.5 },
    { sector: "Healthcare", allocation: 8.0, benchmark: 12.8, difference: -4.8 },
    { sector: "Financials", allocation: 14.1, benchmark: 13.5, difference: 0.6 },
    { sector: "Fixed Income", allocation: 11.4, benchmark: 15.0, difference: -3.6 },
    { sector: "Real Estate", allocation: 5.3, benchmark: 4.5, difference: 0.8 },
  ]

  const optimizationSuggestions = [
    {
      id: 1,
      title: "Reduce Technology Exposure",
      description:
        "Your technology allocation is 4.2% above the benchmark. Consider trimming positions to reduce sector risk.",
      action: "Reduce AAPL by 5 shares and MSFT by 3 shares",
      impact: "Reduces technology exposure by 3.8% and decreases portfolio volatility by 2.1%",
      priority: "high",
    },
    {
      id: 2,
      title: "Increase Healthcare Exposure",
      description: "Your healthcare allocation is 4.8% below the benchmark. Consider adding to this defensive sector.",
      action: "Add 10 shares of UNH or 25 shares of PFE",
      impact: "Increases healthcare exposure by 3.5% and improves portfolio stability",
      priority: "medium",
    },
    {
      id: 3,
      title: "Rebalance Fixed Income",
      description:
        "Your fixed income allocation is 3.6% below your target. Consider adding to maintain your risk profile.",
      action: "Add 20 shares of BND or 15 shares of VCIT",
      impact: "Increases fixed income exposure by 2.8% and reduces overall portfolio volatility",
      priority: "medium",
    },
    {
      id: 4,
      title: "Tax-Loss Harvesting Opportunity",
      description: "Consider selling underperforming positions to offset capital gains and reduce tax liability.",
      action: "Sell TSLA and replace with similar exposure through consumer discretionary ETF (XLY)",
      impact: "Potential tax savings while maintaining similar market exposure",
      priority: "low",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Portfolio Management</h2>
          <p className="text-muted-foreground">Track, analyze, and optimize your investment portfolio</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1M">1 Month</SelectItem>
              <SelectItem value="3M">3 Months</SelectItem>
              <SelectItem value="6M">6 Months</SelectItem>
              <SelectItem value="1Y">1 Year</SelectItem>
              <SelectItem value="5Y">5 Years</SelectItem>
              <SelectItem value="MAX">Max</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Update
          </Button>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${portfolioSummary.totalValue.toLocaleString()}</div>
            <div
              className={`flex items-center text-sm ${portfolioSummary.totalReturn >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {portfolioSummary.totalReturn >= 0 ? (
                <TrendingUp className="mr-1 h-4 w-4" />
              ) : (
                <TrendingDown className="mr-1 h-4 w-4" />
              )}
              {portfolioSummary.totalReturn >= 0 ? "+" : ""}
              {portfolioSummary.totalReturn}% overall return
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {portfolioSummary.todayChange >= 0 ? "+" : ""}
              {portfolioSummary.todayChange}%
            </div>
            <div
              className={`flex items-center text-sm ${portfolioSummary.todayChange >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {portfolioSummary.todayChange >= 0 ? (
                <TrendingUp className="mr-1 h-4 w-4" />
              ) : (
                <TrendingDown className="mr-1 h-4 w-4" />
              )}
              ${((portfolioSummary.totalValue * portfolioSummary.todayChange) / 100).toFixed(2)} today
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioSummary.riskScore}/100</div>
            <div className="text-amber-500 flex items-center text-sm">Moderate Risk Profile</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Health Score</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Our AI evaluates your portfolio based on diversification, risk alignment, and performance metrics
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78/100</div>
            <Progress value={78} className="h-2" />
            <div className="text-blue-500 flex items-center text-sm mt-2">Good - 3 suggestions available</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="holdings" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="optimization">AI Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="holdings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Holdings</CardTitle>
              <CardDescription>Your current investment positions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Shares</TableHead>
                    <TableHead className="text-right">Avg Price</TableHead>
                    <TableHead className="text-right">Current Price</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                    <TableHead className="text-right">Return</TableHead>
                    <TableHead className="text-right">Allocation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {portfolioHoldings.map((holding) => (
                    <TableRow key={holding.id}>
                      <TableCell className="font-medium">{holding.ticker}</TableCell>
                      <TableCell>{holding.name}</TableCell>
                      <TableCell className="text-right">{holding.shares}</TableCell>
                      <TableCell className="text-right">${holding.avgPrice.toFixed(2)}</TableCell>
                      <TableCell className="text-right">${holding.currentPrice.toFixed(2)}</TableCell>
                      <TableCell className="text-right">${holding.value.toFixed(2)}</TableCell>
                      <TableCell className={`text-right ${holding.return >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {holding.return >= 0 ? "+" : ""}
                        {holding.return.toFixed(2)}%
                      </TableCell>
                      <TableCell className="text-right">{holding.allocation.toFixed(1)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-6">
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Sector Allocation</CardTitle>
                <CardDescription>Distribution of your investments across market sectors</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <PieChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Interactive sector allocation chart</p>
                  <p className="text-sm">Hover over sectors for detailed information</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sector Breakdown</CardTitle>
                <CardDescription>Comparison to benchmark allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sectorAllocation.map((sector) => (
                    <div key={sector.sector} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{sector.sector}</span>
                        <span className="text-sm text-muted-foreground">{sector.allocation}%</span>
                      </div>
                      <Progress value={sector.allocation} className="h-2" />
                      <div className="flex justify-between text-xs">
                        <span
                          className={`${sector.difference > 0 ? "text-green-500" : sector.difference < 0 ? "text-red-500" : "text-gray-500"}`}
                        >
                          {sector.difference > 0 ? "+" : ""}
                          {sector.difference}% vs benchmark
                        </span>
                        <span className="text-muted-foreground">Benchmark: {sector.benchmark}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Additional Allocation Views</CardTitle>
              <CardDescription>Analyze your portfolio from different perspectives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-40 flex flex-col items-center justify-center gap-2">
                  <div className="p-3 rounded-full bg-blue-100">
                    <PieChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="font-medium">Asset Class</span>
                  <span className="text-sm text-muted-foreground text-center">Stocks, bonds, cash, alternatives</span>
                </Button>
                <Button variant="outline" className="h-40 flex flex-col items-center justify-center gap-2">
                  <div className="p-3 rounded-full bg-green-100">
                    <PieChart className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="font-medium">Geographic</span>
                  <span className="text-sm text-muted-foreground text-center">US, international, emerging markets</span>
                </Button>
                <Button variant="outline" className="h-40 flex flex-col items-center justify-center gap-2">
                  <div className="p-3 rounded-full bg-purple-100">
                    <PieChart className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="font-medium">Risk Factors</span>
                  <span className="text-sm text-muted-foreground text-center">Growth, value, momentum, quality</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>Historical returns over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <LineChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Interactive performance chart</p>
                <p className="text-sm">Compare your portfolio against benchmarks</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Key statistics about your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">YTD Return</p>
                    <p className="text-2xl font-bold text-green-500">+12.4%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">1-Year Return</p>
                    <p className="text-2xl font-bold text-green-500">+18.7%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">3-Year (Annualized)</p>
                    <p className="text-2xl font-bold text-green-500">+15.2%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">5-Year (Annualized)</p>
                    <p className="text-2xl font-bold text-green-500">+11.8%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Sharpe Ratio</p>
                    <p className="text-2xl font-bold">1.2</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Volatility</p>
                    <p className="text-2xl font-bold">14.5%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Max Drawdown</p>
                    <p className="text-2xl font-bold text-red-500">-22.3%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Beta</p>
                    <p className="text-2xl font-bold">0.92</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Contributors & Detractors</CardTitle>
                <CardDescription>Holdings with the biggest impact on performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2 text-green-600">Top Contributors</h4>
                    <div className="space-y-2">
                      {[
                        { name: "JPMorgan Chase & Co. (JPM)", contribution: "+4.2%" },
                        { name: "Amazon.com Inc. (AMZN)", contribution: "+3.1%" },
                        { name: "Apple Inc. (AAPL)", contribution: "+2.8%" },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-green-50 rounded">
                          <span>{item.name}</span>
                          <span className="font-medium text-green-600">{item.contribution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-red-600">Top Detractors</h4>
                    <div className="space-y-2">
                      {[
                        { name: "Tesla Inc. (TSLA)", contribution: "-2.1%" },
                        { name: "Vanguard Total Bond Market ETF (BND)", contribution: "-1.4%" },
                        { name: "Johnson & Johnson (JNJ)", contribution: "-0.4%" },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-red-50 rounded">
                          <span>{item.name}</span>
                          <span className="font-medium text-red-600">{item.contribution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                AI Portfolio Optimization
              </CardTitle>
              <CardDescription>
                Personalized recommendations to improve your portfolio based on your goals and risk profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {optimizationSuggestions.map((suggestion) => (
                  <div key={suggestion.id} className="border rounded-lg overflow-hidden">
                    <div
                      className={`p-4 ${
                        suggestion.priority === "high"
                          ? "bg-red-50"
                          : suggestion.priority === "medium"
                            ? "bg-amber-50"
                            : "bg-blue-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-full ${
                            suggestion.priority === "high"
                              ? "bg-red-100 text-red-600"
                              : suggestion.priority === "medium"
                                ? "bg-amber-100 text-amber-600"
                                : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          <AlertCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{suggestion.title}</h3>
                            <Badge
                              variant={
                                suggestion.priority === "high"
                                  ? "destructive"
                                  : suggestion.priority === "medium"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {suggestion.priority.charAt(0).toUpperCase() + suggestion.priority.slice(1)} Priority
                            </Badge>
                          </div>
                          <p className="text-sm mt-1">{suggestion.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Recommended Action</h4>
                          <p className="text-sm">{suggestion.action}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1">Expected Impact</h4>
                          <p className="text-sm">{suggestion.impact}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Ignore
                        </Button>
                        <Button size="sm">Apply Recommendation</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Run Full AI Portfolio Analysis
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

