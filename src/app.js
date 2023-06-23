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

// service.create(
//   [
//     {
//       icon:"fa-sharp fa-solid fa-medal",
//       title:"our services",
//       discruption:"heck our services and join with us and improve your self.",
//       linkText:"click",
//       link:"https://www.google.com"
//     },
//     {
//       icon:"fa-regular fa-dumbbell",
//       title:"our services",
//       discruption:"heck our services and join with us and improve your self.",
//       linkText:"click",
//       link:"https://www.microsoft.com"
//     },
//     {
//       icon:"fa-regular fa-badminton",
//       title:"our services",
//       discruption:"heck our services and join with us and improve your self.",
//       linkText:"click",
//       link:"https://www.facebook.com"
//     }

//   ]
// )



// slider.create([
//     {
//    active:"empty",
// title:"let's make fit and healthy",
// subtitle:"fitness is the so impoetant part of life",
// imageUrl:"/static/images/img05.jpg"

// },
// {
//       active:"active",
//     title:"let's make fit and healthy",
//     subtitle:"fitness is the so impoetant part of life",
//     imageUrl:"/static/images/img02.jpg"
    
//     },
//     {
//         active:"empty",
//         title:"let's make fit and healthy",
//         subtitle:"fitness is the so impoetant part of life",
//         imageUrl:"/static/images/img03.jpg"
        
//         }
// ])


//     detail.create({
//         brandName:"fitness website",
//         brandIconUrl:"https://as1.ftcdn.net/v2/jpg/01/93/73/18/1000_F_193731868_afOYcVHhGIsrKB6IaO0kkQRVIXU47nvY.jpg",
//         links:[
//             {
//                 label:"home",
//                 url:"/"
//             },
//             {
//                 label:"services",
//                 url:"/services"
//             },
//             {
//                 label:"about",
//                 url:"/about"
//             },
//             {
//                 label:"contact us",
//                 url:"/contact-us"
//             },
//             {
//                 label:"gallery",
//                 url:"/gallery"
//             }
            
//     ]
//     })


  }




// create server
app.listen(process.env.PORT | 5556,()=>{
console.log("SERVER STARTED AT PORT 5556....")
})