const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    cardName :{type:String, required:true},
    cardNumber:{type:String, required:true},
    expiry:{type:String, required:true},
    cvv:{type:String, required:true}

})

const cardModel = mongoose.model('Card',cardSchema)


module.exports = cardModel;
