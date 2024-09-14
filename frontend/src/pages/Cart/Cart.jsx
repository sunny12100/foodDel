import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, food_list, getTotalAmount, url } =
    useContext(StoreContext);

  return (
    <div className="mt-24 px-4 md:px-8">
      <div>
        <div className="grid grid-cols-6 font-bold items-center text-gray-500 text-xs sm:text-sm md:text-lg">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="bg-[#e2e2e2] h-[3px]" />
        {food_list.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <React.Fragment key={item._id}>
                <div className="grid grid-cols-6 items-center my-3 text-xs sm:text-sm md:text-lg">
                  <img
                    className="w-12 sm:w-14"
                    src={url + "/images/" + item.image}
                    alt={item.name}
                  />
                  <p className="font-sans">{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer text-red-500"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr className="bg-[#e2e2e2] h-[1px]" />
              </React.Fragment>
            );
          }
        })}
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-lg sm:text-xl md:text-2xl font-sans font-bold">
            Cart Total
          </h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex justify-between text-xs sm:text-sm md:text-base text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-xs sm:text-sm md:text-base text-[#555]">
              <p>Delivery</p>
              <p>${getTotalAmount() ? "5" : "0"}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-xs sm:text-sm md:text-base text-[#555]">
              <b>Total Amount</b>
              <b>${getTotalAmount() ? getTotalAmount() + 5 : "0"}</b>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="text-white bg-orange-500 w-full md:w-[15vw] mt-6 py-3 rounded-md cursor-pointer hover:bg-orange-600 transition"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-12">
          <p className="text-sm md:text-base text-[#555]">
            If you have Promo code, Enter here
          </p>
          <div className="mt-3 flex justify-between items-center bg-[#eaeaea] rounded-md">
            <input
              className="flex-1 bg-transparent border-none outline-none pl-3 text-sm md:text-base"
              type="text"
              placeholder="Promo Code"
            />
            <button className="w-24 md-w-[10vw] py-3 px-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
