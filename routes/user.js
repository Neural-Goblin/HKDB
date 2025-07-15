// //const express = require("express")

const { Router } = require("express")
const userRouter = Router();
const {userModel} = require('../db')
const jwt = require("jsonwebtoken")
const JWT_USER_PASSWORD = "ALADLD123"
userRouter.post('/signup' ,  async function (req , res ){
     const{email, password , firstName , lastName} = req.body;
        
       await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
       })

    res.json({
      msg:"signup succeded "
    })
   
})


userRouter.post('/signin' ,  async function (req , res ){
    
     const {email , password }  = req.body;

     const user  = await userModel.findOne({
      email :email ,
      password :password  
     })

     if(user){
        const token = jwt.sign({
          id:user._id
        }, JWT_USER_PASSWORD)
       
res.json({
         sent_token:token,
         idt:user[0]._id
    })

     }

       
else{
    res.json({
      msg:"status 403"
    })
  }   
})



//Returns all the course that user has Purchassed 
userRouter.get('/purchases' ,  function (req , res ){
    
    res.json({
//
      msg:"Returns all the course that user has Purchassed "
    })
   
})







module.exports = {
    userRouter :userRouter
}


































































































// const { Router }  = require("express")
// const { userModel }  = require("../db")
// const userRouter = Router()
// const jwt = require("jsonwebtoken")
// const { JWT_USER_PASSWORD } = require("../config")

// userRouter.post ('/signup', async (req, res) => {
  
//  const {email , password , firstName , lastName} = req.body
// //Should convert the password so plaintext password not stored in db 

//  await userModel.create({
//      email:email ,
//      password:password ,
//      firstName :firstName ,
//      lastName :lastName 

     
// })

//     res.json({
//         message:"Signup Succeded "
//     })

// })

// //Ideally password should be hashed ,and hence you cant store plain text in  

// userRouter.post ('/signin', async (req, res) => {
//   const {email , password } = req.body 
 
//     const user = await userModel.findOne({
//         email :email  , 
//         password :password 
         
//     })
        
//    if(user){
//         const token =  jwt.sign({

//              id:user._id,
//          },JWT_USER_PASSWORD)
      


//    res.json({
//           token:token,
          
//    })   
     
// }
//    else{
         
//     res.status(403).json({
//         message:"incorrect creds "
//     })

//       }

   
// })


// userRouter.get ('/purchases', (req, res) => {
//   res.json({
//         message:"All Courses  users purchased  "
//     })
// })


// module.exports={
//     userRouter:userRouter
// }