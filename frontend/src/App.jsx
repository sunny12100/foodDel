import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer";
import Login from "./components/Login";
import VerifyPay from "./pages/VerifyPay";
import MyOrders from "./pages/MyOrders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/admin/Admin";
import Add from "./pages/admin/Add";
import Sidebar from "./pages/admin/Sidebar";
import List from "./pages/admin/List";
import Orders from "./pages/admin/Orders";
import { StoreContext } from "./StoreContext";

const App = () => {
  const { url } = useContext(StoreContext);
  const [showLogin, setShowLogin] = useState(false);
  const [isadmin, setIsAdmin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin} setIsAdmin={setIsAdmin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<VerifyPay />} />
          <Route path="/myorder" element={<MyOrders />} />
          {isadmin && (
            <>
              <Route path="/admin" element={<Admin />} />
              <Route
                path="/admin/add"
                element={
                  <>
                    <div className="flex">
                      <Sidebar />
                      <Add url={url + "/"} />
                    </div>
                  </>
                }
              />
              <Route
                path="/admin/list"
                element={
                  <>
                    <div className="flex">
                      <Sidebar />
                      <List url={url + "/"} />
                    </div>
                  </>
                }
              />
              <Route
                path="/admin/orders"
                element={
                  <>
                    <div className="flex">
                      <Sidebar />
                      <Orders url={url + "/"} />
                    </div>
                  </>
                }
              />
            </>
          )}

          {/* Catch-all route for debugging */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
