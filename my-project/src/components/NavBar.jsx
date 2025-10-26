import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
        <a href="#design" className="hover:text-gray-300 text-white">
          Design
        </a>
        <a href="#camera" className="hover:text-gray-300 text-white">
          Camera
        </a>
        <a href="#performance" className="hover:text-gray-300 text-white">
          Performance
        </a>
        <a href="#colors" className="hover:text-gray-300 text-white">
          Cores
        </a>
        <button className="bg-orange-600 hover:bg-orange-500 px-6 py-2 rounded-full cursor-pointer">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
