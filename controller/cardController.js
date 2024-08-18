const cardModel = require('../model/cardModel')



// GET USER CARD
const getUserCards = async(req,res)=>{
    try {
        const {id} = req.params
        const getCards = await cardModel.find
        ({user:id})
        if(!getCards){
            return res.status(400).json({status:false})
        }

        return res.status(200).json({status:true,data:getCards})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


const addCard = async(req,res)=>{
    try {
        const data = req.body 
        const addCard = await cardModel.create(data)
        if(!addCard){
            return res.status(400).json({status:false,msg:'Card not added'});
        }

        res.status(201).json({status:true,msg:'Card added'})

    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


// edit card
const editCard = async(req,res)=>{
    try {
        const {id} = req.params
        const data = req.body
        const editcard = await cardModel.findOneAndUpdate({_id:id, data})
        if(!editcard){
            return res.status(400).json({status:false,msg:'Cannot edit'})
        }
        res.status(200).json({status:true,msg:'Edited'})
    } catch (error) {
        
    }
}


// DELETE CARD 
const deleteCard = async(req,res)=>{
    try {
        const {id} = req.params
        const deletecard = await cardModel.deleteOne({_id:id})
        if(!deleteCard){
            return res.status(400).json({status:false,msg:'Card not deleted'})
        }

        res.status(200).json({status:true,msg:'Deleted successful'})
    } catch (error) {
        
    }
}


module.exports = {
    getUserCards,
    addCard,
    editCard,
    deleteCard
}