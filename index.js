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

// Define the user schema and model
const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    dept: String,
    gender: String, 
});

const userModel = mongoose.model("sdata", userSchema); // Correct model name (lowercase)

app.get('/getUsers',(req,res)=>{
  userModel.find()
  .then(users=>res.json(sdata))
  .catch(err => res.json(err))
})
