const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

/* GET user list page */
router.get("/", userController.user_list);

// GET user create form
router.get("/create", userController.user_create_get);

// POST request for creating user
router.post("/create", userController.user_create_post);

// GET request to delete a user
router.get("/:id/delete", userController.user_delete_get);

// POST request to delete a user
router.post("/:id/delete", userController.user_delete_post);

// GET request to update a user
router.get("/:id/update", userController.user_update_get);

// POST request to update a user
router.post("/:id/update", userController.user_update_post);

module.exports = router;
