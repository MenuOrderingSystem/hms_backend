const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')

const mongoose = require('mongoose')
const ApiRoutes = require('./routes')

const app = express();

app.use('/uploads', express.static('uploads'));

app.use(express.json());


app.use(cors());


app.use('/api', ApiRoutes);

app.get("/", (req, res) => {
    res.json({message: "success11"})
})


mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => {
      console.log("DB connection established");
    }
  );

app.listen(5000, () => {
    console.log("server started at 5000")
})