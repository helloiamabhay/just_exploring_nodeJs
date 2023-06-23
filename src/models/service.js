const mongoose=require("mongoose")

const service=mongoose.Schema({
    icon:String,
    title:String,
    discruption:String,
    linkText:String,
    link:String

})

module.exports=mongoose.model("services",service)