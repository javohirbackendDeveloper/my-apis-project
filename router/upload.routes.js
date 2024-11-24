const {Router} = require("express")
const { addImage, upload } = require("../controller/upload")

const uploadRouter = Router()

uploadRouter.post("/upload" , upload.single("images") , addImage)


module.exports = uploadRouter