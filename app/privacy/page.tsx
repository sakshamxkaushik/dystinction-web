import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PrivacyPage() {
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

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Your privacy is our priority. Learn how we protect and handle your information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: December 2024</p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-900/50 border-purple-100 dark:border-gray-800 p-8 shadow-lg">
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    At DYSTINCTION Technologies, we collect only the information necessary to provide our advanced
                    technological services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Contact Information:</strong> Email addresses, organization details, and communication
                      preferences
                    </li>
                    <li>
                      <strong>Technical Data:</strong> System requirements, security clearance levels, and project
                      specifications
                    </li>
                    <li>
                      <strong>Usage Analytics:</strong> Anonymized interaction data to improve our services
                    </li>
                    <li>
                      <strong>Security Logs:</strong> Access patterns and authentication records for security purposes
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>Your information is used exclusively for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing secure technological solutions and consulting services</li>
                    <li>Communicating about project requirements and deliverables</li>
                    <li>Maintaining the highest levels of operational security</li>
                    <li>Complying with legal and regulatory requirements</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Protection</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>We implement enterprise-grade security measures:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>End-to-end encryption for all communications</li>
                    <li>Zero-knowledge architecture for sensitive data</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Compliance with international privacy standards</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information Sharing</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We operate under strict confidentiality protocols. Your information is never shared with third
                    parties except:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>When required by law or legal process</li>
                    <li>With your explicit written consent</li>
                    <li>To protect our rights, property, or safety</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request corrections or updates</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of communications</li>
                    <li>Data portability where applicable</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>For privacy-related inquiries or to exercise your rights, contact us at:</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-white">Privacy Officer</p>
                    <p>Email: hello@dystinction.in</p>
                    <p>Subject: Privacy Inquiry</p>
                  </div>
                </div>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
