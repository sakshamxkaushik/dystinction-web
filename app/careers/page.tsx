import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Lock, Users, Zap, Shield, Eye, ArrowRight, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20 text-gray-900 dark:text-white transition-all duration-500">
      {/* Enhanced animated background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,193,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,69,193,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />
      </div>

      {/* Header */}
      <header className="relative z-50 px-6 lg:px-8 h-20 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-sm">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
          </Button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              DYSTINCTION
            </span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-900/80 border border-purple-200/50 dark:border-purple-800/50 rounded-full px-6 py-3 text-sm backdrop-blur-sm shadow-lg">
                <Users className="w-4 h-4 text-purple-500" />
                <span className="text-purple-700 dark:text-purple-300 font-medium">Join the Elite</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-cyan-600 dark:from-white dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Careers in
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Stealth Mode
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Where exceptional talent meets extraordinary challenges. Join the invisible force shaping the future of
                enterprise technology.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 via-white/50 to-cyan-50/50 dark:from-purple-950/20 dark:via-gray-950/50 dark:to-cyan-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Why DYSTINCTION?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We don't just offer jobs—we offer missions that matter
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-600/20 transition-all duration-300">
                    <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Classified Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Work on cutting-edge technologies that won't appear in public portfolios. Your contributions shape
                    the invisible infrastructure of tomorrow.
                  </p>
                </div>
              </Card>

              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-cyan-600/20 transition-all duration-300">
                    <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Accelerated Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Learn from the best while working on projects that compress years of experience into months. Every
                    challenge is a masterclass.
                  </p>
                </div>
              </Card>

              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-600/20 transition-all duration-300">
                    <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Invisible Impact</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Your work influences global enterprises without public recognition. True professionals understand
                    the power of invisible excellence.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Current Openings</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Positions for those who think beyond conventional boundaries
              </p>
            </div>

            <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-12 shadow-2xl backdrop-blur-sm text-center">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center shadow-xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Stealth Recruitment</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Our most critical positions are filled through discrete channels. Exceptional talent finds us through
                  reputation, referrals, and recognition of extraordinary capabilities.
                </p>
                <div className="bg-purple-50 dark:bg-purple-950/50 p-6 rounded-xl max-w-md mx-auto">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">Interested in joining our mission?</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Contact us at{" "}
                    <span className="font-medium text-purple-600 dark:text-purple-400">hello@dystinction.in</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Subject: "Career Interest - [Your Expertise]"
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Application Process */}
        <section
          id="apply"
          className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 via-white/50 to-cyan-50/50 dark:from-purple-950/20 dark:via-gray-950/50 dark:to-cyan-950/20"
        >
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-10 shadow-2xl backdrop-blur-sm">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Connect?</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  All career inquiries are processed through our secure contact system. Include your area of expertise
                  and security clearance level in your message.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-700 hover:via-purple-600 hover:to-cyan-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium"
                    asChild
                  >
                    <Link href="/#contact">
                      Submit Interest
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">hello@dystinction.in</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Subject line: "Career Interest - [Expertise]"
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Culture</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Where exceptional minds collaborate in extraordinary secrecy
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">The DYSTINCTION Difference</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We're not just colleagues—we're co-conspirators in reshaping the technological landscape. Our culture
                  thrives on intellectual curiosity, strategic thinking, and the understanding that the most important
                  work often goes unrecognized.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Intellectual Freedom</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Pursue breakthrough ideas without conventional constraints
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Collaborative Secrecy</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Work with the best while maintaining operational discretion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Invisible Recognition</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Your contributions matter, even if the world never knows
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/50 dark:to-cyan-950/50 border-purple-200 dark:border-purple-800/50 p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center shadow-xl">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Team Composition</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Former intelligence operatives, quantum physicists, cryptographic artists, and strategic
                      philosophers working in perfect harmony.
                    </p>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      "The best teams are invisible, even to themselves."
                      <br />
                      <span className="font-medium">— DYSTINCTION Founding Principle</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
