import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, PieChart, LineChart, TrendingUp } from "lucide-react"

export default function PortfolioSimulatorPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Portfolio Simulator</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Test your investment strategies in a risk-free environment with our advanced portfolio simulator.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Create Simulation</CardTitle>
              <CardDescription>Start a new portfolio simulation</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <BarChart3 className="mr-2 h-4 w-4" /> New Simulation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Load Template</CardTitle>
              <CardDescription>Use pre-built portfolio templates</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <PieChart className="mr-2 h-4 w-4" /> Browse Templates
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Simulations</CardTitle>
              <CardDescription>Your latest portfolio simulations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <LineChart className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Conservative Portfolio</h3>
                      <p className="text-sm text-muted-foreground">Last modified: 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="ghost">View Results</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Aggressive Growth</h3>
                      <p className="text-sm text-muted-foreground">Last modified: 5 days ago</p>
                    </div>
                  </div>
                  <Button variant="ghost">View Results</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

