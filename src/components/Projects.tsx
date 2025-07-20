import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Risk Mitigation System",
      description: "Built an AI agent-based risk mitigation system for real-time prompt filtering and violation resolution. Integrated with multiple LLM APIs and implemented secure, user-facing endpoints with session data persistence for observability and auditing.",
      technologies: ["Python", "OpenAI", "Gemini", "Anthropic", "AWS", "PostgreSQL", "LiteLLM"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Banking Database Connectivity",
      description: "Developed secure backend for banking transactions using Python and SQL. Built with FastAPI framework, implemented JWT authentication and RBAC, with emphasis on data consistency, security layers, and containerized deployment.",
      technologies: ["Python", "FastAPI", "MySQL", "JWT", "Docker", "RBAC"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Dog Breed Detection Model",
      description: "Machine learning model for dog breed classification using scikit-learn and TensorFlow. Trained on Kaggle dataset and optimized using MobileNet architecture for efficient inference and high accuracy predictions.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "MobileNet", "Kaggle", "NumPy"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented Python microservices and Golang inference systems for backend scalability. Created comprehensive REST API documentation and optimized database performance across PostgreSQL and DynamoDB.",
      technologies: ["Python", "Golang", "PostgreSQL", "DynamoDB", "REST API", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="projects" className="py-14 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Projects</h2>
          <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="h-44 sm:h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};