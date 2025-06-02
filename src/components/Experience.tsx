
import { Building2, Calendar, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            {/* Current Position */}
            <div className="tech-border rounded-xl p-8 bg-dark-card/30 backdrop-blur-sm hover:bg-dark-card/50 transition-all duration-300 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="p-3 bg-electric-blue/10 rounded-lg">
                    <Building2 className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Intern</h3>
                    <p className="text-electric-blue font-medium">Cognizant Technology Solutions</p>
                    <p className="text-gray-400">Microservices Domain</p>
                  </div>
                </div>
                <div className="flex items-center text-neon-purple">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">Present</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Currently working on microservice-based architecture using Spring Boot and related technologies. 
                  Gaining hands-on experience in building scalable, distributed systems and learning industry best practices.
                </p>
                
                <div className="flex items-center text-neon-cyan">
                  <Code size={16} className="mr-2" />
                  <span className="text-sm font-medium">Key Technologies: Spring Boot, Microservices, REST APIs</span>
                </div>
              </div>
            </div>

            {/* Previous Internships */}
            <div className="tech-border rounded-xl p-8 bg-dark-card/20 backdrop-blur-sm hover:bg-dark-card/40 transition-all duration-300 animate-fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-neon-purple/10 rounded-lg">
                  <Code className="text-neon-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Web Development Internships</h3>
                  <p className="text-neon-purple font-medium">Multiple Organizations</p>
                  <p className="text-gray-400">Full Stack Development</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Completed two comprehensive web development internships, gaining practical experience in both 
                frontend and backend development. Worked with modern web technologies and frameworks to build 
                responsive, user-friendly applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
