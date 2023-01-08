require("dotenv").config();
const { Pool } = require("pg");

const devConfig = {
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
  localhost: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PW,
  user: process.env.DATABASE_USER,
};

const connectionString = process.env.DATABASE_URL;

const proConfig = {
  connectionString,
};
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
