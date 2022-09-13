import express from "express"
import verifymiddelware from '../middelware/verifyToken.js';
import cartcontroller from '../controllers/cartcontrollers.js'
const router = express.Router();

router.post("/",verifymiddelware.verifyToken, cartcontroller.createCart);
router.put("/:id",verifymiddelware.verifyTokenAndAuthorization, cartcontroller.updateCart);
router.delete("/:id",verifymiddelware.verifyTokenAndAuthorization, cartcontroller.deleteCart);
router.get("/find/:userId",verifymiddelware.verifyTokenAndAuthorization, cartcontroller.getCart);
router.get("/",verifymiddelware.verifyTokenAndAdmin, cartcontroller.getAllCart);



export default router