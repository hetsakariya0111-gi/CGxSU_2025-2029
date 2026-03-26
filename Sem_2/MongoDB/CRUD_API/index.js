const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt=require("bcrypt");




// middleare 
app.use(express.json());

// Connect Db 
mongoose.connect("mongodb://127.0.0.1:27017/AuthDatabase")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));



//   Create Schema . 

const UserSchema = new mongoose.Schema({
   name:{
      type:String,
      required:true,
   },
    email:{
      type:String,
      required:true,
   },
    password:{
      type:String,
      required:true,
   }
})


// Model 

const User = mongoose.model("User",UserSchema); 
  
//  Login or Register . 


// Register .    
// Post Route . 


app.post("/register",async(req,res)=>{
   try {
      const {name,email,password} = req.body; 


      const hashedpassword = await bcrypt.hash(password,10)

      const user = new User({
         name:name,
         email:email,
         password:hashedpassword,
      })

      await user.save(); 

      res.status(201).json({msg:"Resgtation Succesfully"})

      
   } catch (error) {
      res.status(404).send(error)
   }
})



// Login Route 
app.post("/login",async(req,res)=>{
   try {
   const {email,password} = req.body; 
    
   const user = await  User.findOne({email}); 

   if(!user){
      return res.status(401).json({msg:"User Not Found"})
   }
  
   const isMatch = await bcrypt.compare(password,user.password)

if(!isMatch){
   return  res.json({msg:"wrong Password"})
}

   res.status(201).json({msg:"Login Succesfull"})
      
   } catch (error) {
     res.status(404).send(error)
   }
})









//  Server Running . 
  app.listen(3000, () => {
  console.log("Server running on port 3000");
});ff