const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//////////////////login///////////////////
const credentials = require('./middleware/credentials')

const cookieParser = require("cookie-parser");
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
//////////////////////////////////////////////////
const PORT = process.env.PORT || 8070;

app.use(credentials)

app.use(cors(corsOptions));
app.use(bodyParser.json());

//login
app.use(cookieParser());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

//---------------------------------------------------samiru------------------------------------------------------

const guideRouter = require("./routes/Quizs.js");
app.use("/quiz", guideRouter); //loads http://localhost:8070/Quizs.js

//---------------------------------------umanda------------------------------//
const animalRouter = require("./routes/AnimalRegs.js");
app.use("/animalreg", animalRouter); //loads http://localhost:8070/animalreg.js

const treatmentRouter = require("./routes/Treatments.js");
app.use("/treatment", treatmentRouter); //loads http://localhost:8070/treatment.js

//---------------------------------------Chathumini------------------------------//
const foodRouter = require("./routes/Foods.js");
app.use("/food", foodRouter);

const foodGivenRouter = require("./routes/FoodGivens.js");
app.use("/foodgiven", foodGivenRouter);

const foodBoughtRouter = require("./routes/FoodBoughts.js");
app.use("/foodbought", foodBoughtRouter);

const userRouter = require("./routes/Users.js"); //user database
app.use("/user", userRouter);

//---------------------------------------vijini------------------------------//
//-Events-
const eventRouter = require("./routes/Events.js");
app.use("/event", eventRouter); //loads http://localhost:8070/events.js

app.listen(PORT, () => {
  console.log(`Server is up and running on port number:  ${PORT}`);
});
