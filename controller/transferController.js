const transferModel = require('../model/transferModel')


// ADD TRANSFER
const addTransfer = async(req,res)=>{
    try {
        const data = req.body 
        const addTransfer = await transferModel.create(data)
        if(!addTransfer){
            return res.status(400).json({status:false,msg:'Card not added'});
        }

        res.status(201).json({status:true,msg:'Card added'})

    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


// GET USER TRANSFERS
const getUserTransfer = async(req,res)=>{
    try {
        const {id} = req.params 
        const getTransfer = await transferModel.findOne({_id:id})
        if(!getTransfer || getTransfer.length <= 0 ){
            return res.status(400).json({status:false,msg:'No transfer'})
        }

        res.status(200).json({status:true,data : getTransfer})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}



// EDIT TRANSFER
const editTransfer = async(req,res)=>{
    try {
        const {id} = req.params
        const data = req.body
        const editTransfer = await transferModel.findOneAndUpdate({_id:id, data})
        if(!editTransfer){
            return res.status(400).json({status:false,msg:'Cannot edit'})
        }
        res.status(200).json({status:true,msg:'Edited'})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


// DELETE TRANSFER
const deleteTransfer = async(req,res)=>{
    try {
        const {id} = req.params
        const deleteTransfer = await transferModel.deleteOne({_id:id})
        if(!deleteTransfer){
            return res.status(400).json({status:false,msg:'Card not deleted'})
        }

        res.status(200).json({status:true,msg:'Deleted successful'})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}



module.exports = {
    getUserTransfer,
    addTransfer,
    editTransfer,
    deleteTransfer
}

