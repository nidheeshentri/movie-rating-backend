const sample = (req, res, next)=>{
  console.log("Middleware working")
  next()
}

module.exports = sample