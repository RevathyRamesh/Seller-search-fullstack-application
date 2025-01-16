const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Replace with your DB username
  password: "admin123", // Replace with your DB password
  database: "seller_db", // Replace with your DB name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1); 
  }
  console.log("Database connected!");
});

// Login route with JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validate that username and password are provided
  if (!username || !password) {
    return res.status(400).send({ error: "Username and password are required" });
  }

  // Query to find the user in the database
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error("Error querying the database:", err.message);
      return res.status(500).send({ error: "Internal Server Error" });
    }

    if (result.length === 0) {
      return res.status(401).send({ error: "Invalid username or password" });
    }

    const user = result[0]; // Get the user from the query result

    // Compare the provided password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Error comparing password:", err.message);
        return res.status(500).send({ error: "Internal Server Error" });
      }

      if (isMatch) {
        // Generate a JWT token upon successful login
        const token = jwt.sign(
          { userId: user.id, username: user.username },
          "your_secret_key",
          { expiresIn: "1h" } // Expire in 1 hour
        );

        return res.send({
          message: "Logged in successfully!",
          token: token, // Return token to frontend
        });
      } else {
        return res.status(401).send({ error: "Invalid username or password" });
      }
    });
  });
});

// Middleware to check if the request has a valid token
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send({ error: "Access Denied: No Token Provided" });
  }

  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) {
      return res.status(403).send({ error: "Invalid Token" });
    }
    req.user = user;
    next();
  });
};

// /sellers route to handle search and fetch sellers (Public Data)
app.get("/sellers", (req, res) => {
  const query = req.query.search || ""; // Handle search query
  const sql = `SELECT * FROM sellers WHERE name LIKE ?`;

  db.query(sql, [`%${query}%`], (err, result) => {
    if (err) {
      console.error("Error fetching sellers:", err.message);
      return res.status(500).send({ error: "Internal Server Error" });
    }
    res.json(result);
  });
});

// Start the server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
