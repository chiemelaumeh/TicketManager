const express = require("express");
const cors = require("cors");
require('dotenv').config();


const app = express();

const port = process.env.PORT || 6001

const userRoute = require("./routes/User")
const adminRoute = require("./routes/Admin")
const techRoute = require("./routes/Tech")
const authRoute = require('./AuthRoute/register_login');
const {generateUploadURL} = require('./s3.js');
const authorizeToken = require("./AuthRoute/authToken");

app.use(cors());
app.use(express.json());

//testing s3 url route
app.get('/s3Url', async (req, res)=>{
  const url = await s3.generateUploadURL()
  res.send({url})
})

//routes import
app.use("/admin", adminRoute);
app.use("/tech", techRoute);
app.use("/user", userRoute)
app.use("/account", authRoute);
app.post('/test', authorizeToken);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});