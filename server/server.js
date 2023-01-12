const express = require("express");
const cors = require("cors");
require('dotenv').config();


const app = express();

const port = process.env.PORT || 6001

const userRoute = require("./routes/User")
const adminRoute = require("./routes/Admin")
const techRoute = require("./routes/Tech")
const testRoute = require("./routes/test")
const authRoute = require('./AuthRoute/register_login');
// const loginRoute= require('./AuthRoute/register_login');
const generateUploadURL = require('./s3.js');
const authorizeToken = require("./AuthRoute/authToken");

app.use(cors());

// allowing cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(express.json());

//testing s3 url route
app.get('/s3Url', async (req, res)=>{
  const url = await generateUploadURL()
  res.send({url})
})



//routes import
app.use("/admin", adminRoute);
app.use("/tech", techRoute);
app.use("/user", userRoute)
app.use("/account", authRoute);
app.post('/test', authorizeToken);
app.get("/test", testRoute)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

