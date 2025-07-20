import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Focused on delivering solutions that create real impact"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">About Me</h2>
          <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Software Engineer & Backend Specialist
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Currently working as a Software Engineer at Altrum AI, where I design Python microservices 
              and Golang inference systems for backend scalability. I specialize in building AI-powered 
              systems with a focus on security, performance, and real-time processing.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              My expertise spans across designing REST APIs, managing databases (PostgreSQL, DynamoDB), 
              and integrating with multiple LLM APIs including OpenAI, Gemini, and Anthropic. I have 
              hands-on experience with AWS infrastructure and containerization using Docker.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              I hold a Bachelor of Computer Applications from Punjabi University and am passionate about 
              building secure, scalable systems that solve real-world problems through innovative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-red-600 mb-3 sm:mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="lg:col-span-2 mt-8 sm:mt-12">
            <div className="bg-red-50 p-4 sm:p-8 rounded-lg">
              <h4 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Education</h4>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">PU</span>
                </div>
                <div>
                  <h5 className="text-base sm:text-xl font-semibold text-gray-900">Bachelor of Computer Applications (BCA)</h5>
                  <p className="text-red-600 font-medium text-sm sm:text-base">Punjabi University</p>
                  <p className="text-gray-600 text-xs sm:text-sm">July 2019 - May 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};