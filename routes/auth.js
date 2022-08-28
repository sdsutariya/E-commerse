import express from "express"
import authcontroller from "../controllers/authcontrollers.js";
const router = express.Router();

//signup
router.post("/register",authcontroller.register);
router.post("/login",authcontroller.login);

export default router