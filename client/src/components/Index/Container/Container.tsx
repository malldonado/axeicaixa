import Navbar from "../Navbar/Navbar.tsx";
import Banner from '../Banner/Banner.tsx';
import BannerSVG from "../../../img/banner.svg";
import Wave from '../../../img/wave.svg';
import Tracking from '../Tracking/Tracking.tsx';
// import Help from '../Help/Help.tsx';

function container() {
  return (
      <div className="h-full relative bg-white-700 overflow-hidden">
        <div className="max-w-7xl h-[500px] mx-auto">
          <Navbar/>
          <div className="w-[50%] mt-9 relative 2xl:flex sm:block bg-white-700 sm:pb-16 md:pb-20 lg:max-full lg:w-full lg:pb-28 xl:pb-32 z-0">
            <Banner/>
            <img className="w-[50%]" src={BannerSVG} alt="" />
          </div>
        </div>
        <img src={Wave} alt="" />
        <Tracking/>
      </div>
  );
}

export default container;
