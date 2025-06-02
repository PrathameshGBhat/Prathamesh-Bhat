import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Hi, I’m Prathamesh Bhat — a Backend Developer dedicated to crafting scalable microservices and secure RESTful APIs";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-electric-blue/30 rounded-full animate-float"></div>
      <div
        className="absolute bottom-32 right-16 w-16 h-16 border border-neon-purple/30 rounded-lg animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-20 w-12 h-12 border border-neon-cyan/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Picture Placeholder */}
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-electric-blue to-neon-purple p-1 animate-glow-pulse">
            <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src="/prathameshpic.jpg"
                  alt="Prathamesh Bhat"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Typing Text Effect */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-300 min-h-[120px] md:min-h-[80px]">
              {displayText}
              <span className="typing-cursor ml-1"></span>
            </p>
          </div>

          {/* Skills Highlight */}
          <div className="mb-12">
            <p className="text-electric-blue text-sm uppercase tracking-wider mb-4 font-semibold">
              Primary Skills
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Java", "Spring Boot", "MERN", "REST APIs", "SQL", "C++"].map(
                (skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-dark-card border border-electric-blue/30 rounded-full text-sm font-medium text-gray-300 hover:border-electric-blue hover:text-electric-blue transition-all duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1 + 1}s` }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-lg hover:from-neon-cyan hover:to-electric-blue transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/25"
          >
            View My Work
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-electric-blue" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
