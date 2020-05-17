const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'seller']
    },
    tokens: [String],
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            delete ret.tokens;
            delete ret.password;
            return ret;
        }
    },
});
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;