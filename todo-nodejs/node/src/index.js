const express = require('express')
const app = express()
const route = require('./routes')
const port = 3000;
const morgan = require('morgan')
const db = require ('./config/db')
const cors = require('cors')
app.use(morgan('combined'))
app.use(cors([{
  origin : "http://localhost:3001"
}]))
app.use(express.urlencoded({
  extended : true,
}))
app.use(express.json())

route(app)
db.connect()

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
})