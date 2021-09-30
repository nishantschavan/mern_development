const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require("../db/conn");
const User = require("../models/userSchema");

router.get('/',(req,res)=>{
    res.send('hello world from server');
});

// router.post('/register',(req,res)=>{
//     console.log(req.body.name);
//     res.json({message:req.body});
    
//     const {name,email,phone,work,password,cpassword}= req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"please fill field correctly"});
//     }

//     User.findOne({email:email})
//         .then((UserExist)=>{
//             if(UserExist){
//                 res.status(422).json({error:"User already exist"});
//             }

//             const user = new User({name,email,phone,work,password,cpassword});
//             user.save().then(()=>{
//                 res.status(201).json({message:"User created"});
//             }).catch(err => res.status(500).json({error:"Failed to register"}));
//         }).catch(err => { console.log(err); });
// });

// Registration page

router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body; // object destructring.

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"please fill field correctly"});
    }

    try{

        const userExist = await User.findOne({email:email});    // to find user in database.

        if(userExist){
             return res.status(422).json({ error:" user already exist "});
        }else if(password != cpassword){
             return res.status(422).json({ error:" invalid crdentials "});
        }else{

            const user = new User({name,email,phone,work,password,cpassword});
            
            await user.save();
    
            res.status(201).json({message:" user saved"});
        }

    }catch(err){
        console.log(err);
    }
});

// Login page

router.post('/signin', async (req,res)=>{

    try{

        const { email, password } = req.body;

        if( !email || !password ){
            return res.status(400).json({error:" fill details "});
        }

        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
            
            if(isMatch){
                return res.json({message:" user signin successfully "});
            }
            else{
                return res.status(400).json({error: "invalid credentials"});
            }

        }else{
            return res.status(400).json({error: "invalid credentials"});
        }

    }catch(err){
        console.log(err);
    }
});




module.exports= router;