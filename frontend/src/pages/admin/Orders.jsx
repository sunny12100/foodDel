import React, { useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../../assets/admin_assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(url + "api/order/listorder");
    setOrders(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "api/order/update", {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        fetchOrders();
      }
    } catch (error) {}
  };

  return (
    <div className="w-[70%] lg:w-[75%] mx-auto">
      <h2 className="text-2xl font-sans font-semibold my-4">Orders</h2>
      <div className="flex flex-col gap-7">
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-start gap-7 text-[#454545] border-[1px] border-orange-500 p-5  mx-0 text-[14px]"
            key={index}
          >
            <img
              src={assets.parcel_icon}
              alt="Parcel Icon"
              className="w-12 h-12 object-contain"
            />
            <div>
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return `${item.name} x ${item.quantity}`;
                  } else {
                    return `${item.name} x ${item.quantity}, `;
                  }
                })}
              </p>
            </div>
            <p className="break-words">
              {order.address.address}, {order.address.city},{" "}
              {order.address.state}, {order.address.zip}
            </p>
            <p>{order.address.mobile}</p>
            <p>${order.amount}</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="border-orange-500 border-[1px] py-3 cursor-pointer w-full lg:w-auto"
              name=""
              id=""
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
