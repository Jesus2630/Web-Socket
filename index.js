require('dotenv').config();

const Server = require('./Models/Server')



const miServidor = new Server();


miServidor.listen();