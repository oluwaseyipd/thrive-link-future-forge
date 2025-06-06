
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface ProfileUrlSectionProps {
  control: Control<any>
}

const ProfileUrlSection = ({ control }: ProfileUrlSectionProps) => {
  return (
    <FormField
      control={control}
      name="profileUrl"
      render={({ field }) => (
        <FormItem className="md:col-span-2">
          <FormLabel className="text-sm">LinkedIn/GitHub/Portfolio URL (Optional)</FormLabel>
          <FormControl>
            <Input placeholder="https://..." className="h-10" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ProfileUrlSection
