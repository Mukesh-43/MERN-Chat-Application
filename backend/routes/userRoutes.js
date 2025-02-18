const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// All the required routes along with authentication
router.get("/", protect, allUsers);
router.post("/", registerUser);
router.post("/login", authUser);

module.exports = router;
