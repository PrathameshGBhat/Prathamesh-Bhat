import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("core");

  const coreSkills = [
    { name: "Java", level: 90, color: "electric-blue" },
    { name: "OOP & AOP", level: 85, color: "neon-cyan" },
    { name: "REST APIs", level: 88, color: "electric-blue" },
    { name: "Microservices", level: 80, color: "neon-purple" },
    { name: "SQL", level: 80, color: "neon-purple" },
  ];

  const springEcosystem = [
    { name: "Spring Boot", level: 90, color: "electric-blue" },
    { name: "Spring MVC", level: 88, color: "neon-cyan" },
    { name: "Spring Security", level: 85, color: "electric-blue" },
    { name: "JPA / Hibernate", level: 82, color: "neon-purple" },
    { name: "JUnit & Testing", level: 75, color: "neon-cyan" },
  ];

  const webDevelopment = [
    { name: "React.js", level: 75, color: "electric-blue" },
    { name: "Node.js", level: 70, color: "neon-cyan" },
    { name: "Express.js", level: 72, color: "neon-purple" },
    { name: "MongoDB", level: 70, color: "neon-purple" },
    { name: "Vitest", level: 65, color: "neon-cyan" },
  ];

  const additionalSkills = [
    { name: "C++", level: 75, color: "neon-cyan" },
    { name: "MERN Stack", level: 70, color: "electric-blue" },
    { name: "Apache Kafka", level: 65, color: "neon-purple" },
    { name: "Apache Camel", level: 60, color: "electric-blue" },
    { name: "Terraform", level: 30, color: "neon-cyan" },
  ];

  const renderSkills = (
    skills: { name: string; level: number; color: string }[]
  ) => (
    <div className="grid gap-6">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="animate-slide-in-left"
          style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: "both",
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">{skill.name}</span>
            <span className={`text-${skill.color} text-sm font-semibold`}>
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-dark-border rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: "core", label: "Core Skills" },
              { key: "spring", label: "Spring Ecosystem" },
              { key: "web", label: "Web Development" },
              { key: "additional", label: "Additional Skills" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-electric-blue text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills Content */}
          <div className="tech-border rounded-xl p-8 bg-dark-bg/30 backdrop-blur-sm">
            {activeTab === "core" && renderSkills(coreSkills)}
            {activeTab === "spring" && renderSkills(springEcosystem)}
            {activeTab === "web" && renderSkills(webDevelopment)}
            {activeTab === "additional" && renderSkills(additionalSkills)}
          </div>

          {/* Certifications or Achievements */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-dark-bg/40 rounded-lg border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
              <div className="text-3xl font-bold text-electric-blue mb-2">
                8+
              </div>
              <div className="text-gray-400">CGPA</div>
            </div>
            <div className="text-center p-6 bg-dark-bg/40 rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300">
              <div className="text-3xl font-bold text-neon-purple mb-2">5+</div>
              <div className="text-gray-400">Technologies Mastered</div>
            </div>
            <div className="text-center p-6 bg-dark-bg/40 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300">
              <div className="text-3xl font-bold text-neon-cyan mb-2">2+</div>
              <div className="text-gray-400">Industry Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
