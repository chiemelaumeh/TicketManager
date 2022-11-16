const express = require('express');
const pool = require("../config");
const userRoute = express.Router();
const {check, validationResult} = require("express-validator")

userRoute.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT *, TO_CHAR(create_date, 'Mon dd, yyyy') FROM tickets WHERE user_id = $1",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

userRoute.post('/ticket/create',[
check('category').not().isEmpty().withMessage('Choose a Category'),
check('priorty').not().isEmpty().withMessage('Choose Priorty'),
check('create_date').not().isEmpty().withMessage('Input Date'),
check('descrip').not().isEmpty().withMessage('Input a Description')
], async (req, res) => {
  const {
    user_id,
    category,
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

const error =validationResult(req).formatWith(({msg})=> msg)
// if (descrip === "" || create_date === "" ||category === "" || priority === "" ) return res.send('Fields cannot be empty');
  if(!error.isEmpty()){
    res.json({error: error.mapped() })
  }else{
    try {
      const { rows } = await pool.query(
        "INSERT INTO tickets(user_id, category, descrip, assigned, priority, ETA, email, status, campus_id, create_date ,resolved) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
        [
          user_id,
          category,
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
    } catch (err) {
      console.error(err.message);
    }
  }
  
});

userRoute.delete('/ticket/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "DELETE FROM tickets WHERE ticket_id = $1;",
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