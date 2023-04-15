const mongoose = require('mongoose');
mongoose.connect("your database", 
{useNewUrlParser : true, useUnifiedTopology: true, Family:4})
.then(()=>{console.log("Connected to MongoDB");}).catch((e)=>{ console.log(e);});



// const Schema = mongoose.Schema;
