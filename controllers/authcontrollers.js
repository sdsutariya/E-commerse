import User from "../models/User.js"
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

class authcontroller{
    // register 
    static register = async(req,res)=>{
        console.log("--------------> register called");
        
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
        });
    
        try {
            const savedUser = await newUser.save();
            return res.status(201).json(savedUser);
    
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    //login 
    static login = async(req,res)=>{
        try {
            console.log("--------------> login called");
           
            const user = await User.findOne({username:req.body.username});
            if(!user){
                return res.status(401).json("Wrong credentials!");
            }

            const hashedpassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
            const originalPassword = hashedpassword.toString(CryptoJS.enc.Utf8);

            if(originalPassword !== req.body.password){
                res.status(401).json("Wrong credentials!");
            }

            const accessToken = jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin,
            },
            process.env.JWt_SEC,
            {expiresIn:'3d'});

            const {password,...other} = user._doc;

            return res.status(200).json({...other,accessToken});

        } catch (error) {
            return res.status(500).json(error);
        }
    } 
}

export default authcontroller;