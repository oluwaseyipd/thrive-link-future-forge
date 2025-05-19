import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X, User, Mail, Phone, MapPin, Briefcase, Star } from "lucide-react"
import { toast } from "sonner"

import Modal from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import SuccessModal from "@/components/forms/SuccessModal"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  country: z.string().min(2, { message: "Please enter your country" }),
  city: z.string().min(2, { message: "Please enter your city" }),
  techInterest: z.string().min(1, { message: "Please select your tech interest" }),
  otherTechInterest: z.string().optional(),
  skillLevel: z.enum(["Beginner", "Intermediate", "Advanced"], { 
    required_error: "Please select your skill level"
  }),
  status: z.string().min(1, { message: "Please select your status" }),
  hopes: z.string().min(10, { message: "Please share what you hope to gain from Thrive Link" }),
  volunteer: z.enum(["Yes", "No", "Maybe Later"], {
    required_error: "Please indicate your volunteering interest"
  }),
  heardFrom: z.string().min(1, { message: "Please tell us how you heard about us" }),
  profileUrl: z.string().optional(),
  consent: z.boolean().refine(value => value === true, {
    message: "You must agree to receive updates"
  }),
})

type FormValues = z.infer<typeof formSchema>

interface JoinCommunityFormProps {
  isOpen: boolean
  onClose: () => void
}

const JoinCommunityForm = ({ isOpen, onClose }: JoinCommunityFormProps) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showOtherTechInput, setShowOtherTechInput] = useState(false)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      techInterest: "",
      otherTechInterest: "",
      skillLevel: "Beginner",
      status: "",
      hopes: "",
      volunteer: "Maybe Later",
      heardFrom: "",
      profileUrl: "",
      consent: false,
    },
  })
  
  const handleTechInterestChange = (value: string) => {
    setShowOtherTechInput(value === "Other")
  }

  const onSubmit = (data: FormValues) => {
    // Here you would send data to your backend
    console.log("Form submitted:", data)
    
    // Show success toast notification
    toast.success("Form submitted successfully!")
    
    // Close form and show success modal
    setShowSuccessModal(true)
  }

  const handleCloseSuccess = () => {
    setShowSuccessModal(false)
    onClose()
    form.reset()
  }

  const techInterests = [
    "Frontend Development",
    "Backend Development",
    "Data Science / ML",
    "Cybersecurity",
    "UI/UX Design",
    "Mobile Dev",
    "Product Management",
    "Game Development",
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Join the Thrive Link Community</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Fill in your details to join our growing community of tech professionals
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
                
                {/* City */}
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Your city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Tech Interest */}
                <FormField
                  control={form.control}
                  name="techInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Tech Interest</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value)
                          handleTechInterestChange(value)
                        }} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your primary interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {techInterests.map((interest) => (
                            <SelectItem key={interest} value={interest}>
                              {interest}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Other Tech Interest */}
                {showOtherTechInput && (
                  <FormField
                    control={form.control}
                    name="otherTechInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specify Other Interest</FormLabel>
                        <FormControl>
                          <Input placeholder="Your tech interest" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Skill Level */}
                <FormField
                  control={form.control}
                  name="skillLevel"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Skill Level</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="Beginner" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Beginner
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="Intermediate" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Intermediate
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="Advanced" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Advanced
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Student">Student</SelectItem>
                          <SelectItem value="Graduate">Graduate</SelectItem>
                          <SelectItem value="Working">Working</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* How heard about */}
                <FormField
                  control={form.control}
                  name="heardFrom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about Thrive Link?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Social Media">Social Media</SelectItem>
                          <SelectItem value="Friend/Colleague">Friend/Colleague</SelectItem>
                          <SelectItem value="Search Engine">Search Engine</SelectItem>
                          <SelectItem value="Event/Conference">Event/Conference</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Profile URL */}
                <FormField
                  control={form.control}
                  name="profileUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn/GitHub/Portfolio URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Volunteer Interest */}
                <FormField
                  control={form.control}
                  name="volunteer"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Would you be interested in volunteering?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="Yes" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Yes
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="No" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              No
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="Maybe Later" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Maybe Later
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Hopes */}
              <FormField
                control={form.control}
                name="hopes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you hope to gain from Thrive Link?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us what you're looking to achieve..."
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
                        I agree to receive emails and updates from Thrive Link
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Join the Community</Button>
            </form>
          </Form>
        </div>
      </Modal>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccess}
        title="Welcome to Thrive Link!"
        message="🎉 You're officially part of the Thrive Link community! We're excited to have you on board. Check your email for the next steps!"
      />
    </>
  )
}

export default JoinCommunityForm
