# 🛒 E-Commerce

Welcome to our eCommerce project! This project is built using Node.js, Express, and MongoDB, providing a platform for users to buy and sell products online.

## 🚀 Features

- **Authentication**: Users can register and login to access the platform.
- **User Cart**: Users can add, update, and delete items in their cart.
- **Orders**: Users can place orders, view their order history, and track order status.
- **Admin Dashboard**: Admins have access to additional features such as managing products, users, and orders.
- **Payment Integration**: Stripe integration for secure payment processing.

## 🛣️ Routes

### User Routes

- `POST /register`: Register a new user.
- `POST /login`: Login as an existing user.
- `POST /cart`: Create a new cart.
- `PUT /cart/:id`: Update a cart item.
- `DELETE /cart/:id`: Delete a cart item.
- `GET /cart/find/:userId`: Get user's cart.
- `POST /order`: Create a new order.
- `GET /order/find/:userId`: Get user's orders.
- `GET /user/stats`: Get statistics about users.

### Admin Routes

- `GET /cart`: Get all carts (Admin).
- `PUT /order/:id`: Update order status (Admin).
- `DELETE /order/:id`: Delete an order (Admin).
- `GET /order`: Get all orders (Admin).
- `GET /order/income`: Get income statistics (Admin).
- `POST /product`: Create a new product (Admin).
- `PUT /product/:id`: Update a product (Admin).
- `DELETE /product/:id`: Delete a product (Admin).
- `GET /product/find/:id`: Get a product by ID (Admin).
- `GET /product`: Get all products (Admin).
- `PUT /user/:id`: Update a user (Admin).
- `DELETE /user/:id`: Delete a user (Admin).
- `GET /user/find/:id`: Get a user by ID (Admin).
- `GET /user`: Get all users (Admin).
- `GET /user/stats`: Get statistics about users (Admin).

## 💻 Tech Stack

- Node.js
- Express
- MongoDB
- Stripe (for payment integration)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/sdsutariya/e-commerce.git
```
2. Navigate to the project directory:
```bash
cd e-commerce
```
3. Install dependencies:
```bash
npm install
```
4. Create a .env file and add your environment variables (e.g., MongoDB URI, Stripe API keys).
5. Start the server:
```bash
npm run dev
```
6. Open your browser and navigate to http://localhost:3000 to access the application.

Feel free to explore and contribute! 🎉
