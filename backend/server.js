require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const playerRoutes = require('./routes/player.js')

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next()
})
//routes
app.use('/api/players',playerRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log('connected to db && listening on port 4000!!!');   //listen port 4000
        })
    })
    .catch((error)=>{
        console.log(error)
    })

