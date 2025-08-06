import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ post }) => {
  const navigate = useNavigate();

  const handleViewFullPost = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="bg-gray-500 text-white rounded-lg p-6 w-full max-w-4xl mx-auto shadow-lg border-2 border-gray-300">
      {/* Header con información del usuario */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-green-300 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
          {post.userAvatar ? (
            <img
              src={post.userAvatar}
              alt={`Avatar de ${post.userName}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-200 to-blue-200"></div>
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-white">{post.userName}</h3>
          <p className="text-sm text-gray-300">{post.postDate}</p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-row gap-6">
        {/* Sección de información a la izquierda */}
        <div className="flex-1 space-y-2">
          <p className="text-sm text-gray-900 italic bg-gray-300 px-3 py-1 rounded-full inline-block">
            Avistamiento / Se busca
          </p>
          <div className="space-y-1.5 mt-4 text-left">
            <p><span className="font-semibold text-white">Lugar:</span> <span className="text-gray-300">{post.location}</span></p>
            <p><span className="font-semibold text-white">Fecha:</span> <span className="text-gray-300">{post.date}</span></p>
            <p><span className="font-semibold text-white">Detalles:</span> <span className="text-gray-300">{post.description}</span></p>
            <p><span className="font-semibold text-white">Collar:</span> <span className="text-gray-300">{post.collar ? 'Sí' : 'No'}</span></p>
            <p><span className="font-semibold text-white">Raza:</span> <span className="text-gray-300">{post.breed}</span></p>
            <p><span className="font-semibold text-white">Colores:</span> <span className="text-gray-300">{post.colors}</span></p>
            <p><span className="font-semibold text-white">Otros detalles:</span> <span className="text-gray-300">{post.extra}</span></p>
          </div>
        </div>

        {/* Contenedor de imagen a la derecha */}
        <div className="flex-shrink-0 flex items-center">
          <div className="w-56 h-56 bg-pink-200 rounded-2xl overflow-hidden flex items-center justify-center">
            {post.image ? (
              <img
                src={post.image}
                alt={`Foto de ${post.petName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-pink-900 text-lg font-medium">FOTO</span>
            )}
          </div>
        </div>
      </div>

      {/* Footer con enlace */}
      <div className="mt-4 text-right">
        <button 
          onClick={handleViewFullPost}
          className="text-gray-300 underline text-sm hover:text-white cursor-pointer bg-transparent border-none"
        >
          ver publicación completa
        </button>
      </div>
    </div>
  );
};

export default Cards;