const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

//Heroku

//const PORT = 3000;
const PORT = process.env.PORT || 3000;
//const db = mongoose.connection.db;
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Adding my db connection

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

db.on("Error on Mongo Connection", (error) => console.error(error));
db.once("connected", () =>
  console.log("Success! You are connected to Mongoose")
);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
