const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
const path = require("path")
const productRouter = require("./router/product.routes")

app.use(cors())
app.use(express.json())

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"))

app.use(productRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT , () => {
  console.log("Server is running on the " + PORT);
})