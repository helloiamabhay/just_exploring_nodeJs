const { query } = require("express")
const mongoose=require("mongoose")
const contact=mongoose.Schema({
    email:String,
    contact_number:String,
    query:String
})

module.exports=mongoose.model("queries",contact)