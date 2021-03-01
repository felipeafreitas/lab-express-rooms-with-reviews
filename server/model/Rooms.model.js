const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
	name: { type: String },
	description: { type: String },
	imageUrl: { type: String },
	reviews: [], // we will update this field a bit later when we create review model
});

const RoomModel = mongoose.model('Room', roomSchema);

module.exports = RoomModel;
