const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collectionSchema = new Schema(
    {
        Username: String,
        Title: String,
        JournalEntry: String,
        date: {
            type: Date,
            default: Date.now
        }
    }
);
module.exports = mongoose.model('collection', collectionSchema);