import express from "express"
const router = express.Router();
import stripecontroller from "../controllers/stripecontrollers.js";

router.post('/payment',stripecontroller.payment)

export default router