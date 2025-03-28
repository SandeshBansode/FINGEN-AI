"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, ArrowDownRight, TrendingUp, BarChart, Calendar, Filter, ArrowRight } from "lucide-react"

export default function MarketAnalysisPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Fixed the string escaping issue by using single quotes inside double quotes
  const marketIndices = [
    { name: "S&P 500", ticker: "SPX", value: 4892.17, change: 0.87, status: "up" },
    { name: "Dow Jones", ticker: "DJI", value: 38239.98, change: 0.56, status: "up" },
    { name: "Nasdaq", ticker: "IXIC", value: 15451.31, change: 1.24, status: "up" },
    { name: "Russell 2000", ticker: "RUT", value: 2054.85, change: -0.32, status: "down" },
  ]

  const sectorPerformance = [
    { name: "Technology", change: 1.8, status: "up" },
    { name: "Healthcare", change: 0.6, status: "up" },
    { name: "Financials", change: 0.9, status: "up" },
    { name: "Consumer Discretionary", change: -0.3, status: "down" },
    { name: "Energy", change: 1.2, status: "up" },
    { name: "Utilities", change: -0.5, status: "down" },
    { name: "Materials", change: 0.4, status: "up" },
    { name: "Industrials", change: 0.7, status: "up" },
    { name: "Real Estate", change: -0.2, status: "down" },
    { name: "Communication Services", change: 1.1, status: "up" },
  ]

  const topMovers = [
    { name: "NVDA", fullName: "NVIDIA Corporation", change: 4.2, price: 926.78, volume: "32.5M" },
    { name: "TSLA", fullName: "Tesla, Inc.", change: 3.8, price: 175.34, volume: "28.7M" },
    { name: "AAPL", fullName: "Apple Inc.", change: -2.1, price: 169.25, volume: "25.3M" },
    { name: "AMD", fullName: "Advanced Micro Devices", change: 3.5, price: 178.45, volume: "22.1M" },
    { name: "META", fullName: "Meta Platforms, Inc.", change: 2.9, price: 485.12, volume: "18.6M" },
  ]

  const economicIndicators = [
    { name: "Inflation Rate (CPI)", value: "3.2%", change: -0.1, status: "positive" },
    { name: "Unemployment Rate", value: "3.8%", change: 0, status: "neutral" },
    { name: "GDP Growth Rate", value: "2.1%", change: 0.2, status: "positive" },
    { name: "Federal Funds Rate", value: "5.25-5.50%", change: 0, status: "neutral" },
    { name: "10-Year Treasury Yield", value: "4.32%", change: 0.05, status: "negative" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Market Analysis</h1>
          <p className="text-muted-foreground mt-1">Real-time market data and insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Historical Data
          </Button>
          <Button>
            <TrendingUp className="mr-2 h-4 w-4" />
            Market Insights
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketIndices.map((index, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{index.name}</p>
                  <h3 className="text-2xl font-bold mt-1">{index.value.toLocaleString()}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{index.ticker}</p>
                </div>
                <div
                  className={`flex items-center ${index.status === "up" ? "text-green-600 bg-green-100 dark:bg-green-900/30" : "text-red-600 bg-red-100 dark:bg-red-900/30"} px-2.5 py-0.5 rounded-full text-xs font-medium`}
                >
                  {index.status === "up" ? (
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                  )}
                  <span>{Math.abs(index.change)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="overview">Market Overview</TabsTrigger>
          <TabsTrigger value="sectors">Sector Analysis</TabsTrigger>
          <TabsTrigger value="stocks">Top Movers</TabsTrigger>
          <TabsTrigger value="economy">Economic Indicators</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle>Market Performance</CardTitle>
                <CardDescription>Major indices performance over time</CardDescription>
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
                  <p className="text-muted-foreground text-sm">Market performance chart</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Breadth</CardTitle>
                <CardDescription>Advancing vs. declining stocks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <div className="h-[180px] w-[180px] relative">
                    {/* This would be a real chart in a production app */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Market breadth chart</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Advancing (62%)</span>
                    </div>
                    <span className="text-sm font-medium">1,854 stocks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Declining (38%)</span>
                    </div>
                    <span className="text-sm font-medium">1,136 stocks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-gray-300 mr-2"></div>
                      <span className="text-sm">Unchanged</span>
                    </div>
                    <span className="text-sm font-medium">42 stocks</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Sentiment</CardTitle>
                <CardDescription>Current investor sentiment indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Fear & Greed Index</span>
                      <span className="text-sm font-medium">68 - Greed</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">VIX (Volatility Index)</span>
                      <span className="text-sm font-medium">16.24 - Low</span>
                    </div>
                    <Progress value={32} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Put/Call Ratio</span>
                      <span className="text-sm font-medium">0.85 - Neutral</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Bullish Sentiment</span>
                      <span className="text-sm font-medium">58% - Above Average</span>
                    </div>
                    <Progress value={58} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Market News</CardTitle>
              <CardDescription>Latest financial news and headlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Fed signals potential rate cuts later this year",
                    time: "2 hours ago",
                    source: "Financial Times",
                  },
                  {
                    title: "Tech stocks rally on strong earnings reports",
                    time: "4 hours ago",
                    source: "Wall Street Journal",
                  },
                  { title: "Oil prices rise amid Middle East tensions", time: "6 hours ago", source: "Bloomberg" },
                  { title: "Retail sales data exceeds expectations", time: "8 hours ago", source: "CNBC" },
                  { title: "Treasury yields climb on inflation concerns", time: "10 hours ago", source: "Reuters" },
                ].map((news, index) => (
                  <div key={index} className="flex justify-between items-start pb-3 border-b last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-medium">{news.title}</h4>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <span>{news.time}</span>
                        <span className="mx-1">•</span>
                        <span>{news.source}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sectors" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sector Performance</CardTitle>
              <CardDescription>Performance by market sector</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sectorPerformance.map((sector, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{sector.name}</span>
                    <div className={`flex items-center ${sector.status === "up" ? "text-green-600" : "text-red-600"}`}>
                      {sector.status === "up" ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      <span>{Math.abs(sector.change)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle>Sector Breakdown</CardTitle>
                <CardDescription>Detailed sector analysis</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full relative">
                {/* This would be a real chart in a production app */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Sector breakdown chart</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sector Rotation</CardTitle>
                <CardDescription>30-day sector performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full relative">
                  {/* This would be a real chart in a production app */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Sector rotation chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sector Valuation</CardTitle>
                <CardDescription>P/E ratios by sector</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full relative">
                  {/* This would be a real chart in a production app */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Sector valuation chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="stocks" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Movers</CardTitle>
              <CardDescription>Stocks with significant price movement today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topMovers.map((stock, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b last:border-0 last:pb-0">
                    <div>
                      <div className="font-medium">{stock.name}</div>
                      <div className="text-xs text-muted-foreground">{stock.fullName}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">${stock.price}</div>
                      <div className="text-xs text-muted-foreground">Volume: {stock.volume}</div>
                    </div>
                    <div className={`text-right ${stock.change > 0 ? "text-green-600" : "text-red-600"}`}>
                      <div className="font-medium flex items-center">
                        {stock.change > 0 ? (
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        )}
                        {Math.abs(stock.change)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Most Active</CardTitle>
                <CardDescription>Stocks with highest trading volume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "AAPL", fullName: "Apple Inc.", volume: "78.3M", price: 169.25 },
                    { name: "AMD", fullName: "Advanced Micro Devices", volume: "65.7M", price: 178.45 },
                    { name: "TSLA", fullName: "Tesla, Inc.", volume: "62.1M", price: 175.34 },
                    { name: "NVDA", fullName: "NVIDIA Corporation", volume: "58.9M", price: 926.78 },
                    { name: "INTC", fullName: "Intel Corporation", volume: "45.2M", price: 42.37 },
                  ].map((stock, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{stock.name}</div>
                        <div className="text-xs text-muted-foreground">{stock.fullName}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${stock.price}</div>
                        <div className="text-xs text-muted-foreground">Vol: {stock.volume}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>New 52-Week Highs</CardTitle>
                <CardDescription>Stocks reaching new yearly highs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "NVDA", fullName: "NVIDIA Corporation", price: 926.78, prevHigh: 895.12 },
                    { name: "META", fullName: "Meta Platforms, Inc.", price: 485.12, prevHigh: 478.64 },
                    { name: "MSFT", fullName: "Microsoft Corporation", price: 415.32, prevHigh: 413.78 },
                    { name: "GOOGL", fullName: "Alphabet Inc.", price: 152.87, prevHigh: 151.93 },
                    { name: "AMZN", fullName: "Amazon.com Inc.", price: 178.45, prevHigh: 176.22 },
                  ].map((stock, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{stock.name}</div>
                        <div className="text-xs text-muted-foreground">{stock.fullName}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${stock.price}</div>
                        <div className="text-xs text-green-600">+${(stock.price - stock.prevHigh).toFixed(2)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Stock Screener</CardTitle>
              <CardDescription>Find stocks based on custom criteria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <BarChart className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Discover Investment Opportunities</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use our advanced stock screener to find stocks that match your investment criteria.
                </p>
                <Button>
                  Launch Stock Screener
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="economy" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Economic Indicators</CardTitle>
              <CardDescription>Key economic data and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {economicIndicators.map((indicator, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b last:border-0 last:pb-0">
                    <span className="font-medium">{indicator.name}</span>
                    <div className="text-center">
                      <div className="font-medium">{indicator.value}</div>
                    </div>
                    <div
                      className={`text-right ${
                        indicator.status === "positive"
                          ? "text-green-600"
                          : indicator.status === "negative"
                            ? "text-red-600"
                            : "text-yellow-600"
                      }`}
                    >
                      <div className="font-medium flex items-center justify-end">
                        {indicator.change > 0 ? (
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : indicator.change < 0 ? (
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        ) : (
                          ""
                        )}
                        {indicator.change !== 0 ? `${Math.abs(indicator.change)}` : "Unchanged"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Inflation Trend</CardTitle>
                <CardDescription>Consumer Price Index (CPI) over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full relative">
                  {/* This would be a real chart in a production app */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Inflation trend chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Unemployment Rate</CardTitle>
                <CardDescription>Labor market trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full relative">
                  {/* This would be a real chart in a production app */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Unemployment rate chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Yield Curve</CardTitle>
              <CardDescription>Treasury yield curve and historical comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full relative">
                {/* This would be a real chart in a production app */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Yield curve chart</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="p-3 border rounded-lg">
                  <div className="text-sm text-muted-foreground">2-Year Treasury</div>
                  <div className="text-xl font-bold mt-1">4.65%</div>
                  <div className="text-xs text-red-600 mt-1">+0.03%</div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="text-sm text-muted-foreground">10-Year Treasury</div>
                  <div className="text-xl font-bold mt-1">4.32%</div>
                  <div className="text-xs text-red-600 mt-1">+0.05%</div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="text-sm text-muted-foreground">30-Year Treasury</div>
                  <div className="text-xl font-bold mt-1">4.48%</div>
                  <div className="text-xs text-red-600 mt-1">+0.04%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

