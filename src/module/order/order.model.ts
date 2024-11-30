import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

//Order Model start
const OrderSchema = new Schema<IOrder>({
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
    

},
{ timestamps: true}
)
//Order Model End




const Order = model<IOrder>('Order', OrderSchema)
export default Order