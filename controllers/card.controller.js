const{Card,validateCard}=require('../models/card.model')

addCard=(req,res)=>{
    const body=req.body
    if(!body){
        return  res.status(400).json({
            success:false,
            error:'Provide all details'
        })
    }

    const {
        error
    } = validateCard(req.body)
    if (error)
        return res.status(400).send(error.details[0].message)

    const card = new Card(body)

    if (!card) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    card.save()
        .then((doc) => {
            return res.status(201).json({
                success: true,
                message: 'Card added'
            })
        })
}

getCards=(req,res)=>{
    Card.find()
    .then(()=>{
        if(docs.length<0){
            return  res.status(200).send({
                success:false,
                error:'Nothing to show'
            })
        }else{
            return res.status(200).send({
                success:true,
                data:docs
            })
        }
    }).catch(e=>{
        return res.status(400).send({
            success: false,
            message: "something went wrong!"
    })
})
}

module.exports={
    getCards,
    addcard
}