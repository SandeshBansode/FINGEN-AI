import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, CheckCircle, AlertTriangle, TrendingUp, Calendar, Settings } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex gap-2">
          <Button variant="outline">Mark All as Read</Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  icon={<TrendingUp className="h-5 w-5 text-green-500" />}
                  title="Portfolio Update"
                  description="Your portfolio has increased by 2.5% today."
                  time="10 minutes ago"
                  isUnread
                />
                <NotificationItem
                  icon={<AlertTriangle className="h-5 w-5 text-amber-500" />}
                  title="Market Alert"
                  description="Unusual volatility detected in technology sector."
                  time="2 hours ago"
                  isUnread
                />
                <NotificationItem
                  icon={<Calendar className="h-5 w-5 text-blue-500" />}
                  title="Upcoming Dividend"
                  description="AAPL dividend payment scheduled for next week."
                  time="Yesterday"
                />
                <NotificationItem
                  icon={<CheckCircle className="h-5 w-5 text-green-500" />}
                  title="Goal Milestone"
                  description="You've reached 50% of your retirement savings goal!"
                  time="2 days ago"
                />
                <NotificationItem
                  icon={<Bell className="h-5 w-5 text-blue-500" />}
                  title="New Feature Available"
                  description="Try our new portfolio rebalancing tool."
                  time="3 days ago"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alerts" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  icon={<AlertTriangle className="h-5 w-5 text-amber-500" />}
                  title="Market Alert"
                  description="Unusual volatility detected in technology sector."
                  time="2 hours ago"
                  isUnread
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="updates" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  icon={<TrendingUp className="h-5 w-5 text-green-500" />}
                  title="Portfolio Update"
                  description="Your portfolio has increased by 2.5% today."
                  time="10 minutes ago"
                  isUnread
                />
                <NotificationItem
                  icon={<Bell className="h-5 w-5 text-blue-500" />}
                  title="New Feature Available"
                  description="Try our new portfolio rebalancing tool."
                  time="3 days ago"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reminders" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  icon={<Calendar className="h-5 w-5 text-blue-500" />}
                  title="Upcoming Dividend"
                  description="AAPL dividend payment scheduled for next week."
                  time="Yesterday"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Push Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">SMS Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
              </div>
              <Button variant="outline">Configure</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function NotificationItem({ icon, title, description, time, isUnread = false }) {
  return (
    <div className={`flex items-start p-4 ${isUnread ? "bg-accent/20" : ""}`}>
      <div className="mr-4">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className={`font-medium ${isUnread ? "font-semibold" : ""}`}>{title}</h3>
          {isUnread && <div className="ml-2 w-2 h-2 rounded-full bg-blue-500"></div>}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <p className="text-xs text-muted-foreground mt-2">{time}</p>
      </div>
      <Button variant="ghost" size="sm">
        View
      </Button>
    </div>
  )
}

