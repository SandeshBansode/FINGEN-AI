"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Bot, Sun, Moon } from "lucide-react"
import { AIAssistant } from "./ai-assistant"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAssistantOpen, setIsAssistantOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#pricing", label: "Pricing" },
  ]

  const dashboardLinks = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/portfolio", label: "Portfolio" },
    { href: "/dashboard/market-analysis", label: "Markets" },
    { href: "/dashboard/learning", label: "Learning" },
  ]

  const isInDashboard = pathname?.includes("/dashboard")
  const activeLinks = isInDashboard ? dashboardLinks : navLinks

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                FinAI
              </Link>

              <div className="hidden md:flex items-center ml-10 space-x-8">
                {activeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-gray-600 hover:text-blue-600 transition-colors",
                      (pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))) &&
                        "text-blue-600 font-medium",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsAssistantOpen(true)}
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <Bot className="h-5 w-5" />
              </Button>

              {!isInDashboard ? (
                <>
                  <Link href="/auth/signin">
                    <Button variant="outline" className="mr-2">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Get Started
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-medium">
                    A
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsAssistantOpen(true)}
                className="text-blue-600 border-blue-200"
              >
                <Bot className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {activeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent",
                    (pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))) &&
                      "text-primary bg-accent",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {!isInDashboard && (
                <div className="pt-4 pb-3 border-t border-border">
                  <Link href="/auth/signin" onClick={() => setIsOpen(false)}>
                    <Button className="w-full mb-2">Sign In</Button>
                  </Link>
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">Get Started</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* AI Assistant */}
      <AIAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </>
  )
}

