import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div
      id="app_download"
      className="m-auto mt-10 md:mt-[100px] text-xl md:text-[3vw] font-sans text-center font-medium"
    >
      <p>
        Get the Ultimate Experience Download <br />{" "}
        <br className="hidden md:inline-block" />
        <span className="text-orange-500">Bite Buddy App</span>
      </p>
      <div className="flex justify-center gap-4 md:gap-[2vw] mt-6 md:mt-10">
        <img
          className="w-[40vw] sm:w-[30vw] max-w-[160px] cursor-pointer duration-500 hover:scale-105"
          src={assets.play_store}
          alt="Download on Google Play"
        />
        <img
          className="w-[40vw] sm:w-[30vw] max-w-[160px] cursor-pointer duration-500 hover:scale-105"
          src={assets.app_store}
          alt="Download on the App Store"
        />
      </div>
    </div>
  );
};

export default AppDownload;
