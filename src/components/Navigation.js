import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          FinAI
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <Link to="/learn" className="text-gray-600 hover:text-black">
          Learn
        </Link>
        <Link to="/help" className="text-gray-600 hover:text-black">
          Help
        </Link>
        <Link to="/blog" className="text-gray-600 hover:text-black">
          Blog
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-black">
          About
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 rounded-full">Sign In</button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-full">
          Get Started
        </button>
      </div>
    </nav>
  )
}

