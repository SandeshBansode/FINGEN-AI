"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export function FormTest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    investmentType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Form submitted successfully!", {
      description: `Name: ${formData.name}, Email: ${formData.email}, Investment Type: ${formData.investmentType}`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Integration Test</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="investment-type">Investment Type</Label>
            <Select
              value={formData.investmentType}
              onValueChange={(value) => setFormData({ ...formData, investmentType: value })}
              required
            >
              <SelectTrigger id="investment-type">
                <SelectValue placeholder="Select investment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stocks">Stocks</SelectItem>
                <SelectItem value="bonds">Bonds</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="crypto">Cryptocurrency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Submit Form
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

