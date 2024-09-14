import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../StoreContext";

const FoodCard = ({ id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="w-[100%] m-auto rounded-2xl shadow-[0px,0px,10px,#00000015] animate-fadeIn hover:scale-105 duration-200">
      <div className="relative">
        <img
          className="w-[100%] rounded-t-[15px] rounded-b-none "
          src={image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="w-9 absolute bottom-4 right-[15px] cursor-pointer rounded-[50px]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="flex bottom-4 right-4 absolute items-center gap-3 p-[6px] rounded-3xl duration-100 bg-white">
            <img
              className="w-8"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-8"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="font-sans text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>

        <p className="text-[14px] text-[#676767]">{description}</p>
        <p className="text-orange-600 text-[22px] font-medium mt-2 mb-0">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
