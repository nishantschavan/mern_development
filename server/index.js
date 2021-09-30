const dotenv= require('dotenv');
const mongoose= require('mongoose');
const express= require('express');
const app= express();

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());
// const User= require('./models/userSchema');
app.use(require('./router/auth'));

const PORT= process.env.PORT;

// app.get('/',(req,res)=>{
//     res.send('hello world from server');
// });


//Middleware
const Middleware= (req,res,next)=>{
    console.log('this is middleware');
    next();
}

app.get('/contact',(req,res)=>{
    res.send('hello contact world from server');
});

app.get('/about',Middleware,(req,res)=>{
    res.send('hello about world from server');
});

app.get('/signin',(req,res)=>{
    res.send('hello signin world from server');
});

app.get('/signup',(req,res)=>{
    res.send('hello signup world from server');
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
