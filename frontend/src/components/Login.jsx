import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../StoreContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (isLogin === true) {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success === true) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      toast.success("Sign In Successful");
      setShowLogin(false);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="absolute z-10 inset-0 flex justify-center items-center bg-[#00000090] bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm mx-4 sm:mx-auto relative">
        <div className="flex flex-row justify-between">
          <h2 className="text-orange-500 text-2xl font-sans font-semibold  mb-10">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <img
            onClick={() => setShowLogin(false)}
            className="w-5 h-5 cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <form onSubmit={onLogin}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
                name="name"
                onChange={onChangeHandler}
                value={data.name}
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              name="email"
              onChange={onChangeHandler}
              value={data.email}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              name="password"
              onChange={onChangeHandler}
              value={data.password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-6 text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleAuthMode}
            className="text-orange-500 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
