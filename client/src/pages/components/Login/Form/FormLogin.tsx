import { Link } from "react-router-dom";

export const FormLogin = () => {
    return(
        <>
            <form className="mx-auto my-0 h-auto block justify-center z-50" action="">
                <input name="login" type="text" className="p-2.5 mb-4 block h-12 w-[400px] border-indigo-600 border-2 rounded-md" placeholder="name" />
                <input name="login" type="password" className="p-2.5 mb-4 block h-12 w-[400px] border-indigo-600 border-2 rounded-md" placeholder="password" />
                <button className="bg-indigo-600 w-full h-12 rounded text-white font-medium">Acessar</button>
            </form>
            <p>Remember me</p>
            <input type="checkbox" className="mr-2" checked />
            <Link className="text-indigo-600 font-bold pt-8" to={""}>Não tem conta? Registra-se agora</Link>
        </>
    )
}
