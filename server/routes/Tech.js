const express = require('express');
const { pool } = require("../config");
const techRoute = express.Router();

techRoute.get("/tickets/campus/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM tickets WHERE Campus_id = $1 RETURNING *;",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = techRoute;