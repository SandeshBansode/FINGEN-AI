"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart3,
  LineChart,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  Target,
  User,
  Settings,
  LogOut,
} from "lucide-react"

const navItems = [
  { icon: BarChart3, label: "Portfolio", href: "/dashboard" },
  { icon: LineChart, label: "Market Analysis", href: "/dashboard/market-analysis" },
  { icon: BookOpen, label: "Education", href: "/dashboard/education" },
  { icon: MessageSquare, label: "AI Assistant", href: "/dashboard/ai-assistant" },
  { icon: ShieldCheck, label: "Risk Assessment", href: "/dashboard/risk-assessment" },
  { icon: Target, label: "Financial Goals", href: "/dashboard/financial-goals" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-card border-r">
      <div className="p-4 border-b">
        <Link
          href="/dashboard"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          FinAI
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="space-y-1 p-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn("w-full justify-start", pathname === item.href && "bg-accent")}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="outline" className="w-full justify-start text-muted-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </nav>
  )
}

