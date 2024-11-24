const {Schema , model} = require("mongoose")

const bookSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  page : {
    type : Number,
    required : true
  },
  publishYear : {
    type : Number,
    required : true
  },
})

module.exports = model("books" , bookSchema)