import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, CheckCircle, FileText, Globe, Users, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CompliancePage() {
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
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-purple-700 dark:text-purple-300 font-medium">Compliance Framework</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-cyan-600 dark:from-white dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Regulatory
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Meeting and exceeding global compliance standards while maintaining operational discretion and strategic
                advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 via-white/50 to-cyan-50/50 dark:from-purple-950/20 dark:via-gray-950/50 dark:to-cyan-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our comprehensive approach to regulatory compliance across all operational domains
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl flex items-center justify-center mx-auto group-hover:from-green-500/30 group-hover:to-green-600/20 transition-all duration-300">
                    <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">ISO 27001</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Information Security Management Systems</p>
                  <div className="flex items-center justify-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Certified</span>
                  </div>
                </div>
              </Card>

              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-500/30 group-hover:to-blue-600/20 transition-all duration-300">
                    <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">SOC 2 Type II</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Security, Availability & Confidentiality</p>
                  <div className="flex items-center justify-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Audited</span>
                  </div>
                </div>
              </Card>

              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center mx-auto group-hover:from-purple-500/30 group-hover:to-purple-600/20 transition-all duration-300">
                    <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">GDPR</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">General Data Protection Regulation</p>
                  <div className="flex items-center justify-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Compliant</span>
                  </div>
                </div>
              </Card>

              <Card className="group bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl flex items-center justify-center mx-auto group-hover:from-orange-500/30 group-hover:to-orange-600/20 transition-all duration-300">
                    <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">NIST CSF</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Cybersecurity Framework</p>
                  <div className="flex items-center justify-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Aligned</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Compliance */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Data Protection */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Data Protection & Privacy
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">GDPR Compliance</h3>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>Full compliance with European Union General Data Protection Regulation:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Data minimization and purpose limitation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Right to erasure and data portability</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Privacy by design and by default</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Data Protection Impact Assessments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">CCPA & Regional Laws</h3>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>Comprehensive compliance with regional privacy regulations:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>California Consumer Privacy Act (CCPA)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Brazil's Lei Geral de Proteção de Dados (LGPD)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Canada's Personal Information Protection Act</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Australia's Privacy Act</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Security Standards */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Security Standards
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl flex items-center justify-center">
                      <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">ISO 27001:2022</h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                      <p>Information Security Management System certification covering:</p>
                      <ul className="space-y-1">
                        <li>• Risk assessment and treatment</li>
                        <li>• Security policy framework</li>
                        <li>• Incident response procedures</li>
                        <li>• Business continuity planning</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl flex items-center justify-center">
                      <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">SOC 2 Type II</h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                      <p>Annual third-party audits validating:</p>
                      <ul className="space-y-1">
                        <li>• Security controls effectiveness</li>
                        <li>• System availability measures</li>
                        <li>• Processing integrity verification</li>
                        <li>• Confidentiality safeguards</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">NIST Framework</h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                      <p>Alignment with NIST Cybersecurity Framework:</p>
                      <ul className="space-y-1">
                        <li>• Identify: Asset management</li>
                        <li>• Protect: Access controls</li>
                        <li>• Detect: Continuous monitoring</li>
                        <li>• Respond: Incident management</li>
                        <li>• Recover: Business continuity</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Industry Specific */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Industry-Specific Compliance
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Services</h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>PCI DSS Level 1</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>SOX Compliance</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Basel III Framework</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>FFIEC Guidelines</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>MiFID II</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>CFTC Regulations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Healthcare & Government</h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>HIPAA Compliance</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>FedRAMP Authorized</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>FISMA Moderate</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>ITAR Compliance</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>CMMC Level 3</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>CJIS Security Policy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Audit & Reporting */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 via-white/50 to-cyan-50/50 dark:from-purple-950/20 dark:via-gray-950/50 dark:to-cyan-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Audit & Reporting</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transparent compliance reporting while maintaining operational security
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Continuous Monitoring</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Real-time compliance monitoring with automated reporting and alert systems for immediate detection
                    of any deviations from established standards.
                  </p>
                </div>
              </Card>

              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Third-Party Audits</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Regular independent audits by certified compliance professionals ensure objective validation of our
                    security and privacy controls.
                  </p>
                </div>
              </Card>

              <Card className="bg-white/90 dark:bg-gray-900/90 border-purple-100/50 dark:border-purple-800/30 p-8 shadow-xl backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Regulatory Reporting</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Automated compliance reporting to regulatory bodies while maintaining the confidentiality required
                    for our stealth operations.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact for Compliance */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-950/50 dark:to-cyan-950/50 border-purple-200 dark:border-purple-800/50 p-12 shadow-2xl text-center">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Compliance Inquiries</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  For compliance documentation, audit reports, or regulatory inquiries, contact our compliance team
                  through secure channels.
                </p>
                <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl max-w-md mx-auto">
                  <p className="font-medium text-gray-900 dark:text-white">Compliance Officer</p>
                  <p className="text-gray-600 dark:text-gray-300">compliance@dystinction.com</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Subject: Compliance Inquiry</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  All compliance documentation is provided under appropriate confidentiality agreements
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
