const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel')

//get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'GeT all workouts'})
})

//GET a single workout
router.get('/:id', (req,res)=>{
    res.json({mssg:'GET a single workout'})
})

//POST a new workout
router.post('/',(req,res)=>{
    const{title,load,reps}=req.body

    res.json({mssg:'POSt a new workout'})
})

//DeLeTe a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a workout'})
})
//update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a workout'})
})

module.exports = router