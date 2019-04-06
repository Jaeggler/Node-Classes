//import * as fs from "fs"          formas de importar
import fs = require("fs")
//const fs = require("fs")          formas de importar

console.log("inicio", Date.now())
// const reader = fs.readFileSync("./text01.txt", { encoding:"utf-8"})
// console.log(reader)

fs.readFile("./text01.txt", {encoding: "utf-8"}, (err, dataread)=>{
    if(err) {
        console.log(err)
        return false
    }

    console.log(dataread)
})

console.log("fin", Date.now())