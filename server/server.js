const express = require("express");
const cors = require("cors");
const app = express();
const port = 9001;

//routes import
import { getAll, getOne, createOne, editOne, deleteOne } from "./routes/Admin";
import { getTickets } from "./routes/Tech";
import { getTicket, createTicket, delTicket, getAllComments } from "./routes/User"

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//Admin Routes
app.use("/admin", getAll, getOne, createOne, editOne, deleteOne);
// app.use("/admin", getOne);
// app.use("/admin", createOne);
// app.use("/admin", editOne);
// app.use("/admin", deleteOne);

//Tech Routes
app.use("/tech", getTickets);

//User Routes
app.use("/user", getTicket)
app.use("/user", createTicket)
app.use("/user", delTicket)
app.use("/user", getAllComments)

app.get("/", (req, res) => {
  try {
    res.status(200).send("good test");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
