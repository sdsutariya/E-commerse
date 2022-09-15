import Order from "../models/Order.js";

class ordercontroller {

    static createOrder = async (req, res) => {
        console.log("--------------> create Order called");
        const order = new Order(req.body);
        try {
            const savedOrder = await order.save()
            res.status(200).json(savedOrder);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static updateOrder = async (req, res) => {
        console.log("--------------> update Order called");
        try {
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedOrder);
        } catch (error) {
            res.status(500).json(error);
        }
    }


    static deleteOrder = async (req, res) => {
        console.log("--------------> delete Order called");
        try {
            await Order.findByIdAndDelete(req.params.id);
            res.status(200).json("Order has been deleted...");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //get user order
    static getOrder = async (req, res) => {
        console.log("--------------> get Order called");
        try {
            const Orders = await Order.find({ userId: req.params.userId });
            return res.status(200).json(Orders);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //get all order for admin
    static getAllOrder = async (req, res) => {
        console.log("--------------> get all Orders called");
        try {
            const Orders = await Order.find();
            return res.status(200).json(Orders);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //get monthly income
    static getIncome = async (req, res) => {
        console.log("--------------> get monthly Income of Orders called");
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
        try {
            const income = await Order.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$amount",
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: "$sales" },
                    },
                },
            ]);
            return res.status(200).json(income);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

export default ordercontroller