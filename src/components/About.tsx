import { GraduationCap, Award } from "lucide-react";
import DotParticleCanvas from "./DotParticleCanvas";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-electric-blue mb-4">
                Prathamesh Bhat
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a Computer Science graduate from Sahyadri College of
                Engineering with a strong academic record (8+ CGPA). After
                completing two internships in web development, I began my
                professional journey with Cognizant Technology Solutions, where
                I now work full-time in the Microservices Domain. My expertise
                lies in developing secure and scalable backend systems using
                Java, Spring Boot, and RESTful APIs.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Passionate about backend development, I specialize in building
                robust, scalable applications using Java and Spring Boot. I
                enjoy solving complex problems and creating efficient solutions
                that make a real difference.
              </p>
            </div>

            {/* Education Section */}
            <div className="space-y-6 animate-fade-in">
              <div className="tech-border rounded-xl p-6 bg-dark-bg/50 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-electric-blue/10 rounded-lg">
                    <GraduationCap className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Education
                    </h4>
                    <p className="text-electric-blue font-medium">
                      B.E. in Computer Science
                    </p>
                    <p className="text-gray-300">
                      Sahyadri College of Engineering
                    </p>
                    <div className="flex items-center mt-2">
                      <Award className="text-neon-purple mr-2" size={16} />
                      <span className="text-neon-purple font-medium">
                        8+ CGPA
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-dark-bg/30 rounded-lg border border-electric-blue/20">
                  <div className="text-2xl font-bold text-electric-blue">
                    2+
                  </div>
                  <div className="text-sm text-gray-400">Internships</div>
                </div>
                <div className="text-center p-4 bg-dark-bg/30 rounded-lg border border-neon-purple/20">
                  <div className="text-2xl font-bold text-neon-purple">5+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
