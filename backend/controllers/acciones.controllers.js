import Acciones from "../models/Acciones.js";

const getAcciones = async (req, res)=>{
    const acciones = await Acciones.find();
    res.json(acciones);
};

const getAccion = async (req, res)=>{
    try {
        const acciones = await Acciones.findOne({_id:req.params.id});
        res.send(acciones);
    } catch (error) {
        res.status(404);
        res.send({error: "Esa acción no existe"});
    }
};

const postAcciones = async (req, res)=>{
    const acciones = new Acciones(req.body);
    try {
        const nuevaAccion = await acciones.save();
        res.json(nuevaAccion);
    } catch (error) {
        console.log(error);
    }
};

const deleteAcciones = async (req, res)=>{
    try {
        await Acciones.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Esa acción no existe"});
    }
};

const putAcciones = async (req, res)=>{
    try {
        const acciones = await Acciones.findOne({_id:req.params.id});
        if (req.body.oro) {
            acciones.oro = req.body.oro;
        }
        if (req.body.plata) {
            acciones.plata = req.body.plata;
        }
        if (req.body.tesla) {
            acciones.tesla = req.body.tesla;
        }

        await acciones.save();
        res.send(acciones);
    } catch (error) {
        res.status(404);
        res.send({error: "Esa acción no existe"});
    }
};


export {getAcciones, getAccion, postAcciones, deleteAcciones, putAcciones};