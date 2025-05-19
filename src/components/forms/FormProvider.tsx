
import { createContext, useContext, useState, ReactNode } from "react"
import JoinCommunityForm from "./JoinCommunityForm"
import VolunteerForm from "./VolunteerForm"

interface FormContextType {
  openJoinCommunityForm: () => void
  openVolunteerForm: () => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}

interface FormProviderProps {
  children: ReactNode
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [joinCommunityFormOpen, setJoinCommunityFormOpen] = useState(false)
  const [volunteerFormOpen, setVolunteerFormOpen] = useState(false)

  const openJoinCommunityForm = () => setJoinCommunityFormOpen(true)
  const closeJoinCommunityForm = () => setJoinCommunityFormOpen(false)

  const openVolunteerForm = () => setVolunteerFormOpen(true)
  const closeVolunteerForm = () => setVolunteerFormOpen(false)

  return (
    <FormContext.Provider
      value={{
        openJoinCommunityForm,
        openVolunteerForm
      }}
    >
      {children}
      <JoinCommunityForm 
        isOpen={joinCommunityFormOpen} 
        onClose={closeJoinCommunityForm} 
      />
      <VolunteerForm 
        isOpen={volunteerFormOpen} 
        onClose={closeVolunteerForm} 
      />
    </FormContext.Provider>
  )
}
