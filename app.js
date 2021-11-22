var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode){
    if(!responseCode){responseCode = 200; }
    fs.readFile(__dirname + path, function(err, data){
        if(err){
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end("500 - Internal error");
        }
        else{
            res.writeHead(responseCode, {'content-type': contentType});
            res.end(data);
        }
    })
}

http.createServer((req, res) =>{
    
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLocaleLowerCase();
    switch(path){
        case '':
            serveStaticFile(res, '/index.html', 'text/html');
        break;
        case '/index.html':
            serveStaticFile(res, '/index.html', 'text/html');
        break;
        case '/logo.png':
            serveStaticFile(res, '/logo.png', 'image/jpeg');
        break;
        case '/favicon.png':
            serveStaticFile(res, '/favicon.png', 'image/jpeg');
        break;
        case '/about.html':
            serveStaticFile(res, '/about.html', 'text/html');
            break;
        case '/gallery/aidar.jpg':
            serveStaticFile(res, '/gallery/aidar.jpg', 'image/jpeg')
        break;
        case '/gallery/assem.jpg':
            serveStaticFile(res, '/gallery/assem.jpg', 'image/jpeg')
        break;
        case '/gallery/amina.jpg':
            serveStaticFile(res, '/gallery/amina.jpg', 'image/jpeg')
        break;
        case '/gallery/dias.jpg':
            serveStaticFile(res, '/gallery/dias.jpg', 'image/jpeg')
        break;
        case '/video':
            serveStaticFile(res, '/video.mp4', 'video/mp4')
        break;
        case '/video.html':
            serveStaticFile(res, '/video.html', 'text/html')
        break;
        case "/styles.css":
            serveStaticFile(res, '/styles.css', 'text/css');
            break;
        case "/script.js":
            serveStaticFile(res, '/script.js', 'text/javascript');
            break;
        default:
            serveStaticFile(res, '/error.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl+C to terminate");