import { Button } from '@/components/ui/button'
import { Download, Mic, Terminal, Sparkles } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-zinc-950 to-blue-950/20" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(34 211 238 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(34 211 238 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4" />
            AI Desktop Agent
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Your Computer,
            <br />
            <span className="text-cyan-400">Now Speaks AI</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Buddy understands your screen and takes real actions across apps
            using natural language. No more clicking through menus—just tell
            Buddy what you need.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-lg px-8 py-6 shadow-2xl shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Free
            </Button>
            <Link to="/sign-up">
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-zinc-200 hover:bg-zinc-800/50 hover:text-white text-lg px-8 py-6 transition-all hover:border-cyan-500/50"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
            <div className="flex items-center justify-center gap-3 text-zinc-400">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Mic className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm font-medium">Voice & Chat Control</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-zinc-400">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm font-medium">Real System Actions</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-zinc-400">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm font-medium">Screen Awareness</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  )
}
