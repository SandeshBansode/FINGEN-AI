export function FeaturesHighlight() {
  const features = ["Personalization Features", "Easy Of Use", "User Friendly Cards", "Low Fee", "Broad Acceptance"]

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <span className="text-sm">FROM 2023</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              What Features Make Our Bank Card <span className="text-purple-500">Distinctive</span> And{" "}
              <span className="text-purple-500">Popular</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              According To The Needs Of Users And Different Strata, We Have Provided A New Bank Card That Can Be The
              Answer To All Your Needs.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-sm mr-3">
                    {index + 1}
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.2,
                  }}
                ></div>
              ))}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

