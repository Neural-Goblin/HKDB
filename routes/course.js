

const { Router } = require("express")
const courseRouter = Router();

//If user Want to buy a PARTICULAR course.....
courseRouter.post('/purchases' ,  function (req , res ){
    
    res.json({
      msg:"If user Want to buy a PARTICULAR course...."

    })
   
})



//.
courseRouter.get('/preview' ,  function (req , res ){
    
    res.json({
      msg:"ALL THE COURSES THAT ARE AVAILABLE ON WEBSITE......."
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