require("dotenv").config();
console.log("SERVER FILE LOADED");

// Import DB (IMPORTANT FIX)
const db = require("./config/db");

const express = require("express");
const cors = require("cors");

// Route Imports
const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

// TEST ROUTE (FIXED - THIS WAS MISSING)
app.get("/test-db", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if (err) {
      console.log("DB Error:", err);
      return res.status(500).send("Database Error");
    }
    res.json(result);
  });
});

// Simple test route
app.get("/test", (req, res) => {
  res.send("GET test works");
});

// Server Start
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});