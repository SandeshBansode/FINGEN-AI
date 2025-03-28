"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/components/ui/use-toast"
import { InfoIcon } from "lucide-react"

export function UITest() {
  const [tabValue, setTabValue] = useState("account")
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <Card>
      <CardHeader>
        <CardTitle>UI Components Integration Test</CardTitle>
        <CardDescription>Testing the integration of shadcn/ui components</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="account" value={tabValue} onValueChange={setTabValue}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4 border rounded-md mt-2">
            <h3 className="font-medium">Account Tab Content</h3>
            <p className="text-sm text-gray-500">Manage your account settings</p>
          </TabsContent>
          <TabsContent value="password" className="p-4 border rounded-md mt-2">
            <h3 className="font-medium">Password Tab Content</h3>
            <p className="text-sm text-gray-500">Change your password</p>
          </TabsContent>
          <TabsContent value="settings" className="p-4 border rounded-md mt-2">
            <h3 className="font-medium">Settings Tab Content</h3>
            <p className="text-sm text-gray-500">Manage your preferences</p>
          </TabsContent>
        </Tabs>

        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is an alert component to test UI integration.</AlertDescription>
        </Alert>

        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is the UI integration working?</AccordionTrigger>
            <AccordionContent>
              Yes, the UI components are properly integrated and functioning as expected.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I use these components in my app?</AccordionTrigger>
            <AccordionContent>
              Yes, all these components are available for use throughout your application.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </div>

        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>

        <div className="space-y-2">
          <Label>Investment Risk Tolerance: {sliderValue}%</Label>
          <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => toast.success("UI Test Successful!")}>Test Toast Notification</Button>
      </CardFooter>
    </Card>
  )
}

