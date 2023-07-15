import mongoose from "mongoose";

const dinerosSchema = mongoose.Schema({
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

const Dineros = mongoose.model("dineros", dinerosSchema);

export default Dineros;