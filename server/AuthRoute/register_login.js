const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config');
require('dotenv').config()

const authRoute = express.Router();

authRoute.post('/register', async (req, res) => {
    // const { userName, accessRole, campus_name, email, password } = req.body;
    const { name, role, campus, email, password } = req.body;
    res.send('hit register backend')

    // if(userName === "" || accessRole === "" || campus_name === "" || email === "" || password === "") return res.send('Fields cannot be empty');

    // //check if email exists; make database query and filter to check if email exists
    // const {rows} = await pool.query('select * from accounts');
    // const account = rows.filter(account => account.email === email);

    // //if account is NOT empty accounts already exist
    // if(account.length !== 0){
    //     return res.send('account already exists');
    // }else{
    //     try {
    //         //create salt rounds
    //         const salt = await bcrypt.genSalt(10);
    //         //hash the password with salt rounds
    //         const hashedPassword = await bcrypt.hash(password,salt);
    //         //insert input data into database with hashed password, NOT typed password
    //         const {rows} = await pool.query('insert into accounts (userName, accessRole, campus_name, email, password) values ($1,$2,$3,$4,$5) returning *', [userName, accessRole, campus_name, email, hashedPassword]);
    //         res.send(rows);
    //     } catch (error) {
    //         res.status(404).send(error.message);
    //     }
    // }
});

authRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;
    //check for empty request values
    if (email === "" || password === "") return res.send('Fields cannot be empty');

    //check if email exists
    const { rows } = await pool.query('select * from accounts');
    const account = rows.filter(account => account.email === email);

    //if account length is 0 then there is no account found
    if (account.length === 0) return res.status(404).send("account not found");

    try {
        //create variable for found account and access at index
        const user = account[0]
        //compare the input password with the database hashed password
        const isAuthorized = await bcrypt.compare(password, user.password)

        //if password matches create secret token and respond with token; else return incorrect password
        if (isAuthorized === true) {
            const secretToken = jwt.sign({
                user_id: user.user_id,
                userName: user.username,
                email: user.email,
                password: user.password
            }, process.env.ACCESS_TOKEN);

            res.status(200).send({
                user_id: user.user_id,
                userName: user.username,
                email: user.email,
                accessRole: user.accessrole,
                campus_name: user.campus_name,
                accessToken: secretToken
            });

        } else if (isAuthorized === false) {
            res.status(401).send("Incorrect Password")
        }
    } catch (error) {
        console.log(error.message)
    }
});

module.exports = authRoute;