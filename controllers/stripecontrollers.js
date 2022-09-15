import Stripe from "stripe";
const stripe =new Stripe(process.env.STRIPE_KEY);

class stripecontroller{

    static payment = async(req,res)=>{
        console.log("--------------> create payment called");
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },(err,res)=>{
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(res);
            }
        })        

    }

    

}

export default stripecontroller