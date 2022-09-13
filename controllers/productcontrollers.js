import Product from "../models/Product.js";

class productcontroller{

    static createProduct = async(req,res)=>{
        console.log("--------------> create Product called");
        const product = new Product(req.body);
        try {
            const savedproduct = await product.save()
            res.status(200).json(savedproduct);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static updateProduct = async(req,res)=>{
        console.log("--------------> update product called");
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    }


    static deleteProduct = async(req,res)=>{
        console.log("--------------> delete product called");
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("product has been deleted...");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static getProduct = async(req,res)=>{
        console.log("--------------> get product called");
        try {
            const product = await Product.findById(req.params.id);
            return res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static getAllProduct = async(req,res)=>{
        console.log("--------------> get all product called");
        const qnew = req.query.new;
        const qcategory = req.query.category;

        try {
            let products;

            if(qnew){
                products = await Product.find().sort({createdAt:-1}).limit(5);
            }else if(qcategory){
                products = await Product.find({categories:{
                    $in:[qcategory],
                }})
            }else{
                products = await Product.find();
            }

            return res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

export default productcontroller