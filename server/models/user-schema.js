const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    
    name: {
        type: String
    },
    category:  {
        type: String
    },
    username: {
        type: String
    },
    password:  {
        type: String
    }
}, {
        collection: 'users'
    })

module.exports = mongoose.model('User', userSchema)