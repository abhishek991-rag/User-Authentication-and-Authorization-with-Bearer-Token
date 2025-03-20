const express = require("express");
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", authMiddleware, async (req, res) => {
  res.status(200).json({ id: req.user.id, msg: "User Authenticated" });
});

module.exports = router;