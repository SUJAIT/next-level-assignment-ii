import express, { Request, Response } from "express"
import BookRouter from "./module/book/book.route";
import orderRouter from "./module/order/order.router";



const app = express();

//middleware ata use route k bola dai ja jeson data dila ta resived koro..
app.use(express.json())


app.use('/api/products',BookRouter)
app.use('/api/orders',orderRouter)


//ata akta meddlware ata server runn hossa tar respons ta pattassa apadoto
app.get('/',(req:Request,res:Response)=>{
    res.send({
        status:true,
        message:"Assignment Is Running Port 5000"
        })
})


export default app;