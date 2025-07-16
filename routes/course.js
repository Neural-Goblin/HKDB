

const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");


const courseRouter = Router();


//If user Want to buy a PARTICULAR course.....
courseRouter.post('/purchases' , userMiddleware,async function (req , res ){
     const userId = req.userId ; 
     const courseId = req.body.courseId;

      await purchaseModel.create({
        userId,
        courseId
      })
    res.json({
      msg:"Bought the course"

    })
   
})



//.
courseRouter.get('/preview' , async function (req , res ){
   const courses =    await courseModel.find({})

    res.json({
     all:courses 
    
    })

   
})





module.exports = {
  courseRouter: courseRouter

}












// const { Router }  = require("express")
// const courseRouter = Router()




// courseRouter.post('/purchase', (req, res) => {
//   res.json({
//         message:"All Courses "
//     })
// })


// courseRouter.get('/preview', (req, res) => {
//   res.send('Hello World!')
// })

// module.exports={
//     courseRouter:courseRouter
// }