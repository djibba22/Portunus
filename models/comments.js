const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * This is a future model adding a feature for application feedback
 */
const commentsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});


const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;