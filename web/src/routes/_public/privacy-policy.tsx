import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield } from 'lucide-react'

export const Route = createFileRoute('/_public/privacy-policy')({
    component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-zinc-950">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
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
                        <Link to="/">
                            <Button
                                variant="ghost"
                                className="text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-3xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
                            <Shield className="w-4 h-4" />
                            Legal
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-zinc-400">
                            Last updated: February 10, 2026
                        </p>
                    </div>

                    {/* Policy Content */}
                    <div className="space-y-10 text-zinc-300 leading-relaxed">
                        <Section title="1. Overview">
                            <p>
                                Buddy ("we", "our", or "the application") is a local-first AI desktop agent. We are committed to protecting your privacy. This policy explains what data Buddy handles and how we treat it.
                            </p>
                        </Section>

                        <Section title="2. Local-First Architecture">
                            <p>
                                Buddy is designed with a <strong className="text-white">local-first architecture</strong>. This means:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
                                <li>All user preferences, behavior patterns, action history, and personality data are stored <strong className="text-white">locally on your device</strong> in an encrypted SQLite database.</li>
                                <li>Your files, screen content, and system activity are <strong className="text-white">never uploaded</strong> to our servers.</li>
                                <li>Voice recordings are processed locally using on-device speech-to-text and are never transmitted externally.</li>
                            </ul>
                        </Section>

                        <Section title="3. Data We Collect">
                            <p>We collect <strong className="text-white">minimal data</strong>, limited to:</p>
                            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
                                <li><strong className="text-white">Account Information:</strong> Username and email address for authentication purposes only.</li>
                                <li><strong className="text-white">Authentication Tokens:</strong> Temporary tokens used to verify your identity during login.</li>
                            </ul>
                            <p className="mt-3">
                                We do <strong className="text-white">not</strong> collect conversation logs, file contents, behavioral data, usage analytics, or any telemetry from your device.
                            </p>
                        </Section>

                        <Section title="4. AI Model Communication">
                            <p>
                                When you interact with Buddy using natural language, your prompts are sent to third-party AI providers (such as Google Gemini via OpenRouter) for processing. These requests contain:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
                                <li>The text of your command or question.</li>
                                <li>Relevant context needed to fulfill the request (e.g., filenames, directory paths).</li>
                            </ul>
                            <p className="mt-3">
                                We do not send personal data, behavioral patterns, or your full screen content to AI providers. Please refer to the respective AI provider's privacy policy for how they handle request data.
                            </p>
                        </Section>

                        <Section title="5. Data Storage & Security">
                            <p>
                                All local data is stored using SQLite with optional SQLCipher encryption. Your data remains on your machine and is never synced to a cloud service unless you explicitly configure it.
                            </p>
                        </Section>

                        <Section title="6. Third-Party Services">
                            <p>Buddy may interact with the following third-party services:</p>
                            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
                                <li><strong className="text-white">OpenRouter / Google Gemini:</strong> For AI language processing.</li>
                                <li><strong className="text-white">Authentication Provider:</strong> For user login and account management.</li>
                            </ul>
                            <p className="mt-3">
                                We do not sell, share, or transfer your data to any other third parties.
                            </p>
                        </Section>

                        <Section title="7. Your Rights">
                            <p>You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
                                <li>Delete all local data at any time by uninstalling Buddy or clearing its data directory.</li>
                                <li>Request deletion of your account and associated authentication data.</li>
                                <li>Use Buddy in offline mode with no external data transmission.</li>
                            </ul>
                        </Section>

                        <Section title="8. Changes to This Policy">
                            <p>
                                We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of Buddy after changes constitutes acceptance of the updated policy.
                            </p>
                        </Section>

                        <Section title="9. Contact">
                            <p>
                                If you have questions about this privacy policy, please reach out to us at{' '}
                                <a href="mailto:privacy@buddy.dev" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                                    privacy@buddy.dev
                                </a>.
                            </p>
                        </Section>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Section({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
            <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
            <div className="text-zinc-300 leading-relaxed">{children}</div>
        </div>
    )
}
