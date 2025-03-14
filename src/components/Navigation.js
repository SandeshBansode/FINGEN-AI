import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          FinAI
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link href="/api/auth/login">
          <a className="px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 rounded-full">Sign In</a>
        </Link>
        <Link href="/api/auth/login">
          <a className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-full">
            Get Started
          </a>
        </Link>
      </div>
    </nav>
  );
}