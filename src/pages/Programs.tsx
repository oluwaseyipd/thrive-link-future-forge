import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Rocket, Users } from "lucide-react";
import MentorshipApplicationForm from "@/components/forms/MentorshipApplicationForm";
import CareerSupportForm from "@/components/forms/CareerSupportForm";

const Programs = () => {
  const [mentorshipFormOpen, setMentorshipFormOpen] = useState(false);
  const [careerSupportFormOpen, setCareerSupportFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Our <span className="text-thrive-blue">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover the various ways Thrive Link helps you grow in your tech journey through mentorship, training, and career development.
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-thrive-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Mentorship Program</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Connect with experienced professionals who will guide you through your tech journey. Our mentors provide personalized advice, feedback on your projects, and support as you navigate the tech industry.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    1-on-1 mentoring sessions with industry experts
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Personalized growth plans tailored to your goals
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Regular check-ins and progress tracking
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="bg-thrive-blue hover:bg-blue-700"
                  onClick={() => setMentorshipFormOpen(true)}
                >
                  Apply for Mentorship
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Mentorship session in progress" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Bootcamps & Training Section */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Tech bootcamp participants" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <GraduationCap className="w-10 h-10 text-thrive-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Bootcamps & Training</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Access intensive, practical training programs designed to build your skills in specific tech areas. Our bootcamps are led by industry professionals and focus on hands-on projects.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Immersive coding bootcamps (beginner to advanced)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Specialized workshops in emerging technologies
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Group projects that mimic real-world scenarios
                  </li>
                </ul>
                <Button size="lg" className="bg-thrive-blue hover:bg-blue-700">Explore Bootcamps</Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Career Development Section */}
      <ScrollReveal delay={150}>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Briefcase className="w-10 h-10 text-thrive-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Career Development</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Get personalized career support to help you land your dream job in tech. From resume reviews to interview preparation, we provide the guidance you need to succeed.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Resume and portfolio review sessions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Mock interviews with industry professionals
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Job search strategies and networking opportunities
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="bg-thrive-blue hover:bg-blue-700"
                  onClick={() => setCareerSupportFormOpen(true)}
                >
                  Get Career Support
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Career development session" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Learning Resources Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Learning resources" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Rocket className="w-10 h-10 text-thrive-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Learning Resources</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Access our curated collection of tutorials, guides, and learning materials to support your technical development at your own pace.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Comprehensive learning paths for different tech roles
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Video tutorials and step-by-step guides
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Project templates and starter code for practice
                  </li>
                </ul>
                <Button size="lg" className="bg-thrive-blue hover:bg-blue-700">Browse Resources</Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-thrive-blue to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Thrive Link today and get access to all our programs, mentorship opportunities, and resources to help you succeed in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Join Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Forms */}
      <MentorshipApplicationForm 
        isOpen={mentorshipFormOpen} 
        onClose={() => setMentorshipFormOpen(false)} 
      />
      <CareerSupportForm 
        isOpen={careerSupportFormOpen} 
        onClose={() => setCareerSupportFormOpen(false)} 
      />
    </div>
  );
};

export default Programs;
