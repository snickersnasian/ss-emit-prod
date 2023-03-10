const { Schema, model } = require("mongoose");

const schema = new Schema({
	name: { type: String, required: true },
	login: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

module.exports = model("Users", schema);
