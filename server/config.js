require('dotenv').config();
const {Pool} = require('pg');

const connection = process.env.DATABASE_URL

const pool = new Pool({
        connectionString: connection
});

module.exports = pool;