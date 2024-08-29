import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-3xl font-semibold text-[#2e146d] tracking-wide">
                <img src="src/assets/logoipsum-260.svg" alt="" />
              </span>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8 ml-12">
              <a href="#" className="text-gray-600 hover:text-[#2e146d] transition-colors duration-300">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-[#2e146d] transition-colors duration-300">
                Product
              </a>
              <a href="#" className="text-gray-600 hover:text-[#2e146d] transition-colors duration-300">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-[#2e146d] transition-colors duration-300">
                How It Works
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-[#2e146d] font-semibold border border-[#2e146d] py-2 px-6 rounded-full transition-all duration-300 hover:bg-[#2e146d] hover:text-white">
              Sign Up
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:opacity-90">
              Login
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#2e146d] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-4 pb-3 space-y-2 sm:px-3">
            <a href="#" className="block text-gray-800 hover:text-[#2e146d] transition-colors duration-300">
              About Us
            </a>
            <a href="#" className="block text-gray-800 hover:text-[#2e146d] transition-colors duration-300">
              Product
            </a>
            <a href="#" className="block text-gray-800 hover:text-[#2e146d] transition-colors duration-300">
              Pricing
            </a>
            <a href="#" className="block text-gray-800 hover:text-[#2e146d] transition-colors duration-300">
              How It Works
            </a>
            <button className="w-full text-[#2e146d] font-semibold border border-[#2e146d] py-2 rounded-full mt-4 transition-all duration-300 hover:bg-[#2e146d] hover:text-white">
              Sign Up
            </button>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full shadow-lg mt-2 transition-all duration-300 hover:opacity-90">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
