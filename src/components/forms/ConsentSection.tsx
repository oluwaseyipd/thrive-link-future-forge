
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

interface ConsentSectionProps {
  control: Control<any>
}

const ConsentSection = ({ control }: ConsentSectionProps) => {
  return (
    <FormField
      control={control}
      name="consent"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 md:p-4">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-sm">
              I agree to receive emails and updates from Thrive Link
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  )
}

export default ConsentSection
