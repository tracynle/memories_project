import mongoose from 'mongoose';


//create a mongoose schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

// exports a Mongoose model form the PostMessage file
export default PostMessage;