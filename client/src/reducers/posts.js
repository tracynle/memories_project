// reducer is a function that accepts the posts and action (the state and action)

export default ( posts = [], action ) => {
    // or could use switch statement

    switch (action.type) {
        case 'DELETE': 
            // return all the posts but filter out the one we deletd
            return posts.filter((post) => post._id !== action.payload);
        
        case 'UPDATE': 
            // if post id is equal to action.payload, return it; it is the newly updated post 
            return posts.map((post) => post._id === action.payload._id ? action.payload : post );

        case 'FETCH_ALL': 
            // returns the posts
            return action.payload;

        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;

            
    }
}
