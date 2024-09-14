import React from "react";
import { assets } from "../../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[18%] text-[1vw] min-h-[100vh] border-[1.5px] border-[#a9a9a9] border-t-0">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/admin/add"
          className={({ isActive }) =>
            isActive
              ? " duration-100  flex items-center gap-3 border-[1px] border-orange-600 bg-[#fff0ed]  border-r-0 py-2 px-3 rounded-t-sm rounded-l-none"
              : "flex items-center gap-3 border-[1px] border-[#a9a9a9] border-r-0 py-2 px-3 rounded-t-sm rounded-l-none"
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:inline-block">Add Items</p>
        </NavLink>
        <NavLink
          to="/admin/list"
          className={({ isActive }) =>
            isActive
              ? " duration-100  flex items-center gap-3 border-[1px] border-orange-600 bg-[#fff0ed]  border-r-0 py-2 px-3 rounded-t-sm rounded-l-none"
              : "flex items-center gap-3 border-[1px] border-[#a9a9a9] border-r-0 py-2 px-3 rounded-t-sm rounded-l-none"
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:inline-block">List Items</p>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? " duration-100  flex items-center gap-3 border-[1px] border-orange-600 bg-[#fff0ed]  border-r-0 py-2 px-3 rounded-t-sm rounded-l-none"
              : "flex items-center gap-3 border-[1px] border-[#a9a9a9] border-r-0 py-2 px-3 rounded-t-sm rounded-l-none"
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:inline-block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
