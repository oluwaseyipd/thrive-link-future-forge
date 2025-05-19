
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Empowering the Next Generation of 
            <span className="text-thrive-blue"> Tech Leaders</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            A community-driven platform that connects aspiring tech professionals 
            with mentors, resources, and opportunities to help them thrive in their careers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-thrive-blue hover:bg-thrive-darkBlue text-white px-8 py-6">
              Join the Community
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 animate-fade-in">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-thrive-green opacity-10 dark:opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-80 h-80 rounded-full bg-thrive-blue opacity-10 dark:opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="People collaborating in tech" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
