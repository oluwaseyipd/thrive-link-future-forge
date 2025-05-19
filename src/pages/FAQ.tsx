
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");

  // FAQ data organized by categories
  const faqCategories = [
    {
      id: "general",
      name: "General Questions",
      questions: [
        {
          id: "what-is-thrivelink",
          question: "What is Thrive Link?",
          answer: "Thrive Link is a community-driven platform dedicated to empowering aspiring tech professionals through mentorship, resources, training, and career support. We connect learners with experienced mentors and provide various programs to help individuals build successful careers in technology."
        },
        {
          id: "who-is-thrivelink-for",
          question: "Who can join Thrive Link?",
          answer: "Thrive Link is open to anyone interested in pursuing or advancing a career in technology. Whether you're a complete beginner, a career changer, a student, or a tech professional looking to level up, our community welcomes you. We're particularly focused on supporting underrepresented groups in tech."
        },
        {
          id: "is-thrivelink-free",
          question: "Is Thrive Link free to join?",
          answer: "Basic community membership is free and provides access to our community forums, selected resources, and events. We also offer premium programs and bootcamps at various price points, with scholarships available for those who qualify."
        }
      ]
    },
    {
      id: "programs",
      name: "Programs & Mentorship",
      questions: [
        {
          id: "types-of-programs",
          question: "What types of programs does Thrive Link offer?",
          answer: "We offer various programs including one-on-one mentorship, group mentoring sessions, technical bootcamps, career development workshops, networking events, and self-paced learning resources across different tech disciplines."
        },
        {
          id: "mentorship-process",
          question: "How does the mentorship program work?",
          answer: "Our mentorship program pairs you with an experienced professional in your field of interest. After matching, you'll have regular one-on-one sessions where your mentor provides guidance, feedback, and support based on your goals. Mentorship periods typically run for 3-6 months."
        },
        {
          id: "bootcamp-details",
          question: "What can I expect from a Thrive Link bootcamp?",
          answer: "Our bootcamps are intensive, hands-on training programs designed to build practical skills in specific tech areas. They include live instruction, project work, code reviews, and career support. Most bootcamps run for 8-12 weeks and require a significant time commitment."
        }
      ]
    },
    {
      id: "community",
      name: "Community & Events",
      questions: [
        {
          id: "community-benefits",
          question: "What are the benefits of joining the community?",
          answer: "As a community member, you'll gain access to peer support, networking opportunities, knowledge sharing, job postings, events, and a platform to showcase your work. Our community is designed to provide both technical guidance and emotional support throughout your tech journey."
        },
        {
          id: "events-frequency",
          question: "How often does Thrive Link host events?",
          answer: "We host several events each month, including technical workshops, career panels, networking sessions, and casual community meetups. Events are announced in our calendar and community platforms with at least two weeks' notice."
        },
        {
          id: "community-contribute",
          question: "How can I contribute to the community?",
          answer: "There are many ways to contribute! You can share your knowledge by answering questions in forums, volunteer to help organize events, become a mentor once you have enough experience, or create learning resources. Check our Volunteer page for current opportunities."
        }
      ]
    },
    {
      id: "resources",
      name: "Resources & Learning",
      questions: [
        {
          id: "resources-available",
          question: "What learning resources does Thrive Link provide?",
          answer: "We offer a curated collection of articles, tutorials, video lessons, coding exercises, project templates, and learning paths across various tech disciplines. These resources are created by our team and experienced community members."
        },
        {
          id: "learning-path",
          question: "Do you offer structured learning paths?",
          answer: "Yes, we provide curated learning paths for different tech roles such as frontend development, backend development, data science, UX/UI design, and more. Each path outlines recommended resources, projects, and milestones to guide your learning journey."
        },
        {
          id: "resource-quality",
          question: "How do you ensure resource quality?",
          answer: "All our learning materials are created or vetted by industry professionals. We regularly update our content to ensure it remains current with industry standards and technologies. We also incorporate community feedback to continuously improve our resources."
        }
      ]
    },
    {
      id: "career",
      name: "Career Support",
      questions: [
        {
          id: "job-assistance",
          question: "Does Thrive Link offer job placement assistance?",
          answer: "While we don't guarantee job placement, we provide comprehensive career support including resume reviews, portfolio feedback, interview preparation, and connections to our employer network. Members also get access to job postings shared by our community and partner companies."
        },
        {
          id: "career-services",
          question: "What career development services are available?",
          answer: "Our career support includes one-on-one career coaching, resume and portfolio reviews, mock interviews, technical assessment preparation, negotiation strategies, and professional development workshops."
        },
        {
          id: "success-rate",
          question: "What is your members' success rate?",
          answer: "Approximately 85% of our active members who complete our structured programs successfully transition into tech roles or advance their existing careers within 6 months. Success rates vary based on program type, individual effort, and job market conditions."
        }
      ]
    }
  ];

  // Filter questions based on search query
  const filteredQuestions = searchQuery
    ? faqCategories.flatMap(category => 
        category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : faqCategories.find(cat => cat.id === activeCategory)?.questions || [];

  // State for tracking open/closed state of collapsibles
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
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
              Frequently Asked <span className="text-thrive-blue">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Find answers to common questions about Thrive Link, our programs, community, and resources.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                className="pl-10 pr-4 py-6 text-lg rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <ScrollReveal>
        <section className="py-8 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {faqCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id && !searchQuery
                      ? 'bg-thrive-blue text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery("");
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Questions Section */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {searchQuery && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Search Results for "{searchQuery}"
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Found {filteredQuestions.length} results
                  </p>
                </div>
              )}

              {!searchQuery && (
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                  {faqCategories.find(cat => cat.id === activeCategory)?.name}
                </h2>
              )}

              <div className="space-y-4">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((item) => (
                    <Collapsible
                      key={item.id}
                      open={openItems[item.id]}
                      onOpenChange={() => toggleItem(item.id)}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                    >
                      <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.question}</h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`ml-2 h-5 w-5 text-gray-500 transition-transform duration-200 ${
                            openItems[item.id] ? 'transform rotate-180' : ''
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6 pt-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        <p>{item.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-xl text-gray-600 dark:text-gray-400">No matching questions found.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("general");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Still Have Questions Section */}
      <ScrollReveal delay={150}>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-700 rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Can't find what you're looking for? We're here to help! Reach out to our team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-thrive-blue hover:bg-blue-700">
                  Contact Support
                </Button>
                <Button variant="outline">
                  Join Community Discord
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default FAQ;
