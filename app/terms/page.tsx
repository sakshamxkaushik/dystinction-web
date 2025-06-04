import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, FileText, Lock } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TermsPage() {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Terms and conditions governing the use of our advanced technological services.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: December 2024</p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-900/50 border-purple-100 dark:border-gray-800 p-8 shadow-lg">
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    By accessing or using DYSTINCTION Technologies services, you agree to be bound by these Terms of
                    Service and all applicable laws and regulations. If you do not agree with any of these terms, you
                    are prohibited from using our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Service Description</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>DYSTINCTION Technologies provides advanced technological solutions including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Secure Architecture consulting and implementation</li>
                    <li>Rapid Deployment protocols and strategies</li>
                    <li>Invisible Integration technologies</li>
                    <li>Strategic technology consulting</li>
                  </ul>
                  <p>
                    All services are provided on a confidential basis and subject to security clearance requirements.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Eligibility and Access</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>Our services are available only to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Qualified business organizations</li>
                    <li>Entities with appropriate security clearances</li>
                    <li>Organizations that meet our vetting requirements</li>
                    <li>Clients who agree to confidentiality protocols</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Confidentiality and Non-Disclosure
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>All interactions with DYSTINCTION Technologies are subject to strict confidentiality:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All project details remain classified</li>
                    <li>Technology implementations are proprietary</li>
                    <li>Client relationships are confidential</li>
                    <li>Disclosure of our methods is prohibited</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    All intellectual property rights in our services, technologies, and methodologies remain the
                    exclusive property of DYSTINCTION Technologies. Clients receive limited usage rights as specified in
                    individual service agreements.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    DYSTINCTION Technologies provides services "as is" and disclaims all warranties. Our liability is
                    limited to the extent permitted by law and as specified in individual service agreements.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Termination</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>We reserve the right to terminate services at any time for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violation of these terms</li>
                    <li>Security concerns</li>
                    <li>Breach of confidentiality</li>
                    <li>Failure to meet clearance requirements</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>For questions about these Terms of Service:</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-white">Legal Department</p>
                    <p>Email: hello@dystinction.in</p>
                    <p>Subject: Terms Inquiry</p>
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
