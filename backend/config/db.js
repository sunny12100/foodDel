import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://food_delivery:Enginner1@cluster0.7to9c.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB CONNECTED");
    });
};
