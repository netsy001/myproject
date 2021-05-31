const  mongoose = require  ('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }

});

const PostMessage = mongoose.model('PostMessage', postSchema);

module.exports = PostMessage;