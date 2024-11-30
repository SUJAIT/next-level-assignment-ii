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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControler = void 0;
const order_service_1 = require("./order.service");
const placeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const order = yield order_service_1.orderServices.createOrder(body);
        res.send({
            message: "Order created successfully",
            success: true,
            order
        });
    }
    catch (err) {
        res.send({
            success: false,
            message: "Something wrong☠️",
            err
        });
    }
});
//aggregation calculate 
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.orderServices.calculateRevenue();
        res.json({
            message: 'Revenue calculated successfull',
            status: true,
            data: { totalRevenue },
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error calculating revenue',
            status: false,
            error: error.message,
        });
    }
});
exports.OrderControler = {
    placeOrder,
    calculateRevenue
};
