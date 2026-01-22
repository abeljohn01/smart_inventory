# Smart Inventory
A full-stack Retail Store Manager Dashboard built using Node.js, Express, and React, designed to manage product inventory efficiently with real-time stock updates and visual low-stock alerts. This project demonstrates clean API design, responsive UI development, and strong frontend–backend integration.

## Product Inventory Management


A modern, full-stack inventory management system built with **React** and **Node.js**.  
Designed to demonstrate responsive UI, real-time-like interactions, and serverless deployment strategies.


## Live Demo
**(https://abel-shopping-cart.vercel.app/)**  


## Features
- **Real-time Stock Management**: Increment and decrement stock levels instantly.
- **Smart Validation**: Prevents negative stock and disables controls when out of stock.
- **Interactive UI**: Loading states, hover effects, and smooth transitions.

## Tech Stack
- **Frontend**: React 18, Vite, CSS Modules (Responsive Design).
- **Backend**: Node.js, Express.js.
- **Deployment**: Vercel (Serverless Functions).

## API Reference

### Get All Products
`GET /products`
Returns the list of all inventory items.

### Update Stock
`POST /update-stock`
Updates the quantity of a specific product.

**Body:**
```json
{
  "id": 1,
  "newQuantity": 15
}
```


