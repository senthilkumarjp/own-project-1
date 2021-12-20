const express=require("express");
const soft=express();
const path=require('path');

soft.use(express.static(path.join(__dirname,'public')))

soft.set('view engine','ejs');
soft.set('views',path.join(__dirname,'/views'));

soft.get('/',(req,res)=>{
    res.render("start")
})

soft.get('/home',(req,res)=>{
    res.render("home")
})
soft.get('/numbers',(req,res)=>{
    const numbers=['1','2','3','4','5']
    res.render('numbers',{numbers})
})
soft.get('/even',(req,res)=>{
    const num=Math.floor(Math.random() * 100) + 1;
    res.render('even',{num});
})
soft.get('/senthil',(req,res)=>{
    res.render("senthil")
})
soft.get('*',(req,res)=>{
    res.send("this is  an  inappropriate page!")
})

soft.listen(300,()=>{
    console.log("listening on port 300!");
})