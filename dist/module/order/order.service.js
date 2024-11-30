"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const book_model_1 = __importDefault(require("../book/book.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, product, quantity, totalPrice } = input;
    //check exists
    const existingProduct = yield book_model_1.default.findById(product);
    if (!existingProduct) {
        throw new Error('Products not Found');
    }
    //check stock
    if (existingProduct.quantity < quantity) {
        throw new Error("No Stock Avilable");
    }
    //check ziro quantity
    if (quantity <= 0) {
        throw new Error("Unbalid quantity");
    }
    //Create Order 
    const order = yield order_model_1.default.create({ email, product, quantity, totalPrice });
    //
    existingProduct.quantity -= quantity;
    if (existingProduct.quantity === 0) {
        existingProduct.inStock = false;
    }
    yield existingProduct.save();
    return order;
});
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
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield order_model_1.default.aggregate([
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
        return ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
    }
    catch (error) {
        throw new Error(`Error calculating total revenue: ${error.message}`);
    }
});
exports.orderServices = {
    createOrder,
    calculateRevenue
};
