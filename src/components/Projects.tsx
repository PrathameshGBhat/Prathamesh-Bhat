import {
  ExternalLink,
  Github,
  Shield,
  Database,
  Cog,
  Code,
  Globe,
  MonitorSmartphone,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Travel Management System",
      description:
        "Developed a secure, modular, and scalable backend using advanced Spring features including Spring Security, AOP, Input Validations, Spring MVC, and JPA. This project demonstrates best practices in enterprise Java development.",
      role: "Backend Developer",
      technologies: [
        "Spring Boot",
        "Spring Security",
        "Spring MVC",
        "JPA",
        "REST APIs",
        "Java",
      ],
      features: [
        { icon: Shield, text: "Spring Security Implementation" },
        { icon: Cog, text: "Aspect-Oriented Programming (AOP)" },
        { icon: Database, text: "JPA Data Persistence" },
      ],
      github: "https://github.com/PrathameshGBhat/Travel-Management-System.git",
    },
    {
      title: "SocialConnect",
      description: `Secured Authentication & State Management: Strengthened user data protection by implementing Redux for authentication and state management, resulting in a 40% increase in session stability and a 15% boost in user satisfaction scores.
        Feature Development: Successfully implemented key social networking features including Likes, Comments, Friend Connect, and Disconnect, resulting in a 60% increase in user engagement and interaction.`,
      role: "Full Stack Developer",
      technologies: ["React", "JavaScript", "Redux", "MongoDB", "Material UI"],
      features: [
        { icon: Shield, text: "Secured Authentication & State Management" },
        {
          icon: Cog,
          text: "Implemented Likes, Comments & Friend Connect Features",
        },
        { icon: Globe, text: "Improved User Engagement by 60%" },
      ],
      github: "https://github.com/PrathameshGBhat/SocialConnect.git", // you can change this if SocialConnect has a repo link
    },
    {
      title: "Decentralized FIR System",
      description:
        "Developed a web-based decentralized FIR management system leveraging React, Express.js, Solidity, and Ganache to ensure transparency and secure handling of sensitive data. Designed and deployed smart contracts on the Ethereum blockchain to create tamper-proof records, enhancing data integrity and trust. Integrated Metamask for secure user authentication and blockchain transaction management. Created a responsive and user-friendly interface for seamless FIR submission and tracking, reducing response times by 30% and improving workflow efficiency by 50%. Showcased expertise in blockchain development, smart contract design, and web technologies, delivering a scalable and secure solution for real-world applications.",
      role: "BlockChain Project",
      technologies: [
        "React",
        "JavaScript",
        "Solidity",
        "Ganache",
        "Express.js",
        "Ethereum",
        "Metamask",
      ],
      features: [
        { icon: Shield, text: "Secure Blockchain-based FIR Records" },
        { icon: Cog, text: "Smart Contract Development & Deployment" },
        { icon: Globe, text: "Responsive UI & Improved Workflow Efficiency" },
      ],
      github: "https://github.com/yourusername/decentralized-fir-system", // update with your actual repo link
    },
  ];

  const codeSnippets = [
    // snippet for project 0 (Travel Management System)
    [
      { text: "@RestController", className: "text-neon-cyan", indent: 0 },
      {
        text: "public class ",
        className: "text-gray-400",
        indent: 0,
        inline: [
          { text: "TravelController", className: "text-electric-blue" },
          { text: " {" },
        ],
      },
      {
        text: "@GetMapping(",
        className: "text-gray-400",
        indent: 1,
        inline: [
          { text: '"/api/travel"', className: "text-green-400" },
          { text: ")" },
        ],
      },
      {
        text: "public ResponseEntity",
        className: "text-gray-400",
        indent: 1,
        inline: [
          { text: "<List<Travel>>", className: "text-electric-blue" },
          { text: " getTravels() {" },
        ],
      },
      { text: "// logic here", className: "text-gray-400", indent: 2 },
      { text: "}", className: "text-gray-400", indent: 1 },
      { text: "}", className: "text-gray-400", indent: 0 },
    ],
    // snippet for project 0 (Travel Management System)
    [
      {
        text: "const authSlice = createSlice({",
        className: "text-electric-blue",
        indent: 0,
      },
      { text: "name: 'auth',", className: "text-gray-400", indent: 1 },
      {
        text: "initialState: { user: null },",
        className: "text-gray-400",
        indent: 1,
      },
      { text: "reducers: {", className: "text-gray-400", indent: 1 },
      {
        text: "login: (state, action) => { state.user = action.payload; },",
        className: "text-gray-400",
        indent: 2,
      },
      {
        text: "logout: (state) => { state.user = null; },",
        className: "text-gray-400",
        indent: 2,
      },
      { text: "},", className: "text-gray-400", indent: 1 },
      { text: "});", className: "text-electric-blue", indent: 0 },
    ],

    // snippet for project 2 (Hotel Booking)
    [
      {
        text: "async function submitFIR(data) {",
        className: "text-electric-blue",
        indent: 0,
      },
      {
        text: "// Connect to Metamask & Ethereum",
        className: "text-gray-400",
        indent: 1,
      },
      {
        text: "const provider = new ethers.providers.Web3Provider(window.ethereum);",
        className: "text-gray-400",
        indent: 1,
      },
      {
        text: "const signer = provider.getSigner();",
        className: "text-gray-400",
        indent: 1,
      },
      {
        text: "const contract = new ethers.Contract(address, abi, signer);",
        className: "text-gray-400",
        indent: 1,
      },
      {
        text: "await contract.submitFIR(data);",
        className: "text-gray-400",
        indent: 1,
      },
      { text: "}", className: "text-electric-blue", indent: 0 },
    ],
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
              >
                {/* Project Image/Mockup with Dynamic Code Snippet */}
                <div className="relative animate-fade-in">
                  <div className="tech-border rounded-xl p-8 bg-dark-card/50 backdrop-blur-sm">
                    <div className="bg-dark-bg rounded-lg p-6 border border-electric-blue/20">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-3 text-sm font-mono">
                        {codeSnippets[idx].map((line, i) => (
                          <div
                            key={i}
                            className={line.className}
                            style={{ marginLeft: `${line.indent * 1}rem` }}
                          >
                            {line.text}
                            {line.inline &&
                              line.inline.map((spanPart, j) => (
                                <span key={j} className={spanPart.className}>
                                  {spanPart.text}
                                </span>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Tech Icons */}
                  <div className="absolute -top-6 -right-6 p-3 bg-electric-blue/10 rounded-lg border border-electric-blue/30 animate-float">
                    <Cog className="text-electric-blue" size={20} />
                  </div>
                  <div
                    className="absolute -bottom-6 -left-6 p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/30 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <Database className="text-neon-purple" size={20} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-8 animate-slide-in-left">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-electric-blue font-medium mb-4">
                      Role: {project.role}
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-neon-cyan">
                      Key Features
                    </h4>
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="p-2 bg-electric-blue/10 rounded-lg">
                          <feature.icon
                            className="text-electric-blue"
                            size={16}
                          />
                        </div>
                        <span className="text-gray-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-neon-purple mb-4">
                      Technologies Used
                    </h4>
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
