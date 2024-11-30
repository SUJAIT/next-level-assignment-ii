import { BookController } from './book.controller';
import { Router } from "express";


const BookRouter = Router()

//createBook 
BookRouter.post('/',BookController.createBook)
//
//GetBook All Book
BookRouter.get('/',BookController.getBook)
//
//Specifi Book Call
BookRouter.get("/:productId",BookController.specificBook)
//
//Update Book start
BookRouter.put('/:productId',BookController.UpdateBook)
//
//DeleteBook 
BookRouter.delete("/:productId",BookController.DeleteBook)
//


//export
export default BookRouter
