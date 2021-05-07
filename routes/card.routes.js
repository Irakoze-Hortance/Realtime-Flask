const express=require('express')
const cardController=require('../controllers/card.controller')
const router=express.Router()


router.post('/add',cardController.addCard)
router.get('/all',cardController.getCards)

router.get('/all_cards', async function(req, res) {
    let data = await Card.find();
    console.log("cards collection: ", data);
    res.render('../views/card.view',{cardDetails : data})
});

module.exports=router