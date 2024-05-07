const express = require("express");

const router = express.Router();
const messageController = require("../controllers/messageController");

/* GET message list page */
router.get("/", messageController.message_list);

// GET message create form
router.get("/create", messageController.message_create_get);

// POST request for creating message
router.post("/create", messageController.message_create_post);

// POST request to delete a message
router.post("/:id/delete", messageController.message_delete_post);

module.exports = router;
