import fs = require("fs")

const readStream = fs.createReadStream("./text01.txt", {encoding: "utf-8"})
const writeStream = fs.createWriteStream("./write01.txt", {encoding: "utf-8"})

readStream.on("data", chunck => {
    console.log(chunck)
    writeStream.write(chunck)
})