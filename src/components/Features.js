export function Features() {
  const features = [
    {
      title: "Simultaneous And Fast Operation",
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20"></div>
          <div className="absolute inset-2 bg-purple-500 rounded-full opacity-40"></div>
          <div className="absolute inset-4 bg-purple-500 rounded-full opacity-60"></div>
        </div>
      ),
    },
    {
      title: "Can Be Connected To All Accounts",
      icon: (
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-green-400 rounded-full flex items-center justify-center">
            <div className="w-8 h-1 bg-white rounded"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Strong And Advanced Encryption",
      icon: (
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 border-4 border-purple-500 rounded-full"></div>
          <div className="absolute inset-4 bg-purple-500 rounded-full"></div>
        </div>
      ),
    },
    {
      title: "Comprehensive Electronic Banking Services",
      icon: (
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-green-400 rounded-lg"></div>
          <div className="absolute inset-2 bg-white rounded-md"></div>
        </div>
      ),
    },
  ]

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">We Tried To Provide You With All Global Banking Services</h2>
          <p className="text-xl text-gray-600">
            We Made Every Effort To Ensure That You Have Access To A Comprehensive Range Of Global Banking Solutions.
            Our Aim Was To Provide You With A Seamless Banking Experience That Caters To Your Financial Needs Regardless
            Of Your Location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

