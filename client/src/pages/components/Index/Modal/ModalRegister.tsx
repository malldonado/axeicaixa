import LogoModal from '../../../../img/logo.svg'

function ModalLogin() {

  return (
    <div className="m-auto relative">
      <div className='w-[90%] mt-8 mx-auto mb-auto h-full p-0 z-[1000] overflow-y-hidden'>
        <img className="h-[40px] mt-8 mx-auto" alt="" src={LogoModal} />
        <div className="mt-10">
          <h2 className="text-[26px] font-bold nunito-font text-[#4f46e5]">Register</h2>
          <p className="nunito-font font-light text-[16px] mt-1 text-gray-600">
            Please Register in to continue
          </p>
          <form className="mt-6 m-auto" action="">
            <label
              className="nunito-font text-[16px] mt-4 text-black"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-2 mb-4 placeholder:font-normal"
              type="email"
              placeholder="E-mail"
            />
            <label
              className="nunito-font text-[16px] mt-4 text-black"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-2 placeholder:font-normal mb-4"
              type="password"
              placeholder="Password"
            />
            <label
              className="nunito-font text-[16px] mt-2 text-black"
              htmlFor="Password"
            >
              Repeat
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-2 placeholder:font-normal"
              type="password"
              placeholder="Repeat password"
            />
            {/* <div className="flex mt-2">
              <input type="checkbox" />
              <p className="ml-2 nunito-font text-black text-[14px] font-normal">
                Keep me logged in
              </p>
            </div> */}
            <button className="w-full h-[45px] bg-[#4f46e5] mt-8 text-white nunito-font rounded-md">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
