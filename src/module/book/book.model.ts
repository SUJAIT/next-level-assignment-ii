import { model, Schema } from "mongoose";
import { IBook} from "./book.interface";

//Book Model Start
const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: [true, "The book title is required."], 
        minlength: [3, "The title must be at least 3 characters long."], 
        maxlength: [100, "The title must not exceed 100 characters."], 
        trim: true,
      },
    //book writer
    author: {
        type: String,
        required: [true, "The author's name is required."],
        minlength: [3, "The author's name must be at least 3 characters long."],
        maxlength: [50, "The author's name must not exceed 50 characters."],
        trim: true,
      },
  
      price: {
        type: Number,
        required: [true, "The price of the book is required."],
        min: [0, "The price must be a positive number."], 
      },
    category: {
        type: String,
        required: [true, "The category of the book is required."],
        enum: {
          values: ["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"],
          message:
            "Invalid category. Must be one of 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', or 'Religious'.", 
        },
      },
    description: {
        type: String,
        required: [true, "A description of the book is required."],
        maxlength: [500, "The description must not exceed 500 characters."],
        trim: true,
      },
    quantity: {
        type: Number,
        required: [true, "The quantity of the book is required."],
        min: [0, "The quantity must be 0 or more."],
      },
    inStock: {
        type: Boolean,
        required: true,
        default: true,
    },
},
 { timestamps: true}
)

// book Model End

//Export 
const Book = model<IBook>('Book', bookSchema)
export default Book