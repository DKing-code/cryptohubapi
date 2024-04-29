const userModel = require('../model/userModel');

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
        const createUser = await userModel.create(data);
        if(!createUser){
            return res.status(400).json({status:'false',msg:'Not Created'});

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