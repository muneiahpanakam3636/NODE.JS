const fs = require("fs");

fs.readFile('emp.txt',function(err,data){
    if (err)throw err,
    console.log(data);
    fs.writeFile('data1.js',data,(err)=>{
        if (err) throw err
        console.log('written successfully');
    })
})

//fs.readFile('1','2',()=>{})


//     const fs=require('fs')
// fs.readFile('data.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     //console.log(data)

//     fs.writeFile('abc.txt',data,(err)=>{
//         if(err) throw err 
//         console.log("Written successfully")
//     })
// })