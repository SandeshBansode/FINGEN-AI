import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, TrendingUp, Home, Briefcase, GraduationCap } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function FinancialGoalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Financial Goals</h1>
        <Button>Add New Goal</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <div className="text-xs text-muted-foreground mt-1">
              <span>2 short-term, 2 long-term</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,500</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+12% from last quarter</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <div className="text-xs text-muted-foreground mt-1">
              <span>Average across all goals</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Financial Goals</CardTitle>
          <CardDescription>Track and manage your financial objectives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="font-semibold">Home Down Payment</h3>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Target: $60,000</span>
                  <span>Saved: $42,000 (70%)</span>
                </div>
                <Progress value={70} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Started: Jan 2023</span>
                  <span>Target Date: Dec 2025</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="font-semibold">Retirement Fund</h3>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Target: $1,000,000</span>
                  <span>Saved: $250,000 (25%)</span>
                </div>
                <Progress value={25} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Started: Jun 2020</span>
                  <span>Target Date: Jun 2050</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="font-semibold">Education Fund</h3>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Target: $50,000</span>
                  <span>Saved: $15,000 (30%)</span>
                </div>
                <Progress value={30} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Started: Mar 2022</span>
                  <span>Target Date: Sep 2028</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="font-semibold">Emergency Fund</h3>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Target: $25,000</span>
                  <span>Saved: $20,000 (80%)</span>
                </div>
                <Progress value={80} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Started: Jan 2022</span>
                  <span>Target Date: Dec 2023</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

