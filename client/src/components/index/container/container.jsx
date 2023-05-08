import React from "react";
import Navbar from "../navbar/navbar";
import Banner from "../banner/banner";
import BannerSVG from "../banner/banner.svg";
import BannerTrackingSVG from '../bannerTracking/bannerTracking.svg';
import BannerTracking from '../bannerTracking/bannerTracking';
import Band from '../band/band';
import Help from '../help/help';

function container() {
  return (
      <div className="h-full relative bg-white-700 overflow-hidden">
        <div className="max-w-7xl h-[500px] mx-auto">
          <Navbar/>
          <div className="w-[50%] mt-9 relative 2xl:flex sm:block z-10 bg-white-700 sm:pb-16 md:pb-20 lg:max-full lg:w-full lg:pb-28 xl:pb-32">
            <Banner/>
            <img className="w-[50%]" src={BannerSVG} alt="" />
          </div>
        </div>
        <img src={BannerTrackingSVG} alt="" />
        <BannerTracking/>
        <Help/>
      </div>
  );
}

export default container;
