
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining the Thrive Link community newsletter.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Stay Updated with Thrive Link
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join our newsletter to receive the latest updates, resources, and opportunities.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white flex-1 md:max-w-md"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-white text-blue-600 hover:bg-blue-50 w-full md:w-auto"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
          <p className="text-blue-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
