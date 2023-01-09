import mongoose from 'mongoose';
const validator = require("validator");

const imessageSchema = mongoose.Schema({
    chatName: String,
    conversation: [
        {
            message: String,
            timestamp: String,
            user: {
                displayName: String,
                email: String,
                photo: String,
                uid: String
            }
        }
    ]
});

export default mongoose.model('conversations', imessageSchema);