import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Lock, Sparkles } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20 text-gray-900 dark:text-white overflow-hidden transition-all duration-500 flex flex-col">
      {/* Enhanced animated background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,193,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,69,193,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative z-50 px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              DY
              <span className="inline-block transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
                S
              </span>
              TINCTION
            </span>
            <Sparkles className="w-4 h-4 text-purple-500 ml-1 animate-pulse" />
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative z-10 px-6 lg:px-8">
        <Card className="max-w-3xl w-full bg-white/80 dark:bg-gray-900/80 border-purple-100/50 dark:border-purple-800/30 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-900/80 border border-purple-200/50 dark:border-purple-800/50 rounded-full px-6 py-3 text-sm backdrop-blur-sm shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-purple-700 dark:text-purple-300 font-medium">Stealth Mode Active</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mt-6">
                <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-cyan-600 dark:from-white dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mt-4">
                We're working on something extraordinary. Our website is under construction, but our mission to
                transform enterprise landscapes through
                <span className="text-purple-600 dark:text-purple-400 font-medium"> invisible innovation</span>{" "}
                continues.
              </p>
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />

            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Be the first to know when we launch. Subscribe to our newsletter.
              </p>

              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                    required
                  />
                  <Button className="bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-700 hover:via-purple-600 hover:to-cyan-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Notify Me
                  </Button>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-center space-x-6 pt-6">
              <Link
                href="https://x.com/DystinctionTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/dystinction/"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
          <Mail className="w-4 h-4 text-purple-500" />
          <span className="font-medium">hello@dystinction.in</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          © 2024 Dystinction Technologies. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
