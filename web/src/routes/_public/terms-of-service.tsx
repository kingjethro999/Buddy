import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText } from 'lucide-react'

export const Route = createFileRoute('/_public/terms-of-service')({
    component: TermsOfServicePage,
})

function TermsOfServicePage() {
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
                            <FileText className="w-4 h-4" />
                            Legal
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                            Terms of Service
                        </h1>
                        <p className="text-zinc-400">
                            Last updated: February 10, 2026
                        </p>
                    </div>

                    {/* Terms Content */}
                    <div className="space-y-10 text-zinc-300 leading-relaxed">
                        <Section title="1. Acceptance of Terms">
                            <p>
                                By downloading, installing, or using Buddy ("the Application"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Application.
                            </p>
                        </Section>

                        <Section title="2. Description of Service">
                            <p>
                                Buddy is a local-first AI desktop agent that assists users with system-level tasks through natural language interaction. The Application runs primarily on your local device and connects to third-party AI services for language processing.
                            </p>
                        </Section>

                        <Section title="3. User Accounts">
                            <p>
                                You may be required to create an account to use certain features of Buddy. You are responsible for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
                                <li>Maintaining the confidentiality of your account credentials.</li>
                                <li>All activity that occurs under your account.</li>
                                <li>Notifying us immediately of any unauthorized use of your account.</li>
                            </ul>
                        </Section>

                        <Section title="4. Acceptable Use">
                            <p>You agree <strong className="text-white">not</strong> to use Buddy to:</p>
                            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
                                <li>Execute malicious commands or scripts that harm your system or others.</li>
                                <li>Attempt to bypass system security measures.</li>
                                <li>Reverse engineer, decompile, or disassemble any part of the Application.</li>
                                <li>Use the Application for any unlawful purpose.</li>
                                <li>Redistribute, resell, or sublicense the Application without authorization.</li>
                            </ul>
                        </Section>

                        <Section title="5. System Actions & Responsibility">
                            <p>
                                Buddy can execute system-level actions on your device, including file operations, terminal commands, and application management. By using these features, you acknowledge that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
                                <li>You are responsible for reviewing and confirming actions before execution.</li>
                                <li>Buddy provides a confirmation step for potentially destructive operations, but ultimate responsibility lies with you.</li>
                                <li>We are <strong className="text-white">not liable</strong> for data loss, system damage, or other consequences resulting from commands you approve.</li>
                            </ul>
                        </Section>

                        <Section title="6. Third-Party Services">
                            <p>
                                Buddy integrates with third-party AI services (such as Google Gemini via OpenRouter) for language processing. Your use of these services is subject to their respective terms and conditions. We are not responsible for the availability, accuracy, or conduct of third-party services.
                            </p>
                        </Section>

                        <Section title="7. Intellectual Property">
                            <p>
                                The Buddy application, including its code, design, branding, and documentation, is the intellectual property of the Buddy team. You are granted a limited, non-exclusive, non-transferable license to use the Application for personal or professional purposes.
                            </p>
                        </Section>

                        <Section title="8. Disclaimer of Warranties">
                            <p>
                                Buddy is provided <strong className="text-white">"as is"</strong> and <strong className="text-white">"as available"</strong> without warranties of any kind, either express or implied. We do not guarantee that the Application will be error-free, uninterrupted, or free of harmful components.
                            </p>
                        </Section>

                        <Section title="9. Limitation of Liability">
                            <p>
                                To the maximum extent permitted by law, the Buddy team shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Application, including but not limited to data loss, system damage, or loss of profits.
                            </p>
                        </Section>

                        <Section title="10. Termination">
                            <p>
                                We reserve the right to suspend or terminate your access to Buddy at any time for violation of these terms. Upon termination, your right to use the Application ceases immediately. All local data remains on your device and can be deleted at your discretion.
                            </p>
                        </Section>

                        <Section title="11. Changes to Terms">
                            <p>
                                We may modify these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of Buddy after changes constitutes acceptance of the revised terms.
                            </p>
                        </Section>

                        <Section title="12. Contact">
                            <p>
                                For questions about these terms, please contact us at{' '}
                                <a href="mailto:legal@buddy.dev" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                                    legal@buddy.dev
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
