import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/landing/Nav'
import { Hero } from '@/components/landing/Hero'
import { Features } from '@/components/landing/Features'

export const Route = createFileRoute('/_public/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Nav />
      <Hero />
      <Features />
    </div>
  )
}
