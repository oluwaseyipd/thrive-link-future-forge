
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      subscribe: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will respond soon.",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        subscribe: false
      });
      
      setIsSubmitting(false);
    }, 1500);
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
              Get In <span className="text-thrive-blue">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions or feedback? We'd love to hear from you! Our team is here to help with any inquiries you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <ScrollReveal>
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-thrive-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">For general inquiries:</p>
                <a href="mailto:info@thrivelink.com" className="text-thrive-blue hover:underline">info@thrivelink.com</a>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-thrive-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Monday - Friday, 9am - 5pm:</p>
                <a href="tel:+123456789" className="text-thrive-blue hover:underline">(123) 456-7890</a>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-thrive-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Our main office:</p>
                <p className="text-thrive-blue">123 Tech Hub Street, Suite 100<br />Innovation City, TC 12345</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Form Section */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                          Your Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-gray-300 dark:border-gray-600 focus:border-thrive-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="johndoe@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-gray-300 dark:border-gray-600 focus:border-thrive-blue"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-gray-300 dark:border-gray-600 focus:border-thrive-blue"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your inquiry in detail..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-thrive-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="subscribe" 
                        checked={formData.subscribe}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="subscribe"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300"
                      >
                        Subscribe to newsletter for updates and announcements
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-thrive-blue hover:bg-blue-700 w-full py-6 text-lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Map Section */}
      <ScrollReveal delay={150}>
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Find Us</h2>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-96 overflow-hidden shadow-lg">
                {/* Map placeholder - would be replaced with actual map integration */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600">
                  <MapPin className="h-12 w-12 text-thrive-blue" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Connect Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Follow us on social media to stay updated with the latest news, events, and resources.
              </p>
              
              <div className="flex justify-center space-x-6">
                <a href="#" className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-4 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-4 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-4 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-4 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Contact;
