const express = require('express')
const cors = require('cors')
const app = express()
const port = 9001

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res)=>{
    try {
        res.status(200).send('good test')
    } catch (error) {
        console.error(error.message)
    }
} )


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})