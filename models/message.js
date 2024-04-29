const mongoose = require("mongoose");

const { Schema } = mongoose;

const MessageSchema = new Schema({
	title: { type: String, required: true, maxLength: 100 },
	time_stamp: { type: Date, required: true },
	text: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

MessageSchema.virtual("url").get(function () {
	return `/messages/${this._id}`;
});

module.exports = mongoose.model("Message", MessageSchema);
