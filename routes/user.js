import express from "express";
import verifymiddelware from '../middelware/verifyToken.js';
import usercontroller from '../controllers/usercontrollers.js'
const router = express.Router();

router.put("/:id",verifymiddelware.verifyTokenAndAuthorization, usercontroller.updateUser);
router.delete("/:id",verifymiddelware.verifyTokenAndAdmin, usercontroller.deleteUser);
router.get("/find/:id",verifymiddelware.verifyTokenAndAdmin, usercontroller.getUser);
router.get("/",verifymiddelware.verifyTokenAndAdmin, usercontroller.getAllUser);
router.get("/stats",verifymiddelware.verifyTokenAndAdmin, usercontroller.getUserStats);

export default router;