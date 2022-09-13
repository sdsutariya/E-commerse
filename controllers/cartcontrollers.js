import Cart from "../models/Cart.js";

class cartcontroller{

    static createCart = async(req,res)=>{
        console.log("--------------> create Cart called");
        const Cart = new Cart(req.body);
        try {
            const savedCart = await Cart.save()
            res.status(200).json(savedCart);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static updateCart = async(req,res)=>{
        console.log("--------------> update Cart called");
        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedCart);
        } catch (error) {
            res.status(500).json(error);
        }
    }


    static deleteCart = async(req,res)=>{
        console.log("--------------> delete Cart called");
        try {
            await Cart.findByIdAndDelete(req.params.id);
            res.status(200).json("Cart has been deleted...");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //get user cart
    static getCart = async(req,res)=>{
        console.log("--------------> get Cart called");
        try {
            const cart = await Cart.findOne({userId:req.params.userId});
            return res.status(200).json(cart);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //get all cart for admin
    static getAllCart = async(req,res)=>{
        console.log("--------------> get all carts called");
        try {
            const carts = await Cart.find();
            return res.status(200).json(carts);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

export default cartcontroller