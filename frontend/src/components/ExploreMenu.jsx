import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore_menu">
      <h1 className="text-[#262626] font-medium font-sans text-2xl md:text-3xl">
        Discover Our Delights
      </h1>
      <p className="max-w-full md:max-w-[60%] text-gray-500 text-sm md:text-base">
        Explore our menu and savor the rich flavors of our signature dishes,
        including mouthwatering entrees, flavorful sides, and indulgent
        desserts. Whether you're here for a casual meal or a special
        celebration, our thoughtfully curated offerings are sure to exceed your
        expectations. Join us and embark on a culinary journey that will leave
        you craving more.
      </p>
      <div className="flex justify-between overflow-y-hidden items-center gap-4 md:gap-8 text-center my-5 overflow-x-auto">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              className={`${
                category === item.menu_name
                  ? "p-[2px] border-[3px] border-orange-500"
                  : ""
              } w-[20vw] sm:w-[12vw] md:w-[7.5vw] min-w-[50px] sm:min-w-[80px] cursor-pointer rounded-full transition-all duration-300`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className="mt-3 text-[#747474] text-xs sm:text-sm md:text-[1.4vw] cursor-pointer">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-3 h-[3px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
