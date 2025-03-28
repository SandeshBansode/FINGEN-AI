"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"
import { Bell, Search } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        <Link href="/" className="hidden md:block">
          <span className="text-xl font-bold">FinGen AI</span>
        </Link>
        <div className="relative flex-1 md:grow-0 md:basis-1/3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg border bg-background pl-8 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <ThemeToggle />
        <Button variant="outline" size="sm">
          Upgrade
        </Button>
        <UserNav />
      </div>
    </header>
  )
}

