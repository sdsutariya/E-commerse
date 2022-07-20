import express from "express"
const router = express.Router();

router.get("/usertest",(req,res)=>{
    res.send("user test route");
})


export default router