import * as api from '../api'; // imports everything from the actions as api.

// Action Creators- are functions that return actions - actions is an object that contains a type and payload
// we need to use redux thunk to create an async call to get acces to dispatch
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