const express = require("express");
const cors = require("cors");
const userModel = require('./model');
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = new userModel(req.body)
    await result.save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.get("/get", async (req, res) => {
  try {
    const users = await userModel.find();
    console.log("Users\n", users);
    res.status(200).json({users: users});
  } catch (error) {
    console.log(error);
  }
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
