import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button>Edit Profile</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="pt-6 flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground mb-4">Joined January 2023</p>
            <div className="w-full space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6">
              Change Password
            </Button>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="investments">Investments</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investor Profile</CardTitle>
                  <CardDescription>Your investment preferences and risk tolerance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Risk Tolerance</span>
                      <span className="text-sm font-medium">Moderate</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Investment Experience</span>
                      <span className="text-sm font-medium">Intermediate</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Financial Knowledge</span>
                      <span className="text-sm font-medium">Advanced</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your basic information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                      <p>John Michael Doe</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                      <p>April 12, 1985</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Occupation</p>
                      <p>Software Engineer</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Annual Income</p>
                      <p>$120,000 - $150,000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="investments" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Preferences</CardTitle>
                  <CardDescription>Your investment style and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Investment Horizon</p>
                    <p>Long-term (10+ years)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Preferred Asset Classes</p>
                    <p>Stocks, ETFs, Real Estate</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Investment Strategy</p>
                    <p>Growth with some value investing</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">ESG Preferences</p>
                    <p>Moderate consideration for ESG factors</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent actions and logins</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Portfolio Rebalanced</p>
                          <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Login from New Device</p>
                          <p className="text-xs text-muted-foreground">Yesterday, 8:15 PM</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Profile Updated</p>
                          <p className="text-xs text-muted-foreground">March 15, 2023</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="preferences" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Preferences</CardTitle>
                  <CardDescription>How you want to receive updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Email Frequency</p>
                    <p>Weekly digest</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">SMS Alerts</p>
                    <p>Enabled for critical notifications only</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Marketing Communications</p>
                    <p>Opted out</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

