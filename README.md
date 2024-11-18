SB Foods - Food Ordering App

Overview

SB Foods is a user-friendly food ordering application designed to offer a seamless and convenient experience for customers, restaurants, and administrators. The application features user authentication, a product catalog, cart management, and an admin dashboard to manage the platform effectively.

Features

•	User Authentication: Secure login and registration for customers, restaurants, and administrators.
•	Product Catalog: Browse through an extensive menu of food items categorized by restaurants.
•	Cart Management: Add, update, and remove items from the cart with a dynamic price calculation.
•	Admin Dashboard: Manage users, orders, and restaurants efficiently.
•	Order History: View past orders and their statuses.
•	Payment Integration: Seamless payments using Stripe (if implemented).
•	Responsive Design: Optimized for both desktop and mobile devices.
________________________________________

Technology Stack

Frontend

•	React.js: For building the user interface components and client-side functionality.
•	CSS: For styling the application with a responsive and visually appealing design.
Backend
•	Node.js & Express.js: For building server-side APIs and managing application logic.
•	MongoDB: For storing user, order, and restaurant information with Mongoose for data modeling.
________________________________________

Setup Instructions

Prerequisites

Before you begin, ensure you have the following software installed on your machine:

•	Node.js (version 12.x or later)
•	npm (comes with Node.js)
•	MongoDB (preferably MongoDB Atlas for cloud-based storage)
•	Express.js
•	React.js
•	Stripe (if implementing payment integration)
________________________________________

Installation: Step-by-Step Guide

Step 1: Clone the Repository

1.	Open your terminal or command prompt.
2.	Clone the GitHub repository:
git clone https://github.com/Hks36/SB_Foods-Food_Ordering_App-NM2024TMID16379.git  
cd food-ordering-website  

Step 2: Install Dependencies

Install the dependencies for each section:

1.	Backend:

cd backend  
npm install  

2.	Frontend:

cd ../frontend  
npm install  

3.	Admin Panel:

cd ../admin  
npm install  

Step 3: Set Up Environment Variables

1.	Navigate to the backend directory:

cd ../backend  

2.	Create a .env file:
touch .env  

3.	Add the following variables to the .env file:

JWT_SECRET="random#secret" # Replace with a strong secret key  
STRIPE_SECRET_KEY="Paste your Stripe secret key here" # Replace with your Stripe secret key  
________________________________________

Step 4: Configure MongoDB Connection

1.	Set up a MongoDB Atlas cluster or use a local MongoDB database.
2.	Update the db.js file in the backend directory with your MongoDB connection string:
import mongoose from "mongoose";

export const connectDB = async () => {  
    await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.tiebsgz.mongodb.net/food-del')  
    .then(() => console.log("DB Connected"))  
    .catch(err => console.error("DB Connection Error: ", err));  
};  
3.	Replace <username> and <password> with your MongoDB Atlas credentials.
________________________________________
Step 5: Start the Development Servers
1.	Start the backend server:
cd backend  
npm start  
2.	Start the frontend server:
cd ../frontend  
npm run dev  
3.	Start the admin panel server:
cd ../admin  
npm run dev  
________________________________________
Access the Application
•	Frontend (Customer-facing website): http://localhost:5173
•	Backend (API server): http://localhost:8080
•	Admin Panel (Dashboard): http://localhost:5174
________________________________________
Troubleshooting Tips
•	MongoDB Connection Errors:
o	Ensure your MongoDB Atlas cluster is set to allow connections from your IP address.
o	Verify your credentials in the .env file.
•	Port Conflicts:
o	Modify the default ports in the respective configuration files if needed.
•	Stripe Issues:
o	Use test keys for Stripe during development to avoid real charges.
________________________________________
License
This project is licensed under the MIT License.
________________________________________
Contact
For queries, reach out to Harish Kumar at:
Email: hk2711750@gmail.com

