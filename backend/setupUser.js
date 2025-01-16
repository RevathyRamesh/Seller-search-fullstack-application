const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const saltRounds = 10; // Number of rounds to generate salt (more rounds = more secure)

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your DB username
  password: 'admin123', // Replace with your DB password
  database: 'seller_db' // Replace with your DB name
});

// Plain password to hash
const plainPassword = 'admin123'; 

bcrypt.hash(plainPassword, saltRounds, (err, hashedPassword) => {
  if (err) {
    console.error("Error hashing password:", err);
    return;
  }

  // Insert the user with the hashed password into the database
  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(sql, ['admin', hashedPassword], (err, result) => {
    if (err) {
      console.error("Error inserting into users table:", err);
      return;
    }
    console.log("User inserted successfully");
    db.end(); // Close the connection
  });
});
