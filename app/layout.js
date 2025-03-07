import "./globals.css"

export const metadata = {
  title: "FinAI - Your AI Financial Assistant",
  description: "AI-powered financial assistant for smarter investing",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'