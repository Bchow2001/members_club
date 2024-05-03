const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

/* GET user list page */
router.get("/", userController.user_list);

// GET log in page
router.get("/log-in", userController.user_log_in_get);

// POST log in page
router.post("/log-in", userController.user_log_in_post);

// GET sign up form
router.get("/sign-up", userController.user_create_get);

// POST request for creating user
router.post("/sign-up", userController.user_create_post);

// GET secret form
router.get("/secret", userController.user_secret_get);

// POST secret form
router.post("/secret", userController.user_secret_post);

// GET request to delete a user
router.get("/:id/delete", userController.user_delete_get);

// POST request to delete a user
router.post("/:id/delete", userController.user_delete_post);

// GET request to update a user
router.get("/:id/update", userController.user_update_get);

// POST request to update a user
router.post("/:id/update", userController.user_update_post);

module.exports = router;
