const jwt = require('jsonwebtoken')
const { JWT_ADMIN_PASSWORD } = require('../config')

function adminMiddleware(req,res , next){

  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD) 

   if(decoded){
    req.userId= decoded.id;
    next()
   }
   else{
    res.json({
        msessage:"not signed in "
    })

    }

}






module.exports={
    adminMiddleware:adminMiddleware
}











































// const jwt = require("jsonwebtoken")
// const { JWT_USER_PASSWORD } = require("../config")




// function userMiddlware(req ,res , next){

// const token = req.headers.token ;
// const decoded = jwt.verify(token , JWT_USER_PASSWORD )


//  if(decoded){
//      req.userId = decoded.id 
//    next()

//  }
//   else{
//     res.status(403).json({
//         message:"You are not signec in" 
//     })
//   }
  
// }


// module.exports ={
// userMiddlware :userMiddlware     

// }