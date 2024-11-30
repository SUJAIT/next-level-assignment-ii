"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = __importDefault(require("./module/book/book.route"));
const order_router_1 = __importDefault(require("./module/order/order.router"));
const app = (0, express_1.default)();
//middleware ata use route k bola dai ja jeson data dila ta resived koro..
app.use(express_1.default.json());
app.use('/api/products', book_route_1.default);
app.use('/api/orders', order_router_1.default);
//ata akta meddlware ata server runn hossa tar respons ta pattassa apadoto
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: "Assignment Is Running Port 5000"
    });
});
exports.default = app;
