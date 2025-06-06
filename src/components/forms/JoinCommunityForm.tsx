
import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X } from "lucide-react"
import { toast } from "sonner"

import Modal from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import SuccessModal from "@/components/forms/SuccessModal"
import PersonalInfoSection from "@/components/forms/PersonalInfoSection"
import LocationSection from "@/components/forms/LocationSection"
import TechInterestSection from "@/components/forms/TechInterestSection"
import StatusSection from "@/components/forms/StatusSection"
import VolunteerSection from "@/components/forms/VolunteerSection"
import ProfileUrlSection from "@/components/forms/ProfileUrlSection"
import HopesSection from "@/components/forms/HopesSection"
import ConsentSection from "@/components/forms/ConsentSection"

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

  return (
    <>
      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        className="max-w-2xl max-h-[90vh] overflow-hidden"
      >
        <div className="relative h-full flex flex-col">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 z-10" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="flex-shrink-0 mb-4 md:mb-6 text-center pt-2 px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Join the Thrive Link Community</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
              Fill in your details to join our growing community of tech professionals
            </p>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <PersonalInfoSection control={form.control} />
                  <LocationSection control={form.control} />
                  <TechInterestSection 
                    control={form.control}
                    showOtherTechInput={showOtherTechInput}
                    onTechInterestChange={handleTechInterestChange}
                  />
                  <StatusSection control={form.control} />
                  <ProfileUrlSection control={form.control} />
                  <VolunteerSection control={form.control} />
                </div>

                <HopesSection control={form.control} />
                <ConsentSection control={form.control} />

                <Button type="submit" className="w-full h-11">Join the Community</Button>
              </form>
            </Form>
          </div>
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
