const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/cards',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("db connected")
})
.catch(e=>{
    console.error('Connection error',e.message)
})
const db=mongoose.connection
module.exports=db