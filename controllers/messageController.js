const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const User = require("../models/user");

// Display Messages
exports.message_list = asyncHandler(async (req, res, next) => {
	const [messages, user] = await Promise.all([
		Message.find()
			.sort({ time_stamp: -1 })
			.limit(20)
			.populate("user")
			.exec(),

		req.user ? User.findOne({ _id: req.user.id }).exec() : null,
	]);

	res.render("messageList", { title: "Messages", messages, user });
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

// Handle delete on POST
exports.message_delete_post = asyncHandler(async (req, res, next) => {
	const message = await Message.findById(req.params.id);

	if (message === null) {
		// no results
		res.redirect("/messages");
	} else {
		await Message.findByIdAndDelete(req.params.id);
		res.redirect("/messages");
	}
});
