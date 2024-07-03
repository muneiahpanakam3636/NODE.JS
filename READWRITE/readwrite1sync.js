const fs = require("fs")
 let empdata = fs.readFileSync('emp.txt','utf-8')
 fs.writeFile('data.txt',empdata)
 console.log("employee data write into anew file");


