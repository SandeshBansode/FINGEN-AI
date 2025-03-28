import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, Bookmark, Clock, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EducationalResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Educational Resources</h1>
        <Button>Save for Later</Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard
              icon={<FileText className="h-8 w-8 text-blue-500" />}
              title="Understanding Market Volatility"
              description="Learn how market volatility works and strategies to navigate uncertain times."
              type="Article"
              time="10 min read"
              level="Beginner"
            />
            <ResourceCard
              icon={<Video className="h-8 w-8 text-blue-500" />}
              title="Introduction to Stock Investing"
              description="A comprehensive guide to getting started with stock market investments."
              type="Video"
              time="25 min watch"
              level="Beginner"
            />
            <ResourceCard
              icon={<BookOpen className="h-8 w-8 text-blue-500" />}
              title="Advanced Portfolio Diversification"
              description="Strategies for building a well-diversified investment portfolio."
              type="Course"
              time="3 hours total"
              level="Intermediate"
            />
            <ResourceCard
              icon={<FileText className="h-8 w-8 text-blue-500" />}
              title="Tax-Efficient Investing"
              description="Learn how to minimize tax impact on your investment returns."
              type="Article"
              time="15 min read"
              level="Advanced"
            />
          </div>
        </TabsContent>
        <TabsContent value="articles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard
              icon={<FileText className="h-8 w-8 text-blue-500" />}
              title="Understanding Market Volatility"
              description="Learn how market volatility works and strategies to navigate uncertain times."
              type="Article"
              time="10 min read"
              level="Beginner"
            />
            <ResourceCard
              icon={<FileText className="h-8 w-8 text-blue-500" />}
              title="Tax-Efficient Investing"
              description="Learn how to minimize tax impact on your investment returns."
              type="Article"
              time="15 min read"
              level="Advanced"
            />
          </div>
        </TabsContent>
        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard
              icon={<Video className="h-8 w-8 text-blue-500" />}
              title="Introduction to Stock Investing"
              description="A comprehensive guide to getting started with stock market investments."
              type="Video"
              time="25 min watch"
              level="Beginner"
            />
          </div>
        </TabsContent>
        <TabsContent value="courses" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard
              icon={<BookOpen className="h-8 w-8 text-blue-500" />}
              title="Advanced Portfolio Diversification"
              description="Strategies for building a well-diversified investment portfolio."
              type="Course"
              time="3 hours total"
              level="Intermediate"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Recommended for You</CardTitle>
          <CardDescription>Based on your interests and goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start p-4 border rounded-lg">
              <BookOpen className="h-8 w-8 mr-4 text-blue-500" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Retirement Planning Essentials</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  A comprehensive guide to planning for retirement at any age.
                </p>
                <div className="flex items-center mt-2">
                  <Button variant="outline" size="sm" className="mr-2">
                    <Bookmark className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button size="sm">Start Learning</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ResourceCard({ icon, title, description, type, time, level }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-4">{icon}</div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="bg-accent px-2 py-1 rounded mr-2">{type}</span>
                <Clock className="h-3 w-3 mr-1" />
                <span className="mr-2">{time}</span>
                <span>{level}</span>
              </div>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

