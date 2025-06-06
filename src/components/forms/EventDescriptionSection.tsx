
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

interface EventDescriptionSectionProps {
  control: Control<any>
}

const EventDescriptionSection = ({ control }: EventDescriptionSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Event Description</h3>
      
      {/* Description */}
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Event Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Provide a detailed description of your event, what attendees will learn, and what makes it valuable..."
                className="min-h-24 resize-none"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Learning Objectives */}
      <FormField
        control={control}
        name="objectives"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Learning Objectives</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="What specific skills or knowledge will attendees gain? List the key takeaways..."
                className="min-h-20 resize-none"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Requirements */}
      <FormField
        control={control}
        name="requirements"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Prerequisites/Requirements (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Any prior knowledge, tools, or materials attendees should have..."
                className="min-h-20 resize-none"
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

export default EventDescriptionSection
