const express = require("express");
const path = require("path");
const port = process.env.PORT || 3005; ///makes sure you get a proper host
require("./db/conn");
const hbs = require("hbs");
const Register = require("./models/registers")
const app = express();
const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../template/views");
const partials_path = path.join(__dirname, "../template/partials");
// console.log(partials_path);
const bcrypt=require("bcryptjs");


app.use(express.json());
app.use(express.urlencoded({extended:false}));
// console.log(path.join(__dirname, "../public"));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);




app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});


app.post("/register",async (req,res) =>{
    try{
// console.log(req.body.email1);
// res.send(req.body.email1);
const registerUser= new Register({
  email: req.body.email,
  password: req.body.password,
})


const registered = await registerUser.save(); 


res.status(201).render("login");
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }
    
});




app.post("/login", async(req,res)=>{
  try{
    const email= req.body.email;
    const password= req.body.password;
    const useremail = await Register.findOne({email:email});
    const isMatch =await bcrypt.compare(password,useremail.password);
    // console.log(useremail);
if(isMatch){
  res.status(201).render("index");
}else{
  res.send("error");
};
  }catch(err){
res.status(400).send(err);
console.log(err);
  }
});

// const bcrypt = require("bcryptjs");
// const securePasssword=  async(password)=>{
//   const passwordHash= await bcrypt.hash(password,10);
//   // console.log(passwordHash);
//   const passwordMatch = await bcrypt.compare(password,passwordHash);
//   console.log(passwordMatch);
// }

// securePasssword("aditya");


app.listen(port, () => {
  console.log(`server started on local host ${port}`);
});
