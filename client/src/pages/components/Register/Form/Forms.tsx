export const Forms = () => {
    return (
        <>
            <form className="m-auto flex justify-center h-[10%] z-50" action="">
                <input name="login" type="text"
                    className="p-2.5 mb-4 block h-12 w-[400px] border-indigo-600 border-2 rounded-md"
                    placeholder="name" />
                <input name="login" type="email"
                    className="p-2.5 mb-4 block h-12 w-[400px] border-indigo-600 border-2 rounded-md"
                    placeholder="contato@info.com" />
                <input name="login" type="password"
                    className="p-2.5 mb-4 block h-12 w-[400px] border-indigo-600 border-2 rounded-md"
                    placeholder="password" />
                <button className="bg-indigo-600 w-full h-12 rounded text-white font-medium">Cadastrar</button>
            </form>
        </>
    )
}