const express = require('express');
const { pool } = require("../config");
const userRoute = express.Router();

userRoute.get('/:id/tickets', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM tickets WHERE user_id = $1 RETURNING *",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

userRoute.post('/ticket/create', async (req, res) => {
  try {
    const {
      user_id,
      title,
      descrip,
      assigned,
      priority,
      ETA,
      email,
      status,
      campus_id,
      create_date,
      resolved,
    } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO tickets(user_id, title, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11;",
      [
        user_id,
        title,
        descrip,
        assigned,
        priority,
        ETA,
        email,
        status,
        campus_id,
        create_date,
        resolved,
      ]
    );
    res.status(200).send(rows);
  } catch (err) {}
  console.error(err.message);
});

userRoute.delete('/ticket/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "DELETE FROM tickets WHERE ticket_id = $1 RETURNING *;",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

userRoute.get('/ticket/:id/comments', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM ticket_Comments WHERE ticket_id = $1;",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = userRoute;