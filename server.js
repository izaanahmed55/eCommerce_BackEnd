const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./api/routes/Auth.routes")

const CONNECTION_URL =
  "mongodb+srv://iak:cuteboy@eCommerce.rvrih92.mongodb.net/WaqtPayDB?retryWrites=true&w=majority";

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use("/", userRoute)
app.use("/", authRoute);

app.set("view engine", "ejs");

const connectDB = async () => {
  const conn = await mongoose.connect(CONNECTION_URL);
  console.log("MongoDB Connected Succesfully");
};

connectDB()
  .then(app.listen(PORT, () => console.log("Server Is Running")))
  .catch((err) => console.log("Error: ", err));

module.exports = app;
