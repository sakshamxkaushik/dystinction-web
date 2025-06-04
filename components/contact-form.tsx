"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Request Submitted</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your clearance request has been received. Our team will review and respond within 24-48 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="border-purple-200 dark:border-gray-700"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-900 dark:text-white">Authorized Email</label>
        <Input
          type="email"
          placeholder="your.email@company.com"
          required
          className="bg-white/50 dark:bg-black/50 border-purple-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-900 dark:text-white">Organization</label>
        <Input
          type="text"
          placeholder="Organization identifier"
          required
          className="bg-white/50 dark:bg-black/50 border-purple-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-900 dark:text-white">Project Requirements</label>
        <Textarea
          placeholder="Describe your technological requirements..."
          rows={4}
          className="bg-white/50 dark:bg-black/50 border-purple-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Processing...</span>
          </div>
        ) : (
          <>
            Request Clearance
            <ArrowRight className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        All communications are encrypted and processed through secure channels
      </p>
    </form>
  )
}
