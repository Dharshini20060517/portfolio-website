console.log("SERVER FILE LOADED");

// Database Connection
require("./config/db");

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

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

// Test Route
app.get("/test", (req, res) => {
  res.send("GET test works");
});

// Server Start
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});