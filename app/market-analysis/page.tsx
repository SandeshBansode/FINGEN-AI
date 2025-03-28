import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, TrendingUp, TrendingDown, BarChart2 } from "lucide-react"

export default function MarketAnalysisPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Market Analysis</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Get AI-powered insights and analysis of market trends and opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Market Overview</CardTitle>
              <CardDescription>Current market conditions and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="font-medium">S&P 500</span>
                  </div>
                  <span className="text-green-500">+1.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    <span className="font-medium">NASDAQ</span>
                  </div>
                  <span className="text-red-500">-0.8%</span>
                </div>
                <Button className="w-full mt-4">View Full Report</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>Latest AI-generated market insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Market Sentiment</h3>
                  <p className="text-sm text-muted-foreground">
                    AI analysis suggests cautiously optimistic market conditions.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Generate New Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sector Performance</CardTitle>
            <CardDescription>Performance analysis by market sector</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Technology Sector</h3>
                    <p className="text-sm text-muted-foreground">Strong growth potential identified</p>
                  </div>
                </div>
                <Button variant="ghost">View Details</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <LineChart className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Healthcare Sector</h3>
                    <p className="text-sm text-muted-foreground">Stable performance expected</p>
                  </div>
                </div>
                <Button variant="ghost">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

