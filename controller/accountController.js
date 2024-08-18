const accountModel = require('../model/accountModel')


// GET USER ACCOUNT
const getUserAccount = async(req,res)=>{
    try {
        const {id} = req.params 
        const getUser = await accountModel.findOne({user:id})
        if(!getUser){
            return res.status(400).json({status:false,msg:'No user'})
        }

        res.status(200).json({status:true,data : getUser})
    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


const getUserAccountBalances = async (req, res) => {
    try {
      const { id } = req.params; // Assume the user ID is passed as a parameter
  
      // Find the account associated with the user
      const account = await accountModel.findOne({ user: id }).populate('user', 'name email'); // Assuming you want to populate user info
  
      if (!account) {
        return res.status(404).json({ message: 'Account not found for this user' });
      }
  
      // Array of balance objects
      const balances = [
        { name: 'balance1', amount: account.balance1   },
        { name: 'balance2', amount: account.balance2  },
        { name: 'balance3', amount: account.balance3  },
        { name: 'balance4', amount: account.balance4 },
      ];
  
      // Response with an array of balance objects
      return res.status(200).json(balances);
    } catch (error) {
      console.error('Error fetching account:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };




// ADD NEW ACCOUNT
const addAccount = async(req,res)=>{
    try {
        const data = req.body 
        const addAccount = await accountModel.create(data)
        if(!addAccount){
            return res.status(400).json({status:false,msg:'Account not added'});
        }

        res.status(201).json({status:true,msg:'Account added'})

    } catch (error) {
        return res.status(500).json({status:false,msg:error.message})
    }
}


// EDIT ACCOUNT
const editAccount = async(req,res)=>{
    try {
        const {id} = req.params
        const data = req.body

        console.log(id)
        const editAccount = await accountModel.updateOne({user:id},data)
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
    getUserAccountBalances,
    addAccount,
    editAccount,
    deleteAccount
}