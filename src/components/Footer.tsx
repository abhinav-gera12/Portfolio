import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 md:mb-0">
            <div>
              <h3 className="text-base sm:text-lg font-bold">Abhinav Gera</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Software Engineer</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Abhinav Gera. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};