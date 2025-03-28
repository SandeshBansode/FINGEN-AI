"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  PieChart,
  Settings,
  ShieldCheck,
  Target,
  User,
  Bell,
  BookOpen,
  Briefcase,
} from "lucide-react"

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Portfolio",
    href: "/dashboard/portfolio",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Investment Recommendations",
    href: "/dashboard/investment-recommendations",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    title: "Market Analysis",
    href: "/dashboard/market-analysis",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    title: "Risk Assessment",
    href: "/dashboard/risk-assessment",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Financial Goals",
    href: "/dashboard/financial-goals",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Learning",
    href: "/dashboard/learning",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Educational Resources",
    href: "/dashboard/educational-resources",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "AI Assistant",
    href: "/dashboard/ai-assistant",
    icon: <PieChart className="h-5 w-5" />,
  },
]

const accountNavItems = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: <User className="h-5 w-5" />,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: <Bell className="h-5 w-5" />,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="group flex h-screen w-16 flex-col justify-between border-r bg-background px-2 py-4 transition-all duration-300 hover:w-64 md:w-64">
      <div className="flex flex-col gap-4">
        <div className="flex h-16 items-center justify-center md:justify-start">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <PieChart className="h-4 w-4" />
            </div>
            <span className="hidden text-xl font-bold md:inline-block group-hover:inline-block">FinGen AI</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-1">
          {mainNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex h-10 items-center gap-2 rounded-lg px-3 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground ${
                pathname === item.href ? "bg-accent text-accent-foreground" : ""
              }`}
            >
              {item.icon}
              <span className="hidden md:inline-block group-hover:inline-block">{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-1 border-t pt-4">
        {accountNavItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex h-10 items-center gap-2 rounded-lg px-3 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground ${
              pathname === item.href ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            {item.icon}
            <span className="hidden md:inline-block group-hover:inline-block">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

