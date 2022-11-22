const express = require("express");
const pool = require("../config");
const techRoute = express.Router();
const {check, validationResult} = require("express-validator")

techRoute.get("/tickets/campus/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM tickets WHERE campus_id = $1;",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

/* Add a tech route for the single page tickets.*/

techRoute.get("/ticket/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT tickets.ticket_id, tickets.priority, tickets.descrip, tickets.assigned, tickets.category,tickets.user_id, TO_CHAR(create_date, 'Mon dd, yyyy'), campus.name, accounts.userName, accounts.profilePic FROM tickets JOIN campus ON tickets.campus_ID = campus.campus_id JOIN accounts ON tickets.user_id = accounts.user_id WHERE ticket_id = $1",
      [id]
    );

    res.status(200).send(rows)
  } catch (err) {
    console.error(err.message)
  }
});

techRoute.put("/tickets/claim/:id", async (req, res) => {
  const {id} = req.params
  const {assigned} = req.body
  try {
    const { rows } = await pool.query('Update tickets set assigned = $1 where ticket_id = $2 RETURNING *',[assigned,id])
    res.send(rows)
  } catch (error) {
    res.status(404).send("Error Claiming Ticket")
  }
});

techRoute.get("/ticket/:id/comment", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM ticket_Comments WHERE ticket_id = $1",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
});

techRoute.post("/ticket/comment", [check('comment').not().isEmpty().withMessage('Type in a Comment')], async (req, res) => {

const { user_id, ticket_id, comment } = req.body;
const error =validationResult(req).formatWith(({msg})=> msg)
if(!error.isEmpty()){
  res.status(404).json({error: error.mapped() })
}else{
    try {
    const { rows } = await pool.query(
      "INSERT INTO ticket_Comments(user_id, ticket_id, comment) VALUES($1, $2, $3)",
      [user_id, ticket_id, comment]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
}
});
// /* Add patch route for edit comment on single ticket page.*/
// techRoute.patch("//edit/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const { userName } = req.body;
//     const { rows } = await pool.query(
//       "UPDATE accounts SET userName = $1 WHERE user_id = $2 RETURNING *;",
//       [userName, id]
//     );
//     res.status(200).send(rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });


module.exports = techRoute;
