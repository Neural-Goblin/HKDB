require ('dotenv').config()
console.log(process.env.MONGO_URL)
const exprees = require("express")
const mongoose = require("mongoose");

const app= exprees();
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")


app.use(exprees.json())



app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)

app.use("/api/v1/course", courseRouter)


async function main(){

  await mongoose.connect(process.env.MONGO_URL)
 
app.listen(3000, function (){
console.log("Listening on port 3000")
} 
)
}





main()




















































// require('dotenv').config()
// console.log(process.env.MONGO_URL)
// const express = require('express')
// const app = express()
// const port = 3000
// const mongoose = require("mongoose")

// const {userRouter} = require("./routes/user")
// const {courseRouter} = require("./routes/course")
// const {adminRouter} = require("./routes/admin")

// app.use(express.json())

// app.use("/api/v1/user" , userRouter);
// app.use("/api/v1/admin" , adminRouter);
// app.use("/api/v1/course" , courseRouter);


// async function main(){

// console.log ("DB CONNECTING.......")


// await mongoose.connect(process.env.MONGO_URL)
// console.log("........DB CONNECTED.......")

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// }


// main()
