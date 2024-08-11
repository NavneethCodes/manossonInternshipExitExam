const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect(
   'mongodb+srv://navneetharun0402:navneetharun2004@cluster0.jztkyk0.mongodb.net/employeeApp?retryWrites=true&w=majority&appName=cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
