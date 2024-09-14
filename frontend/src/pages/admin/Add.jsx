import React, { useEffect, useState } from "react";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    Name: "",
    Description: "",
    Category: "Salad",
    Price: "",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.Name);
    formData.append("description", data.Description);
    formData.append("category", data.Category);
    formData.append("price", data.Price);
    formData.append("image", image);
    try {
      const response = await axios.post(`${url}api/food/add`, formData);
      if (response.data.success) {
        setData({ Name: "", Description: "", Category: "Salad", Price: "" });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error("NOT ADDED");
      }
    } catch (error) {
      toast.error("Submission Failed");
    }
  };

  return (
    <div className="w-[70%] ml-[5vw] mt-8 text-[#6d6d6d] text-[16px]">
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="flex flex-col gap-8 "
      >
        <div>
          <p>Product Image</p>
          <label htmlFor="image">
            <img
              className="w-32"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Preview"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="w-[60%] md:w-[40%]">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.Name}
            name="Name"
            className="p-3 w-full border-[1px] border-black"
            type="text"
            required
            placeholder="Type Product Name"
          />
        </div>
        <div className="w-[60%] md:w-[40%]">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.Description}
            name="Description"
            className="p-3 w-full border-[1px] h-28 border-black"
            cols="30"
            rows="10"
            placeholder="Type Product Description"
            required
          />
        </div>
        <div className="md:flex gap-7">
          <div>
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.Category}
              name="Category"
              required
              className="w-32 p-3 border-black border-[1px]"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="mt-5 md:mt-0">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.Price}
              name="Price"
              className="border-black border-[1px] p-3 w-32"
              type="number"
              required
              placeholder="$20"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-32 border-none bg-orange-500 text-white p-3 cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
