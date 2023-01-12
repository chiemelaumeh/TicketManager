
const express = require("express");
const testRoute = express.Router();

testRoute.get("/test", async (req, res) => {
  try {

    res.status(200).json("Great");

  } catch (err) {
    console.error(err.message);
  }
});

module.exports = testRoute