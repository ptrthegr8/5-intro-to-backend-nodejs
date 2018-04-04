const jsonBody = require('body/json');
const http = require('http');
const hostname = '';
const port = 3000;
var scores = [{
    name: "Edwin",
    score: 50
}, {
    name: "David",
    score: 39
}];

const server = http.createServer((req, res) => {
    var body;
    if (req.method === "GET") {
        if (req.url !== "/scores") {
            res.statusCode = 404;
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/javascript');
            body = scores;
        }
    } else if (req.method === "POST") {
        res.statusCode = 201;
        jsonBody(req, res, (err, body) => {
            scores.push(body);
        });
    };
    res.end(JSON.stringify(body));
    // console logs
    console.log(req.url);
    console.log(req.headers);
    console.log(req.method);
    console.log(res.statusCode);
    //
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});