import mongoose from "mongoose";

const dineroSchema = mongoose.Schema({
    criptomonedas: {
        type: String,
        require: true,
        trim: true
    },
    fiat:{
        type: String,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Dineros = mongoose.model("dineros", dineroSchema);

export default Dineros;