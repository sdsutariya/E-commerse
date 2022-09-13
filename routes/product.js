import express from "express"
import verifymiddelware from '../middelware/verifyToken.js';
import productcontroller from '../controllers/productcontrollers.js'
const router = express.Router();

router.post("/",verifymiddelware.verifyTokenAndAdmin, productcontroller.createProduct);
router.put("/:id",verifymiddelware.verifyTokenAndAuthorization, productcontroller.updateProduct);
router.delete("/:id",verifymiddelware.verifyTokenAndAdmin, productcontroller.deleteProduct);
router.get("/find/:id",verifymiddelware.verifyTokenAndAdmin, productcontroller.getProduct);
router.get("/",verifymiddelware.verifyTokenAndAdmin, productcontroller.getAllProduct);



export default router