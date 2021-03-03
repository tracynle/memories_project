// create all your handlers for your routes
import PostMessage from '../models/postMessage.js'; 


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