const mongoose=require('mongoose')
const Joi=require('joi')
const Schema=mongoose.Schema

const Card= new Schema({
    card_id:{
        type: String,
        required: true,
        unique:true
    },
    card_owner:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    fare:{
        type:Number,
        default:250,
    },
    final_Amount:{
        type:Number,
    }

})

function  validateCard(Card){
    const JoiSchema=Joi.object({
        card_id:Joi.string(),
        card_owner:Joi.string(),
        amount:Joi.number(),
        fare:Joi.number(),
        final_Amount:Joi.number(),
    }).options({abortEarly:false});
    return JoiSchema.validate(Card)

}
module.exports.Card= mongoose.model('Card',Card)
module.exports.validateCard=validateCard