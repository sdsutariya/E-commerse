import express from "express"
import verifymiddelware from '../middelware/verifyToken.js';
import ordercontroller from '../controllers/ordercontrollers.js'
const router = express.Router();

router.post("/",verifymiddelware.verifyToken, ordercontroller.createOrder);
router.put("/:id",verifymiddelware.verifyTokenAndAdmin, ordercontroller.updateOrder);
router.delete("/:id",verifymiddelware.verifyTokenAndAdmin, ordercontroller.deleteOrder);
router.get("/find/:userId",verifymiddelware.verifyTokenAndAuthorization, ordercontroller.getOrder);
router.get("/",verifymiddelware.verifyTokenAndAdmin, ordercontroller.getAllOrder);
router.get("/income",verifymiddelware.verifyTokenAndAdmin, ordercontroller.getIncome);



export default router