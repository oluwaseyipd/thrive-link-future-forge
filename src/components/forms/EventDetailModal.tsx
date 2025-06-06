
import Modal from "@/components/ui/modal"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Star, CheckCircle } from "lucide-react"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
}

interface EventDetailModalProps {
  isOpen: boolean
  onClose: () => void
  onRegister: () => void
  event: Event | null
}

const EventDetailModal = ({ isOpen, onClose, onRegister, event }: EventDetailModalProps) => {
  if (!event) return null

  const handleRegisterClick = () => {
    onClose()
    onRegister()
  }

  const eventDetails = {
    1: {
      instructor: "Sarah Johnson",
      duration: "6 hours",
      maxParticipants: 25,
      currentRegistrations: 18,
      prerequisites: "Basic computer skills",
      whatYouWillLearn: [
        "HTML fundamentals and semantic markup",
        "CSS styling and responsive design",
        "JavaScript basics and DOM manipulation",
        "Building your first interactive website"
      ],
      agenda: [
        { time: "10:00 AM - 11:30 AM", topic: "HTML Fundamentals" },
        { time: "11:30 AM - 12:00 PM", topic: "Break" },
        { time: "12:00 PM - 1:30 PM", topic: "CSS Styling" },
        { time: "1:30 PM - 2:30 PM", topic: "Lunch Break" },
        { time: "2:30 PM - 4:00 PM", topic: "JavaScript Basics & Project" }
      ]
    },
    2: {
      instructor: "Multiple Industry Experts",
      duration: "2 hours",
      maxParticipants: 100,
      currentRegistrations: 67,
      prerequisites: "None",
      whatYouWillLearn: [
        "Current tech industry trends and opportunities",
        "How to prepare for tech interviews",
        "Networking strategies in tech",
        "Career transition tips from different backgrounds"
      ],
      agenda: [
        { time: "6:00 PM - 6:15 PM", topic: "Welcome & Introductions" },
        { time: "6:15 PM - 7:00 PM", topic: "Panel Discussion" },
        { time: "7:00 PM - 7:30 PM", topic: "Q&A Session" },
        { time: "7:30 PM - 8:00 PM", topic: "Networking & Wrap-up" }
      ]
    },
    3: {
      instructor: "Mike Chen",
      duration: "4 hours",
      maxParticipants: 20,
      currentRegistrations: 15,
      prerequisites: "Basic JavaScript knowledge",
      whatYouWillLearn: [
        "React components and JSX",
        "State management with hooks",
        "Props and component communication",
        "Building a complete React application"
      ],
      agenda: [
        { time: "11:00 AM - 12:30 PM", topic: "React Fundamentals" },
        { time: "12:30 PM - 1:00 PM", topic: "Break" },
        { time: "1:00 PM - 2:30 PM", topic: "Hooks and State Management" },
        { time: "2:30 PM - 3:00 PM", topic: "Project Building & Q&A" }
      ]
    },
    4: {
      instructor: "Dr. Emily Rodriguez",
      duration: "3 hours",
      maxParticipants: 30,
      currentRegistrations: 22,
      prerequisites: "Basic math and statistics",
      whatYouWillLearn: [
        "Introduction to data science concepts",
        "Data analysis with Python basics",
        "Data visualization techniques",
        "Real-world data science applications"
      ],
      agenda: [
        { time: "9:00 AM - 10:00 AM", topic: "Data Science Overview" },
        { time: "10:00 AM - 10:15 AM", topic: "Break" },
        { time: "10:15 AM - 11:30 AM", topic: "Python for Data Analysis" },
        { time: "11:30 AM - 12:00 PM", topic: "Hands-on Practice & Next Steps" }
      ]
    }
  }

  const details = eventDetails[event.id as keyof typeof eventDetails] || eventDetails[1]

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          {event.title}
        </DialogTitle>
      </DialogHeader>

      <div className="mt-4 space-y-6">
        {/* Event Image */}
        <div className="h-64 overflow-hidden rounded-lg">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Event Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Calendar className="mr-2 h-5 w-5 text-thrive-blue" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock className="mr-2 h-5 w-5 text-thrive-blue" />
              <span>{event.time} ({details.duration})</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="mr-2 h-5 w-5 text-thrive-blue" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Users className="mr-2 h-5 w-5 text-thrive-blue" />
              <span>{details.currentRegistrations}/{details.maxParticipants} registered</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Star className="mr-2 h-5 w-5 text-thrive-blue" />
              <span>Instructor: {details.instructor}</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
              <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Prerequisites</h4>
              <p className="text-gray-600 dark:text-gray-300">{details.prerequisites}</p>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What You'll Learn</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {details.whatYouWillLearn.map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Event Agenda */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Event Agenda</h4>
          <div className="space-y-2">
            {details.agenda.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="font-medium text-thrive-blue">{item.time}</span>
                <span className="text-gray-600 dark:text-gray-300">{item.topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
          <Button
            onClick={handleRegisterClick}
            className="w-full sm:w-auto bg-thrive-blue hover:bg-blue-700"
            disabled={details.currentRegistrations >= details.maxParticipants}
          >
            {details.currentRegistrations >= details.maxParticipants ? "Event Full" : "Register Now"}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default EventDetailModal
