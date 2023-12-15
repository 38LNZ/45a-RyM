const http = require("http");
const PORT = 3001;
const characters = require("./utils/data");
const { default: getCharById } = require("./controllers/getCharById");


http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        if (req.url.includes("/rickandmorty/character")) {
            const id = req.url.split("/").pop()
            getCharById(res, id)
        } 
    })
    .listen(PORT, '127.0.0.1',
        () => { console.log(`Server listening on port ${PORT}`) })
        
        // //metodo "find" es para que guarde el character encontrado como objeto
        // const character = characters.find(
            //     //aca abajo me quedo con el char que el id 
            //     //coincide con el id capturado mas arriba
            //     char => char.id === Number(id)
            //);
            // console.log(character);
            // if (character) {
            //    return res
            //         .writeHead(200, { "Content-type": "application/json" })
            //         //stringgify es para convertir el objeo en JSON
            //         .end(JSON.stringify(character))
            // }
            // else {
            //    return res
            //         .writeHead(404, { "Content-type": "application/json" })
            //         //stringgify es para convertir el objeo en JSON
            //         .end(JSON.stringify({ Mensage: "Character Not Found" }))
            // }
              
                // return res
                //     .writeHead(404, { "Content-type": "application/json" })
                //     //stringgify es para convertir el objeo en JSON
                //     .end(JSON.stringify({ Mensage: "Character Not Found" }))