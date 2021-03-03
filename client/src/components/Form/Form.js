import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';


import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', 
        title: '', 
        message: '',
        tags: '',
        selectedFile: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    // send over the post request with all the data the users submits
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData)); // pass the post data from state to dispatch
    }

    const clear = () => {

    }


    return (
        <Paper className= { classes.paper }>
            <form autoComplete='off' noValidate className={ `${classes.root} ${classes.form}` } onSubmit= { handleSubmit }>
                <Typography variant='h6'>Creating a Memory</Typography>
                <TextField 
                    name='creator' variant='outlined' label='Creator' fullWidth value={ postData.creator } // values stored in the state
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
                />
                <TextField 
                    name='title' variant='outlined' label='Title' fullWidth value={ postData.title } // values stored in the state
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
                />
                <TextField 
                    name='message' variant='outlined' label='Message' fullWidth value={ postData.message } // values stored in the state
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
                />
                <TextField 
                    name='tags' variant='outlined' label='Tags' fullWidth value={ postData.tags } // values stored in the state
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })} 
                />
                <div className={ classes.fileInput }>
                    <FileBase
                        type= 'file'
                        multiple= { false }
                        onDone= {( { base64 } ) => setPostData({ ...postData, selectedFile: base64 })} 
                    />
                </div>
                <Button className={ classes.buttonSubmit } variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={ clear } fullWidth>Clear</Button>
            </form>
        </Paper>

    );
}


export default Form;