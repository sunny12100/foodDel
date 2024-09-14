import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import axios from "axios";

const VerifyPay = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      orderId,
      success,
    });
    console.log(response);
    if (response.data.success) {
      navigate("/myorder");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="min-h-[60vh] grid ">
      <div className="w-28 h-28 place-self-center border-[5px] border-[#bdbdbd] border-t-orange-500 rounded-[50%] animate-rotate"></div>
    </div>
  );
};

export default VerifyPay;
