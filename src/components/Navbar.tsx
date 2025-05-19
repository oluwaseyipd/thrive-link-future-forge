
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-thrive-blue dark:text-white">
            Thrive<span className="text-thrive-green">Link</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue transition-colors">
            About Us
          </Link>
          <a href="/#about" className="text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue transition-colors">
            About
          </a>
          <a href="/#how-it-works" className="text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue transition-colors">
            How It Works
          </a>
          <a href="/#testimonials" className="text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue transition-colors">
            Testimonials
          </a>
          <a href="/#events" className="text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue transition-colors">
            Events
          </a>
          <Button className="ml-4">Join Now</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/about"
              className="block text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <a 
              href="/#about"
              className="block text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/#how-it-works" 
              className="block text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="/#testimonials" 
              className="block text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="/#events" 
              className="block text-gray-700 dark:text-gray-200 hover:text-thrive-blue dark:hover:text-thrive-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
