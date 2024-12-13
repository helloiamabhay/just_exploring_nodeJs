//console.log("dynamic website started")
const express=require("express")
const hbs=require("hbs")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const routes=require("./routes/main")
const detail=require("./models/detail")
const slider=require("./models/slider")
const service=require("./models/service")

app.use(bodyParser.urlencoded({
  extended:true
}))
// /static/css/style.css
app.use('/static',express.static("public"))
app.use('',routes)


//template engine by hbs
app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")




main().catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/mern_website")
    console.log("db connected")







  }




// create server
app.listen(process.env.PORT | 5556,()=>{
console.log("SERVER STARTED AT PORT 5556....")
})
