import React, { useState } from 'react';

const FilterSidebar = ({ isOpen, onToggle, onFiltersChange }) => {
  const [filters, setFilters] = useState({
    tipo: '',
    estado: '',
    ubicacion: '',
    raza: '',
    color: '',
    tamaño: '',
    collar: '',
    fechaDesde: '',
    fechaHasta: ''
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      tipo: '',
      estado: '',
      ubicacion: '',
      raza: '',
      color: '',
      tamaño: '',
      collar: '',
      fechaDesde: '',
      fechaHasta: ''
    };
    setFilters(emptyFilters);
    onFiltersChange?.(emptyFilters);
  };

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-16 left-0 h-full bg-white shadow-xl z-50 
        transform transition-transform duration-300 ease-in-out
        w-80 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:top-0 md:translate-x-0 md:w-72
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              Filtros de Búsqueda
            </h2>
            <button
              onClick={onToggle}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            >
              ✕
            </button>
          </div>

          {/* Filtros */}
          <div className="space-y-6">
            
            {/* Tipo de publicación */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tipo de Publicación
              </label>
              <select
                value={filters.tipo}
                onChange={(e) => handleFilterChange('tipo', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Todos</option>
                <option value="perdida">Mascota Perdida</option>
                <option value="avistamiento">Avistamiento</option>
                <option value="encontrada">Mascota Encontrada</option>
              </select>
            </div>

            {/* Estado */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estado
              </label>
              <select
                value={filters.estado}
                onChange={(e) => handleFilterChange('estado', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Todos</option>
                <option value="activo">Activo</option>
                <option value="resuelto">Resuelto</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>

            {/* Ubicación */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ubicación
              </label>
              <input
                type="text"
                value={filters.ubicacion}
                onChange={(e) => handleFilterChange('ubicacion', e.target.value)}
                placeholder="Ej: Santiago Centro, Providencia..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            {/* Raza */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Raza
              </label>
              <input
                type="text"
                value={filters.raza}
                onChange={(e) => handleFilterChange('raza', e.target.value)}
                placeholder="Ej: Labrador, Siamés, Mestizo..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Color
              </label>
              <input
                type="text"
                value={filters.color}
                onChange={(e) => handleFilterChange('color', e.target.value)}
                placeholder="Ej: Negro, Blanco y café, Atigrado..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            {/* Tamaño */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tamaño
              </label>
              <select
                value={filters.tamaño}
                onChange={(e) => handleFilterChange('tamaño', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Todos</option>
                <option value="pequeño">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>

            {/* Collar */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Collar
              </label>
              <select
                value={filters.collar}
                onChange={(e) => handleFilterChange('collar', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">No especificado</option>
                <option value="si">Con collar</option>
                <option value="no">Sin collar</option>
              </select>
            </div>

            {/* Rango de fechas */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rango de Fechas
              </label>
              <div className="space-y-2">
                <input
                  type="date"
                  value={filters.fechaDesde}
                  onChange={(e) => handleFilterChange('fechaDesde', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Desde"
                />
                <input
                  type="date"
                  value={filters.fechaHasta}
                  onChange={(e) => handleFilterChange('fechaHasta', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Hasta"
                />
              </div>
            </div>

            {/* Botones */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <button
                onClick={clearFilters}
                className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Limpiar Filtros
              </button>
              
              <button className="w-full py-3 px-4 bg-pink-200 text-gray rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg">
                Aplicar Filtros
              </button>
            </div>

            {/* Contador de filtros activos */}
            <div className="text-center text-sm text-gray-500 pt-2">
              {Object.values(filters).filter(Boolean).length > 0 && (
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                   {Object.values(filters).filter(Boolean).length} filtro(s) activo(s)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;