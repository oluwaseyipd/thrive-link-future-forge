
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Community = () => {
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
              Thrive <span className="text-thrive-blue">Together</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join our vibrant community of tech enthusiasts, learners, and professionals. Connect, collaborate, and grow together.
            </p>
            <Button size="lg" className="bg-thrive-blue hover:bg-blue-700">Join Our Community</Button>
          </div>
        </div>
      </section>

      {/* Community Overview Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">A Community That Cares</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Thrive Link, we believe that the journey into tech is better when you're not alone. Our community is built on values of support, collaboration, knowledge sharing, and genuine connection.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Whether you're just starting out or you're looking to level up your skills, our community provides a supportive environment where everyone can thrive together.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Community gathering" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Community Values Section */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Community Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                These core principles guide how we interact, learn, and grow together as a community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-thrive-blue">
                      <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6 8 8 0 0 0-3 4 7 7 0 0 0 3 10 21 21 0 0 0 12 0 7 7 0 0 0 3-10 8 8 0 0 0-3-4Z"></path>
                      <path d="M12 2v8"></path>
                      <path d="m4.93 10.93 1.41 1.41"></path>
                      <path d="M2 18h2"></path>
                      <path d="m19.07 10.93-1.41 1.41"></path>
                      <path d="M20 18h2"></path>
                      <path d="m8 22 4-4 4 4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Inclusivity</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We welcome everyone regardless of background, experience level, or career stage. Diversity makes us stronger.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-thrive-blue">
                      <path d="M7 11v12"></path>
                      <path d="M17 3v12"></path>
                      <path d="M7 15c0-3.866 7-3.866 7-7"></path>
                      <path d="M7 19c0-3.866 7-3.866 7-7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Continuous Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We foster a culture of lifelong learning, curiosity, and knowledge sharing among all community members.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Users className="h-7 w-7 text-thrive-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We believe in the power of working together, sharing ideas, and building upon each other's strengths.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-thrive-blue">
                      <path d="m8 3 4 8 5-5"></path>
                      <path d="M4 13h3l3 3"></path>
                      <path d="M9 17h10"></path>
                      <path d="M17 21h-5"></path>
                      <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Support & Encouragement</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We provide positive support, constructive feedback, and celebrate each other's wins, big and small.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Niche Groups Section */}
      <ScrollReveal delay={150}>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Specialized Community Groups</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Connect with like-minded individuals in your specific area of interest through our focused community groups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-thrive-blue">
                      <path d="M2 12h20"></path>
                      <path d="M2 4h20"></path>
                      <path d="M2 20h20"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Frontend Developers</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For those focused on creating beautiful, responsive, and accessible user interfaces.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button variant="outline" className="w-full">Join Group</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-thrive-blue">
                      <path d="M7 5h17"></path>
                      <path d="M7 19h17"></path>
                      <path d="M21 12h3"></path>
                      <path d="M7 12h8"></path>
                      <path d="M7 9c0-1.7 1.3-3 3-3q3 0 3 3"></path>
                      <path d="M7 15c0 1.7 1.3 3 3 3q3 0 3-3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Backend Engineers</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For those building robust server-side applications, APIs, and databases.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button variant="outline" className="w-full">Join Group</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-thrive-blue">
                      <circle cx="18" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                      <path d="M11 18H8a2 2 0 0 1-2-2V9"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Data Science</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For those working with data analysis, machine learning, and AI applications.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button variant="outline" className="w-full">Join Group</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-thrive-blue">
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Mobile Development</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For those building iOS, Android, and cross-platform mobile applications.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button variant="outline" className="w-full">Join Group</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-thrive-blue">
                      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">DevOps & Cloud</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For those focused on deployment, infrastructure, and cloud technologies.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button variant="outline" className="w-full">Join Group</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-thrive-blue">
                      <path d="m21.39 6.91-8.24 8.22a3 3 0 0 1-4.24 0l-8.24-8.22"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">UI/UX Design</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For designers creating intuitive, beautiful, and accessible digital experiences.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button variant="outline" className="w-full">Join Group</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">What Our Community Says</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hear from members who have found value, connection, and growth within our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">David Kim</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "Joining the Thrive Link community changed everything for me. The support, resources, and connections I've made helped me land my first developer job in just 6 months."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "The design group within Thrive Link provided feedback on my portfolio that completely transformed it. I'm now working at my dream company thanks to the connections I made here."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Miguel Santos</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Data Scientist</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "The data science group in this community is incredible. We collaborate on projects, share resources, and help each other overcome challenges. It's like having a team of brilliant colleagues."
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
            Join Our Thriving Community Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with like-minded individuals, find mentors, collaborate on projects, and grow your skills in a supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Join Discord Community
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Join Telegram Group
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
