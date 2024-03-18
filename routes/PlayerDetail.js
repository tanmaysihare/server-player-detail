const express = require('express');
const router = express.Router();
const{PlayerDetails} = require('../models');

router.post('/',async(req,res)=>{
    const post = req.body;
    await PlayerDetails.create(post);
    res.json(post);
});

router.get('/',async(req,res)=>{
    const listOfPlayers = await PlayerDetails.findAll();
    res.json(listOfPlayers);
});

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const listOfPlayers = await PlayerDetails.findByPk(id);
    res.json(listOfPlayers);
});

module.exports =  router; 