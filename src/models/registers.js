const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//Set up default mongoose connection

const employeeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
    // minlength: 8,
  },
});
employeeSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // const passwordhash = await bcrypt.hash(password, 10);
    // console.log(this.password);
    this.password = await bcrypt.hash(this.password, 10);
    // console.log(this.password);
    // this.confirmpassword:undefined
  }
  next();
  
});

const Register = new mongoose.model("User", employeeSchema);

module.exports = Register;
