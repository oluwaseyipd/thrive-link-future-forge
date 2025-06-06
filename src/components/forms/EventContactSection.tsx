
import { Control } from "react-hook-form"
import { User, Mail, Phone } from "lucide-react"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface EventContactSectionProps {
  control: Control<any>
}

const EventContactSection = ({ control }: EventContactSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Information & Expertise</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact Name */}
        <FormField
          control={control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Full Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input placeholder="Your full name" className="pl-10 h-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Email */}
        <FormField
          control={control}
          name="contactEmail"
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

        {/* Contact Phone */}
        <FormField
          control={control}
          name="contactPhone"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
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

      {/* Expertise */}
      <FormField
        control={control}
        name="expertise"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Your Expertise & Background</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us about your background, experience, and why you're qualified to lead this event..."
                className="min-h-24 resize-none"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default EventContactSection
