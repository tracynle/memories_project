// create all your handlers for your routes
import PostMessage from '../models/postMessage.js'; 
import mongoose from 'mongoose';


export const getPosts = async (req, res) => {
    try {
        // retrieve all the posts from the db
        const postMessages = await PostMessage.find() ;
        
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json( { message: error.message } );
    }
}

export const createPost = async(req, res) => {
    const post = req.body;
    // create a new post
    const newPost = new PostMessage(post);

    try {
        await newPost.save(); // async action and saves the new post
        res.status(201).json(newPost); //success status
    } catch (error) {
        res.status(409).json( { message: error.message } );
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body; // sent from the front end

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }
    

    // if id is valid, update post in db
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, { new: true }); // receive updated post and updates in the db

    res.json(updatedPost);
}

export const deletePost = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post with that id');
    }

    console.log('DELETE!');

    await PostMessage.findByIdAndRemove(id);

    res.json( { message: 'Post deleted successfully' });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post with that id');
    }

    const post = await PostMessage.findById(id); //returns a post
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount  + 1 }, { new : true });

    res.json(updatedPost);
}