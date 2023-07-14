import express from 'express'
import cors from 'cors'
import conexion from '../config/config.js'
import accionesRoutes from '../routes/acciones.routes.js'
import dinerosRoutes from '../routes/dinero.routes.js'
import traderRoutes from '../routes/trades.routes.js'

class Server {

constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares(); 
    this.routes();
    this.accionesPath = '/api/acciones';
    this.dinerosPath = '/api/dineros';
    this.traderPath = '/api/traders';
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