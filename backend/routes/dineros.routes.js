import { Router } from 'express';
import { getDineros, getDinero, postDineros, deleteDineros, putDineros } from '../controllers/dineros.controllers.js';

const router = Router();

router.get("/all", getDineros);

router.get("/getone/:id", getDinero);

router.post("/add", postDineros);

router.delete("/del/:id", deleteDineros);

router.put("/upd/:id", putDineros);


export default router;