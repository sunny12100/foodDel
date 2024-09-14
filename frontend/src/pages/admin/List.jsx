import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}api/food/list`);
    console.log(response.data.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full">
      <p className="pl-7 text-xl md:pl-24 md:text-3xl mt-5 font-sans">
        All Foods List
      </p>
      <div className="w-[110%] md:w-[86%] mx-auto mt-5">
        <div className="grid grid-cols-5 bg-[#fafafa] items-center gap-2 py-3 px-4 border-[1px] border-[#cacaca] text-sm">
          <b>Image</b>
          <b>Name</b>
          <b className="ml-[-10px] md:ml-0">Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center gap-2 py-3 px-4 border-[1px] border-[#cacaca] text-sm
                       md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2"
          >
            <img
              className="w-32"
              src={`${url}images/${item.image}`}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p className="ml-2">{item.category}</p>
            <p className="ml-3">{item.price}</p>
            <button
              onClick={() => removeFood(item._id)}
              className="mr-40 cursor-pointer"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
