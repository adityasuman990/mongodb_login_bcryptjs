const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://adityasuman990:Adityasuman990@cluster0.qagqwyj.mongodb.net/test", 
{useNewUrlParser : true, useUnifiedTopology: true, Family:4})
.then(()=>{console.log("Connected to MongoDB");}).catch((e)=>{ console.log(e);});



// const Schema = mongoose.Schema;
