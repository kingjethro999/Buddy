import {
  MessageSquare,
  Zap,
  Shield,
  FolderSearch,
  Code2,
  Workflow,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'

const features = [
  {
    icon: MessageSquare,
    title: 'Natural Conversation',
    description:
      'Talk to Buddy using voice or chat. Ask questions, give commands, and get things done without touching your keyboard.',
  },
  {
    icon: Zap,
    title: 'Instant Actions',
    description:
      'Find files, run terminal commands, open apps, and manage your system—all through natural language.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'Everything runs locally on your machine. Your data never leaves your computer. Complete control, zero cloud dependency.',
  },
  {
    icon: FolderSearch,
    title: 'Smart File Management',
    description:
      'Search, organize, rename, and move files instantly. Buddy learns your preferences and suggests better workflows.',
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description:
      'Execute terminal commands, navigate codebases, and understand complex projects. Built for students and professionals.',
  },
  {
    icon: Workflow,
    title: 'Learns Your Habits',
    description:
      'Buddy adapts to your workflow over time, remembering your preferences and automating repetitive tasks.',
  },
]

export function Features() {
  return (
    <section className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(34 211 238 / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(34 211 238 / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            Powerful Features
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Everything You Need,
            <br />
            <span className="text-cyan-400">Nothing You Don't</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Buddy combines screen awareness, voice interaction, and system-level
            actions to make your computer easier and faster to use.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/50 transition-colors" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-zinc-400 text-lg mb-6">
            Ready to transform how you use your computer?
          </p>
          <Link
            to="/download"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-xl shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:scale-105"
          >
            Download Buddy
          </Link>
        </div>
      </div>
    </section>
  )
}
