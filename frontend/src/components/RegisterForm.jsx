import Button from './buttons/ButtonRegister';
import ButtonAPIs from './buttons/ButtonLoginAPIs.jsx';
import { FcGoogle  } from 'react-icons/fc';


const RegisterForm = () => {
  return (
    <div className="bg-white/30 bg-opacity-200 backdrop-blur-xl w-1/2 p-8 rounded-lg shadow-2xl ">
        <h1 className="text-4xl font-bold text-bold mb-10">Registro de usuarios</h1>
        <form className="bg-white/90 rounded-lg">
            <div className="p-5 flex flex-col gap-4">
                 <label className="font-bold w-40 " htmlFor="rut">
                    RUT
                </label> 
                <input className="shadow appearance-none border rounded w-full py-3 px-3  text-gray-700 focus:outline-red-800 focus:shadow-outline" id="rut" type="text" placeholder="Rut" />
                <label className="font-bold w-40 " htmlFor="correo">
                    Correo Electrónico
                </label>
                <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-red-800 focus:shadow-outline" id="correo" type="text" placeholder="Correo Electrónico" />
                <label className="font-bold w-40 " htmlFor="password">
                    Contraseña
                </label>
                <input className="shadow appearance-none border rounded w-full py-3 px-3  text-gray-700 focus:outline-red-800 focus:shadow-outline" id="contraseña" type="text" placeholder="Password" />
                <label className="font-bold w-40 " htmlFor="password">
                    Repetir Contraseña
                </label>
                <input className="shadow appearance-none border rounded w-full py-3 px-3  text-gray-700 focus:outline-red-800 focus:shadow-outline" id="Rut" type="text" placeholder="Repetir Contraseña" />
                <label className="font-bold w-40 " htmlFor="fono">
                    Número de Teléfono
                </label>
                <input className="shadow appearance-none border rounded w-full py-3 px-3  text-gray-700 focus:outline-red-800 focus:shadow-outline" id="fono" type="text" placeholder="Fono" />  
            </div>
            <div className='flex flex-col items-center gap-6 px-2 py-3 justify-center'>
                    <div className="mb-4 text-center space-x-8">
                        <Button type="submit" variant="primary">Registrarse</Button>
                        <Button variant="secondary">Volver</Button>
                    </div>
                <div className="flex items-center w-full max-w-xs my-2">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-3 text-sm text-gray-400">o ingresa con</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <ButtonAPIs type="button" onClick={() => alert("Aquí va el login con APIs")}>
                <FcGoogle className="text-2xl" />
                <span className="text-sm text-gray-700 font-medium">Continuar con Google</span>
                </ButtonAPIs>
            </div>
        </form>
    </div>
  );
}

export default RegisterForm;