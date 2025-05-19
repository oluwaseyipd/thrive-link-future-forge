
const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            How Thrive<span className="text-thrive-blue">Link</span> Works
          </h2>
          <div className="w-20 h-1 bg-thrive-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our platform offers a comprehensive approach to help you grow in your tech career 
            through four key pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="h-2 bg-thrive-blue"></div>
            <div className="p-8">
              <div className="bg-thrive-blue bg-opacity-10 dark:bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue w-8 h-8">
                  <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mentorship</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Connect with experienced professionals who can guide your career path, provide valuable 
                insights, and help you navigate challenges in the tech industry.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  1-on-1 personalized mentorship sessions
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Career guidance and planning
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Resume and portfolio reviews
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="h-2 bg-thrive-green"></div>
            <div className="p-8">
              <div className="bg-thrive-green bg-opacity-10 dark:bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-green w-8 h-8">
                  <path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Resources</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Access curated learning materials, tutorials, and industry insights to stay updated
                with the latest tech trends and enhance your skills.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Curated learning paths for different roles
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  E-books, tutorials, and guides
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Industry reports and tech trends
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="h-2 bg-thrive-blue"></div>
            <div className="p-8">
              <div className="bg-thrive-blue bg-opacity-10 dark:bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-blue w-8 h-8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Community</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join a vibrant community of like-minded professionals to share ideas, collaborate on 
                projects, and build meaningful connections in the tech industry.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Discussion forums and community chats
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Networking events and meetups
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 dark:bg-green-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Collaborative group projects
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="h-2 bg-thrive-green"></div>
            <div className="p-8">
              <div className="bg-thrive-green bg-opacity-10 dark:bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-thrive-green w-8 h-8">
                  <circle cx="12" cy="12" r="10"></circle><path d="M16 8.5 12 12l4 4"></path><path d="m8 8.5 4 3.5-4 4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover job openings, internships, freelance projects, and other professional 
                opportunities shared exclusively with our community.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Curated job board for tech positions
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Freelance and contract opportunities
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-thrive-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Exclusive partner company referrals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
