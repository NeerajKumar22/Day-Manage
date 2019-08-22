// 1st Require packages........

const express = require("express");
const createError = require("http-errors");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const homeRouter = require('./routes/home');

// 2nd connect with db

const mongoURI = "mongodb://localhost:27017/day_manage";

mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log("Mongodb Connected"))
    .catch(err => console.log("Mongodb not Connected"))

const app = express();

// 3rd Middleware .....

app.use(express.json())
app.use(cors())
app.use(
    express.urlencoded({
        extended : false
    })
)

// 4th Route handler.......

app.use('/', homeRouter);

// Port............
const port = 5000;

// app listen on port 5000..............

app.listen(port, () => console.log(`Server started on port ${port}`));

