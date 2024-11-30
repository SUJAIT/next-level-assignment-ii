import { IBook } from "./book.interface";
import Book from "./book.model";


//create Book 
const createBook = async (bookcreate: IBook) => {
    const data = new Book(bookcreate)
    const result = await data.save()
    return result
}
//

//getAllBook
const getBook = async () => {
    const result = await Book.find()
    return result
}
//
//Specific Book Get 
const specificBook = async (productId: string) => {
    const result = await Book.findById(productId)
    return result
}
//
//BookUpdate
const UpdateBook = async (productId: string, payload: Partial<IBook>) => {
    const result = Book.findByIdAndUpdate(productId, payload,{
        new:true
    })
    return result
}
//

//Delete Book 
const DeleteBook = async (productId:string)=>{
    const result = await Book.findByIdAndDelete(productId)
    return result
}
//



//export service
export const BookServices = {
    createBook,
    getBook,
    specificBook,
    UpdateBook,
    DeleteBook
}