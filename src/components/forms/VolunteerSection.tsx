
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface VolunteerSectionProps {
  control: Control<any>
}

const VolunteerSection = ({ control }: VolunteerSectionProps) => {
  return (
    <FormField
      control={control}
      name="volunteer"
      render={({ field }) => (
        <FormItem className="space-y-3 md:col-span-2">
          <FormLabel className="text-sm">Would you be interested in volunteering?</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0"
            >
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <RadioGroupItem value="Yes" />
                </FormControl>
                <FormLabel className="font-normal text-sm">
                  Yes
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <RadioGroupItem value="No" />
                </FormControl>
                <FormLabel className="font-normal text-sm">
                  No
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <RadioGroupItem value="Maybe Later" />
                </FormControl>
                <FormLabel className="font-normal text-sm">
                  Maybe Later
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default VolunteerSection
