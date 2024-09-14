import React, { useContext } from "react";
import { StoreContext } from "../StoreContext";
import FoodCard from "./FoodCard";

const DisplayFood = ({ category }) => {
  const { food_list, url } = useContext(StoreContext);

  return (
    <div className="mt-8">
      <h2 className="text-xl md:text-[2vw] font-sans font-semibold">
        Delicious Choices Close to You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodCard
                key={index}
                id={item._id}
                name={item.name}
                image={url + "/images/" + item.image}
                price={item.price}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default DisplayFood;
