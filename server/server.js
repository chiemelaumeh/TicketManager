const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();


const port = process.env.PORT || 6001

const userRoute = require("./routes/User")
const adminRoute = require("./routes/Admin")
const techRoute = require("./routes/Tech")
const authRoute = require('./AuthRoute/auth');


app.use(cors());
app.use(express.json());

//routes import
app.use("/admin", adminRoute);
app.use("/tech", techRoute);
app.use("/user", userRoute)
app.use('/register', authRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});