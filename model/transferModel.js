const mongoose = require('mongoose');


const transferSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    from:{type:String},
    to:{type:String},
    amount:{type:Number},
    date:{type:String},
    status:{type:String,enum:['successful', 'failed','pending','verifying']},
})


const transferModel = mongoose.model('Transfer',transferSchema)


module.exports = transferModel