const accountModel = require('../model/accountModel')


// GET USER ACCOUNT
const getUserAccount = async(req,res)=>{
    try {
        const {id} = req.params 
        const getUser = await accountModel.findOne({_id:id})
        if(!getUser){
            return res.status(400).json({status:false,msg:'No user'})
        }

        res.status(200).json({status:true,data : getUser})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}




// ADD NEW ACCOUNT
const addAccount = async(req,res)=>{
    try {
        const data = req.body 
        const addAccount = await accountModel.create(data)
        if(!addAccount){
            return res.status(400).json({status:false,msg:'Card not added'});
        }

        res.status(201).json({status:true,msg:'Card added'})

    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


// EDIT ACCOUNT
const editAccount = async(req,res)=>{
    try {
        const {id} = req.params
        const data = req.body
        const editAccount = await accountModel.findOneAndUpdate({_id:id, data})
        if(!editAccount){
            return res.status(400).json({status:false,msg:'Cannot edit'})
        }
        res.status(200).json({status:true,msg:'Edited'})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


// DELETE ACCOUNT
const deleteAccount = async(req,res)=>{
    try {
        const {id} = req.params
        const deleteaccount = await accountModel.deleteOne({_id:id})
        if(!deleteaccount){
            return res.status(400).json({status:false,msg:'Card not deleted'})
        }

        res.status(200).json({status:true,msg:'Deleted successful'})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


module.exports = {
    getUserAccount,
    addAccount,
    editAccount,
    deleteAccount
}