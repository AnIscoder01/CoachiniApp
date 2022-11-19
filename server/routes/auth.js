const express=require("express")
const router=express.Router()
const {validator,registerRules, loginRules}=require('../middlewarse/validator');
const isAuth = require("../middlewarse/isAuth");
const { signUp, signIn, getCurrent ,usersList} = require("../controllers/authControllers");


//register user
router.post('/signup',registerRules,validator,signUp)

//signin"login"

router.post('/signin',loginRules,validator,signIn)
    

//current user
router.get('/current',isAuth,getCurrent) 

//user list 
router.get('/userslist',usersList)

module.exports=router