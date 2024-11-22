const getProduct = (req , res , next) => {
  try{
   res.render("index")
  }catch(error){
    next(error)
  }
}


module.exports = getProduct