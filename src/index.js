const express = require('express')

const cors = require('cors')

const connectToMongoDb = require('./config/db')


const ApiRoutes = require('./routes')

const app = express();

app.use('/uploads', express.static('uploads'));

app.use(express.json());


app.use(cors());

connectToMongoDb();


app.use('/api', ApiRoutes);

app.get("/", (req, res) => {
    res.json({message: "success11"})
})

app.listen(5000, () => {
    console.log("server started at 5000")
})