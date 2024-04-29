const express = require("express");

const router = express.Router();
const messageController = require("../controllers/messageController");

/* GET message list page */
router.get("/", messageController.message_list);

// GET message create form
router.get("/create", messageController.message_create_get);

// POST request for creating message
router.post("/create", messageController.message_create_post);

// GET request to delete a message
router.get("/:id/delete", messageController.message_delete_get);

// POST request to delete a message
router.post("/:id/delete", messageController.message_delete_post);

// GET request to update a message
router.get("/:id/update", messageController.message_update_get);

// POST request to update a message
router.post("/:id/update", messageController.message_update_post);

module.exports = router;
