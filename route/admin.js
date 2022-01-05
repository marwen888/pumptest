const router = require('express').Router()
const User = require('../model/User')
//add user


//get all users
router.get('/getuser',(req,res)=>{
User.find()
       .then(user=>res.send({"users": user}))
       .catch(error=>console.log(error))


})
//get one user
router.get('/getuser/:id',(req,res)=>{
       let {_id} = req.params;

        User.findById({_id})
       .then(user=>res.send({"oneuser": user}))
       .catch(error=>console.log(error))


})

//edituser
router.put('/edituser/:_id',(req,res)=>{
const{_id}=req.params
const{name,password,email}=req.body
User.findByIdAndUpdate({_id},{$set:{name,password,email}})
       .then(user=>res.send({"usermodified": user}))
       .catch(error=>console.log(error))
})
//deleteuser
router.delete('/deleteuser/:_id',(req,res)=>{
const{_id}=req.params
User.findByIdAndDelete({_id})
       .then(user=>res.send({"user has been delete": user}))
       .catch(error=>console.log(error))
})
module.exports=router