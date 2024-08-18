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

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await userModel.findOne({ email,password });
      if (!user) {
        return res.status(404).json({ status: false, msg: 'User not found' });
      }
  
      // Check if the password is correct
    //   const isPasswordValid = await bcrypt.compare(password, user.password);
    //   if (!isPasswordValid) {
    //     return res.status(400).json({ status: false, msg: 'Invalid credentials' });
    //   }
  
      // Generate JWT token
    //   const token = jwt.sign(
    //     { userId: user._id, email: user.email },
    //     process.env.JWT_SECRET,
    //     { expiresIn: '1h' } // Token expires in 1 hour
    //   );
  
      res.status(200).json({
        status: true,
        msg: 'Login successful',
        // token,
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }
      });
    } catch (error) {
      res.status(500).json({ status: false, msg: error.message });
    }
  };





module.exports = {
    getAllUsers,
    addUser,
    loginUser
}