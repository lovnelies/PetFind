import Button from './buttons/ButtonRegister';
import { FcGoogle } from 'react-icons/fc';

const LoginForm = () => {
  return (
    <div className="bg-white/30 bg-opacity-200 backdrop-blur-xl w-1/2 p-8 rounded-lg shadow-2xl ">
        <h1 className="text-4xl font-bold text-bold mb-10">Login de usuarios</h1>
        <form className="bg-white/90 rounded-lg">
            <div className="p-5 flex flex-col gap-4">
                <label className="font-bold w-40 " htmlFor="correo">
                    Email usuario
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-red-800 focus:shadow-outline" 
                id="correo" 
                type="text" 
                placeholder="Correo Electrónico" 
                />
                <label className="font-bold w-40 " htmlFor="password">
                    Contraseña
                </label>
                <div className="relative">
                    <input 
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-red-800 focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="Contraseña" 
                    />
                    <a href="/" className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-500 hover:underline">
                    Recuperar contraseña
                    </a>
                </div>     
            </div>

            <div className='flex flex-col items-center gap-6 px-4 py-6 justify-center '>
                <div className="flex justify-between items-center w-full max-w-sm px-4 py-2 mx-auto">
                    {/* Botón a la izquierda perfectamente centrado */}
                    <div className="flex items-center">
                        <button
                        type="submit"
                        className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-md shadow"
                        >
                        Acceder
                        </button>
                    </div>

                    {/* Texto a la derecha centrado */}
                    <div className="flex items-center">
                        <span className="text-sm text-gray-600">
                        ¿No tienes cuenta?{' '}
                        <a href="/register" className="text-blue-500 hover:underline">Regístrate aquí</a>
                        </span>
                    </div>
                </div>
                {/* Separador visual */}
                <div className="flex items-center w-full max-w-xs my-2">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-3 text-sm text-gray-400">o ingresa con</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Botón de Google */}
                <button
                    type="button"
                    className="flex items-center justify-center gap-3 w-full max-w-xs bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:shadow-md transition duration-150"
                    onClick={() => alert("Aquí va el login con Google")}
                >
                    <FcGoogle size={22} />
                    <span className="text-sm text-gray-700 font-medium">Continuar con Google</span>
                </button>

            </div>   
        </form>
    </div>
  );
}

export default LoginForm;