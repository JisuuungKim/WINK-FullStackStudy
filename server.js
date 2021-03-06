const express = require("express");

const app = express();

const port = 9000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const User = require('./users');
const router = require('./board')(app,User);
const dbAddress = "mongodb+srv://cham0810:sarah0810@@cluster0.hnrex.mongodb.net/test";

mongoose
    .connect(dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(()=> console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.get("/", (req,res) => res.send("Hello world!!!"));

app.listen(port, ()=> console.log(`listening on port ${port}`));