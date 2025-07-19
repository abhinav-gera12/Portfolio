import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, X, Code } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 scale-100">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {type === 'success' ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <X className="w-6 h-6 text-red-500" />
              )}
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mb-6">{message}</p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                type === 'success'
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:abhinav.gera12@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setModal({
        isOpen: true,
        type: 'success',
        title: 'Message Sent Successfully!',
        message: 'Thank you for reaching out! Your email client should open with the message. I\'ll get back to you soon.'
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setModal({
        isOpen: true,
        type: 'error',
        title: 'Error',
        message: 'There was an issue sending your message. Please try again or contact me directly.'
      });
    }
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <>
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        type={modal.type}
        title={modal.title}
        message={modal.message}
      />
      <section id="contact" className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-white font-medium">abhinav.gera12@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <p className="text-white font-medium">+91-7527901209</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white font-medium">Patiala, Punjab, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.github.com/abhinav-gera12"
                  className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="GitHub"
                  target='_blank'
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinav-gera12"
                  className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                  target='_blank'
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://leetcode.com/u/abhinav_gera12/"
                  className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="LeetCode"
                  target='_blank'
                >
                  <Code className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/abhinav_12o2/"
                  className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                  target='_blank'
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>

                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/50 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/50 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};