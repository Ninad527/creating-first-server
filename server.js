const http = require("http");

const port = 8081;

const toDolist= ["Complete node byte", "Play Cricket"];

http.createServer((request, response) => {
    const {method, url}= request;
    if(url === "/todos"){
        if(method === "GET"){
            response.writeHead(200);
            response.write(toDolist.toString())
        }
        else if(method === "POST"){
            let body = " ";
            request.on("error", ()=> {
                console.log(err)
            }).on("data", (chunk)=> {
                body += chunk;
                console.log(chunk);
            }).on("end", ()=> {
                body = JSON.parse(body);
                console.log("data: ", body);
            });
        }
        else{
            response.writeHead(404);
        }
    }
    else{
        response.writeHead(404);
    }
    
    response.end();
    })
    
   .listen(port, ()=> {
    console.log(`Nodejs Server Started on port ${port}`);
});
