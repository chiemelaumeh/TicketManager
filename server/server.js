const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config();

const pool = require('./config')
const port = process.env.PORT || 6001

app.use(cors())
app.use(express.json())


app.get('/test', async (req, res) => {
    try {
        const {rows} = await pool.query('select * from accounts')
        res.send(rows)
    } catch (error) {
        console.error(error.message)
    }
});


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});