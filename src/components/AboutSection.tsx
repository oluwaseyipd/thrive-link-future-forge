
const AboutSection = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Thrive<span className="text-thrive-blue">Link</span>
          </h2>
          <div className="w-20 h-1 bg-thrive-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We're on a mission to transform the tech industry by making it more accessible,
            inclusive, and supportive for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
            <div className="bg-thrive-blue bg-opacity-10 dark:bg-opacity-20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue w-8 h-8">
                <path d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"></path><path d="M17 11H7a2 2 0 0 0-2 2v3h14v-3a2 2 0 0 0-2-2Z"></path><path d="M12 4a3 3 0 1 0 0 6a3 3 0 1 0 0-6Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To create a thriving ecosystem where tech aspirants can connect, learn, and grow through community-driven support and mentorship.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
            <div className="bg-thrive-blue bg-opacity-10 dark:bg-opacity-20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue w-8 h-8">
                <path d="m2 16 6-6M3 13l3 3M10 4l6 6M13 3l3 3M18 8l4 4M19 11l3 3M19 19l-6-6M22 16l-3 3M8 18l-6 6M11 21l-3-3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in inclusivity, continuous learning, authentic connections, and community empowerment as the foundation of career growth.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
            <div className="bg-thrive-blue bg-opacity-10 dark:bg-opacity-20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue w-8 h-8">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To become the leading platform where every tech professional, regardless of background, can find the support and resources they need to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
