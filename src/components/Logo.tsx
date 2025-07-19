import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="drop-shadow-lg"
        >
          {/* Background circle with gradient */}
          <circle
            cx="40"
            cy="40"
            r="38"
            fill="url(#logoGradient)"
            stroke="url(#borderGradient)"
            strokeWidth="2"
            className="drop-shadow-md"
          />
          
          {/* Inner circle for depth */}
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          
          {/* Letter A - Modern Design */}
          <g transform="translate(20, 25)">
            {/* A - Main structure */}
            <path
              d="M 10 30 L 15 10 L 18 10 L 23 30 L 19 30 L 18 25 L 15 25 L 14 30 Z"
              fill="white"
              className="drop-shadow-sm"
            />
            {/* A - Cross bar */}
            <rect
              x="15.5"
              y="20"
              width="2"
              height="3"
              fill="white"
            />
            {/* A - Accent highlight */}
            <path
              d="M 15 10 L 18 10 L 17 15 L 16 15 Z"
              fill="url(#accentGradient)"
              opacity="0.8"
            />
          </g>
          
          {/* Letter G - Modern Design */}
          <g transform="translate(45, 25)">
            {/* G - Outer shape */}
            <path
              d="M 15 15 A 10 10 0 1 1 15 25 L 15 22 L 20 22 L 20 25 A 13 13 0 1 0 15 12 Z"
              fill="white"
              className="drop-shadow-sm"
            />
            {/* G - Inner cutout */}
            <path
              d="M 15 18 A 7 7 0 1 1 15 22 L 15 20 L 18 20 L 18 22 A 5 5 0 1 0 15 18 Z"
              fill="url(#logoGradient)"
            />
            {/* G - Accent highlight */}
            <path
              d="M 15 12 A 13 13 0 0 1 25 15 L 23 17 A 10 10 0 0 0 15 15 Z"
              fill="url(#accentGradient)"
              opacity="0.6"
            />
          </g>
          
          {/* Central connecting element */}
          <circle
            cx="40"
            cy="40"
            r="2"
            fill="url(#accentGradient)"
            className="drop-shadow-sm"
          />
          
          {/* Decorative elements */}
          <g opacity="0.3">
            <circle cx="25" cy="25" r="1" fill="white" />
            <circle cx="55" cy="25" r="1" fill="white" />
            <circle cx="25" cy="55" r="1" fill="white" />
            <circle cx="55" cy="55" r="1" fill="white" />
          </g>
          
          {/* Outer ring accent */}
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="url(#accentGradient)"
            strokeWidth="1"
            opacity="0.4"
            strokeDasharray="3,3"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            
            <radialGradient id="glowGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          
          {/* Subtle glow effect */}
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="url(#glowGradient)"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
};