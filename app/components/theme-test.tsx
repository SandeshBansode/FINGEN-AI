"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ThemeTest() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Integration Test</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Label htmlFor="theme-toggle">Dark Mode</Label>
          <Switch id="theme-toggle" checked={isDarkMode} onCheckedChange={toggleTheme} />
        </div>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-background text-foreground border rounded-md">
            <p>This is text with background and foreground colors</p>
          </div>

          <div className="p-4 bg-primary text-primary-foreground rounded-md">
            <p>This is text with primary colors</p>
          </div>

          <div className="p-4 bg-secondary text-secondary-foreground rounded-md">
            <p>This is text with secondary colors</p>
          </div>

          <div className="p-4 bg-muted text-muted-foreground rounded-md">
            <p>This is text with muted colors</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

