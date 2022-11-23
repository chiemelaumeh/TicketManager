const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config');
require('dotenv').config()
const { check, validationResult } = require('express-validator')
const authRoute = express.Router();

authRoute.post('/register', [
    check("email").not().isEmpty().withMessage("Required").isEmail().withMessage("Invalid email"),
    check("name").not().isEmpty().withMessage("Required"),
    check("campus", "Enter campus").not().isEmpty(),
    check("role", "Enter Role").not().isEmpty(),
    check("password").not().isEmpty().withMessage("Required").isLength({ min: 4 }).withMessage("To short")
], async (req, res) => {

    const { name, role, campus, email, password } = req.body;

    const error = validationResult(req).formatWith(({ msg }) => msg)

    if (!error.isEmpty()) {
        res.json({ error: error.mapped() })
    } else {
        //check if email exists; make database query and filter to check if email exists
        const { rows } = await pool.query('select * from accounts');
        const account = rows.filter(account => account.email === email);

        //if account is NOT empty accounts already exist
        if (account.length !== 0) {
            return res.send('account already exists');
        } else {
            try {
                //create salt rounds
                const salt = await bcrypt.genSalt(10);
                //hash the password with salt rounds
                const hashedPassword = await bcrypt.hash(password, salt);
                const lowerRole = role.toLowerCase()
                //insert input data into database with hashed password, NOT typed password
                const { rows } = await pool.query('INSERT INTO accounts (userName, accessRole, campus_name, email, password) VALUES ($1,$2,$3,$4,$5) RETURNING *', [name, lowerRole, campus, email, hashedPassword]);
                res.send(rows);
            } catch (error) {
                res.status(404).send(error.message);
            }
        }

    }

});

authRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;
    //check for empty request values
    if (email === "" || password === "") return res.send('Fields cannot be empty');

    //check if email exists
    const { rows } = await pool.query('select accounts.user_id, accounts.username, accounts.accessrole, accounts.campus_name, accounts.email, accounts.profilepic, accounts.password, campus.campus_id from accounts,campus where accounts.campus_name = campus.name');
    // console.log(rows)
    const account = rows.filter(account => account.email === email);

    //if account length is 0 then there is no account found
    if (account.length === 0) return res.status(404).send({ msg: "Not Found" });

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
                password: user.password,
                campus_id: user.campus_id,
                profilePic: user.profilepic
            }, process.env.ACCESS_TOKEN);

            res.status(200).send({
                user_id: user.user_id,
                userName: user.username,
                email: user.email,
                campus_id: user.campus_id,
                accessRole: user.accessrole,
                campus_name: user.campus_name,
                isAuth: true,
                accessToken: secretToken
            });

        } else if (isAuthorized === false) {
            res.status(401).send({ msg: "Incorrect Password" })
        }
    } catch (error) {
        console.log(error.message)
    }
});

module.exports = authRoute;