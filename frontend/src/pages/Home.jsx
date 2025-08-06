import React from 'react';
import Cards from '../components/Cards';
import Layout from '../components/Layout';
import showSidebar from '../components/FilterSidebar';
import FilterSidebar from '../components/FilterSidebar';

const mockPosts = [
  {
    id: 1,
    userName: 'Nombre usuario', 
    userAvatar: null,  
    postDate: '27 julio 2025 00:00',
    petName: 'Tonelha',
    description: 'Gata muy watona',
    location: 'La pieza del mati',
    image: 'https://i.pinimg.com/736x/fe/8e/7e/fe8e7e8195dd4b83aac3628336fd88fe.jpg',
    date: '2025-08-04',
    collar: false, 
    breed: 'watona',
    colors: 'naranjo, negro, blanco',
    extra: 'No para de comer ayuda se esta comiendo mi telef--',
  },
  {
    id: 2,
    userName: 'Usuario Ejemplo',
    userAvatar: null,
    postDate: '26 julio 2025 15:30',
    petName: 'Tonelada',
    description: 'Gata obesa',
    location: 'El baño del mati',
    image: 'https://i.pinimg.com/736x/fe/8e/7e/fe8e7e8195dd4b83aac3628336fd88fe.jpg',
    date: '2025-08-04',
    collar: false,
    breed: 'panzona',
    colors: 'naranjo, negro, blanco',
    extra: 'tiene que tomar agua corriendo o se amurra',
  }
];

const Home = () => {
    return (
      <Layout showSidebar={true}>
        <div className="min-h-screen ">
          <div className="p-6">
            <h1 className="text-3xl text-gray-700 font-bold mb-8 text-center">
              Ultimos posts
            </h1>
  
            <div className="flex flex-col gap-6 items-center">
              {mockPosts.map((post) => (
                <Cards key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  };

export default Home;