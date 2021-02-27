const express = require('express');
const route = express();
const mongoose = require('mongoose');
const userSchema = require('../models/userPassport');
const getToken = require('../jwt');
const validator = require('express-validator');

route.use(validator());
route.post('/signin' , async function(req, res){
    const foundUser = await userSchema.findOne({email : req.body.email,
   password : req.body.password});
    if(foundUser){
     res.status(200).send({
       _id : foundUser._id,
       email : foundUser.email,
       
     })
    }
    else{
     return res.status(401).send({message : 'Invalid password or email!'})
    }
   
})

route.post('/signup',  async function(req, res){
  
    const user = new userSchema({
      email : req.body.email,
      password : req.body.password
    });
    const foundUser = await userSchema.findOne({email : user.email}).exec();
    if (foundUser){
      return res.status(214).send({message : 'email is already!'});
    }
    req.checkBody('email' , 'Invaild email!').isEmail();
    req.checkBody('password' , 'Invaild passsword!').isLength({min:4});
    const errors = req.validationErrors();
    console.log(errors);
    if(errors){
      let resErrors = '';
      errors.forEach((error)=> resErrors += error.msg + " ")
      return res.status(401).send({resErrors : resErrors})
    }
       
       const newUser = await user.save();
       if(newUser){
         res.status(200).send({
           _id : newUser._id,
           email : newUser.email,
           token : getToken(newUser)
         })
       }
   });

module.exports = route;