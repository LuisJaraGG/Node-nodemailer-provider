import express from 'express';
import cors from 'cors'
import router from '../routes/mail.js'
class Server {

    constructor() {
        this.app = express();
        this.port =5000;
        this.mailPath = '/api/mail';
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

    }

    routes() {
        this.app.use(this.mailPath, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

export default Server;