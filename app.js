// const catMe = require('cat-me')
// console.log(catMe())


// const http = require('http')
// const server = http.createServer((req,res) => {
//     res.end('hello world')
// })
// server.listen(3000)

const express = require('express')
const app = express();

app.set("view engine", 'ejs')


//midleware
app.use((req, res, next) => {
    console.log("this is middleware"); //normaly we don,t share response in midlleware, 
    
    const a=2;
    const b=3;
    console.log(a+b)
    return next()                   // response will send only if any error is accure                                
})

app.get('/', (req,res) => {  //render from the inedx.ejs
    res.render("index")
})

app.get('/about', (req,res) => {
    res.send("About Page")
})

app.get('/profile', (req,res) => {
    res.send("Profile Page")
})

app.listen(3000)
