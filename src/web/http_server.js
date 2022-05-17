var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola Wenceslao! Como estas?');
}).listen(3000, () => console.log('El puerto de este contenedor es 3000'));
console.log('Acceda al puerto mapeado en su host para ver la página de este servidor');
