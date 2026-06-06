const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 4000,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: true,
  },
});

// Test connection (optional but good)
db.getConnection((err, connection) => {
  if (err) {
    console.log("Database Error:", err);
  } else {
    console.log("Database Connected Successfully");
    connection.release();
  }
});

module.exports = db;