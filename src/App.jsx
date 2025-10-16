import React from 'react';
import background from './assets/macOS2.jpg';
import Navbar from './components/Navbar/Navbar';
import Heroarea from './components/Heroarea/Heroarea';

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
        <Heroarea></Heroarea>
        </div>
      </div>
    </div>
  );
};

export default App;
