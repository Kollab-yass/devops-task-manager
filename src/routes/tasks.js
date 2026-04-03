const express = require('express');
const router = express.Router();

// In-memory storage (no MongoDB connection needed for this lab)
const tasks = [
  { id: 1, title: "Learn Git", completed: false },
  { id: 2, title: "Practice DevOps", completed: true }
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST a new task
router.post('/', (req, res) => {
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: req.body.completed || false
  };
  tasks.push(task);
  res.status(201).json(task);
});

module.exports = router;