const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const PORT = 3000;

server.use(jsonServer.bodyParser);

server.post('/registro', (req, res) => {
    console.log(req.body.request);
});


server.listen(PORT, () => {
    console.log('*************************************');
    console.log('*** Mock Backend is running       ***');
    console.log(`*** PORT: ${PORT}                    ***`);
    console.log('*************************************')
});