// // const http = require("http")
// import http from 'http'
// import fs from'fs'

// let server =http.createServer((req,resp)=>{
//     fs.readFile('index.html','utf-8',(err,data)=>{
//         console.log(req.url);
//         if (err) throw err 
//         resp.end(data)
//     })
//     // resp.end("HELLO,GM")
// })

// server.listen(8080,'127.0.0.1',(err)=>{
//     if(err) throw err
//     console.log(`server is running http.//localhost:8080 `);
// })

const http = require('http')
const fs=require('fs')

/* import http from 'http'
import fs from 'fs' */
let server=http.createServer((req,resp)=>{
    console.log(req.url)
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err) throw err
        resp.end(data)
    })
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running http://localhost:8080 `)
})