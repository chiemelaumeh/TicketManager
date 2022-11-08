const jwt = require('jsonwebtoken');
require('dotenv').config()

const authorizeToken = (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN, (error, user) => {
        if (error) return res.sendStatus(403)
        res.send(user)
    });
}

module.exports = authorizeToken;