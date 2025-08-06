import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

// Este mock data incluye más fotos para el ejemplo
const mockPostsDetail = {
  1: {
    id: 1,
    userName: 'Matias Enrique',
    userAvatar: null,
    postDate: '27 julio 2025 00:00',
    petName: 'Tonelha',
    description: 'Gata muy watona que se perdió en su bowl de comida.',
    location: 'La pieza del mati',
    images: [
      'https://i.pinimg.com/736x/dd/0e/9c/dd0e9cb517b4f403419704e2fea78409.jpg',
      'https://i.pinimg.com/736x/fa/3b/5d/fa3b5d0aff532c212f8bb75bb8622286.jpg',
      'https://i.pinimg.com/736x/04/0f/1f/040f1fea8ccb1e2a531a0b4e1a486eb9.jpg',
      'https://i.pinimg.com/736x/fa/3b/5d/fa3b5d0aff532c212f8bb75bb8622286.jpg',
      'https://i.pinimg.com/736x/fa/3b/5d/fa3b5d0aff532c212f8bb75bb8622286.jpg'
    ],
    date: '2025-08-04',
    collar: false,
    breed: 'watona',
    colors: 'naranjo, negro, blanco',
    extra: 'No para de comer ayuda se esta comiendo mi telef--',
    contactInfo: {
      phone: '+56 9 1234 5678',
      email: 'usuario@ejemplo.com'
    },
    reward: '50 bellies'
  },
  2: {
    id: 2,
    userName: 'Usuario Ejemplo',
    userAvatar: null,
    postDate: '26 julio 2025 15:30',
    petName: 'Tonelada',
    description: 'Gata obesa que se escapó de casa. Es muy tranquila y le gusta dormir mucho. Por favor ayúdenme a encontrarla.',
    location: 'El baño del mati',
    images: [
      'https://media.discordapp.net/attachments/877641684794638378/1399909591248011314/IMG_20250723_122631_287.jpg?ex=6891f727&is=6890a5a7&hm=158fec530029afe70cc37797dce77751c3eb275396f2497a1cca465c768df4e0&=&format=webp&width=463&height=823',
      'https://via.placeholder.com/400x400/DDA0DD/000000?text=Foto+2'
    ],
    date: '2025-08-04',
    collar: false,
    breed: 'panzona',
    colors: 'naranjo, negro, blanco',
    extra: 'tiene que tomar agua corriendo o se amurra',
    contactInfo: {
      phone: '+56 9 8765 4321',
      email: 'ejemplo@correo.com'
    },
    reward: 'Recompensa disponible'
  }
};

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = mockPostsDetail[id];

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Post no encontrado</h2>
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Botón para volver */}
          <button 
            onClick={() => navigate('/')}
            className="mb-6 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center gap-2"
          >
            ← Volver a posts
          </button>

          {/* Card del post completo */}
          <div className="bg-gray-500 text-white rounded-lg p-8 shadow-lg border-2 border-gray-300">
            {/* Header con información del usuario */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-green-300 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
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
                <h3 className="text-xl font-semibold text-white">{post.userName}</h3>
                <p className="text-gray-300">{post.postDate}</p>
              </div>
            </div>

            {/* Título del tipo de post */}
            <div className="mb-6">
              <p className="text-lg text-gray-900 italic bg-gray-300 px-4 py-2 rounded-full inline-block font-semibold">
                Avistamiento / Se busca - {post.petName}
              </p>
            </div>

            {/* Galería de fotos */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Fotos:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {post.images.map((image, index) => (
                  <div key={index} className="bg-pink-200 rounded-2xl overflow-hidden aspect-square">
                    <img
                      src={image}
                      alt={`Foto ${index + 1} de ${post.petName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Información detallada */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Información</h3>
                <div className="space-y-3">
                  <p><span className="font-semibold text-white">Lugar:</span> <span className="text-gray-300">{post.location}</span></p>
                  <p><span className="font-semibold text-white">Fecha:</span> <span className="text-gray-300">{post.date}</span></p>
                  <p><span className="font-semibold text-white">Collar:</span> <span className="text-gray-300">{post.collar ? 'Sí' : 'No'}</span></p>
                  <p><span className="font-semibold text-white">Raza:</span> <span className="text-gray-300">{post.breed}</span></p>
                  <p><span className="font-semibold text-white">Colores:</span> <span className="text-gray-300">{post.colors}</span></p>
                  {post.reward && (
                    <p><span className="font-semibold text-white">Recompensa:</span> <span className="text-green-300">{post.reward}</span></p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Información de contacto:</h3>
                <div className="space-y-3">
                  <p><span className="font-semibold text-white">Teléfono:</span> <span className="text-blue-300">{post.contactInfo.phone}</span></p>
                  <p><span className="font-semibold text-white">Email:</span> <span className="text-blue-300">{post.contactInfo.email}</span></p>
                </div>
                
                <div className="mt-6">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold">
                    Contactar
                  </button>
                </div>
              </div>
            </div>

            {/* Descripción completa */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Descripción completa:</h3>
              <p className="text-gray-300 leading-relaxed">{post.description}</p>
            </div>

            {/* Otros detalles */}
            {post.extra && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Otros detalles:</h3>
                <p className="text-gray-300 leading-relaxed">{post.extra}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;