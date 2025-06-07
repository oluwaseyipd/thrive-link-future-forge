import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, BookOpenCheck, GraduationCap, Briefcase } from "lucide-react";
import ArticleSubmissionModal from "@/components/forms/ArticleSubmissionModal";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  const resources = [
    {
      id: 1,
      title: "Complete Guide to Frontend Development",
      description: "A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks.",
      category: "learning-paths",
      featured: true,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 2,
      title: "Introduction to Data Science with Python",
      description: "Learn the fundamentals of data science using Python and popular libraries.",
      category: "tutorials",
      featured: false,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 3,
      title: "10 Tips for Creating an Outstanding Tech Portfolio",
      description: "Expert advice on showcasing your work and standing out to potential employers.",
      category: "career",
      featured: true,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 4,
      title: "Essential Tools for Modern Web Development",
      description: "A curated list of tools, extensions, and resources to boost your workflow.",
      category: "tools",
      featured: false,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 5,
      title: "Getting Started with Cloud Computing",
      description: "An introduction to cloud platforms and services for beginners.",
      category: "learning-paths",
      featured: false,
      image: "https://images.unsplash.com/photo-1586772802650-2ce6c6e59bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 6,
      title: "How to Ace Your Technical Interview",
      description: "Strategies and practice problems to help you succeed in tech interviews.",
      category: "career",
      featured: true,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ];

  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "learning-paths", name: "Learning Paths", icon: BookOpenCheck },
    { id: "tutorials", name: "Tutorials", icon: GraduationCap },
    { id: "tools", name: "Tools", icon: Search },
    { id: "career", name: "Career Advice", icon: Briefcase }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

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
              Learning <span className="text-thrive-blue">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Access our curated collection of articles, tutorials, guides, and learning paths to help you grow your tech skills.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for resources..."
                className="pl-10 pr-4 py-6 text-lg rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <ScrollReveal>
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Resources</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredResources.map(resource => (
                <Card key={resource.id} className="bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title} 
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-thrive-blue text-xs font-medium rounded-full mb-4">
                      {categories.find(cat => cat.id === resource.category)?.name || resource.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{resource.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{resource.description}</p>
                    <Button className="w-full bg-thrive-blue hover:bg-blue-700">Read Article</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* All Resources Section */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Browse Resources</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-thrive-blue text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <category.icon className="mr-2 h-4 w-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map(resource => (
                  <Card key={resource.id} className="bg-white dark:bg-gray-800 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={resource.image} 
                        alt={resource.title} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-thrive-blue text-xs font-medium rounded-full mb-4">
                        {categories.find(cat => cat.id === resource.category)?.name || resource.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{resource.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{resource.description}</p>
                      <Button variant="outline" className="w-full">Read Article</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 dark:text-gray-400">No resources found matching your search.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* Contribute Section */}
      <ScrollReveal delay={150}>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    Share Your Knowledge
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Have expertise you'd like to share with the community? We welcome guest contributions from tech professionals at all levels.
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Write tutorials, guides, or career advice
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Share your tech journey and lessons learned
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-thrive-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Publish original research or case studies
                    </li>
                  </ul>
                  <Button 
                    className="bg-thrive-blue hover:bg-blue-700"
                    onClick={() => setIsArticleModalOpen(true)}
                  >
                    Submit an Article
                  </Button>
                </div>
                <div className="md:w-1/2 h-80 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Person writing on laptop" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-thrive-blue to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get New Resources in Your Inbox
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our weekly digest of curated learning resources, articles, and tutorials.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Your email address" className="bg-white text-gray-900" />
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Article Submission Modal */}
      <ArticleSubmissionModal 
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
      />
    </div>
  );
};

export default Resources;
