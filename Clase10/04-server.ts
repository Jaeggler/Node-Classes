import http  = require("http")
import fs = require("fs")

const server1 = http.createServer( (requestobj, responseobj)=>{            //2 parametros que son objetos
    //Enviando texto plano
    //responseobj.writeHead(200, {"content-type":"text/plain"})         //HTTP CODES => 200: ok; 201: ok, con mofificacion; 401: no autenticado; 404: not found; 409: operacion no permitida; 500: error; 
    // responseobj.setHeader("content-type", "text/plain")             //metodo mas reciente
    // responseobj.statusCode = 200
    // responseobj.write("Mensaje enviado por el servidor")
    // responseobj.write("Otro mensaje por el servidor")
    // responseobj.end("Cierre")

    //Enviando HTML
    // responseobj.writeHead(200, {"content-type": "text/html"})
    // responseobj.end("<h1>Enviado como texto HTML por <em>Node</em></h1>")

    //Enviando una pagina HTML
    // responseobj.writeHead(200, {"content-type": "text/html; charset=utf-8"})
    // responseobj.end(`
    //     <!doctype html>
    //     <html>
    //         <head>
    //             <title>Archivo (ñ) enviado por Node</title>
    //         </head>
    //         <body>
    //             <h1>Hello World!</h1>
    //         </body>
    //     </html>
    // `)

    //Enviando archivos con streaming
    // responseobj.writeHead(200, {"content-type": "text/html"})               //lectura de los pedazos del archivo
    
    // const readStream = fs.createReadStream("./index.html", {encoding: "utf-8"})

    // readStream.pipe(responseobj)            //no se cierra con .end por que la funcion pipe lo hara automaticamente.

    //Enviando archivos PDF con streaming 
    // responseobj.writeHead(200, {"content-type": "application/pdf"})               //lectura de los pedazos del archivo

    // const readStream = fs.createReadStream("./beginnersguide.pdf")          //aqui no se usa el enconding

    // readStream.pipe(responseobj)            //no se cierra con .end por que la funcion pipe lo hara automaticamente.

    //Enviando archivos JSON con streaming
    responseobj.writeHead(200, {"content-type": "application/json"}) //El JSON debe ser convertido en cadena (string)
    responseobj.end(JSON.stringify({
        status: 200,
        results: [
            {user: "user01"},
            {user: "user02"},
            {user: "user03"}
        ]
    }))
})

server1.listen(3000, ()=>console.log("Server Running"))