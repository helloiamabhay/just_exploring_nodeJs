const express=require("express")
const routes=express.Router()
const detail=require("../models/detail")
const slider=require("../models/slider")
const service=require("../models/service")
const contact=require("../models/contact")
// const Sync = require("twilio/lib/rest/Sync")
// const async = require("hbs/lib/async")

routes.get("/",async(req,res)=>{
   // res.send("this is from router.")
   const details= await detail.findOne({"_id":"6485a308e31d5ef8809f8453"})
   const sliders= await slider.find()
   const services= await service.find()

  // console.log(services)
 //  console.log(details)s

   res.render("index",{
      details:details,
      sliders:sliders,
      services:services
   })

})
routes.get("/gallery",async(req,res)=>{
    //res.send("this is from gallery.")
    const details= await detail.findOne({"_id":"6485a308e31d5ef8809f8453"})
    res.render("gallery",{
      details:details
   })


})

// save data of form to db
routes.post("/process-contact-form",async(req,res)=>{
   //console.log(req.body)
console.log("this form has been submited")
//save the data to db
try {
   const data= await contact.create(req.body)
   res.redirect("/")
console.log(data)

} catch (e) {
   console.log(e)
   res.redirect("/")

}


})

module.exports=routes