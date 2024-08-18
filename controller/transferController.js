const transferModel = require('../model/transferModel')
const accountModel = require("../model/accountModel")
const generateUniqueId = require('generate-unique-id');


// ADD TRANSFER
const addTransfer = async(req,res)=>{
    try {
        const data = req.body 

        const serverId = generateUniqueId({ length: 12,useLetters: true});

        const account = await accountModel.findOne({ user:data.user });
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }

        // adjust transfer based on transfer type
        if (data?.typeOfTransfer === 'deposit') {
            account[data.to] += data.amount;
        } else if (data.typeOfTransfer === 'withdrawal') {
            if (account[data.from] < data.amount|| account[data.from] <= 0) {
                return res.json({status:false , msg: 'Insufficient funds' });
            }
            account[data.from] -= data.amount;
        } else {
            return res.status(400).json({ error: 'Invalid type of transfer' });
        }

        const addTransfer =  new transferModel({transId:serverId.toUpperCase(), ...data})
        await addTransfer.save()

        await account.save();



        res.status(201).json({status:true,msg:'tras added'})

    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


// GET USER TRANSFERS
const getAllTransfer = async(req,res)=>{
    try {
        const {id} = req.params 
        const getTransfer = await transferModel.find({})
        if(!getTransfer || getTransfer.length <= 0 ){
            return res.status(400).json({status:false,msg:'No transfer'})
        }

        res.status(200).json({status:true,data : getTransfer})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}

// GET USER TRANSFERS
const getTransferById = async(req,res)=>{
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


const getUserTransfer = async(req,res)=>{
    try {
        const {id} = req.params 
        const getTransfer = await transferModel.find({user:id})
        if(!getTransfer || getTransfer.length <= 0 ){
            return res.json({status:false,msg:'No transfer'})
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
        const editTransfer = await transferModel.findOneAndUpdate({_id:id},data)
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
    deleteTransfer,
    getAllTransfer,
    getTransferById
}

