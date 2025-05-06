import React from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10">
        <div className="text-center mb-10">
          <div className="text-white text-4xl font-bold mb-6">OWEN</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Мониторинг результатов испытаний стенда
            </span>
          </h1>
          <p className="text-gray-200 max-w-md mx-auto text-lg">
            Просматривайте и анализируйте результаты испытаний с помощью нашей
            автоматизированной системы тестирования.
          </p>
        </div>

        <DataFetcher />

        <footer className="absolute bottom-4 text-white text-opacity-70 text-sm">
          <p>© 2025 OWEN. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
