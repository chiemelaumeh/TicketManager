const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const authRoute = require('./AuthRoute/auth');

const port = process.env.PORT || 6001

app.use(cors());
app.use(express.json());


app.use('/register', authRoute);


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});