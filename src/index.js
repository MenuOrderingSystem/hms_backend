const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

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

app.listen(8080, () => {
    console.log("server started at 8080")
})