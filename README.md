# Bite Buddy

Bite Buddy is a modern and feature-rich food delivery app that connects users with their favorite meals in just a few clicks. Built using the MERN stack (MongoDB, Express, React, Node.js), Bite Buddy is designed for speed, efficiency, and a seamless user experience.

---

## 🚀 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Payment Gateway**: Stripe

---

## 🌟 Features

### 1. **User Authentication**
- 🔒 Secure login and registration with JWT.
- 🌟 Admin access control with the `isAdmin` flag.

![User Authentication](./images/authentication.png)

---

### 2. **Dynamic Food Menu**
- 🍕 Browse a diverse menu of cuisines.
- 🔍 Search and filter functionality for finding dishes quickly.
- 🖼️ Upload and display high-quality food images.

![Dynamic Food Menu](./images/food-menu.png)

---

### 3. **Order Management**
- 📋 View past orders on the "My Orders" page.
- 🚚 Real-time order tracking with a progress bar.

![Order Management](./images/my-orders.png)

---

### 4. **Cart Functionality**
- 🛒 Add, edit, or remove items from your cart.
- 🧾 Display the total cost and apply promo codes.

![Cart Functionality](./images/cart.png)

---

### 5. **Responsive Design**
- 📱 Fully optimized for mobile, tablet, and desktop views.
- 🎨 Aesthetic design with Tailwind CSS for seamless navigation.

![Responsive Design](./images/responsive.png)

---

### 6. **Admin Panel**
- 🛠️ Manage food items, categories, and user roles.
- 📊 View detailed analytics on user activities and orders.

![Admin Panel](./images/admin-panel.png)

---

### 7. **Payment Integration**
- 💳 Integrated with Razorpay/Stripe for secure transactions.
- 🛡️ Multiple payment options including UPI, credit/debit cards, and wallets.

![Payment Integration](./images/payment.png)

---


## 🛠️ Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bite-buddy.git
   ```

2. Navigate to the project directory:
   ```bash
   cd bite-buddy
   ```

3. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   ```

4. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   RAZORPAY_KEY=your_razorpay_key
   ```

5. Start the development servers:
   ```bash
   # Start the backend server
   npm run dev
   
   # Start the frontend server
   cd client && npm start
   ```

6. Visit the app at `http://localhost:3000`.

---

## 🎥 Demo

Check out the video walkthrough of Bite Buddy:

[![Watch Demo](./images/demo-thumbnail.png)](https://youtu.be/your-demo-video-link)

---

## 🌐 Live Demo

Try the live version of Bite Buddy: [https://bite-buddy.com](https://bite-buddy.com)

---

## 🤝 Contribution Guidelines

We welcome contributions to improve Bite Buddy! Please fork the repository and create a pull request with your changes.

---

## 📩 Contact

For inquiries or feedback, reach out to us at [support@bitebuddy.com](mailto:support@bitebuddy.com).

---

### 📜 License

This project is licensed under the [MIT License](LICENSE).
