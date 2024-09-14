import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../StoreContext";
import { assets } from "../assets/frontend_assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    const response = await axios.post(
      url + "/api/order/userorder",
      {},
      {
        headers: { token },
      }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);

  return (
    <div className="my-12 mx-4 lg:mx-0">
      <h2 className="text-2xl font-sans font-semibold">My Orders</h2>
      <div className="flex flex-col gap-5 mt-7">
        {data.map((order, index) => (
          <div
            className="grid grid-cols-1 lg:grid-cols-6 items-center gap-5 lg:gap-9 text-[14px] py-3 px-5 text-[#454545] border-[1px] border-orange-500"
            key={index}
          >
            <img
              className="w-12 mx-auto lg:mx-0"
              src={assets.parcel_icon}
              alt=""
            />
            <p className="text-center lg:text-left">
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.name} x {item.quantity}
                  {index !== order.items.length - 1 && " , "}
                </span>
              ))}
            </p>
            <p className="text-center lg:text-left">${order.amount}</p>
            <p className="text-center lg:text-left">
              Items: {order.items.length}
            </p>
            <p className="flex justify-center lg:justify-start items-center">
              <span className="text-orange-500 mr-1">&#8226;</span>
              <b>{order.status}</b>
            </p>
            <button
              onClick={fetchOrder}
              className="border-none bg-orange-500 w-full lg:w-32 py-3 text-white rounded-lg"
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
