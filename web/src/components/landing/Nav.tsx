import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/buddy-icon.png"
                alt="Buddy"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Buddy
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Link to="/sign-in">
              <Button
                variant="ghost"
                className="text-zinc-300 hover:text-white hover:bg-zinc-800/50"
              >
                Login
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-200 hover:bg-zinc-800/50 hover:text-white"
              >
                Signup
              </Button>
            </Link>
            <Link to="/download">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
