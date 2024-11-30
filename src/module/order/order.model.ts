import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

//Order Model start
const OrderSchema = new Schema<IOrder>({
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/\S+@\S+\.\S+/, "Invalid email format"],
        trim: true,
      },
      product: {
        type: String,
        required: [true, "Product ID is required"],
        minlength: [24, "Invalid Product ID"], 
        maxlength: [24, "Invalid Product ID"],
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"], 
      },
      totalPrice: {
        type: Number,
        required: [true, "Total price is required"],
        min: [0, "Total price must be a positive number"], 
      },
    

},
{ timestamps: true}
)
//Order Model End




const Order = model<IOrder>('Order', OrderSchema)
export default Order