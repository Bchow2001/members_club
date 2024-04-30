const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Message = require("../models/message");
const User = require("../models/user");

// Display users list
exports.user_list = asyncHandler(async (req, res, next) => {
	res.send("user list not implemented yet");
});

// Display Log in
exports.user_log_in_get = asyncHandler(async (req, res, next) => {
	res.send("Log in form not implemented yet");
});

// Handle log in on POST
exports.user_log_in_post = asyncHandler(async (req, res, next) => {
	res.send("Log in handle on post not implemented yet");
});

// Display details for a specific user
exports.user_detail = asyncHandler(async (req, res, next) => {
	res.send("User detail page not implemented yet");
});

// Display create user form on GET
exports.user_create_get = asyncHandler(async (req, res, next) => {
	res.render("sign-up", { title: "Sign-up", user: null, errors: null });
});

// Handle user on POST
exports.user_create_post = [
	// Validation and sanitization
	body("first_name")
		.trim()
		.isLength({ min: 3 })
		.withMessage("First name must be at least 3 chars long")
		.escape(),
	body("last_name")
		.trim()
		.isLength({ min: 3 })
		.withMessage("Last name must be at least 3 chars long")
		.escape(),
	// Custom validator to ensure usernames are unique
	// By returning false we throw an error into validationResult(req)
	body("username")
		.trim()
		.isLength({ min: 3 })
		.withMessage("Username must be at least 3 chars long")
		.custom(async (value) => {
			const userExists = await User.findOne({
				username: value,
			})
				.collation({ locale: "en", strength: 2 })
				.exec();
			return !!userExists;
		})
		.withMessage("Username is already in use")
		.escape(),
	body("password")
		.trim()
		.isLength({ min: 6 })
		.withMessage("Password must be 6 characters long")
		.escape(),
	// Custom validator to ensure passwords match
	body("confirm_password")
		.trim()
		.custom((value, { req }) => value === req.body.password)
		.withMessage("Passwords must match")
		.escape(),

	asyncHandler(async (req, res, next) => {
		// Extract errors
		const errors = validationResult(req);
		// Create user without password as hashing takes a long time
		const user = new User({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			username: req.body.username,
			membership: false,
			admin: false,
		});
		if (!errors.isEmpty()) {
			// There are errors, render again with sanitized values and error messages
			// User has no password when we re-render
			res.render("sign-up", {
				title: "Sign-up",
				user,
				errors: errors.array(),
			});
		} else {
			// Data from form is valid and Username is not duplicate
			// We now hash the password and save the User to DB
			bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
				if (err) {
					next(err);
				} else {
					try {
						user.password = hashedPassword;
						const result = await user.save();
						res.redirect("/");
					} catch (err) {
						return next(err);
					}
				}
			});
		}
	}),
];

// Display user delete form on GET
exports.user_delete_get = asyncHandler(async (req, res, next) => {
	res.send("user delete get not implemented yet");
});

// Handle delete on POST
exports.user_delete_post = asyncHandler(async (req, res, next) => {
	res.send("user delete post not implemented yet");
});

// Display user update form on GET
exports.user_update_get = asyncHandler(async (req, res, next) => {
	res.send("user update get not implemented yet");
});

// Handle user update on POST
exports.user_update_post = asyncHandler(async (req, res, next) => {
	res.send("user update post not implemented yet");
});
