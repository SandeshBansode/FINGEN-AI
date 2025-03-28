const resources = [
  {
    title: "Introduction to Investing",
    description: "Learn the basics of investing, including key terms and concepts.",
    type: "Article",
    duration: "10 min read",
  },
  {
    title: "Understanding Stock Markets",
    description: "A comprehensive guide to how stock markets function.",
    type: "Video",
    duration: "15 min watch",
  },
  {
    title: "Fundamental Analysis Explained",
    description: "Deep dive into analyzing company financials and market trends.",
    type: "Course",
    duration: "2 hours",
  },
  {
    title: "Risk Management Strategies",
    description: "Learn how to protect your investments and manage risk effectively.",
    type: "Webinar",
    duration: "45 min",
  },
]

export default function EducationalResources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Educational Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-600 font-medium">{resource.type}</span>
              <span className="text-sm text-gray-500">{resource.duration}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Start Learning
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Personalized Learning Path</h2>
        <p className="text-gray-600 mb-4">
          Our AI has analyzed your profile and recommends the following learning path:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Introduction to Investing</li>
          <li>Understanding Stock Markets</li>
          <li>Risk Management Strategies</li>
          <li>Fundamental Analysis Explained</li>
        </ol>
        <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          Start Your Personalized Path
        </button>
      </div>
    </div>
  )
}

