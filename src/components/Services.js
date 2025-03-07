export function Services() {
  const services = [
    {
      title: "Types Of Business And Personal Accounts",
      description:
        "You Can Easily Open Any Type Of Account, Including Personal And Business, And Manage It Online. We Will Keep You Updated And Add Better Services For You.",
      icon: (
        <div className="relative w-32 h-32">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-purple-500 rounded-sm"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-40px)`,
                opacity: 0.2 + i * 0.1,
              }}
            ></div>
          ))}
        </div>
      ),
    },
    {
      title: "Opening Of Essential Bank Account",
      description:
        "It Is Not Impossible To Open An Account In An Online And Simple Way With Just Two Steps, You Can Open Your Free And Create A Fast And Safe Bank Account For Yourself Or Your Loved Ones.",
      icon: (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-2 border-green-400 rounded-lg"></div>
          <div className="absolute inset-4 bg-green-400 opacity-20 rounded-lg"></div>
        </div>
      ),
    },
    {
      title: "Information And Essential Bank Account",
      description:
        "See The Most Complete Information Of Your Bank Account Information And Essential Bank Account To Manage Your Account Information And Everything You Need To Manage Your Account Is Here.",
      icon: (
        <div className="relative w-32 h-32">
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-2 bg-purple-500 rounded opacity-20"></div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="bg-[#f5f3ff] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">Up-To-Date And Fast Banking Services In One Place</h2>
          <div className="flex items-center">
            <button className="p-2 rounded-full border border-gray-300 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-black text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

