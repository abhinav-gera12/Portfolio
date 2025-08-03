import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      position: "Software Engineer - 1",
      company: (
        <span className="flex items-center gap-3 pb-2">
          <img src="/altrum-logo.jpeg" alt="Altrum AI Logo" className="w-8 h-8 inline-block" />
          <span className="text-lg sm:text-xl font-semibold text-red-600">Altrum AI</span>
        </span>
      ),
      location: "Remote",
      duration: "Jul 2024 - Aug 2025",
      description: [
        "Designed Python microservices and Golang inference systems for backend scalability",
        "Created and documented REST APIs, led integration discussions, and improved API efficiency",
        "Managed PostgreSQL and DynamoDB; optimized for performance",
        "Built AI agent-based risk mitigation system for real-time prompt filtering and violation resolution",
        "Integrated with LLM APIs (OpenAI, Gemini, AzureAI, Anthropic, Bedrock)",
        "Deployed on AWS infrastructure, used asynchronous Python, and leveraged LiteLLM"
      ]
    },
    {
      position: "Software Engineer Intern",
      company: (
        <span className="flex items-center gap-3 pb-2">
          <img src="/aligne-logo.jpeg" alt="Aligne AI Logo" className="w-8 h-8 inline-block" />
          <span className="text-lg sm:text-xl font-semibold text-red-600">Aligne AI</span>
        </span>
      ),
      location: "Remote",
      duration: "Apr 2024 - Jun 2024",
      description: [
        "Built backend for a banking app using FastAPI, with JWT authentication and RBAC",
        "Managed secure data storage in MySQL with emphasis on data consistency",
        "Containerized applications with Docker for scalable deployment",
        "Applied unit testing and log analysis for system robustness and reliability"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Experience</h2>
          <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg">
            My professional journey and key achievements in software development
          </p>
        </div>

        <div className="max-w-2xl sm:max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-red-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 sm:mb-12 md:mb-16">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`ml-10 sm:ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 text-center">
                        {exp.position}
                      </h3>
                      <div className="flex items-center justify-center mb-3 sm:mb-4">
                        {exp.company}
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1 sm:space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 flex items-start text-xs sm:text-sm">
                          <span className="text-red-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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