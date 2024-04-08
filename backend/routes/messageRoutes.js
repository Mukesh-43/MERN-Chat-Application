const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");
const router = express.Router();

// All the required routes along with authentication
router.post("/", protect, sendMessage);
router.get("/:chatId", protect, allMessages);

module.exports = router;
