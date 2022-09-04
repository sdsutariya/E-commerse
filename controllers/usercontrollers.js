import User from "../models/User.js";

class usercontroller{

    static updateUser = async(req,res)=>{
        console.log("--------------> update user called");
        if(req.body.password){
            req.body.password= CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString();
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }


    static deleteUser = async(req,res)=>{
        console.log("--------------> delete user called");
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user has been deleted...");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static getUser = async(req,res)=>{
        console.log("--------------> get user called");
        try {
            const user = await User.findById(req.params.id);
            const {password,...other} = user._doc;

            return res.status(200).json({...other});
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static getAllUser = async(req,res)=>{
        console.log("--------------> get all user called");
        const query = req.query.new;
        try {
            const users = query ? await User.find().sort({ _id:-1 }).limit(5): await User.find();
            return res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static getUserStats = async(req,res)=>{
        console.log("--------------> get user stats called");
        const date = new Date();
        const lastyear = new Date(date.setFullYear(date.getFullYear-1));
        try {
            const data = await User.aggregate([
                {$match:{ createdAt: { $gte: lastyear}}},
                {
                    $project: {month: {$month: "$createdAt"}}
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum : 1}
                    }
                }
            ]);
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default usercontroller