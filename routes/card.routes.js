const express=require('express')
const cardController=require('../controllers/card.controller')
const router=express.Router()

router.post('/add',cardController.addcard)
router.get('/all',cardController.getCards)

module.exports=router