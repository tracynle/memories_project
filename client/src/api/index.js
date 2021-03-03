import axios from 'axios';

// url points to our backend routes
const url = 'http://localhost:5000/posts';

// make a call to get all the posts from the db
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);