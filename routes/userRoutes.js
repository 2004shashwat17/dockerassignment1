const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

// Route to fetch all users (optional)
router.get('/users', getUsers);

module.exports = router;
