import ContainerSVG from './container.svg';
// import LogoLoginSVG from './logoLogin.svg';
import { FormLogin } from '../Form/FormLogin'
import { Link } from "react-router-dom";

export const Container = () => {
    return (
        <>
            <div className="flex h-full w-full fixed">
                <div className="bg-indigo-600 mr-auto h-full ml-auto flex justify-center center-align w-[65%]">
                    <h1 className="font-bold my-auto max-w-[30%] text-4xl text-white">Acessa sua conta e veja seus pedidos</h1>
                    <img className='my-auto p-0 h-[500px]' src={ContainerSVG} alt="" />
                </div>
                <div className="w-[35%] justify-center my-auto h-full mr-auto ml-auto flex flex-col">
                    <div className="mx-auto justify-center items-center max-w-[200px] mb-8 h-[10%]">
                        {/* <img src={LogoLoginSVG} className="" alt="Flowbite Logo" /> */}
                    </div>
                    <FormLogin />
                    <p>Remember me</p>
                    <input type="checkbox" className="mr-2" checked />
                    <Link className="text-indigo-600 font-bold pt-8" to={""}>Não tem conta? Registra-se agora</Link>
                </div>
            </div>
        </>
    )
}
