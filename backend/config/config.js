import mongoose from "mongoose";

const conexion = async () =>{
    try {
        const conexionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        const url = `Ha sido conectado existosamente a Mongo.DB en el server: ${conexionDB.connection.host} y en el puerto: ${conexionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};

export default conexion;