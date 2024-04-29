const express= require('express')
const mongoose = require('mongoose');

const app = express()


const userRoute = require('./routes/userRoute')


app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/cryptomin').then(()=>{
    app.listen(4000,()=>{
        console.log('Connected');
    })
}).catch(err=>{
    console.log('Error connecting')
})


app.use('/user', userRoute)






