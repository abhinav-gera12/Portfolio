import React from 'react';
import { Code, Database, Cloud, Wrench, Users, Brain } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "Golang", "SQL", "NoSQL"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Brain className="w-8 h-8" />,
      skills: ["FastAPI", "Django", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["PostgreSQL", "MySQL", "DynamoDB"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS (EC2, S3, ECR, EKS)", "Docker", "Git", "GitHub", "GitLab"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Tools & Development",
      icon: <Wrench className="w-8 h-8" />,
      skills: ["Postman", "PyCharm", "VS Code", "Jupyter", "Jira"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: ["Team Leadership", "Problem Solving", "Communication", "Project Management"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Skills & Expertise</h2>
          <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg">
            Here's a comprehensive overview of my technical skills and expertise areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-gray-100 overflow-hidden flex flex-col"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <div className={`inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-3 sm:mb-4 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:${category.color} transition-all duration-300 transform hover:scale-105 cursor-default`}
                      style={{
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated border */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-10 sm:mt-14 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-indigo-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: "AI/ML Integration", desc: "LLM APIs, TensorFlow, scikit-learn" },
                { title: "Backend Architecture", desc: "Microservices, REST APIs, Scalability" },
                { title: "Database Management", desc: "SQL/NoSQL optimization, Performance tuning" },
                { title: "Cloud Infrastructure", desc: "AWS deployment, Containerization, DevOps" }
              ].map((competency, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2">{competency.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{competency.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};