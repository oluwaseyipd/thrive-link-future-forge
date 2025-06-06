
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

interface HopesSectionProps {
  control: Control<any>
}

const HopesSection = ({ control }: HopesSectionProps) => {
  return (
    <FormField
      control={control}
      name="hopes"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm">What do you hope to gain from Thrive Link?</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Tell us what you're looking to achieve..."
              className="min-h-20 resize-none"
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default HopesSection
