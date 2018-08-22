const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: { type: String, required: true },
  	nickname: { type: String, required: true }
	}, {
  	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports =  mongoose.model('usertest', UserSchema);;