import '../../../index.css';

function Banner() {
  return (
    <div className="mt-10 w-[50%] mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block xl:inline mr-2 nunito-font">O serviço de rastreio exclusivo do</span>
                <span className="block text-indigo-600 xl:inline nunito-font">axeicaixa</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 nunito-font">Um serviço de rastreio de encomendas totalmente gratuito</p>
            <form method="post" action="/tracking">
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <input name="dados" className="w-full placeholder:text-indigo-600 rounded-xl mr-2.5 p-2.5 border-2 font-sans font-bold text-lg text-indigo-700 border-indigo-600 bg-indigo-white nunito-font outline-none" placeholder="Digite seu código de rastreio"></input>
                    <div className="rounded-md shadow">
                        <button type="submit" value="enviar" className="h-16 w-40 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-[18px] nunito-font">Verificar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Banner
