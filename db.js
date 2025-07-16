
const mongoose = require("mongoose")
const Schema =  mongoose.Schema
const ObjectId =  mongoose.Types.ObjectId

mongoose.connect("mongodb+srv://dattaj302:klO5afORIYxgSGvH@cluster0.galochp.mongodb.net/HKDB")

const  UserSchema = new Schema ({
    
    email :{type:String , unique:true },
    password:String, 
    firstName:String,
    lastName:String

})




const  adminSchema = new Schema ({
    
    email :{type:String , unique:true },
    password:String, 
    firstName:String,
    lastName:String

})




const  courseSchema = new Schema ({
    title :String, 
    description:String,
    price:Number, 
    imageUrl:String,
    /*ADMINID*/ creatorId:ObjectId // WHICH ADMIN HAS CREATED THE COURSE 

})

const  purchaseSchema = new Schema ({
    
    
    /*COURSEID*/ courseId:ObjectId, // Which COurse Has Been bought
    /*USERID  */ userId:ObjectId // Which user Has bought the course 


})




const userModel = mongoose.model("user" ,UserSchema)
const adminModel = mongoose.model("admin" ,adminSchema)
const courseModel = mongoose.model("course" ,courseSchema)
const purchaseModel = mongoose.model("purchase" ,purchaseSchema)



module.exports = {
    userModel:userModel,
    adminModel:adminModel,
    courseModel:courseModel,
    purchaseModel:purchaseModel
}



































































// const UserSchema = new Schema({
  
//   email: {type: String, unique: true},
//   password: String,
//   firstName: String,
//   lastName: String,

// });

// const adminSchema = new Schema({

    
//     email:String ,
//     password: String,
//     firstName: String ,
//     lastName: String 


// });





// const courseSchema = new Schema({

    
//     title:String ,
//     description: String,
//     price: Number ,
//     imageurl: String ,
//     CreatorId:ObjectId


// });


// const purchaseSchema = new Schema({

//  userId:ObjectId,
//  courseId:ObjectId




// })





// const userModel = mongoose.model('user', UserSchema);
// const adminModel = mongoose.model('admin', adminSchema);
// const courseModel = mongoose.model('course', courseSchema);
// const purchaseModel = mongoose.model('purchase', purchaseSchema);


// module.exports = {
//     userModel,
//     adminModel,
//     courseModel,
//     purchaseModel 
// }