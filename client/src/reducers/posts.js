// reducer is a function that accepts the posts and action (the state and action)

export default ( posts = [], action ) => {
    // or could use switch statement

    switch (action.type) {
        case 'FETCH_ALL': 
            // returns the posts
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}
