const express = require("express");
const router = express.Router();

const db = require("../database/db");

// POST - Add a new student
router.post("/", (req, res) => {
  const { name, matric, department, level, email } = req.body;

  const sql = `
        INSERT INTO students
        (name, matric, department, level, email)
        VALUES (?, ?, ?, ?, ?)
    `;

  const values = [name, matric, department, level, email];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting student:", err);
      return res.status(500).json({
        message: "Failed to save student information.",
      });
    }

    res.status(201).json({
      message: "Student information saved successfully!",
    });
  });
});

module.exports = router;
