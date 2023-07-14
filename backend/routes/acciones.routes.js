import { Router } from 'express';
import { getAcciones, getAccion, postAcciones, deleteAcciones, putAcciones } from '../controllers/acciones.controllers.js';

const router = Router();

router.get("/all", getAcciones);

router.get("/getone/:id", getAccion);

router.post("/add", postAcciones);

router.delete("/del/:id", deleteAcciones);

router.put("/upd/:id", putAcciones);


export default router;