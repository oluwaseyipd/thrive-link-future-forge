
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Modal from "@/components/ui/modal"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Phone } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  experience: z.string().min(1, "Please select your experience level"),
  motivation: z.string().min(10, "Please tell us why you want to attend"),
  specialRequirements: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
}

interface EventRegistrationFormProps {
  isOpen: boolean
  onClose: () => void
  event: Event | null
}

const EventRegistrationForm = ({ isOpen, onClose, event }: EventRegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      experience: "",
      motivation: "",
      specialRequirements: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log("Event registration submitted:", { event, registration: data })
      
      toast({
        title: "Registration Successful!",
        description: `You've been registered for "${event?.title}". We'll send you a confirmation email shortly.`,
      })
      
      form.reset()
      onClose()
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!event) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          Register for {event.title}
        </DialogTitle>
        <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
        </div>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="max-h-96 overflow-y-auto pr-2 space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">First Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <Input placeholder="Your first name" className="pl-10 h-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Last Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <Input placeholder="Your last name" className="pl-10 h-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Email Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input type="email" placeholder="your.email@example.com" className="pl-10 h-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input type="tel" placeholder="Your phone number" className="pl-10 h-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Event-Specific Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Event Information</h3>
              
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Your Experience Level</FormLabel>
                    <FormControl>
                      <select 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        {...field}
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Why do you want to attend this event?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us what you hope to learn or achieve by attending this event..."
                        className="min-h-20 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Special Requirements or Accessibility Needs (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Let us know if you have any special requirements or accessibility needs..."
                        className="min-h-16 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
              {isSubmitting ? "Registering..." : "Complete Registration"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  )
}

export default EventRegistrationForm
