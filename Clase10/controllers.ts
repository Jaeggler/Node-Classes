import http = require("http")
import fs = require("fs")

const UsersList = (resobj: http.ServerResponse) => {
    resobj.writeHead(200, {"content-type": "application/json"}) //El JSON debe ser convertido en cadena (string)
    resobj.end(JSON.stringify({
        status: 200,
        results: [
            {user: "user01"},
            {user: "user02"},
            {user: "user03"}
        ]
    }))
}

const GuideDownload = (resobj: http.ServerResponse) => {
    resobj.writeHead (200, {"content-type": "application/pdf"})
    const readStream2 = fs.createReadStream("./beginnersguide.pdf")
    readStream2.pipe(resobj)
}

const Home = (resobj: http.ServerResponse) => {
    resobj.writeHead (200, {"content-type": "text/html"})
    const readStream = fs.createReadStream("./index.html", {encoding: "utf-8"})
    readStream.pipe(resobj)
}


export {UsersList, GuideDownload, Home}