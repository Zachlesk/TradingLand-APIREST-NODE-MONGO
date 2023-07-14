import mongoose from "mongoose";

const conexion = async () =>{
    try {
        const conexionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        const url = `CONECTADO A MONGODB EN EL SERVER: ${conexionDB.connection.host} - EN PUERTO: ${conexionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};

export default conexion;