const express = require("express")
const mongoose = require("mongoose")
const app = express()
const Book = require("./models/book.model.js")
const bookRoute = require("./routes/book.route.js")

app.use(express.json())
app.use(express.urlencoded({extended: false}));


app.use("/api/book", bookRoute);




// app.post('/api/book',async(req,res)=>{
//     try{
//         const book = await Book.create(req.body)
//         res.status(200).json(book)
//     }
//     catch (error){
//         res.status(500).json({message: error.message})
//     }
// })

// app.get('/api/book', async(req, res) => {
// 	try {
// 		const book= await Book.find({})
// 		res.status(200).json(book)
// 	}
// 	catch(error) {
// 		res.status(500).json({message:error.message})
// 	}
// })

// app.get('/api/book/:id',async(req,res)=>{
//     try {
//        const {id} = req.params;
//        const book = await Book.findById(id);
//        res.status(200).json(book)
//     }
//     catch(error) {
//        res.status(500).json({message: error.message})
//     }
// })


// app.put('/api/book/:id',async(req,res)=>{
//     try {
//       const {id} = req.params 
//       const book = await Book.findByIdAndUpdate(id, req.body)
//       if(!book) {
//         return res.status(404).json({message: "Book not found"});
//       }
//       const  updatedBook = await Book.findById(id)
//       res.status(200).json(updatedBook)
//     }
//     catch(error) {
//         res.status(500).json({message: error.message})
//      }
// })



// app.delete('/api/book/:id',async(req,res)=>{
//     try {
//         const {id} = req.params 
//         const book = await Book.findByIdAndDelete(id, req.body)
//         if(!book) {
//             return res.status(404).json({message: "Book not found"});
//           }
//           res.status(200).json({message: "Book deleted successfully"})
//     }
//     catch(error) {
//         res.status(500).json({message: error.message})
//      }
// })






mongoose.connect("mongodb+srv://amanjulathalevontechno:5QPdmmhgx6Wk2nA1@book.bjzrq.mongodb.net/?retryWrites=true&w=majority&appName=Book")
	.then(() => {
        app.listen(3003,()=>{
            console.log("Connected MongoDB")
        }
        )
	})
	.catch(() => {
		console.log("Failed to connect MongoDB");

	})