import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config(); // Ensure this is at the top to load the .env variables

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL; // Use the correct variable name

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connection successful");
    app.listen(PORT, () => {
      console.log(`Server is running successfully on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


const userSchema = new  mongoose.Schema({
    name:String,
    age:Number,
});

const userModel = mongoose.model("sdata",userSchema)

app.get("/getUsers",async(req,res)=>{
    const userData = await UserModel.find();
    res.json(user);
});