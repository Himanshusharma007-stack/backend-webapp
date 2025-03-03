const express = require("express");
const UserController = require('../controllers/users')

const router = express.Router();

router.get("/", (req, res) => {
  return UserController.getAllUsers(req, res);
});

router.post("/createUser", (req, res) => {
  return UserController.createUser(req, res);
});

router.get("/:id", (req, res) => {
  return UserController.getUserById(req, res);
});

module.exports = router;
