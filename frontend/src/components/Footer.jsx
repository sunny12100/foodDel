import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20 mt-6" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-semibold mb-2">Bite Buddy</h3>
            <p className="text-gray-400">
              Delivering your favorite meals right to your door.
            </p>
          </div>
          <div className="flex flex-col md:flex-row mb-8 md:mb-0 space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Menu
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              About Us
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Bite Buddy. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <img src={assets.facebook_icon} alt="" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <img src={assets.twitter_icon} alt="" />
              </a>

              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <img src={assets.linkedin_icon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
