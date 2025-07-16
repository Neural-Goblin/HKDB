const { Router } = require("express")

const  adminRouter = Router()  
const {adminModel, courseModel} = require("../db")
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');
const { adminMiddleware } = require("../middleware/admin");



adminRouter.post('/signup' ,  async function (req , res ){
     const{email, password , firstName , lastName} = req.body;
             
            await adminModel.create({
             email:email,
             password:password,
             firstName:firstName,
             lastName:lastName
            })
     
         res.json({
           msg:"signup succeded "
         })


    res.json({
      msg:"signup endpoint"
    })
   
})




adminRouter.post('/signin' ,  async function (req , res ){
    const {email , password }  = req.body;
 
      const admin  = await adminModel.findOne({
       email :email ,
       password :password  
      })
 
      if(admin){
         const token = jwt.sign({
           id:admin._id
         }, JWT_ADMIN_PASSWORD)
        
 res.json({
          sent_token:token,
          idt:admin._id
     })
 
      }
 
        
 else{
     res.json({
       msg:"status 403"
     })
   }   
   
})


adminRouter.post('/course' , adminMiddleware, async function (req , res ){
   const adminId = req.userId
   
   
   const{title , description , imageurl , price} = req.body;

   const course = await courseModel.create({
    title:title,
    description:description,
    imageurl:imageurl,
    price:price,
    creatorId:adminId

   })

    res.json({
      message:"course_created",
      courseId:course._id
    })
   
})
adminRouter.put('/course' , adminMiddleware, async function (req , res ){
   const adminId = req.userId;  

const{title , description , imageurl , price , courseId} = req.body;

const course = await courseModel.updateOne({
     _id:courseId,
     creatorId:adminId

},{
    title:title,
    description:description,
    imageurl:imageurl,
    price:price
    

   })
  
    res.json({
      msg:"course updated",
      courseId:courseId
    })
   
})

adminRouter.get('/course/bulk' ,adminMiddleware,  async function (req , res ){
  
  const adminId = req.userId
const courses = await courseModel.findOne({
     
     creatorId:adminId

})
  
    res.json({
      msg:"List of courses ",
      courses:courses
    })
   
})




module.exports ={
    
    adminRouter :adminRouter
}









































// const {Router} = require("express")
// const adminRouter = Router()
// const {adminModel, courseModel} = require("../db")
// const jwt = require("jsonwebtoken")
// const { JWT_ADMIN_PASSWORD } = require("../config")
// const { adminMiddlware } = require("../middleware/admin")
// const { course } = require("./course")




// adminRouter.post ('/signup', async (req, res) => {
//   const {email , password , firstName , lastName} = req.body
// //Should convert the password so plaintext password not stored in db 

//  await adminModel.create({
//      email:email ,
//      password:password ,
//      firstName :firstName ,
//      lastName :lastName 

     
// })

//     res.json({
//         message:"Signup Succeded of admin  "
//     })

// })


// adminRouter.post ('/signin', async (req, res) => {
// const {email , password } = req.body 
 
//     const admin = await adminModel.findOne({
//         email :email  , 
//         password :password 
         
//     })
        
//    if(admin){
//         const token =  jwt.sign({
//             id: admin._id
//          },JWT_ADMIN_PASSWORD)
      


//    res.json({
//           token:token,
//           admindata:admin
//    })   
     
// }
//    else{
         
//     res.status(403).json({
//         message:"incorrect creds "
//     })

//       }

   
// })

// //This endpoint  let admin create a course 
// adminRouter.post ('/course', adminMiddlware, async (req, res) => {
//   const adminId = req.userId ;

//   const {title  , description , imageUrl , price } = req.body 

// const course   = await courseModel.create({
//     title:title  ,
//      description:description ,
//      imageUrl:imageUrl, 
//      price:price ,
//      CreatorId :adminId
// })

//     res.json({
//         message:" course created",
//         courseId:course._id
//     })
// })


// //to Update the course 

// adminRouter.put('/course', adminMiddlware , async  (req, res) => {

// const adminId = req.userId;

// const {title , description , imageUrl , price  , courseId} = req.body ;


// const course  = await courseModel.updateOne({
//    _id:courseId ,
//    CreatorId:adminId 


// },

// {
//     title:title,
//     description:description,
//     imageurl:imageUrl , 
//     price:price , 

// })



//  res.json({
//         message:"Course Updated  ",
//         courseId:course._id 
//     })
// })



// adminRouter.get ('/course/bulk',adminMiddlware,  async (req, res) => {


//  const adminId = req.userId ; 

//  const courses   = await courseModel.find({

//   CreatorId:adminId 

//  })

//  res.json({
        
//     courses:courses.title
//     })
// })




// module.exports = {
//     adminRouter :adminRouter
// }