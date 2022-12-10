const jwt = require("jsonwebtoken")
require('dotenv').config()
const User = require("../models/user");
const mongoose = require("mongoose")

module.exports = (req,res,next)=> {
    var {token} = req.headers
    if(!token){
        res.status(401).json({error: "not logged in"})
    }
    token = token.replace("Bearer ",'')
    jwt.verify(token,process.env.JWT_S,(error,id)=>{
        if(error){
        return res.status(401).json({error:"not logged in"})
        }
        const {_id} = id
        res.locals.id = id
        console.log(id)
        User.findById(_id).then(user =>{
            res.locals.user = user;
            console.log(res.locals.user)
            next()})
    })

}