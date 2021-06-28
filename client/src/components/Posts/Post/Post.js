
import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import Typopgraphy from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';


const Post = ( { post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typopgraphy variant='h6'>{post.creator}</Typopgraphy>
                <Typopgraphy variant='body2'>{moment(post.createdAt).fromNow()}</Typopgraphy>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size='small' 
                    onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizIcon fontSize='default'/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typopgraphy variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typopgraphy>
            </div>
            <Typopgraphy variant='h5' className={classes.title} gutterBottom>{post.title}</Typopgraphy>
            <CardContent>
                <Typopgraphy variant='body2' color="texSecondary" component="p">{post.message}</Typopgraphy>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id)) }>
                    <ThumbUpAltIcon fontSize='small' />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id)) }>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}


export default Post;