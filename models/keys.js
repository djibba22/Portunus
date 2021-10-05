const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    apiKey: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const KeyStore = mongoose.model('KeyStore', keySchema);

module.exports = KeyStore;