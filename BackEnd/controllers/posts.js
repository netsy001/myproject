//access to model
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

//controlloing the routes logic i.e the function for clear understanding
export const getPosts = async (req, res) => {
    try {
        // retriving all posts in DB... its async function as it takes time for finding msgs.
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt });
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    //object destruction id
    const { id: _id } = req.params;
    //we r requesting the data for updates and using as params in updatedPost.
    const post = req.body;

    //since Db is monngo validating the id with mongo
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    //since Db is monngo validating the id with mongo
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const deletedPost = await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}