const mongoose=require("mongoose")

const slider=mongoose.Schema({
    active:String,
    title:String,
    subtitle:String,
    imageUrl:String

})

module.exports=mongoose.model("slider",slider)