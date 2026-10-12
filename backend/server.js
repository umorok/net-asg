const express = require("express");
const path = require("path");

const db = require("./database/db");
const studentRoutes = require("./routes/students");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Student routes
app.use("/students", studentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
