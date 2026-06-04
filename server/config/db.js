const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "portfolio_db",
});

db.connect((err) => {
  if (err) {
    console.log("Database Error:", err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = db;