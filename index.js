const express = require('express')
const bodyParser=require('body-parser')
const cors = require('cors')

require('./database/db')
const app=express()
const port=8080
const cardRouter=require('./routes/card.routes')
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/',cardRouter)
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})