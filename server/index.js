import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// every route in postRoutes will start with /posts, it will not reach localhost:5000/ but localhost:5000/posts

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});

//connect server with mongodb 
const CONNECTION_URL = 'mongodb+srv://memories_project:148ciY8HPzUa5FpA@cluster0.6znsu.mongodb.net/memories_project?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(PORT, () => console.log( `Server running on port: ${PORT}` )))
    .catch( (error) => console.log(error.message) );

mongoose.set('useFindAndModify', false);