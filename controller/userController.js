const userModel = require('../model/userModel');
const accountModel = require('../model/accountModel')
const generateUniqueId = require('generate-unique-id');

const getAllUsers = async(req,res) =>{

    try{
        const users = await userModel.find({}).select('-password');
        if(!users){
            return res.status(400).json({status:'false',msg:'No users found'});
        }
        res.status(200).json({status:true,data:users})
    }catch(err){
        res.status(400).json({status:false,msg:err.message});
    }
}



const addUser = async(req,res)=>{
    try {
        const data = req.body;
        const createUser = new userModel(data);
        const saveUser = await createUser.save();
        if(!saveUser){
            return res.status(400).json({status:'false',msg:'Not Created'});
        }

        // CREATE ACCOUNT FOR USER
        const serverId = generateUniqueId({ length: 6,useLetters: true});
          const userData = {
            user: await saveUser?._id,
            serverId :  serverId.toUpperCase()
          }
        let createAccount = await accountModel.create(userData)
        if(!createAccount){
            return res.json({status:false,msg:"Account not created"})
        }

        res.status(201).json({status:true,msg:'User created'});

    } catch (error) {
        return res.status(500).json({status:false,msg:error.message});
    }
}





module.exports = {
    getAllUsers,
    addUser
}