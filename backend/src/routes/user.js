const express=require('express');
const router=express.Router(); 
const {signup,signin, authorized} =require('./../controllers/auth')


router.post('/signin',signin);

router.post('/signup',signup);

router.post('/profile',authorized,(req,res)=>{
    res.status(200).json({user:req.user})
})
module.exports=router;