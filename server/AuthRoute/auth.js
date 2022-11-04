const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

// const pool = require('../config');

const authRoute = express.Router();

authRoute.post('/account', async (req,res) => {
    res.send("test")
});

module.exports = authRoute;