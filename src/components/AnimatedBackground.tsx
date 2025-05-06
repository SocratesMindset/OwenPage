import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 animate-gradient-x"></div>

      {/* Animated particles */}
      <div className="particle-container">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="particle absolute rounded-full bg-white bg-opacity-30"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `moveParticle ${
                Math.random() * 15 + 10
              }s linear infinite, 
                          fadeInOut ${
                            Math.random() * 5 + 3
                          }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
