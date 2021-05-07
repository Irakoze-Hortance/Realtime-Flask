const express = require('express')
const bodyParser=require('body-parser')
const cors = require('cors')

require('./database/db')
const app=express()
const port=8080
const cardRouter=require('./routes/card.routes')

app.set('view engine', 'ejs');
app.set('view options', {layout: false});


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res) => {
    res.render('card',{cardDetails : {name:"mukunzi"},age:23})
})

app.use('/api/',cardRouter)
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})