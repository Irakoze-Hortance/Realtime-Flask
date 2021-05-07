const express=require('express')
const mongoose=require('mongoose')
const cardController=require('../controllers/card.controller')
const router=express.Router()
const{Card,validateCard}=require('../models/card.model')

router.post('/add',cardController.addCard)
router.get('/all',cardController.getCards)

router.get('/all_cards', async function(req, res) {
    const data = await Card.find();
    // console.log("cards collection: ", data);
    res.render('./../views/card',{cardDetails : data})
});

module.exports=router