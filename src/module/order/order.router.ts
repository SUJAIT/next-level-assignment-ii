import { Router } from 'express';
import { OrderControler } from './order.controller';



const orderRouter = Router();

orderRouter.post("/",OrderControler.placeOrder)

orderRouter.get('/calculate',OrderControler.calculateRevenue)

export default orderRouter