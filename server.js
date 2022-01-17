const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  `mongodb+srv://Alex:chicken1@cluster0.qlq30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to database");
});

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);





app.listen(3000, () => console.log("server started"));
