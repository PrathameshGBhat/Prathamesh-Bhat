
import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'Java', level: 90, color: 'electric-blue' },
    { name: 'Spring Boot', level: 85, color: 'neon-cyan' },
    { name: 'REST APIs', level: 88, color: 'electric-blue' },
    { name: 'SQL', level: 80, color: 'neon-purple' },
    { name: 'C++', level: 75, color: 'neon-cyan' },
    { name: 'MERN Stack', level: 70, color: 'electric-blue' },
  ];

  const frameworks = [
    { name: 'Spring Security', level: 85, color: 'electric-blue' },
    { name: 'Spring MVC', level: 88, color: 'neon-cyan' },
    { name: 'JPA/Hibernate', level: 80, color: 'neon-purple' },
    { name: 'React', level: 75, color: 'electric-blue' },
    { name: 'Node.js', level: 70, color: 'neon-cyan' },
    { name: 'Express.js', level: 72, color: 'neon-purple' },
  ];

  const renderSkills = (skills: typeof technicalSkills) => (
    <div className="grid gap-6">
      {skills.map((skill, index) => (
        <div key={skill.name} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">{skill.name}</span>
            <span className={`text-${skill.color} text-sm font-semibold`}>{skill.level}%</span>
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
          <div className="flex justify-center mb-12">
            <div className="flex bg-dark-bg/50 rounded-lg p-1 border border-dark-border">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'technical'
                    ? 'bg-electric-blue text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Core Technologies
              </button>
              <button
                onClick={() => setActiveTab('frameworks')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'frameworks'
                    ? 'bg-electric-blue text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Frameworks & Tools
              </button>
            </div>
          </div>

          {/* Skills Content */}
          <div className="tech-border rounded-xl p-8 bg-dark-bg/30 backdrop-blur-sm">
            {activeTab === 'technical' && renderSkills(technicalSkills)}
            {activeTab === 'frameworks' && renderSkills(frameworks)}
          </div>

          {/* Certifications or Achievements */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-dark-bg/40 rounded-lg border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
              <div className="text-3xl font-bold text-electric-blue mb-2">8+</div>
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
