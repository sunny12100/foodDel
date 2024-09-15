import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData || {}; // Initialize cartData if it doesn't exist

    // Add or update item quantity
    cartData[req.body.itemId] = (cartData[req.body.itemId] || 0) + 1;

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.json({ success: false, message: "Error adding to cart" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData || {};

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;

      if (cartData[req.body.itemId] === 0) {
        delete cartData[req.body.itemId]; // Remove item if quantity reaches 0
      }
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.error("Error removing from cart:", error.message);
    res.json({ success: false, message: "Error removing from cart" });
  }
};

const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    res.json({ success: false, message: "Error fetching cart" });
  }
};

export { addToCart, removeFromCart, getCart };
