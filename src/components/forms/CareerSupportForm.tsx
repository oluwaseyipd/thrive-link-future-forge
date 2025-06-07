
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Modal from "@/components/ui/modal"
import SuccessModal from "./SuccessModal"
import { Briefcase, Mail, Phone, MapPin, Target, FileText } from "lucide-react"

const careerSupportSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  currentStatus: z.string().min(1, "Please select your current status"),
  targetRole: z.string().min(2, "Please describe your target role"),
  experienceLevel: z.string().min(1, "Please select your experience level"),
  supportNeeded: z.array(z.string()).min(1, "Please select at least one support area"),
  careerGoals: z.string().min(20, "Please describe your career goals (minimum 20 characters)"),
  challenges: z.string().min(10, "Please describe your challenges (minimum 10 characters)"),
  timeline: z.string().min(1, "Please select your timeline"),
  hasResume: z.boolean(),
  linkedinProfile: z.string().optional(),
  portfolioUrl: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to the terms")
})

type CareerSupportFormData = z.infer<typeof careerSupportSchema>

interface CareerSupportFormProps {
  isOpen: boolean
  onClose: () => void
}

const CareerSupportForm = ({ isOpen, onClose }: CareerSupportFormProps) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedSupport, setSelectedSupport] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<CareerSupportFormData>({
    resolver: zodResolver(careerSupportSchema)
  })

  const supportOptions = [
    { id: "resume-review", label: "Resume Review & Optimization" },
    { id: "portfolio-review", label: "Portfolio Review" },
    { id: "interview-prep", label: "Interview Preparation" },
    { id: "linkedin-optimization", label: "LinkedIn Profile Optimization" },
    { id: "job-search-strategy", label: "Job Search Strategy" },
    { id: "salary-negotiation", label: "Salary Negotiation Tips" },
    { id: "networking", label: "Networking Guidance" },
    { id: "career-transition", label: "Career Transition Support" }
  ]

  const handleSupportChange = (supportId: string, checked: boolean) => {
    let newSelected = [...selectedSupport]
    if (checked) {
      newSelected.push(supportId)
    } else {
      newSelected = newSelected.filter(id => id !== supportId)
    }
    setSelectedSupport(newSelected)
    setValue("supportNeeded", newSelected)
  }

  const onSubmit = async (data: CareerSupportFormData) => {
    setIsSubmitting(true)
    console.log("Career support request submitted:", data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    onClose()
    setShowSuccess(true)
    reset()
    setSelectedSupport([])
  }

  const handleClose = () => {
    reset()
    setSelectedSupport([])
    onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Briefcase className="w-6 h-6 text-thrive-blue" />
              Get Career Support
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Get personalized career guidance to help you land your dream tech job
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-thrive-blue" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      placeholder="Enter your first name"
                      className="mt-1"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      placeholder="Enter your last name"
                      className="mt-1"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Location *
                  </Label>
                  <Input
                    id="location"
                    {...register("location")}
                    placeholder="City, State/Province, Country"
                    className="mt-1"
                  />
                  {errors.location && (
                    <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>
                  )}
                </div>
              </div>

              {/* Professional Status */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-thrive-blue" />
                  Professional Status
                </h3>
                
                <div>
                  <Label htmlFor="currentStatus">Current Status *</Label>
                  <Select onValueChange={(value) => setValue("currentStatus", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your current status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="recent-graduate">Recent Graduate</SelectItem>
                      <SelectItem value="bootcamp-graduate">Bootcamp Graduate</SelectItem>
                      <SelectItem value="career-changer">Career Changer</SelectItem>
                      <SelectItem value="unemployed">Currently Unemployed</SelectItem>
                      <SelectItem value="employed-seeking">Employed but Seeking New Role</SelectItem>
                      <SelectItem value="freelancer">Freelancer/Contractor</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.currentStatus && (
                    <p className="text-sm text-red-600 mt-1">{errors.currentStatus.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="experienceLevel">Experience Level *</Label>
                  <Select onValueChange={(value) => setValue("experienceLevel", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry-level">Entry Level (0-1 years)</SelectItem>
                      <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                      <SelectItem value="mid-level">Mid Level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (5+ years)</SelectItem>
                      <SelectItem value="no-experience">No Professional Experience</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experienceLevel && (
                    <p className="text-sm text-red-600 mt-1">{errors.experienceLevel.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="targetRole">Target Role/Position *</Label>
                  <Input
                    id="targetRole"
                    {...register("targetRole")}
                    placeholder="e.g., Frontend Developer, Data Scientist, Product Manager"
                    className="mt-1"
                  />
                  {errors.targetRole && (
                    <p className="text-sm text-red-600 mt-1">{errors.targetRole.message}</p>
                  )}
                </div>
              </div>

              {/* Support Needed */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-thrive-blue" />
                  Support Needed
                </h3>
                
                <div>
                  <Label>Select the areas where you need support: *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {supportOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={selectedSupport.includes(option.id)}
                          onCheckedChange={(checked) => handleSupportChange(option.id, checked as boolean)}
                        />
                        <Label htmlFor={option.id} className="text-sm">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {errors.supportNeeded && (
                    <p className="text-sm text-red-600 mt-1">{errors.supportNeeded.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="careerGoals">Career Goals *</Label>
                  <Textarea
                    id="careerGoals"
                    {...register("careerGoals")}
                    placeholder="What are your short-term and long-term career goals? What type of companies or roles are you targeting?"
                    className="mt-1 min-h-[100px] resize-none"
                  />
                  {errors.careerGoals && (
                    <p className="text-sm text-red-600 mt-1">{errors.careerGoals.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="challenges">Current Challenges *</Label>
                  <Textarea
                    id="challenges"
                    {...register("challenges")}
                    placeholder="What specific challenges are you facing in your job search or career development?"
                    className="mt-1 min-h-[80px] resize-none"
                  />
                  {errors.challenges && (
                    <p className="text-sm text-red-600 mt-1">{errors.challenges.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="timeline">Timeline for Job Search *</Label>
                  <Select onValueChange={(value) => setValue("timeline", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="When are you looking to secure a new role?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="exploring">Just exploring options</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.timeline && (
                    <p className="text-sm text-red-600 mt-1">{errors.timeline.message}</p>
                  )}
                </div>
              </div>

              {/* Optional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Additional Information (Optional)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="linkedinProfile">LinkedIn Profile URL</Label>
                    <Input
                      id="linkedinProfile"
                      {...register("linkedinProfile")}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolioUrl">Portfolio/Website URL</Label>
                    <Input
                      id="portfolioUrl"
                      {...register("portfolioUrl")}
                      placeholder="https://yourportfolio.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasResume"
                    onCheckedChange={(checked) => setValue("hasResume", checked as boolean)}
                  />
                  <Label htmlFor="hasResume" className="text-sm">
                    I have a current resume ready for review
                  </Label>
                </div>
              </div>

              {/* Consent */}
              <div className="border-t pt-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    I agree to participate in career support services and understand that Thrive Link will provide guidance based on my needs. I consent to receiving communications about my request and program updates.
                  </Label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-red-600 mt-1">{errors.consent.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 sm:flex-none"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-thrive-blue hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Modal>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Request Submitted!"
        message="Thank you for your career support request. Our team will review your information and contact you within 2-3 business days to schedule your first session. You'll receive an email confirmation shortly."
      />
    </>
  )
}

export default CareerSupportForm
