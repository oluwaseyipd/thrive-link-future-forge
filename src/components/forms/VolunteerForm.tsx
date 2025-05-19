import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X, User, Mail, Phone, MapPin, Clock, FileText } from "lucide-react"
import { toast } from "sonner"

import Modal from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SuccessModal from "@/components/forms/SuccessModal"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  country: z.string().min(2, { message: "Please enter your country" }),
  timezone: z.string().min(2, { message: "Please enter your timezone" }),
  volunteerArea: z.string().min(1, { message: "Please select a volunteer area" }),
  otherVolunteerArea: z.string().optional(),
  availability: z.string().min(2, { message: "Please describe your availability" }),
  motivation: z.string().min(10, { message: "Please share your motivation for volunteering" }),
  experience: z.string().optional(),
  consent: z.boolean().refine(value => value === true, {
    message: "You must agree to be contacted"
  }),
})

type FormValues = z.infer<typeof formSchema>

interface VolunteerFormProps {
  isOpen: boolean
  onClose: () => void
}

const VolunteerForm = ({ isOpen, onClose }: VolunteerFormProps) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showOtherAreaInput, setShowOtherAreaInput] = useState(false)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      timezone: "",
      volunteerArea: "",
      otherVolunteerArea: "",
      availability: "",
      motivation: "",
      experience: "",
      consent: false,
    },
  })
  
  const handleAreaChange = (value: string) => {
    setShowOtherAreaInput(value === "Other")
  }

  const onSubmit = (data: FormValues) => {
    // Here you would send data to your backend
    console.log("Volunteer form submitted:", data)
    
    // Show success toast notification
    toast.success("Application submitted successfully!")
    
    // Close form and show success modal
    setShowSuccessModal(true)
  }

  const handleCloseSuccess = () => {
    setShowSuccessModal(false)
    onClose()
    form.reset()
  }

  const volunteerAreas = [
    "Mentor",
    "Content Writer",
    "Social Media Manager",
    "Community Moderator",
    "Graphics Designer",
    "Event Planner",
    "Other"
  ]

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
        <div className="relative p-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Apply to Volunteer</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Share your skills and help grow the Thrive Link community
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="John Doe" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="email@example.com" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="+1 234 567 8900" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Country */}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="Your country" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Timezone */}
                <FormField
                  control={form.control}
                  name="timezone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time Zone</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., GMT+1, EST" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Volunteer Area */}
                <FormField
                  control={form.control}
                  name="volunteerArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area you'd like to volunteer in</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value)
                          handleAreaChange(value)
                        }} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {volunteerAreas.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Other Volunteer Area */}
                {showOtherAreaInput && (
                  <FormField
                    control={form.control}
                    name="otherVolunteerArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specify Other Area</FormLabel>
                        <FormControl>
                          <Input placeholder="Your volunteer area" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Availability */}
                <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Availability</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="e.g., 3 hrs/week, Evenings only" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Experience */}
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relevant experience or portfolio (Optional)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <FileText className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="Links or brief description" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Motivation */}
              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why would you like to volunteer with Thrive Link?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your motivation and what you hope to contribute..."
                        className="min-h-24 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Consent */}
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to be contacted for volunteer opportunities
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-thrive-blue hover:bg-blue-700">Apply Now</Button>
            </form>
          </Form>
        </div>
      </Modal>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccess}
        title="Thank You!"
        message="🙌 Thank you for applying to volunteer with Thrive Link! Our team will review your submission and get back to you shortly."
      />
    </>
  )
}

export default VolunteerForm
