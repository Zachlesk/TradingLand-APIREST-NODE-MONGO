import { Router } from 'express';
import { getTraders, getTrader, postTraders, deleteTraders, putTraders } from '../controllers/trader.controllers.js';

const router = Router();

router.get("/all", getTraders);

router.get("/getone/:id", getTrader);

router.post("/add", postTraders);

router.delete("/del/:id", deleteTraders);

router.put("/upd/:id", putTraders);


export default router;