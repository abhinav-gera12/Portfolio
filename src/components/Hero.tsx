import React from 'react';
import { Download, Github, Linkedin, Instagram, Mail, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleDownload = (fileType: 'resume' | 'cover-letter') => {
    if (fileType === 'resume') {
      const link = document.createElement('a');
      link.href = '/Abhinav-CV.pdf';
      link.download = 'Abhinav-CV.pdf';
      link.click();
    } else {
      const link = document.createElement('a');
      link.href = '/Abhinav_Gera_Cover_Letter.docx';
      link.download = 'Abhinav_Gera_Cover_Letter.docx';
      link.click();
    }
  };

  return (
    <section className="min-h-screen bg-black to-indigo-900 flex items-center justify-center pt-40">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-red-600">Abhinav Gera</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-white/80 mb-4 font-semibold">
              Software Engineer
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300/50 mb-8 leading-relaxed">
              I don't just write code—I architect scalable, secure, and intelligent systems that solve real-world problems.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => handleDownload('resume')}
                className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => handleDownload('cover-letter')}
                className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} />
                <span>Download Cover Letter</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://www.github.com/abhinav-gera12"
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
                target='_blank'
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-gera12"
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
                target='_blank'
              >
                <Linkedin size={28} />
              </a>
              <a
                  href="https://leetcode.com/u/abhinav_gera12/"
                   className="text-gray-300 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="LeetCode"
                  target='_blank'
                >
                  <Code className="w-6 h-6 text-white" />
                </a>
              <a
                href="https://www.instagram.com/abhinav_12o2/"
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target='_blank'
              >
                <Instagram size={28} />
              </a>
              <a
                href="mailto:abhinav.gera12@gmail.com"
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
                target='_blank'
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full  p-1">
                <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="/abhinav-image.jpg"
                    alt="Abhinav Gera"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};