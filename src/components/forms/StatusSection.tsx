
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface StatusSectionProps {
  control: Control<any>
}

const StatusSection = ({ control }: StatusSectionProps) => {
  return (
    <>
      {/* Status */}
      <FormField
        control={control}
        name="status"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Current Status</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select your status" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Graduate">Graduate</SelectItem>
                <SelectItem value="Working">Working</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* How heard about */}
      <FormField
        control={control}
        name="heardFrom"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">How did you hear about Thrive Link?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Friend/Colleague">Friend/Colleague</SelectItem>
                <SelectItem value="Search Engine">Search Engine</SelectItem>
                <SelectItem value="Event/Conference">Event/Conference</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export default StatusSection
