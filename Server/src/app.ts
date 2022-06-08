import { userRouter } from "./routes";

const cors = require('cors');

var express = require("express");
var app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));


app.use("/api/users", userRouter);


module.exports = app;
