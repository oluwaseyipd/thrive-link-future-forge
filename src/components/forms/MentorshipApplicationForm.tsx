
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
import { User, Mail, Phone, MapPin, GraduationCap, Target } from "lucide-react"

const mentorshipSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  currentRole: z.string().min(2, "Please describe your current role"),
  experienceLevel: z.string().min(1, "Please select your experience level"),
  techInterests: z.string().min(10, "Please describe your tech interests (minimum 10 characters)"),
  goals: z.string().min(20, "Please describe your goals (minimum 20 characters)"),
  availability: z.string().min(1, "Please select your availability"),
  previousMentorship: z.boolean(),
  consent: z.boolean().refine(val => val === true, "You must agree to the terms")
})

type MentorshipFormData = z.infer<typeof mentorshipSchema>

interface MentorshipApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

const MentorshipApplicationForm = ({ isOpen, onClose }: MentorshipApplicationFormProps) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<MentorshipFormData>({
    resolver: zodResolver(mentorshipSchema)
  })

  const onSubmit = async (data: MentorshipFormData) => {
    setIsSubmitting(true)
    console.log("Mentorship application submitted:", data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    onClose()
    setShowSuccess(true)
    reset()
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <User className="w-6 h-6 text-thrive-blue" />
              Apply for Mentorship
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Join our mentorship program and get personalized guidance from industry experts
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-thrive-blue" />
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

              {/* Professional Background */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-thrive-blue" />
                  Professional Background
                </h3>
                
                <div>
                  <Label htmlFor="currentRole">Current Role/Status *</Label>
                  <Input
                    id="currentRole"
                    {...register("currentRole")}
                    placeholder="e.g., Computer Science Student, Junior Developer, Career Changer"
                    className="mt-1"
                  />
                  {errors.currentRole && (
                    <p className="text-sm text-red-600 mt-1">{errors.currentRole.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="experienceLevel">Experience Level *</Label>
                  <Select onValueChange={(value) => setValue("experienceLevel", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="absolute-beginner">Absolute Beginner</SelectItem>
                      <SelectItem value="some-coursework">Some Coursework/Self-Study</SelectItem>
                      <SelectItem value="bootcamp-graduate">Bootcamp Graduate</SelectItem>
                      <SelectItem value="junior-level">Junior Level (0-2 years)</SelectItem>
                      <SelectItem value="mid-level">Mid Level (2-5 years)</SelectItem>
                      <SelectItem value="career-changer">Career Changer</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experienceLevel && (
                    <p className="text-sm text-red-600 mt-1">{errors.experienceLevel.message}</p>
                  )}
                </div>
              </div>

              {/* Goals and Interests */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-thrive-blue" />
                  Goals & Interests
                </h3>

                <div>
                  <Label htmlFor="techInterests">Technology Interests *</Label>
                  <Textarea
                    id="techInterests"
                    {...register("techInterests")}
                    placeholder="What areas of technology interest you? (e.g., web development, mobile apps, data science, AI/ML, cybersecurity)"
                    className="mt-1 min-h-[80px] resize-none"
                  />
                  {errors.techInterests && (
                    <p className="text-sm text-red-600 mt-1">{errors.techInterests.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="goals">Mentorship Goals *</Label>
                  <Textarea
                    id="goals"
                    {...register("goals")}
                    placeholder="What do you hope to achieve through mentorship? What specific areas would you like guidance on?"
                    className="mt-1 min-h-[100px] resize-none"
                  />
                  {errors.goals && (
                    <p className="text-sm text-red-600 mt-1">{errors.goals.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="availability">Availability for Sessions *</Label>
                  <Select onValueChange={(value) => setValue("availability", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-hour-weekly">1 hour per week</SelectItem>
                      <SelectItem value="2-hours-weekly">2 hours per week</SelectItem>
                      <SelectItem value="1-hour-biweekly">1 hour bi-weekly</SelectItem>
                      <SelectItem value="flexible">Flexible schedule</SelectItem>
                      <SelectItem value="weekends-only">Weekends only</SelectItem>
                      <SelectItem value="evenings-only">Evenings only</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.availability && (
                    <p className="text-sm text-red-600 mt-1">{errors.availability.message}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="previousMentorship"
                    onCheckedChange={(checked) => setValue("previousMentorship", checked as boolean)}
                  />
                  <Label htmlFor="previousMentorship" className="text-sm">
                    I have participated in a mentorship program before
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
                    I agree to participate in the mentorship program and understand that Thrive Link will match me with a suitable mentor based on my interests and goals. I consent to receiving communications about my application and program updates.
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
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Modal>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Application Submitted!"
        message="Thank you for applying to our mentorship program. We'll review your application and match you with a suitable mentor within 5-7 business days. You'll receive an email confirmation shortly."
      />
    </>
  )
}

export default MentorshipApplicationForm
