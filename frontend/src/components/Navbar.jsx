import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y título */}
          <div className="flex items-center space-x-3">
            <div className="bg-pink-200 p-2 rounded-full">
              <span className="text-gray-600 text-xl font-bold">♥</span>
            </div>
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text"
            >
              PetFind
            </Link>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-800"
            >
              Inicio
            </Link>

            <Link
              to="/buscar"
              className="text-gray-700 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-50"
            >
              Buscar
            </Link>
          </div>

          {/* Botón CTA y menú móvil */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="hidden md:block bg-pink-200 text-gray-600 px-6 py-2 rounded-full font-medium hover:from-gray-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Login
              </button>
            </Link>
            {/* Botón hamburguesa para móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
