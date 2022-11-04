import { pool } from "./pool";

const adminRoute = express.Router();
exports.getAll = adminRoute.get("/Accounts", getAllAccounts);
exports.getOne = adminRoute.get("/Accounts/:id", getOneAccount);
exports.createOne = adminRoute.post("/Accounts/create", createAccount);
exports.editOne = adminRoute.patch("/Accounts/edit/:id", editAccount);
exports.deleteOne = adminRoute.delete("/Account/delete/:id", deleteAccount);

const getAllAccounts = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM accounts");
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getOneAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = pool.query("SELECT * FROM accounts WHERE user_id = $1;", [
      id,
    ]);
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const createAccount = async (req, res) => {
  const { userName, acessRole, campus_id, email, profilePic, password } =
    req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO accounts (userName, acessRole, campus_id, email, profilePic, password) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;",
      [userName, acessRole, campus_id, email, profilePic, password]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const editAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const { userName } = req.body;
    const { rows } = await pool.query(
      "UPDATE accounts SET userName = $1 WHERE user_id = $2 RETURNING *;",
      [userName, id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(
      "DELETE FROM accounts WHERE user_id = $1;",
      [id]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};
