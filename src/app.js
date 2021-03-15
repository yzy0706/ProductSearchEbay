const http = require('http');
const express = require('express');
const hostname = '127.0.0.1'
const port = 3000;
const cors = require('cors')
// const url = require("buildURL");

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

const app = express();
app.use(cors())
app.get("/test", function(req, res){
    console.log("Test");
    // const address = url.buildSearchUrl(options);
    // console.log(req);
    res.json("hello");
})

app.listen(port, function(){
    console.log("Test2");
})

// server.listen(port, hostname, () => {
//     console.log('Server running at http://${hostname}:${port}/');
// });