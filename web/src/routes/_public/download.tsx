import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
    Download,
    ArrowLeft,
    Terminal,
    Monitor,
    Apple,
    ChevronDown,
    ChevronUp,
    Copy,
    Check,
    Shield,
    Zap,
    HardDrive,
} from 'lucide-react'

export const Route = createFileRoute('/_public/download')({
    component: DownloadPage,
})

type Platform = 'windows' | 'macos' | 'ubuntu' | 'fedora' | 'kali' | 'arch'

interface PlatformInfo {
    id: Platform
    name: string
    icon: React.ReactNode
    color: string
    borderColor: string
    bgColor: string
    version: string
    size: string
    steps: { title: string; command?: string; description: string }[]
}

const platforms: PlatformInfo[] = [
    {
        id: 'windows',
        name: 'Windows',
        icon: <Monitor className="w-6 h-6" />,
        color: 'text-blue-400',
        borderColor: 'border-blue-500/30',
        bgColor: 'bg-blue-500/10',
        version: 'Windows 10/11 (64-bit)',
        size: '~85 MB',
        steps: [
            {
                title: 'Download the installer',
                description:
                    'Download the latest Buddy installer (.msi) for Windows from the button above.',
            },
            {
                title: 'Run the installer',
                command: 'buddy-setup-latest.msi',
                description:
                    'Double-click the downloaded .msi file and follow the installation wizard. Accept the license agreement and choose your install directory.',
            },
            {
                title: 'Allow through firewall',
                description:
                    'Windows may prompt you to allow Buddy through the firewall. Click "Allow" — Buddy only uses localhost connections for its local API.',
            },
            {
                title: 'Launch Buddy',
                description:
                    'Buddy will start automatically after installation. Look for the floating Buddy icon in your system tray. Click it to open the chat interface.',
            },
            {
                title: 'Verify installation',
                command: 'buddy --version',
                description:
                    'Open PowerShell or Command Prompt and run the command above to verify Buddy is installed correctly.',
            },
        ],
    },
    {
        id: 'macos',
        name: 'macOS',
        icon: <Apple className="w-6 h-6" />,
        color: 'text-zinc-300',
        borderColor: 'border-zinc-500/30',
        bgColor: 'bg-zinc-500/10',
        version: 'macOS 12+ (Apple Silicon & Intel)',
        size: '~72 MB',
        steps: [
            {
                title: 'Download the .dmg',
                description:
                    'Download the latest Buddy disk image (.dmg) for macOS from the button above.',
            },
            {
                title: 'Mount and install',
                description:
                    'Open the .dmg file and drag Buddy.app into your Applications folder.',
            },
            {
                title: 'Bypass Gatekeeper (first launch)',
                command:
                    'xattr -rd com.apple.quarantine /Applications/Buddy.app',
                description:
                    'If macOS shows "App can\'t be opened", run the command above in Terminal, or go to System Settings → Privacy & Security → Open Anyway.',
            },
            {
                title: 'Grant permissions',
                description:
                    'Buddy needs Accessibility and Microphone permissions. macOS will prompt you on first launch — approve both for full functionality.',
            },
            {
                title: 'Verify installation',
                command: 'buddy --version',
                description:
                    'Open Terminal and run the command above to confirm Buddy is installed.',
            },
        ],
    },
    {
        id: 'ubuntu',
        name: 'Ubuntu / Debian',
        icon: <Terminal className="w-6 h-6" />,
        color: 'text-orange-400',
        borderColor: 'border-orange-500/30',
        bgColor: 'bg-orange-500/10',
        version: 'Ubuntu 22.04+ / Debian 12+',
        size: '~68 MB',
        steps: [
            {
                title: 'Add the Buddy repository',
                command:
                    'curl -fsSL https://get.buddy.dev/gpg | sudo gpg --dearmor -o /usr/share/keyrings/buddy-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/buddy-archive-keyring.gpg] https://apt.buddy.dev stable main" | sudo tee /etc/apt/sources.list.d/buddy.list',
                description: 'Add the official Buddy APT repository and GPG key.',
            },
            {
                title: 'Update and install',
                command: 'sudo apt update && sudo apt install buddy -y',
                description:
                    'Refresh your package index and install Buddy with all dependencies.',
            },
            {
                title: 'Start the Buddy daemon',
                command: 'sudo systemctl enable --now buddy',
                description:
                    'Enable and start the Buddy background service so it runs on boot.',
            },
            {
                title: 'Verify installation',
                command: 'buddy --version',
                description: 'Confirm Buddy is installed and running correctly.',
            },
        ],
    },
    {
        id: 'fedora',
        name: 'Fedora / RHEL',
        icon: <Terminal className="w-6 h-6" />,
        color: 'text-sky-400',
        borderColor: 'border-sky-500/30',
        bgColor: 'bg-sky-500/10',
        version: 'Fedora 38+ / RHEL 9+',
        size: '~68 MB',
        steps: [
            {
                title: 'Add the Buddy COPR repository',
                command: 'sudo dnf copr enable buddy/stable -y',
                description: 'Enable the official Buddy COPR repository.',
            },
            {
                title: 'Install Buddy',
                command: 'sudo dnf install buddy -y',
                description: 'Install Buddy and all required dependencies via DNF.',
            },
            {
                title: 'Start the Buddy daemon',
                command: 'sudo systemctl enable --now buddy',
                description: 'Enable and start the Buddy service.',
            },
            {
                title: 'Verify installation',
                command: 'buddy --version',
                description: 'Confirm the installation is complete.',
            },
        ],
    },
    {
        id: 'kali',
        name: 'Kali Linux',
        icon: <Terminal className="w-6 h-6" />,
        color: 'text-cyan-400',
        borderColor: 'border-cyan-500/30',
        bgColor: 'bg-cyan-500/10',
        version: 'Kali 2023.1+',
        size: '~68 MB',
        steps: [
            {
                title: 'Add the Buddy repository',
                command:
                    'curl -fsSL https://get.buddy.dev/gpg | sudo gpg --dearmor -o /usr/share/keyrings/buddy-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/buddy-archive-keyring.gpg] https://apt.buddy.dev stable main" | sudo tee /etc/apt/sources.list.d/buddy.list',
                description:
                    'Kali is Debian-based, so we use the same APT repository. Add the GPG key and repo source.',
            },
            {
                title: 'Install Buddy',
                command: 'sudo apt update && sudo apt install buddy -y',
                description: 'Update package lists and install Buddy.',
            },
            {
                title: 'Start the Buddy daemon',
                command: 'sudo systemctl enable --now buddy',
                description: 'Enable and start the background agent service.',
            },
            {
                title: 'Verify installation',
                command: 'buddy --version',
                description: 'Confirm Buddy is installed and responding.',
            },
        ],
    },
    {
        id: 'arch',
        name: 'Arch Linux',
        icon: <Terminal className="w-6 h-6" />,
        color: 'text-teal-400',
        borderColor: 'border-teal-500/30',
        bgColor: 'bg-teal-500/10',
        version: 'Arch (rolling)',
        size: '~68 MB',
        steps: [
            {
                title: 'Install from AUR',
                command: 'yay -S buddy',
                description:
                    'Use your preferred AUR helper (yay, paru, etc.) to install Buddy from the AUR.',
            },
            {
                title: 'Or build manually',
                command:
                    'git clone https://aur.archlinux.org/buddy.git\ncd buddy && makepkg -si',
                description:
                    'Alternatively, clone the AUR package and build it manually.',
            },
            {
                title: 'Start the Buddy daemon',
                command: 'sudo systemctl enable --now buddy',
                description: 'Enable and start the Buddy background service.',
            },
            {
                title: 'Verify installation',
                command: 'buddy --version',
                description: 'Confirm the installation is complete.',
            },
        ],
    },
]

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-1.5 rounded-md bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200 transition-all"
            title="Copy to clipboard"
        >
            {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
                <Copy className="w-3.5 h-3.5" />
            )}
        </button>
    )
}

