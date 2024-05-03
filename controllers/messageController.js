const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const User = require("../models/user");

// Display Messages
exports.message_list = asyncHandler(async (req, res, next) => {
	const messages = await Message.find()
		.sort({ time_stamp: -1 })
		.limit(20)
		.populate("user")
		.exec();

	res.render("messageList", { title: "Messages", messages });
});

// Display create message form on GET
exports.message_create_get = asyncHandler(async (req, res, next) => {
	if (req.isAuthenticated()) {
		res.render("messageForm", {
			title: "New Message",
			message: null,
			errors: null,
		});
	} else {
		res.redirect("/users/log-in");
	}
});

// Handle message on POST
exports.message_create_post = [
	body("title")
		.trim()
		.isLength(3)
		.withMessage("Title must be at least 3 characters")
		.escape(),
	body("text")
		.trim()
		.notEmpty()
		.withMessage("Text must not be empty")
		.escape(),

	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);

		const message = new Message({
			title: req.body.title,
			text: req.body.text,
			time_stamp: new Date(),
			user: req.user.id,
		});
		if (!errors.isEmpty()) {
			// There are errors render again with sanitized values
			res.render("messageForm", {
				title: "New Message",
				message,
				errors,
			});
		} else {
			const newMessage = await message.save();
			res.redirect("/messages");
		}
	}),
];

// Display message delete form on GET
exports.message_delete_get = asyncHandler(async (req, res, next) => {
	res.send("Message delete get not implemented yet");
});

// Handle delete on POST
exports.message_delete_post = asyncHandler(async (req, res, next) => {
	res.send("Message delete post not implemented yet");
});

// Display message update form on GET
exports.message_update_get = asyncHandler(async (req, res, next) => {
	res.send("Message update get not implemented yet");
});

// Handle message update on POST
exports.message_update_post = asyncHandler(async (req, res, next) => {
	res.send("Message update post not implemented yet");
});
