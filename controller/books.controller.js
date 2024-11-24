
const bookSchema = require("../schema/bookSchema")
require("dotenv").config()

const getBooks = async (req , res , next) => {
  try{
   const books = await bookSchema.find()
   res.json(books)
  }catch(error){
    next(error)
  }
}


const addBook = async (req , res , next) => {
  try{
    const {title , publishYear , page} = req.body
    await bookSchema.create({title , publishYear , page})
    res.json({
      message : "Added"
    })
  }catch(error){
    next(error)
  }
}

const updateBook =async (req , res , next) => {
  try{
    const {id} = req.params
    const updatedData = req.body
   const findData = await bookSchema.findOneAndUpdate({_id : id} , updatedData)
   res.json({
    message : "updated"
   })
  }catch(error){
    next(error)
  }
}

const deleteBook =async (req , res , next) => {
  try{
    const {id} = req.params
    const deleted = req.body
    const findData = await bookSchema.findOneAndDelete({_id : id} , deleted)
    res.json({
      message : "Deleted"
    })
  }catch(error){
    next(error)
  }
}

const search =async (req , res , next) =>{
  try{
    const {title} = req.query

    const query = {}

    if (title) {
       query.title = {$regex : title , $options : "i"}
    }
   

 const book = await bookSchema.find(query)
 res.json(book)
  }catch(error){
    next(error)
  }
}



module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  search
}