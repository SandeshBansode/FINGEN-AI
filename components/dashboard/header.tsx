"use client"
import { usePathname } from "next/navigation"

export function DashboardHeader() {
  const pathname = usePathname()

  // Function to get the current page title based on the pathname
  const getPageTitle = () => {
    const path = pathname ?? "/"
   // console.log("Current Path:", pathname); // Debugging output//
    if (path.length === 1) return "Dashboard"

    // Convert kebab-case to Title Case and remove hyphens
    const pageName = path[path.length - 1]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return pageName
  }

  return (
    <header className="h-16 border-b bg-background flex items-center px-6">
      <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
    </header>
  )
}

