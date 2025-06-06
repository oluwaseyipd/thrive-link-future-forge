
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Modal from "@/components/ui/modal"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import EventDetailsSection from "./EventDetailsSection"
import EventDescriptionSection from "./EventDescriptionSection"
import EventContactSection from "./EventContactSection"

const formSchema = z.object({
  eventTitle: z.string().min(2, "Event title must be at least 2 characters"),
  eventType: z.string().min(1, "Please select an event type"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please provide a time"),
  duration: z.string().min(1, "Please specify duration"),
  location: z.string().min(1, "Please provide a location"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  objectives: z.string().min(10, "Please provide learning objectives"),
  targetAudience: z.string().min(1, "Please specify target audience"),
  maxAttendees: z.string().optional(),
  requirements: z.string().optional(),
  contactName: z.string().min(2, "Name must be at least 2 characters"),
  contactEmail: z.string().email("Please enter a valid email"),
  contactPhone: z.string().optional(),
  expertise: z.string().min(10, "Please describe your expertise"),
})

type FormData = z.infer<typeof formSchema>

interface ProposeEventFormProps {
  isOpen: boolean
  onClose: () => void
}

const ProposeEventForm = ({ isOpen, onClose }: ProposeEventFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventTitle: "",
      eventType: "",
      date: "",
      time: "",
      duration: "",
      location: "",
      description: "",
      objectives: "",
      targetAudience: "",
      maxAttendees: "",
      requirements: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      expertise: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log("Event proposal submitted:", data)
      
      toast({
        title: "Proposal Submitted!",
        description: "Thank you for your event proposal. We'll review it and get back to you within 3-5 business days.",
      })
      
      form.reset()
      onClose()
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your proposal. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          Propose an Event
        </DialogTitle>
        <p className="text-gray-600 dark:text-gray-300">
          Share your expertise with the Thrive Link community by proposing a workshop, webinar, or talk.
        </p>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="max-h-96 overflow-y-auto pr-2 space-y-6">
            <EventDetailsSection control={form.control} />
            <EventDescriptionSection control={form.control} />
            <EventContactSection control={form.control} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-thrive-blue hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Proposal"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  )
}

export default ProposeEventForm
