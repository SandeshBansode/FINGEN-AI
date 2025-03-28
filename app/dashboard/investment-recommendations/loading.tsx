import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InvestmentRecommendationsLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[300px]" />
      </div>

      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recommendations" disabled>
            Recommendations
          </TabsTrigger>
          <TabsTrigger value="preferences" disabled>
            Your Preferences
          </TabsTrigger>
          <TabsTrigger value="insights" disabled>
            Market Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-4 w-[350px] mt-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <Skeleton className="h-6 w-[200px]" />
                    <Skeleton className="h-4 w-[300px] mt-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Skeleton className="h-9 w-[100px]" />
                    <Skeleton className="h-9 w-[150px]" />
                  </CardFooter>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

