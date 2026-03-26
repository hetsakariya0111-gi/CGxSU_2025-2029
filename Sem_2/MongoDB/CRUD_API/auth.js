const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/aggregation")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User",UserSchema);

app.post("/register",async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        const hashedpassword = await bcrypt.hash(password,10)

        const user = new User({
            name:name,
            email:email,
            password:hashedpassword
        });

        await user.save();

        res.status(201).json({msg:"Register Successfully"});

    }catch(error){
        res.status(500).send(error);
    }
})

app.get("/login",async(req,res)=>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!User){
            return res.status(404).json({msg:"User not found"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({msg:"Wrong password"});
        }

        res.status(201).json({msg:"Login successfully"});


    }catch(error){
        res.status(500).send(error);
    }
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
