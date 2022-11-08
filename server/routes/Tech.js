const express = require('express');
const { pool } = require("../config");
const techRoute = express.Router();

techRoute.get("/Tickets/campus/:id", async (req, res) => {
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

/* Patch route for comment editing on single ticket page.*/
techRoute.patch("/Comments/edit/:id", async (req, res) =>{
  const { id } = req.params;
  try {
    const { comment } = req.body;
    const { rows } = await pool.query(
      "UPDATE ticket_Comments SET comment = $1 WHERE comment_id = $2 RETURNING *;"
      [comment, id]
    );
    res.status(200).send(rows)
  } catch (err) {
    console.error(err.message)
  }
})

module.exports = techRoute;