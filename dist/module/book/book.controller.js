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
exports.BookController = void 0;
const book_services_1 = require("./book.services");
//createBook
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        //positive number error handling.
        if (body.price <= 0) {
            throw new Error("Price must be a positive number");
        }
        if (body.quantity <= 0) {
            throw new Error("Quantity must be a positive number");
        }
        //
        const data = yield book_services_1.BookServices.createBook(body);
        res.status(201).json({
            message: "Book created successfully",
            success: true,
            data,
        });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            error.status = 400; // Bad Request
        }
        next(error);
    }
});
//Create Book End 
//GetBook Start
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.BookServices.getBook();
        res.send({
            message: 'Books retrieved successfully',
            status: true,
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
//GetBook End
//Specific Book start
const specificBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield book_services_1.BookServices.specificBook(productId);
        if (!result) {
            throw new Error("Book not found 404");
        }
        res.send({
            message: 'Book retrieved successfully',
            status: true,
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong ☠️',
            error,
        });
    }
});
//Specific Book end
//Update Book Start
const UpdateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const body = req.body;
        const result = yield book_services_1.BookServices.UpdateBook(productId, body);
        res.send({
            message: "Book updated successfully",
            success: true,
            result
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Something went Wrong",
            error,
        });
    }
});
//Update Book End
//DeleteBook Start
const DeleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BookId = req.params.productId;
        yield book_services_1.BookServices.DeleteBook(BookId);
        res.send({
            message: 'Book deleted successfully',
            status: true,
            data: {},
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
//DeleteBook End
//
exports.BookController = {
    createBook,
    getBook,
    specificBook,
    UpdateBook,
    DeleteBook
};
