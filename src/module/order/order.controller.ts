import { Request, Response } from "express"
import { orderServices } from "./order.service"


const placeOrder = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const order = await orderServices.createOrder(body)
        res.send({
            message: "Order created successfully",
            success: true,
            order
        })

    } catch (err) {
        res.send({
            success:false,
            message:"Something wrong☠️",
            err
        })
    }
}

//aggregation calculate 

const calculateRevenue = async (req:Request,res:Response) =>{
    try {
        const totalRevenue = await orderServices.calculateRevenue();

        res.json({
            message: 'Revenue calculated successfull',
            status: true,
            data: { totalRevenue },
        })
    }catch (error: any) {
        res.status(500).json({
          message: 'Error calculating revenue',
          status: false,
          error: error.message,
        });
      }
}

export const OrderControler = {
    placeOrder,
    calculateRevenue
}