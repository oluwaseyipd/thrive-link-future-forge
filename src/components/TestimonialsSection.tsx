
const testimonials = [
  {
    id: 1,
    quote: "Joining ThriveLink was a game-changer for my career. The mentorship I received helped me land my dream job at a top tech company.",
    name: "Alex Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    quote: "The resources and community support at ThriveLink accelerated my learning curve. I went from novice to confident developer in just 6 months.",
    name: "Samantha Lee",
    role: "Full Stack Engineer",
    company: "StartupInc",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    quote: "As someone transitioning into tech from a different industry, ThriveLink's supportive community made all the difference in building my confidence and skills.",
    name: "Marcus Taylor",
    role: "Data Analyst",
    company: "AnalyticsPro",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Success Stories
          </h2>
          <div className="w-20 h-1 bg-thrive-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from community members who have transformed their careers with ThriveLink.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex mb-6">
                <svg className="text-thrive-blue h-8 w-8 mr-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
