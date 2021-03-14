import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    const classes = useStyles();
    
    console.log(posts);
    {/* If there are no posts(true), show the cicular progress. If there are posts(false) show the posts */}
    return (
        !posts.length ? <CircularProgress /> : ( 
            <Grid className= { classes.container }  container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        {/* pass in props from post. aka props drilling: continue sending props over to the child components */}
                        <Post post={post} setCurrentId={ setCurrentId }/>
                    </Grid>
                )) }

            </Grid>
        )
    );
}


export default Posts;
