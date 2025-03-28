import type React from "react"
import { DashboardNav } from "@/components/dashboard/nav"
import { DashboardHeader } from "@/components/dashboard/header"

export const metadata = {
  title: "FinGen AI - Dashboard",
  description: "Manage your finances with AI-powered insights",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 md:p-8 pt-2">{children}</main>
      </div>
    </div>
  )
}

