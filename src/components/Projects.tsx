
import { ExternalLink, Github, Shield, Database, Cog } from 'lucide-react';

const Projects = () => {
  const project = {
    title: "RESTful Application with Spring Boot",
    description: "Developed a secure, modular, and scalable backend using advanced Spring features including Spring Security, AOP, Input Validations, Spring MVC, and JPA. This project demonstrates best practices in enterprise Java development.",
    role: "Backend Developer",
    technologies: ["Spring Boot", "Spring Security", "Spring MVC", "JPA", "REST APIs", "Java"],
    features: [
      { icon: Shield, text: "Spring Security Implementation" },
      { icon: Cog, text: "Aspect-Oriented Programming (AOP)" },
      { icon: Database, text: "JPA Data Persistence" },
    ],
    github: "#", // Placeholder link
    demo: "#"   // Placeholder link
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image/Mockup */}
            <div className="relative animate-fade-in">
              <div className="tech-border rounded-xl p-8 bg-dark-card/50 backdrop-blur-sm">
                <div className="bg-dark-bg rounded-lg p-6 border border-electric-blue/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3 text-sm font-mono">
                    <div className="text-neon-cyan">@RestController</div>
                    <div className="text-gray-400">public class <span className="text-electric-blue">UserController</span> {</div>
                    <div className="ml-4 text-gray-400">
                      @PostMapping(<span className="text-green-400">"/api/users"</span>)
                    </div>
                    <div className="ml-4 text-gray-400">
                      public ResponseEntity<span className="text-electric-blue">&lt;User&gt;</span> createUser() {
                    </div>
                    <div className="ml-8 text-gray-400">// Spring Boot REST API</div>
                    <div className="ml-4 text-gray-400">}</div>
                    <div className="text-gray-400">}</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 p-3 bg-electric-blue/10 rounded-lg border border-electric-blue/30 animate-float">
                <Cog className="text-electric-blue" size={20} />
              </div>
              <div className="absolute -bottom-6 -left-6 p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/30 animate-float" style={{ animationDelay: '1s' }}>
                <Database className="text-neon-purple" size={20} />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-electric-blue font-medium mb-4">Role: {project.role}</p>
                <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-neon-cyan">Key Features</h4>
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-electric-blue/10 rounded-lg">
                      <feature.icon className="text-electric-blue" size={16} />
                    </div>
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold text-neon-purple mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-bg border border-electric-blue/30 rounded-full text-sm text-gray-300 hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 px-6 py-3 bg-dark-bg border border-electric-blue/30 rounded-lg text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/25"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white rounded-lg hover:from-neon-cyan hover:to-electric-blue transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/25"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
