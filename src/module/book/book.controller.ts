import { NextFunction, Request, Response } from "express";
import { BookServices } from "./book.services";


//createBook
const createBook = async (req: Request, res: Response ,next: NextFunction) => {
    try {
        const body = req.body
        //positive number error handling.
        if (body.price <=0){
            throw new Error("Price must be a positive number");
        }
        if (body.quantity <=0){
            throw new Error("Quantity must be a positive number");
        }
        //
        const data = await BookServices.createBook(body)
        res.status(201).json({
            message: "Book created successfully",
            success: true,
            data,
        })
    } catch (error: any) {
        if (error.name === "ValidationError") {
            error.status = 400; // Bad Request
        }
        next(error);
    }
}
//Create Book End 

//GetBook Start
const getBook = async (req: Request, res: Response) => {


    try {
        const result = await BookServices.getBook()
        res.send({
            message: 'Books retrieved successfully',
            status: true,
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}
//GetBook End
//Specific Book start
const specificBook = async (req: Request, res: Response, next: NextFunction) => {


    try {
        
        const productId = req.params.productId
        const result = await BookServices.specificBook(productId)
        if (!result) {
            throw new Error("Book not found 404");
        }
        res.send({
            message: 'Book retrieved successfully',
            status: true,
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong ☠️',
            error,
        })
    }
}
//Specific Book end
//Update Book Start
const UpdateBook = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        const body = req.body
        const result = await BookServices.UpdateBook(productId, body)
        res.send({

            message: "Book updated successfully",
            success: true,
            result
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went Wrong",
            error,
        })
    }
}
//Update Book End
//DeleteBook Start
const DeleteBook = async (req: Request, res: Response) => {


    try {
        const BookId = req.params.productId
        await BookServices.DeleteBook(BookId)

        res.send({
            
            message: 'Book deleted successfully',
            status: true,
            data: {},
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}
//DeleteBook End


//
export const BookController = {
    createBook,
    getBook,
    specificBook,
    UpdateBook,
    DeleteBook
}
