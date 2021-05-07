const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Hortance:admin@cards.dx3ed.mongodb.net/cards?retryWrites=true&w=majority',{
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