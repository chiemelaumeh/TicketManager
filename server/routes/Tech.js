const express = require('express');
const { pool } = require("../config");
const techRoute = express.Router();

techRoute.get("/tickets/campus/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM tickets WHERE campus_id = $1 RETURNING *;",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

/* Add a tech route for the single page tickets.*/

techRoute.get("/tickets/campus/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.params;
    const { campus } = req.params;
    const { priority } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM tickets WHERE campus_id = $1 RETURNING * AND WHERE status = ;",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

/* Add patch route for edit comment on single ticket page.*/

module.exports = techRoute;