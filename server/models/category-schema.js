const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
    
    name:  {
        type: String, unique : true, required : true
    }
}, {
        collection: 'category'
    })

module.exports = mongoose.model('Category', categorySchema)