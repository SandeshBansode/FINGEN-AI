"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, TrendingUp, AlertTriangle, DollarSign, BarChart, PieChart, ArrowRight } from "lucide-react"

export default function InvestmentRecommendationsPage() {
  const [loading, setLoading] = useState(false)
  const [riskLevel, setRiskLevel] = useState(50)
  const [timeHorizon, setTimeHorizon] = useState("medium")
  const [investmentAmount, setInvestmentAmount] = useState("10000")
  const [esgFocus, setEsgFocus] = useState(false)
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      name: "Growth ETF Portfolio",
      description:
        "A diversified mix of growth-oriented ETFs focusing on technology, healthcare, and consumer discretionary sectors.",
      expectedReturn: "8-12%",
      riskLevel: "Moderate",
      timeHorizon: "3-5 years",
      allocation: [
        { name: "Technology ETF (VGT)", percentage: 40 },
        { name: "Healthcare ETF (VHT)", percentage: 25 },
        { name: "Consumer Discretionary ETF (VCR)", percentage: 20 },
        { name: "Cash/Bonds", percentage: 15 },
      ],
      confidence: 85,
      tags: ["Growth", "Technology", "Diversified"],
    },
    {
      id: 2,
      name: "Dividend Income Strategy",
      description: "Focus on stable companies with history of dividend growth and strong balance sheets.",
      expectedReturn: "6-8%",
      riskLevel: "Low to Moderate",
      timeHorizon: "5+ years",
      allocation: [
        { name: "Dividend Aristocrats ETF (NOBL)", percentage: 35 },
        { name: "Utilities Select Sector SPDR (XLU)", percentage: 25 },
        { name: "Vanguard Real Estate ETF (VNQ)", percentage: 25 },
        { name: "Cash/Short-term Bonds", percentage: 15 },
      ],
      confidence: 90,
      tags: ["Income", "Dividends", "Stability"],
    },
    {
      id: 3,
      name: "Aggressive Growth Portfolio",
      description: "High-growth potential with focus on emerging technologies and disruptive companies.",
      expectedReturn: "12-18%",
      riskLevel: "High",
      timeHorizon: "7+ years",
      allocation: [
        { name: "ARK Innovation ETF (ARKK)", percentage: 30 },
        { name: "Emerging Markets ETF (VWO)", percentage: 25 },
        { name: "Small Cap Growth ETF (VBK)", percentage: 30 },
        { name: "Cash/Bonds", percentage: 15 },
      ],
      confidence: 75,
      tags: ["Aggressive", "High Growth", "Emerging Tech"],
    },
  ])

  const handleGenerateRecommendations = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">AI Investment Recommendations</h1>
      </div>

      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="preferences">Your Preferences</TabsTrigger>
          <TabsTrigger value="insights">Market Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
                Personalized Investment Recommendations
              </CardTitle>
              <CardDescription>
                AI-powered investment suggestions tailored to your financial goals and risk tolerance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {recommendations.map((recommendation) => (
                <Card key={recommendation.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{recommendation.name}</CardTitle>
                        <CardDescription className="mt-1">{recommendation.description}</CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {recommendation.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">AI Confidence Score</span>
                            <span className="font-medium">{recommendation.confidence}%</span>
                          </div>
                          <Progress value={recommendation.confidence} className="h-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Expected Return</p>
                            <p className="font-medium">{recommendation.expectedReturn}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Risk Level</p>
                            <p className="font-medium">{recommendation.riskLevel}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Time Horizon</p>
                            <p className="font-medium">{recommendation.timeHorizon}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Recommended Allocation</p>
                        <div className="space-y-2">
                          {recommendation.allocation.map((item) => (
                            <div key={item.name} className="flex justify-between items-center">
                              <span className="text-sm">{item.name}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                  <div className="h-full bg-primary" style={{ width: `${item.percentage}%` }} />
                                </div>
                                <span className="text-sm font-medium w-8 text-right">{item.percentage}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/30 flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">
                      Apply to Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Investment Preferences</CardTitle>
              <CardDescription>Customize your investment criteria to get more relevant recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="investment-amount">Investment Amount</Label>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="investment-amount"
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="risk-tolerance">Risk Tolerance</Label>
                  <span className="text-sm text-muted-foreground">
                    {riskLevel < 33 ? "Conservative" : riskLevel < 66 ? "Moderate" : "Aggressive"}
                  </span>
                </div>
                <Slider
                  id="risk-tolerance"
                  min={0}
                  max={100}
                  step={1}
                  value={[riskLevel]}
                  onValueChange={(value) => setRiskLevel(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Low Risk</span>
                  <span>High Risk</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time-horizon">Investment Time Horizon</Label>
                <Select value={timeHorizon} onValueChange={setTimeHorizon}>
                  <SelectTrigger id="time-horizon">
                    <SelectValue placeholder="Select time horizon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short Term ({"<"} 2 years)</SelectItem>
                    <SelectItem value="medium">Medium Term (2-5 years)</SelectItem>
                    <SelectItem value="long">Long Term (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment-goals">Primary Investment Goal</Label>
                <Select defaultValue="growth">
                  <SelectTrigger id="investment-goals">
                    <SelectValue placeholder="Select investment goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="growth">Capital Growth</SelectItem>
                    <SelectItem value="income">Income Generation</SelectItem>
                    <SelectItem value="preservation">Capital Preservation</SelectItem>
                    <SelectItem value="balanced">Balanced Growth & Income</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-0.5">
                  <Label htmlFor="esg-focus">ESG/Sustainable Investing Focus</Label>
                  <p className="text-sm text-muted-foreground">
                    Prioritize environmental, social, and governance factors
                  </p>
                </div>
                <Switch id="esg-focus" checked={esgFocus} onCheckedChange={setEsgFocus} />
              </div>

              <Button className="w-full" onClick={handleGenerateRecommendations} disabled={loading}>
                {loading ? "Generating Recommendations..." : "Generate Recommendations"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
                Market Trends & Insights
              </CardTitle>
              <CardDescription>AI analysis of current market conditions affecting your recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Growth Sectors Outlook</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Technology and healthcare sectors continue to show strong growth potential, with AI, cloud
                      computing, and biotechnology leading innovation. Consider increasing allocation to these sectors
                      for growth-oriented portfolios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Interest Rate Sensitivity</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Current interest rate environment suggests caution with long-duration bonds and rate-sensitive
                      sectors like utilities and real estate. Consider shorter duration fixed income and floating rate
                      instruments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <BarChart className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Valuation Analysis</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      U.S. large-cap stocks are trading at above-average valuations, while international and emerging
                      markets offer more attractive valuations. Consider geographic diversification for better
                      risk-adjusted returns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <PieChart className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Asset Allocation Trends</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Institutional investors are increasing allocations to alternative investments like private equity
                      and real assets as a hedge against inflation and for diversification. Consider adding 5-10%
                      allocation to alternatives if suitable for your risk profile.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

