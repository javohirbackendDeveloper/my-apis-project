const {Router} = require("express")
const { getBooks, addBook, updateBook, deleteBook, search } = require("../controller/books.controller")

const bookRouter = Router()

bookRouter.get("/getBooks" , getBooks)
bookRouter.post("/addBook" , addBook)
bookRouter.put("/updateBook/:id" , updateBook)
bookRouter.delete("/deleteBook/:id" , deleteBook)
bookRouter.get("/search" , search)

module.exports = bookRouter