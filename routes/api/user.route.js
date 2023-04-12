const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");

router.get("/", userController.getAllUsers);

router.get("/me", userController.getMyProfile);

router.get("/:id", userController.getUserById);

module.exports = router;
