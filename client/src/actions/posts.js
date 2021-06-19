import * as api from '../api'; // imports everything from the actions as api.

// Action Creators- are functions that return actions - actions is an object that contains a type and payload
// we need to use redux thunk to create an async call to get access to dispatch
export const getPosts = () => async(dispatch) => { 
    try {
        // fetch all the data from the api
        const { data } = await api.fetchPosts(); // getting the response/data(posts) from the api, and will be returned from backend
       
        // dispatch the action from the data from the backend
        dispatch ({ 
            type: 'FETCH_ALL',
            payload: data
        }); 
    } catch (error) {
        console.log(error.message);
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post); // make a post api request 

        dispatch({
            type: 'CREATE',
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {// make api request to update the post
        const { data } = await api.updatePost(id, post);
        dispatch({ 
            type: 'UPDATE',
            payload: data
        })
    } catch(error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({
            type: 'DELETE',
            payload: id
        });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ 
            type: 'UPDATE',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}