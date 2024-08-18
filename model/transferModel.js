const mongoose = require('mongoose');


const transferSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    transId: {type:String},
    from:{type:String},
    to:{type:String},
    amount:{type:Number},
    date:{type:String},
    typeOfTransfer: {type:String,enum:['deposit','withdrawal'],required:true},
    status:{type:String,enum:['successful', 'failed','pending','verifying'],default:"pending"},
},{timestamps:true})


const transferModel = mongoose.model('Transfer',transferSchema)


module.exports = transferModel