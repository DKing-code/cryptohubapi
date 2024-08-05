const mongoose = require('mongoose');


const accountSchema = mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    serverId : {type:String,required:true,unique:true},
    ico : {type:String,default:'BTC'}, 
    rigs: {type:String,default: "0"},
    serverStatus:{type:String, enum:['active', 'inactive'], default:'inactive'},
    hashRate: {type:String,default: "0/HST"},
    balance1:{type:Number,default:0},
    balance2:{type:Number,default:0},
    balance3:{type:Number,default:0},
    balance4:{type:Number,default:0},
    
},{timestamps:true})



const accountModel = mongoose.model('Account',accountSchema)


module.exports = accountModel;