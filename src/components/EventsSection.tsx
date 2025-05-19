
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "A 4-week intensive program covering HTML, CSS, JavaScript, and React fundamentals.",
    date: "June 15, 2023",
    time: "6:00 PM - 8:00 PM",
    type: "Bootcamp",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 2,
    title: "Career Panel: Breaking into Tech",
    description: "Join experts from top tech companies as they share insights on landing your first tech job.",
    date: "June 22, 2023",
    time: "5:30 PM - 7:30 PM",
    type: "Webinar",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 3,
    title: "Open Mentoring Session",
    description: "Get personalized career advice and technical guidance from experienced mentors.",
    date: "June 30, 2023",
    time: "7:00 PM - 9:00 PM",
    type: "Mentoring",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Upcoming Events & Programs
          </h2>
          <div className="w-20 h-1 bg-thrive-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join our events and programs to learn new skills, connect with others, and grow your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                    <CardDescription className="mt-2">{event.description}</CardDescription>
                  </div>
                  <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-600/30">
                    {event.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
