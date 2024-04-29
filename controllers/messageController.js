const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const User = require("../models/user");

// Display Messages
exports.message_list = asyncHandler(async (req, res, next) => {
	res.send("Message list not implemented yet");
});

// Display create message form on GET
exports.message_create_get = asyncHandler(async (req, res, next) => {
	res.send("Create form not implemented yet");
});

// Handle message on POST
exports.message_create_post = asyncHandler(async (req, res, next) => {
	res.send("Message create post not implemented yet");
});

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
