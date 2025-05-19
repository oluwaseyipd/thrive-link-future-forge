
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual (Zoom)",
      description: "A comprehensive bootcamp covering HTML, CSS, and JavaScript fundamentals for beginners.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 2,
      title: "Tech Career Panel",
      date: "June 22, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual (Zoom)",
      description: "Industry professionals share insights and answer questions about various tech career paths.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 3,
      title: "React Workshop",
      date: "July 5, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Tech Hub Coworking Space",
      description: "Hands-on workshop for intermediate developers looking to level up their React skills.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      date: "July 18, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Virtual (Zoom)",
      description: "Introduction to data science concepts, tools, and applications for beginners.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "UX/UI Design Workshop",
      date: "May 12, 2025",
      location: "Design Studio",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 6,
      title: "Python for Beginners",
      date: "April 28, 2025",
      location: "Virtual (Zoom)",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 7,
      title: "Tech Networking Mixer",
      date: "April 10, 2025",
      location: "Skyline Lounge",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Fixed theme toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Events & <span className="text-thrive-blue">Workshops</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join our interactive sessions, workshops, and networking events designed to help you grow your skills and connections.
            </p>
          </div>
        </div>
      </section>

      {/* Next Event Countdown Section */}
      <ScrollReveal>
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Next Major Event</h2>
                  <div className="flex items-center mb-4">
                    <Calendar className="mr-2 text-thrive-blue" />
                    <span className="text-gray-700 dark:text-gray-200 font-medium">June 15, 2025</span>
                  </div>
                  <div className="flex items-center mb-6">
                    <Clock className="mr-2 text-thrive-blue" />
                    <span className="text-gray-700 dark:text-gray-200 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-thrive-blue">Web Development Bootcamp</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    A comprehensive bootcamp covering HTML, CSS, and JavaScript fundamentals for beginners. 
                    Join us for a day of learning and hands-on practice.
                  </p>
                  <Button className="bg-thrive-blue hover:bg-blue-700">Register Now</Button>
                </div>
                <div className="md:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-4xl font-bold text-thrive-blue mb-1">23</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Days</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-4xl font-bold text-thrive-blue mb-1">14</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Hours</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-4xl font-bold text-thrive-blue mb-1">45</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Minutes</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-4xl font-bold text-thrive-blue mb-1">32</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Upcoming Events Section */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Upcoming Events</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Reserve your spot at our upcoming workshops, webinars, and networking sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="mr-2 h-4 w-4 text-thrive-blue" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                      <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
                      <Clock className="mr-2 h-4 w-4 text-thrive-blue" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{event.time}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                    <p className="text-sm text-thrive-blue mb-4">{event.location}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <Button variant="outline">Learn More</Button>
                      <Button className="bg-thrive-blue hover:bg-blue-700">Register</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Past Events Section */}
      <ScrollReveal delay={150}>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Past Events</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Check out our previous events and access recordings and materials from past sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map(event => (
                <Card key={event.id} className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{event.location}</p>
                    <Button variant="outline" className="w-full">View Recording</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Host An Event Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-6 mx-auto md:mx-0 w-32 h-32 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                      <path d="m8 14 3 3 5-5"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Want to Host an Event?</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Are you an expert in a tech-related field? Share your knowledge by hosting a workshop, webinar, or talk for the Thrive Link community.
                  </p>
                  <Button className="bg-thrive-blue hover:bg-blue-700">Propose an Event</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-thrive-blue to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated on Future Events
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Never miss an opportunity to learn and connect. Subscribe to our newsletter for event announcements and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Subscribe to Updates
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
