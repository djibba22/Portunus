const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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


const Comments = mongoose.model('KeyStore', commentsSchema);

module.exports = Comments;