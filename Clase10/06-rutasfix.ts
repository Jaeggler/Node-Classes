import http = require('http')
import fs = require('fs')
import {UsersList, GuideDownload, Home} from './controllers' //como importar funciones de otro archivo

interface IRoute {          //Las interfaces pertenecen a TypeScript
    path: string
    method: string
    controller: any
}

const routes: IRoute[] = [
    {path: "/users/list", method: "get", controller: UsersList},
    {path: "/download/guide", method: "post", controller: GuideDownload},
    {path: "/", method: "get", controller: Home},
]

const server1: http.Server = http.createServer(
    (reqobj: http.IncomingMessage, resobj: http.ServerResponse) => {

        const route = reqobj.url.toLowerCase().trim()
        const methodreq = reqobj.method.toLowerCase().trim()
        let routefound = false

        routes.forEach((item: IRoute) => {
            if(item.path == route && item.method == methodreq) {
                item.controller(resobj)
                routefound = true
            }
        })


        }

        // if(!routefound) {
        //     resobj.writeHead(404, {"content-type": "text/plain"})
        //     resobj.end("Not Found!")
        
    
)

server1.listen(3000, () => console.log("Server Running"))