export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Your AI Investment Guide
              </h1>
              <p className="mt-3 text-xl">
                Smarter investing starts here. Get personalized financial advice powered by AI.
              </p>
              <div className="mt-8">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium shadow-md">
                  Start Investing with AI
                </button>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="AI Financial Assistant"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">How FinAI Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              Our AI-powered platform makes investing simple and accessible for everyone
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "AI-Powered Learning",
                  description: "Learn financial concepts through interactive, personalized AI lessons",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-brain"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                    </svg>
                  ),
                },
                {
                  title: "Personalized Guidance",
                  description: "Get investment recommendations tailored to your goals and risk tolerance",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-target"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                },
                {
                  title: "Market Insights",
                  description: "Stay informed with AI-analyzed market trends and investment opportunities",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-line-chart"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md card-hover">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">What Our Users Say</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "First-time Investor",
                content:
                  "FinAI made investing approachable for me. The AI explanations are clear and I feel confident making investment decisions now.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Michael Chen",
                role: "Experienced Trader",
                content:
                  "The market insights are incredibly valuable. The AI catches trends I might have missed and has improved my portfolio performance.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Priya Patel",
                role: "Retirement Planner",
                content:
                  "I love how the AI tailors recommendations to my retirement goals. It's like having a financial advisor available 24/7.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "How does the AI provide investment advice?",
                answer:
                  "Our AI analyzes market data, your financial goals, and risk tolerance to provide personalized investment recommendations. It's designed to educate and guide, not replace professional financial advice.",
              },
              {
                question: "Is my financial data secure?",
                answer:
                  "Yes, we use bank-level encryption to protect your data. We never share your personal information with third parties without your explicit consent.",
              },
              {
                question: "Can I use FinAI if I'm a complete beginner?",
                answer:
                  "FinAI is designed to be accessible for investors of all experience levels. Our AI will adjust explanations and recommendations based on your knowledge level.",
              },
              {
                question: "How much does FinAI cost?",
                answer:
                  "We offer a free basic plan with limited features. Our premium plans start at $9.99/month and include full access to AI recommendations and personalized learning paths.",
              },
            ].map((faq, index) => (
              <div key={index} className="py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-bg text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Ready to start your investment journey?</h2>
          <p className="mt-4 text-xl">Join thousands of investors using AI to achieve their financial goals</p>
          <div className="mt-8">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium shadow-md">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

