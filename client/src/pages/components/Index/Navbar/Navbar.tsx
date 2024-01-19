import { FaUserAstronaut } from "react-icons/fa";
import Logo from '../../../../img/logo.svg'
import '../../../index.css';

function Navbar() {
  return (
    <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-800">
      <div className="container h-20 flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src={Logo} className="mr-3 h-8 sm:h-9" alt="Flowbite Logo"/>
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
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold">
            <li>
              <FaUserAstronaut className="fill-[#4f46e5] text-[30px]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
