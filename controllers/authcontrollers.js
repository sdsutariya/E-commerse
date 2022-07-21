import User from "../models/User.js"
import CryptoJS from "crypto-js";

class authcontroller{
    static register = async(req,res)=>{
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
        });
    
        try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
    
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default authcontroller;