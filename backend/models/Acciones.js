import mongoose from "mongoose";

const accionesSchema = mongoose.Schema({
    oro: {
        type: String,
        require: true,
        trim: true
    },
    plata:{
        type: String,
        require: true,
        trim: true
    },
    tesla:{
        type: String,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Acciones = mongoose.model("acciones", accionesSchema);

export default Acciones;