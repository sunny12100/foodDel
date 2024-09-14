import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { getTotalAmount, url, food_list, cartItems, token } =
    useContext(StoreContext);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    mobile: "",
    zip: "",
    paymentMethod: "credit card",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: orderDetails,
      items: orderItems,
      amount: getTotalAmount() + 5,
    };

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("error");
    }
  };
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalAmount() === 0) {
      navigate("/cart");
      toast.warn("Cart is Empty", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "red",
          // Example: orange background
          color: "white",
        },
      });
    }
  }, [token]);

  return (
    <div className="flex flex-col md:flex-row w-[90%] lg:w-[80%] mx-auto p-6 md:p-8 gap-8 md:gap-20 bg-white rounded-lg shadow-lg">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-full md:w-[60%] space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Place Your Order
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={orderDetails.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No.
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              value={orderDetails.mobile}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <textarea
            name="address"
            id="address"
            value={orderDetails.address}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={orderDetails.city}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={orderDetails.state}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Zip Code */}
          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={orderDetails.zip}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            value={orderDetails.country}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition"
        >
          Place Order
        </button>
      </form>

      {/* Cart Summary Section */}
      <div className="w-full md:w-[40%] flex flex-col space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Cart Total
        </h2>
        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
          <div className="flex justify-between text-sm md:text-base text-gray-700">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-sm md:text-base text-gray-700">
            <p>Delivery</p>
            <p>${getTotalAmount() ? "5" : "0"}</p>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-sm md:text-base font-bold text-gray-800">
            <b>Total Amount</b>
            <b>${getTotalAmount() ? getTotalAmount() + 5 : "0"}</b>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition"
        >
          Confirm and Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
