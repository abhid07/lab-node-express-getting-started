
//Node server

const http = require('http')

http.createServer((req,res)=>{
    res.write("Welcome To Node Server")
    res.end()
}).listen(3000,()=>console.log("Node Server Started At 3000 port"))

//Express Server


const express = require('express');
const app = express()

app.get('/',((req,res)=>{
    res.send("Welcome To Express Server")
    
}))

app.get('/sample',((req,res)=>{
    res.send("Welcome To Express Server's Sample Page")
}))

app.listen(4000,()=>{console.log("Express Server Started At 4000 Port");})