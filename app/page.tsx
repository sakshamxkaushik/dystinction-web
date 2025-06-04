import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, Eye, Lock, ChevronDown, Mail, Phone, MapPin, Sparkles } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20 text-gray-900 dark:text-white overflow-hidden transition-all duration-500">
      {/* Enhanced animated background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-black dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,193,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,69,193,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Enhanced Header */}
      <header className="relative z-50 px-6 lg:px-8 h-20 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-sm">
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
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/learn-more"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-105"
          >
            Learn More
          </Link>
          <Link
            href="#capabilities"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-105"
          >
            Capabilities
          </Link>
          <Link
            href="#approach"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-105"
          >
            Approach
          </Link>
          <Link
            href="/careers"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-105"
          >
            Careers
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="border-purple-200 dark:border-purple-800/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200 hover:scale-105 shadow-sm"
            asChild
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-900/80 border border-purple-200/50 dark:border-purple-800/50 rounded-full px-6 py-3 text-sm backdrop-blur-sm shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-purple-700 dark:text-purple-300 font-medium">Stealth Mode Active</span>
              <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-cyan-600 dark:from-white dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Beyond the
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                Visible Spectrum
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Where advanced technology meets strategic discretion. Transforming enterprise landscapes through
              <span className="text-purple-600 dark:text-purple-400 font-medium"> invisible innovation</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-700 hover:via-purple-600 hover:to-cyan-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium"
              asChild
            >
              <Link href="#contact">
                Request Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-200 dark:border-purple-800/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium shadow-lg backdrop-blur-sm"
              asChild
            >
              <Link href="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </section>

      {/* Enhanced Capabilities Section */}
      <section id="capabilities" className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Core Capabilities</h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto font-light">
              Engineered solutions that operate beyond conventional boundaries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-10 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 dark:from-purple-400/30 dark:to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-600/20 transition-all duration-300 shadow-lg">
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Secure Architecture</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Enterprise-grade security frameworks designed for organizations that cannot afford compromise.
                </p>
              </div>
            </Card>

            <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-10 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 dark:from-cyan-400/30 dark:to-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-cyan-600/20 transition-all duration-300 shadow-lg">
                  <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Rapid Deployment</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Accelerated implementation protocols that minimize exposure while maximizing operational efficiency.
                </p>
              </div>
            </Card>

            <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-10 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 dark:from-green-400/30 dark:to-green-500/20 rounded-2xl flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-600/20 transition-all duration-300 shadow-lg">
                  <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Invisible Integration</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Seamless technology adoption that operates beneath the surface of conventional detection.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Approach Section */}
      <section
        id="approach"
        className="relative z-10 py-32 px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 via-white/50 to-cyan-50/50 dark:from-purple-950/20 dark:via-gray-950/50 dark:to-cyan-950/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 dark:border-purple-400/30 rounded-full px-6 py-3 text-sm text-purple-600 dark:text-purple-300 font-medium backdrop-blur-sm">
                  Methodology
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Precision Through
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text">
                    Calculated Ambiguity
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                  Our approach transcends traditional technology consulting. We operate in the spaces between
                  conventional solutions, delivering transformative capabilities that remain undetectable to competitive
                  intelligence while providing measurable strategic advantages.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Discrete Implementation</h4>
                    <p className="text-gray-600 dark:text-gray-300">Zero-footprint deployment strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Strategic Opacity</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Competitive advantage through selective visibility
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Measured Impact</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Quantifiable results without operational exposure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 dark:from-purple-400/20 dark:to-cyan-400/20 rounded-3xl border border-purple-200/50 dark:border-purple-800/30 p-12 shadow-2xl backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-white/80 to-purple-50/80 dark:from-gray-900/80 dark:to-purple-950/80 rounded-2xl flex items-center justify-center shadow-inner">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                      <Lock className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">Classified Architecture</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Access Level: Restricted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Initiate Contact</h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto font-light">
              For qualified organizations seeking advanced technological capabilities. All inquiries are processed
              through secure channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-10 shadow-2xl backdrop-blur-sm">
              <ContactForm />
            </Card>

            <div className="space-y-8">
              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">hello@dystinction.in</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300">24-48 hours for qualified inquiries</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Global Operations</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 border-t border-purple-200/50 dark:border-purple-800/30 bg-white/90 dark:bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  DYSTINCTION
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
                Advanced technology solutions operating beyond conventional boundaries. Where innovation meets
                discretion.
              </p>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 text-purple-500" />
                <span className="font-medium">hello@dystinction.in</span>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4 pt-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.85 3.37 1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.347-.09-.266-.29-.55-.54-1.001-.213-1.056-.64-1.743-1.274-2.283-.634-.54-1.44-.83-2.307-1.234 1.324-1.58 2.143-3.656 2.143-5.834 0-3.176-1.872-5.817-4.637-5.817-3.769 0-6.524 2.505-6.524 5.989 0 2.144 1.262 3.874 3.583 5.121-1.201-.026-2.317-.384-3.475-.881-.071-.11-.273-.52-.08-.874s.209-.761.518-.761c.318 0 .579.255.579.554 0 1.588-.81 2.983-1.914 2.814.59-.444.995-.904 1.201-1.523-.331.138-.724.25-1.121.25-.299 0-.584-.112-.801-.301.401-.916.659-2.124.659-3.422 0-.76-.254-1.477-.674-2.002C7.71 5.528 8.03 5.137 8.449 4.828 5.964 4.682 2.83 6.675 2.83 10.656c0 4.021 3.245 7.266 7.245 7.266 1.809 0 3.492-.621 4.911-1.676-.576.115-1.154.145-1.777.084.595 1.854 2.323 3.198 4.352 3.114-1.797 1.335-4.012 2.297-6.797 2.297-4.102 0-7.445-2.895-7.445-6.989 0-4.183 3.343-7.568 7.504-7.568 2.225 0 4.012.926 4.597 2.271-.202-.06-.401-.1-.611-.1-.756 0-1.458.401-1.804 1.026z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.347-.09-.266-.29-.55-.54-1.001-.213-1.056-.64-1.743-1.274-2.283-.634-.54-1.44-.83-2.307-1.234 1.324-1.58 2.143-3.656 2.143-5.834 0-3.176-1.872-5.817-4.637-5.817-3.769 0-6.524 2.505-6.524 5.989 0 2.144 1.262 3.874 3.583 5.121-1.201-.026-2.317-.384-3.475-.881-.071-.11-.273-.52-.08-.874s.209-.761.518-.761c.318 0 .579.255.579.554 0 1.588-.81 2.983-1.914 2.814.59-.444.995-.904 1.201-1.523-.331.138-.724.25-1.121.25-.299 0-.584-.112-.801-.301.401-.916.659-2.124.659-3.422 0-.76-.254-1.477-.674-2.002C7.71 5.528 8.03 5.137 8.449 4.828 5.964 4.682 2.83 6.675 2.83 10.656c0 4.021 3.245 7.266 7.245 7.266 1.809 0 3.492-.621 4.911-1.676-.576.115-1.154.145-1.777.084.595 1.854 2.323 3.198 4.352 3.114-1.797 1.335-4.012 2.297-6.797 2.297-4.102 0-7.445-2.895-7.445-6.989 0-4.183 3.343-7.568 7.504-7.568 2.225 0 4.012.926 4.597 2.271-.202-.06-.401-.1-.611-.1-.756 0-1.458.401-1.804 1.026z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
