import express from "express"
const router  = express.Router()


router.get('/signup',(req,res)=>{
    console.log("signup");
    
})

router.get('/login',(req,res)=>{
    console.log("login");
    
})

router.get('/logout',(req,res)=>{
    console.log("logout");
    
})

export default router;
