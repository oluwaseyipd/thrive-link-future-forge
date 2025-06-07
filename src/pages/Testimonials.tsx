import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import TestimonialSubmissionForm from "@/components/forms/TestimonialSubmissionForm";

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [isSubmissionFormOpen, setIsSubmissionFormOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Rachel Kim",
      title: "Frontend Developer",
      company: "TechVision",
      category: "bootcamp",
      image: "",
      content: "The frontend bootcamp exceeded my expectations. The hands-on projects and personalized feedback helped me build a portfolio that landed me my first developer role within two months of completion.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Data Scientist",
      company: "DataCraft",
      category: "mentorship",
      image: "",
      content: "My mentor at Thrive Link was instrumental in helping me transition from academia to industry. Their guidance on practical applications of ML models and interview preparation made all the difference in my job search.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophia Garcia",
      title: "UX Designer",
      company: "DesignHub",
      category: "community",
      image: "",
      content: "The design community at Thrive Link provided invaluable feedback on my portfolio. The supportive environment allowed me to experiment with new techniques and grow my skills substantially.",
      rating: 5
    },
    {
      id: 4,
      name: "Jamal Williams",
      title: "Backend Engineer",
      company: "CloudScale",
      category: "bootcamp",
      image: "",
      content: "The backend development bootcamp was intense but incredibly rewarding. The curriculum was well-structured and the instructors were both knowledgeable and patient with beginners like me.",
      rating: 4
    },
    {
      id: 5,
      name: "Priya Patel",
      title: "Product Manager",
      company: "InnovateTech",
      category: "mentorship",
      image: "",
      content: "As someone transitioning into tech from a non-technical background, having a mentor who understood this journey was invaluable. They helped me leverage my transferable skills and build the technical knowledge I needed.",
      rating: 5
    },
    {
      id: 6,
      name: "David Chen",
      title: "Mobile Developer",
      company: "AppWorks",
      category: "community",
      image: "",
      content: "The mobile dev community at Thrive Link is incredibly supportive. When I got stuck on a particularly challenging app feature, several members jumped in with solutions and guidance.",
      rating: 5
    },
    {
      id: 7,
      name: "Olivia Martinez",
      title: "DevOps Engineer",
      company: "InfraTech",
      category: "resources",
      image: "",
      content: "The learning resources for DevOps were comprehensive and up-to-date. I particularly appreciated the hands-on labs that let me practice with real-world scenarios and tools.",
      rating: 4
    },
    {
      id: 8,
      name: "Ahmed Hassan",
      title: "Cybersecurity Analyst",
      company: "SecureNet",
      category: "resources",
      image: "",
      content: "The cybersecurity learning path and practice challenges helped me prepare for certification exams and real-world scenarios. The quality of content exceeded many paid platforms I've tried.",
      rating: 5
    },
    {
      id: 9,
      name: "Maya Jackson",
      title: "Full Stack Developer",
      company: "Startup Founder",
      category: "bootcamp",
      image: "",
      content: "The full stack development bootcamp gave me the confidence to launch my own tech startup. The practical approach focusing on building complete applications was exactly what I needed.",
      rating: 5
    }
  ];

  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, idx) => (
      <Star 
        key={idx} 
        className={`h-5 w-5 ${idx < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

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
              Our Community <span className="text-thrive-blue">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Hear directly from our community members about their experiences and how Thrive Link has helped them achieve their tech career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <ScrollReveal>
        <section className="py-8 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "all" 
                    ? 'bg-thrive-blue text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setFilter("all")}
              >
                All Testimonials
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "bootcamp" 
                    ? 'bg-thrive-blue text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setFilter("bootcamp")}
              >
                Bootcamps
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "mentorship" 
                    ? 'bg-thrive-blue text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setFilter("mentorship")}
              >
                Mentorship
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "community" 
                    ? 'bg-thrive-blue text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setFilter("community")}
              >
                Community
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "resources" 
                    ? 'bg-thrive-blue text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setFilter("resources")}
              >
                Learning Resources
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Grid */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map(testimonial => (
                <Card key={testimonial.id} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-4">
                          {testimonial.image ? (
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-thrive-blue font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                      <div className="text-gray-400 dark:text-gray-600">
                        <Quote size={20} />
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-thrive-blue text-xs font-medium rounded-full mb-4">
                        {testimonial.category === "bootcamp" && "Bootcamp Graduate"}
                        {testimonial.category === "mentorship" && "Mentorship Program"}
                        {testimonial.category === "community" && "Community Member"}
                        {testimonial.category === "resources" && "Learning Resources"}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Video Testimonials Section */}
      <ScrollReveal delay={150}>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Video Testimonials</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Watch our community members share their journey and success stories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button className="bg-thrive-blue hover:bg-blue-700 rounded-full h-14 w-14 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Success Story {item}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Watch video (2:45)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Share Your Story Section - Updated with modal integration */}
      <ScrollReveal delay={200}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Share Your Success Story</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Has Thrive Link helped you achieve your tech career goals? We'd love to hear about your experience and share it with our community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-thrive-blue hover:bg-blue-700"
                  onClick={() => setIsSubmissionFormOpen(true)}
                >
                  Submit Written Testimonial
                </Button>
                <Button size="lg" variant="outline">
                  Record Video Testimonial
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-thrive-blue to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community today and get the support, resources, and connections you need to thrive in your tech career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Join the Community
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Testimonial Submission Form Modal */}
      <TestimonialSubmissionForm
        isOpen={isSubmissionFormOpen}
        onClose={() => setIsSubmissionFormOpen(false)}
      />
    </div>
  );
};

export default Testimonials;
