import mongoose from 'mongoose'

const connectdb = async ()=>{
    try{
    await mongoose.connect("mongodb+srv://test:test@cluster0.puh0q.mongodb.net/e-commerce?retryWrites=true&w=majority")
        console.log("connected sucessfully...");
    }
    catch(err){
        console.log(err);
    }
}

export default connectdb