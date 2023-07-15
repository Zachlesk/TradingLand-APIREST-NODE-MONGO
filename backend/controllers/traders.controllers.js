import Trader from "../models/Traders.js";

const getTraders = async (req, res)=>{
    const traders = await Trader.find();
    res.json(traders);
};

const getTrader = async (req, res)=>{
    try {
        const trader = await Trader.findOne({_id:req.params.id});
        res.send(trader);
    } catch (error) {
        res.status(404);
        res.send({error: "Ese trader no existe"});
    }
};

const postTraders = async (req, res)=>{
    const traders = new Trader(req.body);
    try {
        const nuevoTrader = await traders.save();
        res.json(nuevoTrader);
    } catch (error) {
        console.log(error);
    }
};

const deleteTraders = async (req, res)=>{
    try {
        await Trader.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Ese trader no existe"});
    }
};

const putTraders = async (req, res)=>{
    try {
        const traders = await Trader.findOne({_id:req.params.id});
        if (req.body.nombre) {
            traders.nombre = req.body.nombre;
        }
        if (req.body.edad) {
            traders.edad = req.body.edad;
        }
        if (req.body.nacionalidad) {
            traders.nacionalidad = req.body.nacionalidad;
        }
        if (req.body.presupuesto) {
            traders.presupuesto = req.body.presupuesto;
        }

        await acciones.save();
        res.send(acciones);
    } catch (error) {
        res.status(404);
        res.send({error: "Esa acción no existe"});
    }
};


export {getTraders, getTrader, postTraders, deleteTraders, putTraders};