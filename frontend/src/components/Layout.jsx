import React, { useState } from 'react';
import Navbar from './Navbar';
import FilterSidebar from './FilterSidebar';

const Layout = ({ children, showSidebar = false }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    console.log('Filtros aplicados:', newFilters);
    // Aquí puedes pasar los filtros a tu componente padre o hacer la lógica de filtrado
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      
      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <FilterSidebar 
            isOpen={isSidebarOpen}
            onToggle={toggleSidebar}
            onFiltersChange={handleFiltersChange}
          />
        )}

        {/* Contenido principal */}
        <main className={`
          flex-1 transition-all duration-300
          ${showSidebar ? 'md:ml-72' : ''}
        `}>
          {/* Botón para abrir sidebar en móvil */}
          {showSidebar && (
            <div className="md:hidden sticky top-16 z-30 bg-white border-b border-gray-200 px-4 py-3">
              <button
                onClick={toggleSidebar}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium"
              >
                <span>Filtros</span>
                {Object.values(filters).filter(Boolean).length > 0 && (
                  <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                    {Object.values(filters).filter(Boolean).length}
                  </span>
                )}
              </button>
            </div>
          )}

          {/* Contenido */}
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;