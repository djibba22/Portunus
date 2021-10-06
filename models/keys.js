const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CryptoJS = require("crypto-js");

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

// hash user password
keySchema.pre('save', async function (next) {
    // Encrypt
    this.apiKey = CryptoJS.AES.encrypt(this.apiKey, process.env.SECRET_STRING).toString();
    next();
});



const KeyStore = mongoose.model('KeyStore', keySchema);

module.exports = KeyStore;