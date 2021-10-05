const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keySchema = new Schema({
    name: {
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

const Key = mongoose.model('Key', keySchema);

module.exports = Partner;