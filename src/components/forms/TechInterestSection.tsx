import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TechInterestSectionProps {
  control: Control<any>
  showOtherTechInput: boolean
  onTechInterestChange: (value: string) => void
}

const TechInterestSection = ({ control, showOtherTechInput, onTechInterestChange }: TechInterestSectionProps) => {
  const techInterests = [
    "Frontend Development",
    "Backend Development",
    "Data Science / ML",
    "Cybersecurity",
    "UI/UX Design",
    "Mobile Dev",
    "Product Management",
    "Game Development",
    "Other"
  ]

  return (
    <>
      {/* Tech Interest */}
      <FormField
        control={control}
        name="techInterest"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">Primary Tech Interest</FormLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value)
                onTechInterestChange(value)
              }} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select your primary interest" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {techInterests.map((interest) => (
                  <SelectItem key={interest} value={interest}>
                    {interest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Other Tech Interest */}
      {showOtherTechInput && (
        <FormField
          control={control}
          name="otherTechInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Specify Other Interest</FormLabel>
              <FormControl>
                <Input placeholder="Your tech interest" className="h-10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {/* Skill Level */}
      <FormField
        control={control}
        name="skillLevel"
        render={({ field }) => (
          <FormItem className="space-y-3 md:col-span-2">
            <FormLabel className="text-sm">Skill Level</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0"
              >
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="Beginner" />
                  </FormControl>
                  <FormLabel className="font-normal text-sm">
                    Beginner
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="Intermediate" />
                  </FormControl>
                  <FormLabel className="font-normal text-sm">
                    Intermediate
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="Advanced" />
                  </FormControl>
                  <FormLabel className="font-normal text-sm">
                    Advanced
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export default TechInterestSection
