
const PetFind = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black/100">
            <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat" 
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
                }}>  
                {/* Overlay oscuro, es como un filtro jeje god */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">PetFind</h1>
                    <p className="text-xl md:text-2xl text-white mb-8 font-light max-w-2xl leading-relaxed drop-shadow-mds">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore alias vitae id maiores, laborum obcaecati aliquam, voluptates explicabo, optio fuga sapiente architecto. Vel cupiditate ducimus, vero a sed asperiores!
                    </p>
                </div>
                {/* Indicador de scroll */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-4xl font-bold text-white mb-8">Encuentra tu mascota ideal</h1>
            </section>
        </div>
    );
};


export default PetFind;
{/* text-xl md:text-2xl text-white mb-8 font-light max-w-2xl leading-relaxed drop-shadow-md*/}