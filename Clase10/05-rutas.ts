import http = require('http')
import fs = require('fs')

const server1: http.Server = http.createServer(
    (reqobj: http.IncomingMessage, resobj: http.ServerResponse) => {

        const route = reqobj.url.toLowerCase().trim()
        const methodreq = reqobj.method.toLowerCase().trim()
        let routefound = false

        switch(route) {
            case "/users/list":
            if(methodreq == "get"){
            resobj.writeHead(200, {"content-type": "application/json"}) //El JSON debe ser convertido en cadena (string)
            resobj.end(JSON.stringify({
                status: 200,
                results: [
                    {user: "user01"},
                    {user: "user02"},
                    {user: "user03"}
                ]
            }))
            routefound = true}
            break

            case "/":
            resobj.writeHead (200, {"content-type": "text/html"})
            const readStream = fs.createReadStream("./index.html", {encoding: "utf-8"})
            readStream.pipe(resobj)
            routefound = true
            break

            case "/download/guide":
            if(methodreq == "post"){
            resobj.writeHead (200, {"content-type": "application/pdf"})
            const readStream2 = fs.createReadStream("./beginnersguide.pdf")
            readStream2.pipe(resobj)
            routefound = true}
            break
        }

        if(!routefound) {
            resobj.writeHead(404, {"content-type": "text/plain"})
            resobj.end("Not Found!")
        }
    }
)

server1.listen(3000, () => console.log("Server Running"))