/* const nombre = 'Jefferson';
console.log(`Mi nombre es ${ nombre}`);
 */
import Server from './classes/server';
import { SERVER_PORT } from './global/environment';
import router from './routes/router';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const server = new Server();

// (3) USANDO BODYPARSER PARA LAS RESPUESTAS DE REST - BODYPARSER YA NO ES NECESARIO YA QUE EXPRESS LO TRAE
server.app.use( express.urlencoded({ extended: true}));
server.app.use( express.json());

// (5) CONFIGURANDO EL CORS
server.app.use( cors({ origin: true, credentials: true}))

// (2) CONFIGURANDO PARA LAS LLAMADAS DE LA API Y AL EXPORTAR ROUTER TENER EN CUENTA EXPORTAR BIEN DE ROUTER Y NO DE EXPRESS
server.app.use('/',router);

//EN VES DE server.port PODRIA IR SERVER_PORT
server.start(() =>{
    console.log(`Servidor corriendo en el puerto ${ server.port }`)
});
