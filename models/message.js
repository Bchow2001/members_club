const mongoose = require("mongoose");

const { Schema } = mongoose;

const MessageSchema = new Schema({
	title: { type: String, required: true, maxLength: 100 },
	text: { type: String, required: true },
	time_stamp: { type: Date, required: true },
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

MessageSchema.virtual("url").get(function () {
	return `/messages/${this._id}`;
});

module.exports = mongoose.model("Message", MessageSchema);
