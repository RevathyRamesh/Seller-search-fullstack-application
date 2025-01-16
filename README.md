# Seller Search Fullstack Application

## Setup Instructions

### Prerequisites
- Node.js installed
- MySQL installed

### Frontend Setup
1. Navigate to the frontend directory:
cd frontend

2. Install dependencies:
npm install

3. Start the frontend server:
npm start


### Backend Setup
1. Configure the database:

  #### Create a MySQL database named seller_db:
  CREATE DATABASE seller_db;

2. Configure the tables
  #### Create a Sellers table in seller_db:
  CREATE TABLE sellers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rating DECIMAL(2, 1) NOT NULL,
    review TEXT NOT NULL
  );

  INSERT INTO sellers (name, rating, review) VALUES
  ('Anjali', 4.5, 'Exceptional product quality and quick delivery.'),
  ('Rajesh', 3.9, 'Good variety of products, but slightly delayed shipping.'),
  ('Sneha', 4.7, 'Great experience! Will definitely recommend to others.'),
  ('Vikram', 4.0, 'Friendly staff, but the website could be more user-friendly.'),
  ('Priya', 4.8, 'Outstanding customer service and reliable products.'),
  ('Arjun', 3.5, 'Average experience, but prices are competitive.'),
  ('Kavya', 4.3, 'Fast delivery and excellent customer support.'),
  ('Manish', 4.2, 'Product quality is great, but stock availability could improve.'),
  ('Ramesh', 3.6, 'Decent overall, but communication needs improvement.'),
  ('Divya', 4.9, 'Amazing experience! Highly recommended for everyone.');

  #### Create a Users table in seller_db:
  CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

3. Navigate to the backend directory:
cd backend

4. Run the script:
node setupUser.js

The script will insert an admin user with the following credentials:
Username: admin
Password: admin123 (hashed for security)

Ensure the **setupUser.js**

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your-mysql-username',
    password: 'your-mysql-password',
    database: 'seller_db'
});

