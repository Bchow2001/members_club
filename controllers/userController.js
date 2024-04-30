const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
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
	res.send("Create form not implemented yet");
});

// Handle user on POST
exports.user_create_post = asyncHandler(async (req, res, next) => {
	res.send("user create post not implemented yet");
});

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
