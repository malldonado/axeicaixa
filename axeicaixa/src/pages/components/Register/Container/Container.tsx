import { Forms } from '../Form/Forms';

export const Container = () => {
    return (
        <div className="flex h-full w-full fixed">
            <div className="bg-indigo-600 mr-auto h-full ml-auto flex justify-center center-align w-[65%]">
                <div className="h-[auto] m-auto">
                    <h1 className="font-bold my-auto text-center text-[40px] text-white mb-8">Faça uma conta agora!!</h1>
                    {/* <img src={RegisterLogo} alt="" /> */}
                </div>
            </div>
            <div className="w-[35%] my-auto h-full mr-auto ml-auto flex flex-col">
                <div className="mx-auto justify-center items-center max-w-[200px] mb-8 h-[10%]">
                    {/* <img src="../../public/img/logo_main.png" className="" alt="Flowbite Logo"> */}
                </div>
                <Forms />
            </div>
        </div>
    )
}