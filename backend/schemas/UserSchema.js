const {Schema} = require("mongoose");

const UserSchema = new Schema({
     username: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    mobileNo: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

});

module.exports ={ UserSchema };
