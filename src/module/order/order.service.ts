
import Book from "../book/book.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";


const createOrder = async (input: IOrder) => {
    const { email, product, quantity, totalPrice } = input;

    //check exists
    const existingProduct = await Book.findById(product);
    if (!existingProduct) {
        throw new Error('Products not Found')
    }
    //check stock
    if (existingProduct.quantity < quantity) {
        throw new Error("No Stock Avilable")
    }
    //check ziro quantity
    if (quantity <= 0 ){
        throw new Error("Unbalid quantity")
    }


    //Create Order 
    const order = await Order.create({ email, product, quantity, totalPrice });

    //
    existingProduct.quantity -= quantity;
    if (existingProduct.quantity === 0) {
        existingProduct.inStock = false;
    }
    await existingProduct.save();

    return order
}


//aggregation 
// const calculateRevenue = async () => {
//     const result = await Order.aggregate([
//         {
//             $lookup: {
//                 from: "Order",
//                 localField: 'Order',
//                 foreignField: '_id',
//                 as: "productsDetails"
//             },

//         },

//         {
//             $unwind: '$productsDetails'
//         },

//         {
//             $group: {
//                 _id: null,
//                 totalRevenue: {
//                     $sum: { $multiply: ['$quantity', '$productsDetails.price'] },
//                 }
//             }
//         },

//         {
//             $project: {
//                 _id: 0,
//                 totalRevenue: 1,
//             },
//         }


//     ]);

//     return result.length>0 ? result[0].totalRevenue:0;
// }

const calculateRevenue = async () => {
    try {
        const result = await Order.aggregate([
            {
                $project: {
                    totalPrice: { $multiply: ["$totalPrice", "$quantity"] },
                },

            },

            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$totalPrice' },
                }
            }

        ]);
        return result[0]?.totalRevenue || 0;
    } catch (error: any) {
        throw new Error(`Error calculating total revenue: ${error.message}`)
    }


}


export const orderServices = {
    createOrder,
    calculateRevenue
}