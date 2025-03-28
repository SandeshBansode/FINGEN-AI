import "./globals.css"
import { Inter } from "next/font/google"
import { NavMenu } from "./components/nav-menu"
import { FloatingAssistant } from "./components/floating-assistant"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FinAI - Your AI Financial Assistant",
  description: "AI-powered financial assistant for smarter investing",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} pt-16`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavMenu />
          {children}
          <FloatingAssistant />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'