import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Play, FileText, GraduationCap } from "lucide-react"

export default function EducationalResourcesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Educational Resources</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Learn about financial management, investing, and market analysis through our comprehensive educational
          resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Learning Paths</CardTitle>
              <CardDescription>Structured courses for all skill levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Beginner's Guide to Investing</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Start your investment journey here</p>
                  <Button size="sm">Start Course</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Advanced Trading Strategies</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">For experienced investors</p>
                  <Button size="sm">Start Course</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Learn through expert video content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Market Analysis Basics</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">15 minutes</p>
                  <Button size="sm" variant="outline">
                    Watch Now
                  </Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Portfolio Management</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">20 minutes</p>
                  <Button size="sm" variant="outline">
                    Watch Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Latest Articles</CardTitle>
              <CardDescription>Read our latest financial insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Understanding Market Cycles</h3>
                      <p className="text-sm text-muted-foreground">5 min read</p>
                    </div>
                  </div>
                  <Button variant="ghost">Read Article</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Risk Management Strategies</h3>
                      <p className="text-sm text-muted-foreground">8 min read</p>
                    </div>
                  </div>
                  <Button variant="ghost">Read Article</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

