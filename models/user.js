const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
	first_name: { type: String, required: true, maxLength: 30 },
	last_name: { type: String, required: true, maxLength: 30 },
	username: { type: String, required: true, maxLength: 100 },
	password: { type: String, required: true },
	membership: { type: Boolean, required: true },
	admin: { type: Boolean, required: true },
});

UserSchema.virtual("fullName").get(function () {
	let fullName = "";
	if (this.first_name && this.last_name) {
		fullName = `${this.first_name} ${this.last_name}`;
	}
	return fullName;
});

UserSchema.virtual("url").get(function () {
	return `/users/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);
