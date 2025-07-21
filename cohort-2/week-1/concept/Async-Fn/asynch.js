const fs = require('fs') //Library to import file

fs.readFile("a.txt" ,"utf-8",function(err,data){
    console.log(data)
})
