require('dotenv').config();
const {Pool} = require('pg');

const {
    DATABASE_USER,
    DATABASE_PORT,
    DATABASE_HOST,
    DATABASE_PW,
    DATABASE_NAME} = process.env

    
const pool = new Pool({
    user: DATABASE_USER,
    port: DATABASE_PORT,
    host: DATABASE_HOST,
    database: DATABASE_NAME,
    password: DATABASE_PW
});

module.exports = pool;