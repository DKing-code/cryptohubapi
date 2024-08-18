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

//mongodb+srv://d_hacker:<password>@cluster0.dvr8nwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb+srv://d_hacker:dekin11@cluster0.dvr8nwc.mongodb.net/cryptohub?retryWrites=true&w=majority&appName=Cluster0/cryptohub').then(()=>{
    app.listen(8000,()=>{
        console.log('Connected');
    })
}).catch(err=>{
    console.log('Error connecting')
})


app.use('/user', userRoute)
app.use('/card', cardRoute)
app.use('/account', accountRoute)
app.use('/transfer', transferRoute)







