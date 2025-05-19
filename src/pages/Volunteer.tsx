
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, GraduationCap, Briefcase } from "lucide-react";

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volunteerRoles = [
    {
      title: "Mentor",
      icon: Users,
      description: "Guide and support aspiring tech professionals through their learning journey. Share your expertise and experiences.",
      commitment: "2-4 hours per week",
      skills: ["Tech industry experience", "Communication skills", "Patience", "Empathy"]
    },
    {
      title: "Workshop Facilitator",
      icon: GraduationCap,
      description: "Plan and lead interactive workshops on technical topics. Help participants gain practical skills.",
      commitment: "5-10 hours per month",
      skills: ["Teaching experience", "Technical expertise", "Public speaking", "Organization"]
    },
    {
      title: "Content Creator",
      icon: BookOpen,
      description: "Create tutorials, articles, and learning resources for the community. Help make complex concepts accessible.",
      commitment: "Flexible",
      skills: ["Writing skills", "Technical knowledge", "Creativity", "Detail-oriented"]
    },
    {
      title: "Community Manager",
      icon: Heart,
      description: "Help foster a positive and supportive community environment. Moderate discussions and welcome new members.",
      commitment: "3-5 hours per week",
      skills: ["Communication skills", "Empathy", "Conflict resolution", "Tech familiarity"]
    },
    {
      title: "Career Coach",
      icon: Briefcase,
      description: "Assist members with resume reviews, interview preparation, and career guidance in the tech industry.",
      commitment: "2-3 hours per week",
      skills: ["HR/Recruiting experience", "Tech industry knowledge", "Communication skills", "Empathy"]
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
              Volunteer with <span className="text-thrive-blue">Thrive Link</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Share your skills, knowledge, and passion to help the next generation of tech professionals thrive.
            </p>
            <Button size="lg" className="bg-thrive-blue hover:bg-blue-700">Apply to Volunteer</Button>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Volunteer With Us?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Volunteering with Thrive Link offers a unique opportunity to give back to the tech community while developing your own skills and network. Here's what you'll gain:
                </p>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-thrive-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Expand your network</span> - Connect with other professionals and build meaningful relationships in the tech industry.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-thrive-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Develop leadership skills</span> - Gain valuable experience in mentoring, teaching, and guiding others.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-thrive-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Give back</span> - Help create opportunities for underrepresented groups in tech and make a real difference.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-thrive-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Strengthen your skills</span> - Teaching others is one of the best ways to deepen your own understanding.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-thrive-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Recognition</span> - Receive acknowledgment for your contributions and build your professional reputation.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Volunteers collaborating" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Volunteer Roles Section */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Available Volunteer Roles</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We have various ways you can contribute based on your skills, interests, and availability. 
                Each role plays a vital part in supporting our community's growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerRoles.map((role, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <role.icon className="h-7 w-7 text-thrive-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{role.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{role.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Time Commitment:</span>
                      <span className="text-sm ml-2 text-gray-600 dark:text-gray-400">{role.commitment}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">Required Skills:</span>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="inline-block bg-blue-50 dark:bg-blue-900/20 text-thrive-blue text-xs px-2 py-1 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Application Process Section */}
      <ScrollReveal delay={150}>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Application Process
              </h2>
              
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-thrive-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Submit Your Application</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Fill out our volunteer application form with your details, experience, skills, and areas of interest. Let us know why you're passionate about helping others in tech.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-thrive-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Initial Screening</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our volunteer coordination team will review your application and reach out to schedule a brief video call to discuss your interests and our current needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-thrive-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Orientation & Training</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      If selected, you'll attend an orientation session to learn about our community, values, and processes. Role-specific training will also be provided.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-thrive-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Start Volunteering</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Begin your volunteer journey with ongoing support from our team. We value your feedback and aim to make your experience rewarding and impactful.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" className="bg-thrive-blue hover:bg-blue-700">Apply Now</Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Volunteer Stories Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Volunteer Stories</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hear from our volunteers about their experiences and the impact they've made in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-6"></div>
                  <h4 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">Alex Chen</h4>
                  <p className="text-center text-thrive-blue mb-4">Mentor for 2 years</p>
                  <p className="text-gray-600 dark:text-gray-300 italic text-center">
                    "Being a mentor at Thrive Link has been one of the most rewarding experiences of my career. Seeing my mentees grow and succeed gives me immense satisfaction."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-6"></div>
                  <h4 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">Maya Johnson</h4>
                  <p className="text-center text-thrive-blue mb-4">Workshop Facilitator</p>
                  <p className="text-gray-600 dark:text-gray-300 italic text-center">
                    "Leading workshops has improved my communication skills and deepened my technical knowledge. The community's enthusiasm makes every session energizing."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-6"></div>
                  <h4 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">Jamal Williams</h4>
                  <p className="text-center text-thrive-blue mb-4">Content Creator</p>
                  <p className="text-gray-600 dark:text-gray-300 italic text-center">
                    "Creating learning resources for Thrive Link has been a win-win. I've sharpened my skills while helping others overcome the same challenges I faced."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-thrive-blue to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our volunteer team and help shape the future of tech by supporting the next generation of professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Apply to Volunteer
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;
