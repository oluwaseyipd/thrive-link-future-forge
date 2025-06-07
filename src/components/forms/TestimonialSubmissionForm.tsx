
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Modal from "@/components/ui/modal"
import SuccessModal from "@/components/forms/SuccessModal"
import { Star, X } from "lucide-react"

interface TestimonialSubmissionFormProps {
  isOpen: boolean
  onClose: () => void
}

const TestimonialSubmissionForm = ({ isOpen, onClose }: TestimonialSubmissionFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    category: "",
    testimonial: "",
    rating: 0
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { value: "bootcamp", label: "Bootcamp Graduate" },
    { value: "mentorship", label: "Mentorship Program" },
    { value: "community", label: "Community Member" },
    { value: "resources", label: "Learning Resources" }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log("Testimonial submitted:", formData)
    
    setIsSubmitting(false)
    onClose()
    setShowSuccess(true)
    
    // Reset form
    setFormData({
      name: "",
      title: "",
      company: "",
      email: "",
      category: "",
      testimonial: "",
      rating: 0
    })
  }

  const isFormValid = formData.name && formData.email && formData.testimonial && formData.category && formData.rating > 0

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Share Your Success Story
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Help inspire others by sharing your experience with Thrive Link. Your story could be the motivation someone needs to start their tech journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Job Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Frontend Developer"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g., TechCorp"
                  className="w-full"
                />
              </div>
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                How did Thrive Link help you? *
              </Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Rate Your Experience *
              </Label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star
                      size={24}
                      className={star <= formData.rating 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-300 dark:text-gray-600"
                      }
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {formData.rating > 0 ? `${formData.rating} star${formData.rating !== 1 ? 's' : ''}` : 'Click to rate'}
                </span>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="space-y-2">
              <Label htmlFor="testimonial" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Testimonial *
              </Label>
              <Textarea
                id="testimonial"
                name="testimonial"
                value={formData.testimonial}
                onChange={handleInputChange}
                placeholder="Share your experience with Thrive Link. How did we help you achieve your goals? What would you tell someone considering joining our community?"
                rows={6}
                required
                className="w-full resize-none"
              />
              <div className="text-right">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formData.testimonial.length}/500 characters
                </span>
              </div>
            </div>

            {/* Consent */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <strong>Privacy Notice:</strong>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By submitting this testimonial, you agree that Thrive Link may use your name, story, and provided information 
                for marketing purposes on our website, social media, and promotional materials. We will never share your 
                email address publicly or with third parties.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="w-full sm:w-auto order-2 sm:order-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full sm:flex-1 bg-thrive-blue hover:bg-blue-700 order-1 sm:order-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Testimonial"}
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Thank You!"
        message="Your testimonial has been submitted successfully. We appreciate you taking the time to share your experience with our community."
      />
    </>
  )
}

export default TestimonialSubmissionForm
