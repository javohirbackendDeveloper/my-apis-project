const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
const path = require("path")
const productRouter = require("./router/product.routes")
const uploadRouter = require("./router/upload.routes")
const connectDB = require("./db/mongodb.connect")
const bookRouter = require("./router/book.routes")
const errorMiddleware = require("./middleware/error.middleware")


app.use(cors())
app.use(express.json())

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"))


///////////////// routers

app.use(productRouter)
app.use(uploadRouter)
app.use(bookRouter)


app.use("/images" , express.static("upload/images"))
app.use(errorMiddleware)

connectDB()


const PORT = process.env.PORT || 5000

app.listen(PORT , () => {
  console.log("Server is running on the " + PORT);
})