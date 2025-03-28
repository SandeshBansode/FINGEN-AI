import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, Wallet, ArrowRightLeft, CreditCard, PiggyBank, LineChart, Bot, Shield } from "lucide-react"

const features = [
  {
    title: "Smart Portfolio Management",
    description: "Intelligently manage and track your investments with AI-powered insights.",
    icon: BarChart3,
    href: "/portfolio",
  },
  {
    title: "Digital Wallet",
    description: "Securely store and manage your digital assets in one place.",
    icon: Wallet,
    href: "/wallet",
  },
  {
    title: "Instant Transfers",
    description: "Send and receive funds instantly with zero fees.",
    icon: ArrowRightLeft,
    href: "/transfers",
  },
  {
    title: "Virtual Cards",
    description: "Create and manage virtual cards for secure online transactions.",
    icon: CreditCard,
    href: "/cards",
  },
  {
    title: "Automated Savings",
    description: "Set up smart rules to automatically save money based on your goals.",
    icon: PiggyBank,
    href: "/savings",
  },
  {
    title: "Real-time Analytics",
    description: "Get detailed insights into your spending and investment patterns.",
    icon: LineChart,
    href: "/analytics",
  },
  {
    title: "AI Assistant",
    description: "Get personalized financial advice from our AI-powered assistant.",
    icon: Bot,
    href: "/ai-assistant",
  },
  {
    title: "Security First",
    description: "Bank-grade security to keep your assets and data safe.",
    icon: Shield,
    href: "/security",
  },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
          Powerful Features for Your Financial Success
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover all the tools and features that make FinAI the perfect platform for managing your finances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link key={feature.title} href={feature.href}>
            <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto font-semibold">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

