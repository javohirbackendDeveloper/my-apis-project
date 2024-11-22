const {Router} = require("express")
const getProduct = require("../controller/product.controller")


const productRouter = Router()

productRouter.get("/" , getProduct)


module.exports = productRouter