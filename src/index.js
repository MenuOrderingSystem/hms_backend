const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const ApiRoutes = require('./routes')

const app = express();

app.use(express.json());

const {parsed} = dotenv.config({ path: '../.env' })
app.use(cors());

app.use('/api', ApiRoutes)
app.get("/", (req, res) => {
    console.log("abc")
    console.log(req, res)
    res.json({message: "success11"})
})
const ur = parsed.MONGO_URI


mongoose.connect(
    ur,
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