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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookServices = void 0;
const book_model_1 = __importDefault(require("./book.model"));
//create Book 
const createBook = (bookcreate) => __awaiter(void 0, void 0, void 0, function* () {
    const data = new book_model_1.default(bookcreate);
    const result = yield data.save();
    return result;
});
//
//getAllBook
const getBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.find();
    return result;
});
//
//Specific Book Get 
const specificBook = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.findById(productId);
    return result;
});
//
//BookUpdate
const UpdateBook = (productId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = book_model_1.default.findByIdAndUpdate(productId, payload, {
        new: true
    });
    return result;
});
//
//Delete Book 
const DeleteBook = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.findByIdAndDelete(productId);
    return result;
});
//
//export service
exports.BookServices = {
    createBook,
    getBook,
    specificBook,
    UpdateBook,
    DeleteBook
};
