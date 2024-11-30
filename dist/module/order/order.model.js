"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Order Model start
const OrderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
}, { timestamps: true });
//Order Model End
const Order = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = Order;
