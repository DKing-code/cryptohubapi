/**  
 * MODEL FOR THE USER COLLECTION
 */


const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email : {type : String,unique:true,required: true,},
    phone: { type : String ,unique:true,required:true},
    fullname : { type :String, required:true},
    password : {type:String,required:true},
    country : { type :String, required:true},


},{timestamps:true})


const  userModel = mongoose.model('User',userSchema)

module.exports = userModel

