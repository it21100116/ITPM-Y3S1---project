const router = require("express").Router();
let User = require("../models/User");

//login///
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//login user
router.route("/login").post(async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.status(400).json({ msg: "The username and password required" });

  const foundUser = await User.findOne({ username: user });
  if (!foundUser) return res.status(401).json({ msg: "user not found" });

  // password comparison
  // const match = await bcrypt.compare(pwd, foundUser.password)
  const match = pwd === foundUser.password;

  if (match) {
    // create JWTs
    const role = foundUser.role;
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          role: role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    //saving refresh Token
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken, role });
  } else {
    res.sendStatus(401);
  }
});

//////////Create a User/////////////

router.route("/add").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const age = req.body.age;
  const role = req.body.role;

  const newUser = new User({
    username,
    password,
    name,
    age,
    role,
  });

  //validation of username if exists
  const user = await User.findOne({ username });

  if (user)
    return res.status(400).json({ msg: "This username already exists." });

  newUser
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

////////////////////////////////View ALL Users///////////////////////////////////////
router.route("/").get((req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

////////////////////////////////Edit a User///////////////////////////////////////

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { username, password, name, age } = req.body;

  const updateUser = {
    username,
    password,
    name,
    age,
  };

  const update = await User.findByIdAndUpdate(userId, updateUser)
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error Updating data", error: err.message });
    });
});

////////////////////////////////Delete a User///////////////////////////////////////

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;
  await User.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error Deleting user", error: err.message });
    });
});

////////////////////////////////View only one Quiz///////////////////////////////////////

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await User.findById(userId)
    .then((user) => {
      res.status(200).send({ status: "Quiz Fetched", user: user });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Quiz", error: err.message });
    });
});

module.exports = router;
