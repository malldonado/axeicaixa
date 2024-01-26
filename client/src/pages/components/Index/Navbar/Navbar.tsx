import { useState } from 'react';
import Modal from 'react-modal';
import { FaUserAstronaut } from 'react-icons/fa';
import Logo from '../../../../img/logo.svg';
import '../../../index.css';
import ModalLogin from '../Modal/ModalLogin';
import ModalRegister from '../Modal/ModalRegister';
import { IoCloseSharp } from 'react-icons/io5';

Modal.setAppElement('#root');

function Navbar() {
  const customStyles = {
    content: {
      padding: '0',
      width: '25%',
      height: '600px',
      margin: 'auto',
      transform: 'unset',
      right: '0',
      top: '0',
      bottom: '0',
      left: '0',
      borderRadius: '14px',
      overflowY: 'hidden',
      backgroundColor: '#fff',
    },
  };

  const [modalIsOpenLogin, setISOpenLogin] = useState(false);
  const [modalIsOpenRegister, setISOpenRegister] = useState(false);

  function openModalLogin() {
    setISOpenLogin(true);
  }

  function closeModalLogin() {
    setISOpenLogin(false);
  }

  function openModalRegister() {
    setISOpenLogin(false);
    setISOpenRegister(true);
  }

  function closeModalRegister() {
    setISOpenRegister(false);
  }

  return (
    <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-800">
      <div className="container h-20 flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src={Logo} className="mr-3 h-8 sm:h-9" alt="Flowbite Logo" />
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only nunito-font">Open main menu</span>
        </button>
        <button
          onClick={openModalLogin}
          className="hidden w-full md:block md:w-auto"
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold">
            <li>
              <FaUserAstronaut className="fill-[#4f46e5] text-[30px]" />
            </li>
          </ul>
        </button>
        <Modal
          isOpen={modalIsOpenLogin}
          onRequestClose={closeModalLogin}
          contentLabel="Login"
          style={customStyles}
        >
          <ModalLogin />
          <IoCloseSharp
            onClick={closeModalLogin}
            className="text-[30px] right-[10px] top-[10px] absolute fill-[#4f46e5] cursor-pointer"
          />
          <p className="max-w-[90%] mx-auto mt-4 nunito-font text-black text-[14px] font-normal">
            Don't have an account?{' '}
            <a
              className="text-[#4f46e5] cursor-pointer text-[15px] font-bold"
              onClick={openModalRegister}
            >
              Sign up
            </a>
          </p>
        </Modal>
        <Modal
          isOpen={modalIsOpenRegister}
          onRequestClose={closeModalRegister}
          contentLabel="Register"
          style={customStyles}
        >
          <IoCloseSharp
            onClick={closeModalRegister}
            className="text-[30px] right-[10px] top-[10px] absolute fill-[#4f46e5] cursor-pointer"
          />
          <ModalRegister />
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
