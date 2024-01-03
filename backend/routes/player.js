const express = require('express')
const router = express.Router()
const Player = require('../models/playerModel')

//get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'GeT all workouts'})
})

//GET a single workout
router.get('/:id', (req,res)=>{
    res.json({mssg:'GET a single workout'})
})

//POST a new workout
router.post('/', async (req,res)=>{
    const{hero,role,mmr}=req.body

    try {
        const player = await Player.create({hero, role, mmr})
        res.status(200).json(player)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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