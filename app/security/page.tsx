import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, Eye, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50 dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="relative z-50 px-6 lg:px-8 h-16 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm bg-white/80 dark:bg-black/80">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Lock className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              DYSTINCTION
            </span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Security Framework</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Our comprehensive security approach ensures the highest levels of protection for your sensitive
              operations.
            </p>
          </div>

          {/* Security Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 dark:bg-gray-900/50 border-purple-100 dark:border-gray-800 p-8 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Encryption First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  End-to-end encryption for all communications, data storage, and transmission using military-grade
                  protocols.
                </p>
              </div>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-900/50 border-purple-100 dark:border-gray-800 p-8 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Zero Knowledge</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We cannot access your sensitive data even if we wanted to. Your information remains exclusively under
                  your control.
                </p>
              </div>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-900/50 border-purple-100 dark:border-gray-800 p-8 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Rapid Response</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  24/7 security monitoring with immediate threat detection and automated response protocols.
                </p>
              </div>
            </Card>
          </div>

          {/* Detailed Security Measures */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 dark:bg-gray-900/50 border-purple-100 dark:border-gray-800 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Safeguards</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">AES-256 Encryption</h4>
                    <p className="text-sm">Industry-leading encryption standards for all data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Multi-Factor Authentication</h4>
                    <p className="text-sm">Layered authentication with biometric verification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Secure Enclaves</h4>
                    <p className="text-sm">Hardware-based security for sensitive operations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Network Isolation</h4>
                    <p className="text-sm">Air-gapped systems for maximum security</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-900/50 border-purple-100 dark:border-gray-800 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Operational Security</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Background Verification</h4>
                    <p className="text-sm">Comprehensive screening for all personnel</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Compartmentalized Access</h4>
                    <p className="text-sm">Need-to-know basis for all sensitive information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Regular Audits</h4>
                    <p className="text-sm">Continuous security assessments and penetration testing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Incident Response</h4>
                    <p className="text-sm">Immediate containment and remediation protocols</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Compliance Section */}
          <Card className="bg-white/80 dark:bg-gray-900/50 border-purple-100 dark:border-gray-800 p-8 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Compliance & Certifications</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We maintain the highest industry standards and certifications to ensure your operations meet all
                regulatory requirements.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-purple-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">ISO 27001</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Information Security Management</p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-lg flex items-center justify-center mx-auto">
                    <Lock className="w-8 h-8 text-cyan-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">SOC 2 Type II</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Security & Availability</p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg flex items-center justify-center mx-auto">
                    <Eye className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">GDPR</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Data Protection Compliance</p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-lg flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-orange-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">NIST</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cybersecurity Framework</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Security Contact */}
          <Card className="bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-900/20 dark:to-cyan-900/20 border-purple-200 dark:border-gray-800 p-8 shadow-lg">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Security Inquiries</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                For security-related questions, vulnerability reports, or compliance documentation requests.
              </p>
              <div className="bg-white/80 dark:bg-gray-900/50 p-6 rounded-lg max-w-md mx-auto">
                <p className="font-medium text-gray-900 dark:text-white">Security Team</p>
                <p className="text-gray-600 dark:text-gray-400">security@dystinction.in</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Subject: Security Inquiry</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
