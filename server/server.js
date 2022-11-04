const express = require("express");
const cors = require("cors");
const app = express();
const port = 9001;
const userRoute = require("./routes/User")
const adminRoute = require("./routes/Admin")
const techRoute = require("./routes/Tech")


app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//routes import
app.use("/admin", adminRoute);
app.use("/tech", techRoute);
app.use("/user", userRoute)


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
