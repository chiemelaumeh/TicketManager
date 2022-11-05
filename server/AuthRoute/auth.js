const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config');
require('dotenv').config()

// const pool = require('../config');

const authRoute = express.Router();

authRoute.post('/account', async (req,res) => {
    const {userName, accessRole, campus_name, email, password} = req.body;

    if(userName, accessRole, campus_name, email, password === '') return res.send('Fields cannot be empty');//bad request
    if(userName, accessRole, campus_name, email, password === ' ') return res.send('Fields cannot be empty');//bad request

    //check if email exists; make database query and filter to check if email exists
    const {rows} = await pool.query('select * from accounts');
    const account = rows.filter(account => account.email === email);

    //if account is NOT empty accounts already exist
    if(account.length !== 0) return res.send('Account already exists');

    try {
        //create salt rounds
        const salt = await bcrypt.genSalt(10);
        //hash the password with salt rounds
        const hashedPassword = await bcrypt.hash(password,salt);
        //insert input data into database with hashed password, NOT typed password
        const {rows} = await pool.query('insert into accounts (userName, accessRole, campus_name, email, password) values ($1,$2,$3,$4,$5) returning *', [userName, accessRole, campus_name, email, hashedPassword]);
        res.send(rows);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = authRoute;