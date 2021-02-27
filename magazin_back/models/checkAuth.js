const express = require('express');
const route = express();
const isAuth = require('../isAuth');

route.put('/' , isAuth, (req , res)=>{
    console.log('put!');
  })
  
route.get('/signin' , isAuth,  (req, res)=>{
    res.send('done!');
  })
  
route.get('/' , isAuth, (req,res)=>{
    res.send('done');
  })

module.exports = route;