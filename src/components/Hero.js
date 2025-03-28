export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f5f3ff] min-h-screen">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-purple-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-400 rounded-full opacity-20"></div>
      <div className="absolute top-40 left-1/4 w-6 h-6 bg-purple-400 rounded-sm opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold leading-tight mb-6">A Modern Bank Card For A Modern World</h1>
            <p className="text-xl text-gray-600 mb-8">
              This Modern Bank Card Embraces The Era Of Contactless Payments, Enabling Swift And Effortless Transactions
              With Just A Tap Or Wave. No More Fumbling For Cash Or Struggling With Outdated Payment Methods.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 flex items-center">
              Explore More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="flex items-center space-x-8 mt-12">
              <img src="/placeholder.svg?height=40&width=120" alt="Partner 1" className="h-10" />
              <img src="/placeholder.svg?height=40&width=120" alt="Partner 2" className="h-10" />
              <img src="/placeholder.svg?height=40&width=120" alt="Partner 3" className="h-10" />
            </div>
          </div>

          <div className="relative">
            <div className="relative transform rotate-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-400 opacity-20 rounded-2xl"></div>
              <div className="relative bg-black rounded-2xl shadow-2xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-sm ${
                        Math.random() > 0.7 ? "bg-purple-500" : Math.random() > 0.7 ? "bg-green-400" : "bg-transparent"
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
  )
}