function PlatformCard({ platform }: { platform: PlatformInfo }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div
            className={`rounded-2xl border ${platform.borderColor} ${platform.bgColor} transition-all duration-300 overflow-hidden`}
        >
            {/* Header */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full p-6 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-4">
                    <div
                        className={`w-12 h-12 rounded-xl ${platform.bgColor} border ${platform.borderColor} flex items-center justify-center ${platform.color}`}
                    >
                        {platform.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {platform.name}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-zinc-400 mt-1">
                            <span>{platform.version}</span>
                            <span className="text-zinc-600">•</span>
                            <span>{platform.size}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-sm text-zinc-500">
                        {expanded ? 'Hide' : 'Show'} instructions
                    </span>
                    {expanded ? (
                        <ChevronUp className="w-5 h-5 text-zinc-400" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-400" />
                    )}
                </div>
            </button>

            {/* Expandable Steps */}
            <div
                className={`transition-all duration-500 ease-in-out ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <div className="px-6 pb-6 space-y-4 border-t border-zinc-800/50 pt-4">
                    {platform.steps.map((step, i) => (
                        <div key={i} className="flex gap-4">
                            {/* Step number */}
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm font-bold">
                                {i + 1}
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                                <p className="text-zinc-400 text-sm mb-2">
                                    {step.description}
                                </p>
                                {step.command && (
                                    <div className="relative">
                                        <pre className="p-3 pr-10 rounded-lg bg-zinc-900/80 border border-zinc-700/50 text-sm font-mono text-cyan-400 overflow-x-auto whitespace-pre-wrap">
                                            {step.command}
                                        </pre>
                                        <CopyButton text={step.command} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        icon: Shield,
        title: 'Privacy-First',
        description: 'All data stays local on your machine. No telemetry.',
    },
    {
        icon: Zap,
        title: 'Lightweight',
        description: 'Runs as a tiny daemon. Under 100MB install.',
    },
    {
        icon: HardDrive,
        title: 'Local-First',
        description: 'Works offline. No internet required after install.',
    },
]

function DownloadPage() {
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

                        <div className="flex items-center gap-4">
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
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
                        <Download className="w-4 h-4" />
                        Download Buddy
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Install Buddy on{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Any Platform
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                        Get Buddy running on your machine in minutes. Choose your operating
                        system below and follow the step-by-step instructions.
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                        {features.map((f) => {
                            const Icon = f.icon
                            return (
                                <div
                                    key={f.title}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm"
                                >
                                    <Icon className="w-4 h-4 text-cyan-400" />
                                    <span className="font-medium">{f.title}</span>
                                    <span className="text-zinc-500 hidden sm:inline">
                                        — {f.description}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Platform Cards */}
            <section className="pb-20 px-6">
                <div className="container mx-auto max-w-4xl space-y-4">
                    {platforms.map((platform) => (
                        <PlatformCard key={platform.id} platform={platform} />
                    ))}
                </div>
            </section>

            {/* System Requirements */}
            <section className="py-20 px-6 border-t border-zinc-800/50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">
                        System Requirements
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Windows */}
                        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                            <div className="flex items-center gap-2 mb-4">
                                <Monitor className="w-5 h-5 text-blue-400" />
                                <h3 className="text-lg font-semibold text-white">Windows</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li>• Windows 10 version 1903 or later</li>
                                <li>• 64-bit processor</li>
                                <li>• 4 GB RAM minimum</li>
                                <li>• 200 MB free disk space</li>
                                <li>• Microphone (for voice features)</li>
                            </ul>
                        </div>

                        {/* macOS */}
                        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                            <div className="flex items-center gap-2 mb-4">
                                <Apple className="w-5 h-5 text-zinc-300" />
                                <h3 className="text-lg font-semibold text-white">macOS</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li>• macOS 12 Monterey or later</li>
                                <li>• Apple Silicon or Intel</li>
                                <li>• 4 GB RAM minimum</li>
                                <li>• 200 MB free disk space</li>
                                <li>• Microphone (for voice features)</li>
                            </ul>
                        </div>

                        {/* Linux */}
                        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                            <div className="flex items-center gap-2 mb-4">
                                <Terminal className="w-5 h-5 text-orange-400" />
                                <h3 className="text-lg font-semibold text-white">Linux</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li>• Kernel 5.15+ recommended</li>
                                <li>• x86_64 or ARM64</li>
                                <li>• 4 GB RAM minimum</li>
                                <li>• 200 MB free disk space</li>
                                <li>• PulseAudio / PipeWire</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section className="py-20 px-6 border-t border-zinc-800/50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">
                        Troubleshooting
                    </h2>

                    <div className="space-y-4">
                        <TroubleshootItem
                            question="Buddy won't start after installation"
                            answer="Make sure the Buddy daemon is running. On Linux, check with 'systemctl status buddy'. On macOS, check Activity Monitor. On Windows, check Task Manager for the Buddy process."
                        />
                        <TroubleshootItem
                            question="Voice commands aren't working"
                            answer="Ensure your microphone is connected and Buddy has microphone permissions. On macOS, go to System Settings → Privacy & Security → Microphone. On Linux, make sure PulseAudio or PipeWire is running."
                        />
                        <TroubleshootItem
                            question="'buddy' command not found in terminal"
                            answer="The Buddy binary may not be in your PATH. On Linux/macOS, try adding '/opt/buddy/bin' to your PATH in ~/.bashrc or ~/.zshrc. On Windows, re-run the installer and ensure 'Add to PATH' is checked."
                        />
                        <TroubleshootItem
                            question="Permission denied errors on Linux"
                            answer="Some system actions require elevated permissions. You can configure which actions auto-confirm vs. require sudo in Buddy's settings panel."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Need more help?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-8">
                        Join the community or check out the source code.
                    </p>
                    <a
                        href="https://github.com/kingjethro999/Buddy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            size="lg"
                            className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold"
                        >
                            GitHub
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    )
}

function TroubleshootItem({
    question,
    answer,
}: {
    question: string
    answer: string
}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="rounded-xl bg-zinc-900/50 border border-zinc-800/50 overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full p-5 flex items-center justify-between text-left group"
            >
                <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {question}
                </span>
                {open ? (
                    <ChevronUp className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                )}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    )
}
