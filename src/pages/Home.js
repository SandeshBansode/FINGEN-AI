import { Link } from "react-router-dom"

export default function Home() {
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
                <Link
                  to="/recommendations"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium shadow-md inline-block"
                >
                  Start Investing with AI
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <div className="relative transform rotate-12">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-400 opacity-20 rounded-2xl"></div>
                <div className="relative bg-black rounded-2xl shadow-2xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="grid grid-cols-6 gap-2">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${
                          Math.random() > 0.7
                            ? "bg-purple-500"
                            : Math.random() > 0.7
                              ? "bg-green-400"
                              : "bg-transparent"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="h-4 w-16 bg-gray-700 rounded"></div>
                    <div className="h-4 w-32 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">How FinAI Works</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
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
                      className="h-8 w-8 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Personalized Guidance",
                  description: "Get investment recommendations tailored to your goals and risk tolerance",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Market Insights",
                  description: "Stay informed with AI-analyzed market trends and investment opportunities",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-bg text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Ready to start your investment journey?</h2>
          <p className="mt-4 text-xl">Join thousands of investors using AI to achieve their financial goals</p>
          <div className="mt-8">
            <Link
              to="/learning"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium shadow-md inline-block"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

