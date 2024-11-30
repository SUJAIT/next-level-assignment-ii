"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_controller_1 = require("./book.controller");
const express_1 = require("express");
const BookRouter = (0, express_1.Router)();
//createBook 
BookRouter.post('/', book_controller_1.BookController.createBook);
//
//GetBook All Book
BookRouter.get('/', book_controller_1.BookController.getBook);
//
//Specifi Book Call
BookRouter.get("/:productId", book_controller_1.BookController.specificBook);
//
//Update Book start
BookRouter.put('/:productId', book_controller_1.BookController.UpdateBook);
//
//DeleteBook 
BookRouter.delete("/:productId", book_controller_1.BookController.DeleteBook);
//
//export
exports.default = BookRouter;
