const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    bookName: {
        type: String,
        require: [true, "Book name is required"],
    },
   
    author: {
        type: String,
    },
    publication_date: {
        type: String,
    },
    language: {
        type:String,
    },
},
    { timestamps: true }
)
const BookDetails = mongoose.model("BookDetails",BookSchema)
module.exports = BookDetails;