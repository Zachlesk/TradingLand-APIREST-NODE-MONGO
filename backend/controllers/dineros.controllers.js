import Dineros from "../models/Dineros.js";

const getDineros = async (req, res)=>{
    const dineros = await Dineros.find();
    res.json(dineros);
};

const getDinero = async (req, res)=>{
    try {
        const dinero = await Dineros.findOne({_id:req.params.id});
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error: "Ese dinero no existe"});
    }
};

const postDineros = async (req, res)=>{
    const dineros = new Dineros(req.body);
    try {
        const nuevoDinero = await dineros.save();
        res.json(nuevoDinero);
    } catch (error) {
        console.log(error);
    }
};

const deleteDineros = async (req, res)=>{
    try {
        await Dineros.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Ese dinero no existe"});
    }
};

const putDineros = async (req, res)=>{
    try {
        const dineros = await Dineros.findOne({_id:req.params.id});
        if (req.body.criptomonedas) {
            acciones.criptomonedas = req.body.criptomonedas;
        }
        if (req.body.fiat) {
            acciones.fiat = req.body.fiat;
        }

        await dineros.save();
        res.send(dineros);
    } catch (error) {
        res.status(404);
        res.send({error: "Ese dinero no existe"});
    }
};


export {getDineros, getDinero, postDineros, deleteDineros, putDineros};