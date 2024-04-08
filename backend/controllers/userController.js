const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken"); // getting the generate token function from config
const User = require("../models/userModel");

// Function for registering user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body; // getting from frontend

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  // Check for existing user
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Creating a new user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  // Response
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

// Function for authentication
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // If user exists and password matches, give response
  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

// Finding all users using keyword search
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search // Using query for search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } }); // find all users except the loggedIn user
  res.send(users);
});

// Exporting all the functions
module.exports = { registerUser, authUser, allUsers };
