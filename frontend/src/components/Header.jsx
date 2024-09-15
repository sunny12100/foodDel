import React from "react";

const Header = () => {
  return (
    <div
      className="h-[50vh] md:h-[34vw] my-6 mx-auto   bg-no-repeat bg-cover relative"
      style={{
        backgroundImage:
          "url('https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591')",
      }}
    >
      <div className="absolute flex flex-col items-start gap-4 md:gap-[1.5vw] max-w-[90%] md:max-w-[50%] bottom-[10%] left-[5%] md:left-[6vw] animate-fadeIn">
        <h2 className="font-medium font-sans text-[6vw] md:text-[3.5vw] text-white">
          Craving Something Delicious? Order Now!
        </h2>
        <p className="text-white text-[3.5vw] md:text-[1vw]">
          Enjoy a wide variety of delicious meals delivered straight to your
          doorstep. Whether you're craving comfort food or something new, we've
          got you covered. Fast, fresh, and just a click away—order now and
          satisfy your hunger!
        </p>
        <button className="border-none text-[#747474] font-medium bg-white text-[4vw] md:text-[1vw] rounded-full py-[3vw] md:py-[1vw] px-[6vw] md:px-[2.3vw]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
