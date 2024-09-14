import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets.jsx";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../StoreContext.jsx";
import axios from "axios";

const Navbar = ({ setShowLogin, setIsAdmin }) => {
  const [admin, setAdmin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalAmount, setToken, token, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const ToggleButton = () => {
    setToggle(!toggle);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setAdmin(false);
    setIsAdmin(false);
  };

  const Admin = async () => {
    try {
      const response = await axios.get(url + "/api/user/admin", {
        headers: {
          token: token,
        },
      });
      console.log(response.data);
      if (response.data.success) {
        setAdmin(true);
        setIsAdmin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      Admin();
      console.log(admin);
    }
  }, [token]);

  return (
    <div className="py-5 px-4 flex justify-between items-center bg-white shadow-sm">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-[150px] md:w-[180px]"
          src={assets.logo1}
          alt="Bite Buddy Logo"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <img src={assets.menu_icon} alt="Menu" />
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMobileMenuOpen
            ? "fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
            : "hidden"
        } md:flex gap-5 md:h-12 list-none text-[#49557e] text-xl`}
      >
        {!toggle && (
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              setIsMobileMenuOpen(false);
            }}
            className={`${
              menu === "home"
                ? "pb-[2px] border-b-2 border-orange-500 text-orange-500"
                : ""
            } cursor-pointer duration-200 my-4 md:my-0`}
          >
            home
          </Link>
        )}
        {!toggle && (
          <a
            href="#explore_menu"
            onClick={() => {
              setMenu("menu");
              setIsMobileMenuOpen(false);
            }}
            className={`${
              menu === "menu"
                ? "pb-[2px] border-b-2 border-orange-500 text-orange-500"
                : ""
            } cursor-pointer duration-200 my-4 md:my-0`}
          >
            menu
          </a>
        )}
        {!toggle && (
          <a
            href="#app_download"
            onClick={() => {
              setMenu("mobile-app");
              setIsMobileMenuOpen(false);
            }}
            className={`${
              menu === "mobile-app"
                ? "pb-[2px] border-b-2 border-orange-500 text-orange-500"
                : ""
            } cursor-pointer duration-200 my-4 md:my-0`}
          >
            mobile-app
          </a>
        )}
        {!toggle && (
          <a
            href="#footer"
            onClick={() => {
              setMenu("contact-us");
              setIsMobileMenuOpen(false);
            }}
            className={`${
              menu === "contact-us"
                ? "pb-[2px] border-b-2 border-orange-500 text-orange-500"
                : ""
            } cursor-pointer duration-200 my-4 md:my-0`}
          >
            contact-us
          </a>
        )}
      </ul>

      {/* Search, Basket, and Sign In (hidden on mobile) */}
      <div className="hidden md:flex md:gap-5 gap-10 items-center">
        <div className="relative">
          {!toggle && (
            <Link to="/cart">
              <img src={assets.basket_icon} alt="Basket" />
              <div
                className={
                  getTotalAmount()
                    ? "absolute w-3 h-3 bg-orange-500 rounded-full top-[-8px] right-[-8px]"
                    : ""
                }
              ></div>
            </Link>
          )}
        </div>
        <div>
          {admin && (
            <Link to={toggle ? "/" : "/admin"}>
              <button
                onClick={ToggleButton}
                className="bg-transparent text-xl text-[#49557e] border border-orange-600 rounded-full cursor-pointer py-3 px-8 hover:bg-orange-500 hover:text-white duration-300"
              >
                {toggle ? "Home" : "Admin"}
              </button>
            </Link>
          )}
        </div>
        <div>
          {token === "" ? (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-transparent text-xl text-[#49557e] border border-orange-600 rounded-full cursor-pointer py-3 px-8 hover:bg-orange-500 hover:text-white duration-300"
            >
              Sign In
            </button>
          ) : (
            <div className="relative group">
              <img
                className="w-20"
                src="https://t3.ftcdn.net/jpg/05/80/14/34/360_F_580143471_oizmWtW0ewHj9bUCYBzQlzPnqOxxSRVK.png"
                alt=""
              />
              <ul className="absolute right-0 hidden z-10 group-hover:flex flex-col gap-3 bg-[#fff2ef] py-3 px-7 w-36 rounded-lg border-[1px] border-orange-500">
                <li
                  onClick={() => navigate("/myorder")}
                  className="flex items-center gap-2 cursor-pointer hover:text-orange-500"
                >
                  <img src={assets.bag_icon} alt="" />
                  Orders
                </li>
                <hr className="bg-orange-500 h-[2px]" />
                <li
                  onClick={logOut}
                  className="flex items-center gap-2 cursor-pointer hover:text-orange-500"
                >
                  <img src={assets.logout_icon} alt="" />
                  LogOut
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
