import { pool } from "./pool";

const techRoute = express.Router();
exports.getTickets = techRoute.get("/tickets/campus/:id", getAllTickets);

const getAllTickets = async (req, res) => {
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
};
