import React, { useState } from "react";
import Cards from "../components/Cards";
import Layout from "../components/Layout";
import CreatePostModal from "../components/CreatePostModal";
import { Plus } from "lucide-react";
import ButtonGeneric from "../components/buttons/ButtonGeneric";

const mockPostsInitial = [
  {
    id: 1,
    userName: "Nombre usuario",
    userAvatar: null,
    postDate: "27 julio 2025 00:00",
    petName: "Tonelha",
    description: "Gata muy watona",
    location: "La pieza del mati",
    image:
      "https://i.pinimg.com/736x/fe/8e/7e/fe8e7e8195dd4b83aac3628336fd88fe.jpg",
    date: "2025-08-04",
    collar: false,
    breed: "watona",
    colors: "naranjo, negro, blanco",
    extra: "No para de comer ayuda se esta comiendo mi telef--",
  },
  {
    id: 2,
    userName: "Usuario Ejemplo",
    userAvatar: null,
    postDate: "26 julio 2025 15:30",
    petName: "Tonelada",
    description: "Gata obesa",
    location: "El baño del mati",
    image:
      "https://i.pinimg.com/736x/fe/8e/7e/fe8e7e8195dd4b83aac3628336fd88fe.jpg",
    date: "2025-08-04",
    collar: false,
    breed: "panzona",
    colors: "naranjo, negro, blanco",
    extra: "tiene que tomar agua corriendo o se amurra",
  },
];

const Home = () => {
  // Estado para simular login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser] = useState({
    name: "Usuario test",
    avatar: null,
  });

  // Estado para el modal de crear publicación
  const [showCreatePost, setShowCreatePost] = useState(false);

  // Estado para las publicaciones
  const [posts, setPosts] = useState(mockPostsInitial);

  // Función para crear nueva publicación
  const handleCreatePost = (newPostData) => {
    const newPost = {
      id: posts.length + 1,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      postDate: new Date().toLocaleString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      ...newPostData,
    };

    setPosts([newPost, ...posts]);
    setShowCreatePost(false);
  };

  // Función para toggle del login
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Layout showSidebar={true}>
      <div className="min-h-screen">
        <div className="p-6">
          {/* Header*/}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-3xl text-gray-700 font-bold mb-8 text-center">
              Ultimos posts
            </h1>

            {/* Contenedor de botones */}
            <div className="flex items-center gap-3 justify-center md:justify-end">
              {/* Botón para simular un login ELIMINAR DSPS */}
              <ButtonGeneric onClick={toggleLogin} variant="danger">
                {isLoggedIn ? "Cerrar sesión TEST" : "Iniciar sesión TEST"}
              </ButtonGeneric>

              {/* Botón crear publicación - solo visible si está logueado */}
              {isLoggedIn && (
                <ButtonGeneric
                  variant="pink"
                  size="md"
                  onClick={() => setShowCreatePost(true)}
                  iconPosition="left"
                  className="transform hover:scale-105 transition-all duration-200"
                >
                  Crear Publicación
                </ButtonGeneric>
              )}
            </div>
          </div>

          {/* Lista de publicaciones */}
          <div className="flex flex-col gap-6 items-center">
            {posts.map((post) => (
              <Cards key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Modal para crear publicación */}
        {showCreatePost && (
          <CreatePostModal
            isOpen={showCreatePost}
            onClose={() => setShowCreatePost(false)}
            onSubmit={handleCreatePost}
            currentUser={currentUser}
          />
        )}
      </div>
    </Layout>
  );
};

export default Home;
