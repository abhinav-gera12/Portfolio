import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
        
            <div>
              <h3 className="text-lg font-bold">Abhinav Gera</h3>
              <p className="text-gray-400 text-sm">Software Engineer</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2024 Abhinav Gera. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};