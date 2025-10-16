import React from 'react';
import background from './assets/macOS2.jpg';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 backdrop-blur-lg bg-black/40"></div>
      <div className="relative flex items-center justify-center h-full p-5">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 text-center w-full h-full">
        <Navbar></Navbar>
          <h1 className="text-white text-5xl font-bold mb-3">Welcome to My Portfolio</h1>
          <p className="text-gray-200 text-lg">
            Front-end Developer | Clean, Modern, Minimal Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
