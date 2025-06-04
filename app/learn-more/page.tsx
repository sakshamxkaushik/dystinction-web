import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Lock, Eye, Zap, Shield, Sparkles, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LearnMorePage() {
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
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                <span className="text-purple-700 dark:text-purple-300 font-medium">Decoding DYSTINCTION</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-cyan-600 dark:from-white dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  The Art of
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  DY
                  <span className="inline-block transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
                    S
                  </span>
                  TINCTION
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Where <span className="text-purple-600 dark:text-purple-400 font-medium">DYS</span> meets perfection,
                creating something beyond ordinary{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">DISTINCTION</span>
              </p>
            </div>
          </div>
        </section>

        {/* Etymology Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 via-white/50 to-cyan-50/50 dark:from-purple-950/20 dark:via-gray-950/50 dark:to-cyan-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Etymology</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Understanding the deliberate contradiction that defines our approach
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-10 shadow-2xl backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-red-600 dark:text-red-400">DYS</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Prefix</h3>
                      <p className="text-gray-600 dark:text-gray-300">Greek origin meaning "difficult" or "abnormal"</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p className="leading-relaxed">
                      In traditional usage, "DYS" suggests dysfunction or difficulty. But we've transformed this
                      perceived weakness into our greatest strength.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span>
                          <strong>DYS-functional</strong> becomes <strong>uniquely functional</strong>
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span>
                          <strong>DYS-ruptive</strong> becomes <strong>strategically disruptive</strong>
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <span>
                          <strong>DYS-order</strong> becomes <strong>calculated chaos</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-10 shadow-2xl backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">TINCTION</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Root</h3>
                      <p className="text-gray-600 dark:text-gray-300">From "distinction" - excellence and uniqueness</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p className="leading-relaxed">
                      "TINCTION" embodies the essence of distinction - the quality of being excellent, unique, and
                      clearly different from others.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span>
                          <strong>Excellence</strong> in execution and delivery
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        <span>
                          <strong>Uniqueness</strong> in approach and methodology
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>
                          <strong>Clarity</strong> in differentiation from competitors
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Philosophy</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                How contradiction becomes our competitive advantage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-600/20 transition-all duration-300">
                    <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Invisible Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    True mastery operates unseen. Our solutions work so seamlessly that their sophistication becomes
                    invisible to competitors while delivering maximum impact.
                  </p>
                </div>
              </Card>

              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-cyan-600/20 transition-all duration-300">
                    <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Controlled Disruption</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We embrace the "DYS" - using controlled disruption and strategic dysfunction to create breakthrough
                    solutions that conventional thinking cannot achieve.
                  </p>
                </div>
              </Card>

              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-600/20 transition-all duration-300">
                    <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Paradoxical Security</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The highest security comes from appearing insecure. Our stealth approach makes us invisible to
                    threats while maintaining the strongest possible defenses.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Wordplay Exploration */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 via-white/50 to-cyan-50/50 dark:from-purple-950/20 dark:via-gray-950/50 dark:to-cyan-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Wordplay</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every letter, every syllable has meaning in our approach
              </p>
            </div>

            <div className="space-y-12">
              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-10 shadow-2xl backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">D.Y.S.T.I.N.C.T.I.O.N</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Each letter represents a core principle of our methodology:
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold">
                          D
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Discrete</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold">
                          Y
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Yielding Results</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold">
                          S
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Strategic</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold">
                          T
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Technology</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold">
                          I
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Innovation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold">
                          N
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Next-level</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold">
                          C
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Capabilities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold">
                          T
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Transformative</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold">
                          I
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Implementation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold">
                          O
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Operations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold">
                          N
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">Network</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/50 dark:to-purple-900/30 border-purple-200 dark:border-purple-800/50 p-8 shadow-xl">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-purple-900 dark:text-purple-100">The "DYS" Advantage</h4>
                    <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
                      While others fear dysfunction, we weaponize it. Our "DYS" prefix isn't a limitation—it's our
                      secret weapon for thinking outside conventional boundaries.
                    </p>
                    <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                      <li>• DYS-rupt traditional thinking</li>
                      <li>• DYS-mantle conventional approaches</li>
                      <li>• DYS-solve complex problems uniquely</li>
                    </ul>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 dark:from-cyan-950/50 dark:to-cyan-900/30 border-cyan-200 dark:border-cyan-800/50 p-8 shadow-xl">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100">The "TINCTION" Excellence</h4>
                    <p className="text-cyan-800 dark:text-cyan-200 leading-relaxed">
                      Our pursuit of distinction goes beyond mere differentiation. We create solutions so advanced they
                      redefine what's possible in enterprise technology.
                    </p>
                    <ul className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                      <li>• EX-tinction of conventional limits</li>
                      <li>• DIS-tinction through invisible excellence</li>
                      <li>• IN-stinction for breakthrough innovation</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Ready to Experience
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  DYSTINCTION?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join the organizations that have discovered the power of strategic contradiction and invisible
                excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-700 hover:via-purple-600 hover:to-cyan-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium"
                asChild
              >
                <Link href="/#contact">
                  Initiate Contact
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-200 dark:border-purple-800/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium shadow-lg backdrop-blur-sm"
                asChild
              >
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
