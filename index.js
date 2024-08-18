const express= require('express')
const mongoose = require('mongoose');
const cors =require("cors")

const app = express()


const userRoute = require('./routes/userRoute')
const cardRoute = require('./routes/cardRoute')
const accountRoute = require('./routes/accountRoute')
const transferRoute = require('./routes/transferRoute')


app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/cryptomin').then(()=>{
    app.listen(4000,()=>{
        console.log('Connected');
    })
}).catch(err=>{
    console.log('Error connecting')
})


app.use('/user', userRoute)
app.use('/card', cardRoute)
app.use('/account', accountRoute)
app.use('/transfer', transferRoute)







