import express from 'express'
import cors from 'cors'
import conexion from '../config/config.js'
import accionesRoutes from '../routes/acciones.routes.js'
import dinerosRoutes from '../routes/dineros.routes.js'
import traderRoutes from '../routes/traders.routes.js'

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.accionesPath = '/api/acciones';
        this.dinerosPath = '/api/dineros';
        this.traderPath = '/api/traders';
        this.conexion();
        this.middlewares(); 
        this.routes();
}

async conexion(){
    await conexion();
}

middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
}

routes(){
    this.app.use(this.accionesPath, accionesRoutes);
    this.app.use(this.dinerosPath, dinerosRoutes);
    this.app.use(this.traderPath, traderRoutes);

}

listen(){
    this.app.listen(this.port, ()=>{
        console.log(`Server running on port: ${this.port}`)
    })
}
}

export default Server;