
import { User, Mail, Phone } from "lucide-react"
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface PersonalInfoSectionProps {
  control: Control<any>
}

const PersonalInfoSection = ({ control }: PersonalInfoSectionProps) => {
  return (
    <>
      {/* Full Name */}
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Full Name</FormLabel>
            <FormControl>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                <Input placeholder="John Doe" className="pl-10 h-10" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Email */}
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Email Address</FormLabel>
            <FormControl>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                <Input placeholder="email@example.com" className="pl-10 h-10" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Phone */}
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Phone Number (Optional)</FormLabel>
            <FormControl>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                <Input placeholder="+1 234 567 8900" className="pl-10 h-10" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export default PersonalInfoSection
