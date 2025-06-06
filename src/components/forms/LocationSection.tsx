
import { MapPin } from "lucide-react"
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface LocationSectionProps {
  control: Control<any>
}

const LocationSection = ({ control }: LocationSectionProps) => {
  return (
    <>
      {/* Country */}
      <FormField
        control={control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Country</FormLabel>
            <FormControl>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                <Input placeholder="Your country" className="pl-10 h-10" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* City */}
      <FormField
        control={control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">City</FormLabel>
            <FormControl>
              <Input placeholder="Your city" className="h-10" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export default LocationSection
