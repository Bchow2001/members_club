const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

/* GET user list page */
router.get("/", userController.user_list);

// GET log in page
router.get("/log-in", userController.user_log_in_get);

// POST log in page
router.post("/log-in", userController.user_log_in_post);

// Get log out and handle
router.get("/log-out", userController.user_log_out);

// GET sign up form
router.get("/sign-up", userController.user_create_get);

// POST request for creating user
router.post("/sign-up", userController.user_create_post);

// GET secret form
router.get("/secret", userController.user_secret_get);

// POST secret form
router.post("/secret", userController.user_secret_post);

// POST request to delete a user
router.post("/:id/delete", userController.user_delete_post);

module.exports = router;
