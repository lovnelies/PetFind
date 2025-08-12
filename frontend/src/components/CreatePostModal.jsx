import React, { useState } from 'react';
import { X, Upload, MapPin, Calendar, Info } from 'lucide-react';
import ButtonGeneric from './buttons/ButtonGeneric';

const CreatePostModal = ({ isOpen, onClose, onSubmit, currentUser }) => {
  const [formData, setFormData] = useState({
    petName: '',
    description: '',
    location: '',
    date: '',
    collar: false,
    chip: false,
    breed: '',
    colors: '',
    extra: '',
    image: ''
  });

  const [postType, setPostType] = useState('lost'); // 'lost' o 'found'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePostTypeChange = (type) => {
    setPostType(type);
    // Limpiar campos específicos cuando cambia el tipo
    if (type === 'found') {
      setFormData(prev => ({
        ...prev,
        petName: '',
        breed: '',
        chip: false
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones diferentes según el tipo
    if (postType === 'lost') {
      if (!formData.petName || !formData.description || !formData.location) {
        alert('Por favor completa los campos obligatorios: Nombre, Descripción y Lugar (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
        return;
      }
    } else {
      if (!formData.location || !formData.colors) {
        alert('Por favor completa los campos obligatorios: Lugar y Colores (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
        return;
      }
    }

    setIsSubmitting(true);
    
    // Simular delay de envío
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Agregar el tipo de post a los datos
    onSubmit({ ...formData, postType });
    
    // Limpiar formulario
    setFormData({
      petName: '',
      description: '',
      location: '',
      date: '',
      collar: false,
      chip: false,
      breed: '',
      colors: '',
      extra: '',
      image: ''
    });

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header del modal */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Crear publicación: {postType === 'lost' ? 'Se busca' : 'Avistamiento'}
            </h2>
            <ButtonGeneric
              variant="ghost"
              size="sm"
              onClick={onClose}
              icon={<X className="w-5 h-5" />}
              className="p-2 hover:bg-gray-100 rounded-full"
            />
          </div>

          {/* Selector de tipo de post */}
          <div className="flex gap-4 mt-4">
            <ButtonGeneric
              variant={postType === 'lost' ? 'primary' : 'secondary'}
              onClick={() => handlePostTypeChange('lost')}
              iconPosition="left"
            >
              Se Busca
            </ButtonGeneric>
            <ButtonGeneric
              variant={postType === 'found' ? 'primary' : 'secondary'}
              onClick={() => handlePostTypeChange('found')}
              iconPosition="left"
            >
              Avistamiento
            </ButtonGeneric>
          </div>

          {/* Descripción del tipo seleccionado */}
          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              {postType === 'lost' 
                ? 'Completa toda la información de tu mascota perdida para ayudar a identificarla'
                : 'Escribe los datos que recuerdes'
              }
            </p>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {postType === 'lost' ? (
            // FORMULARIO PARA "SE BUSCA"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Columna izquierda - SE BUSCA */}
              <div className="space-y-4">
                {/* Nombre de la mascota */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de la mascota *
                  </label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    placeholder="ej: Tonelha, Firulais..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Descripción */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción/Detalles *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe a la mascota, personalidad, comportamiento..."
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                {/* Ubicación */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Lugar donde se perdió *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Barrio, calle, referencia..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Fecha */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Fecha cuando se perdió
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Columna derecha - SE BUSCA */}
              <div className="space-y-4">
                {/* Raza */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Raza *
                  </label>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                    placeholder="ej: Pastor Alemán, Mestizo, Gato Persa..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Colores */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Colores *
                  </label>
                  <input
                    type="text"
                    name="colors"
                    value={formData.colors}
                    onChange={handleInputChange}
                    placeholder="ej: negro, blanco, café con manchas..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="collar"
                      checked={formData.collar}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
                    />
                    <label className="text-sm font-medium text-gray-700">
                      Tenía collar
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="chip"
                      checked={formData.chip}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
                    />
                    <label className="text-sm font-medium text-gray-700">
                      Tenía CHIP
                    </label>
                  </div>
                </div>

                {/* Imagen */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Upload className="w-4 h-4 inline mr-1" />
                    Foto de la mascota
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://ejemplo.com/foto.jpg"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                {/* Otros detalles */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Info className="w-4 h-4 inline mr-1" />
                    Información adicional
                  </label>
                  <textarea
                    name="extra"
                    value={formData.extra}
                    onChange={handleInputChange}
                    placeholder="Recompensa, información de contacto, etc..."
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>
          ) : (
            // FORMULARIO PARA "AVISTAMIENTO" - Más simple
            <div className="max-w-2xl mx-auto space-y-6">
              

              {/* Ubicación del avistamiento */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Lugar donde se vió *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Barrio, calle, referencia exacta..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Fecha del avistamiento */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  ¿Cuándo fué? *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Colores */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Colores que pudiste ver *
                </label>
                <input
                  type="text"
                  name="colors"
                  value={formData.colors}
                  onChange={handleInputChange}
                  placeholder="ej: negro, blanco, café, manchas..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Collar */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="collar"
                  checked={formData.collar}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                />
                <label className="text-sm font-medium text-gray-700">
                  Tenía collar
                </label>
              </div>

              {/* Foto del avistamiento */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Upload className="w-4 h-4 inline mr-1" />
                  Foto (recomendado)
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://ejemplo.com/foto.jpg"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Detalles adicionales */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Info className="w-4 h-4 inline mr-1" />
                  Detalles adicionales
                </label>
                <textarea
                  name="extra"
                  value={formData.extra}
                  onChange={handleInputChange}
                  placeholder="Comportamiento, tamaño aproximado, si parecía perdida, etc..."
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          )}

          {/* Botones */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <ButtonGeneric
              variant="secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </ButtonGeneric>
            
            <ButtonGeneric
              type="submit"
              variant="pink"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting}
              iconPosition="right"
            >
              {isSubmitting ? 'Publicando...' : (postType === 'lost' ? 'Publicar Búsqueda' : 'Reportar Avistamiento')}
            </ButtonGeneric>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;