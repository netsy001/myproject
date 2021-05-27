//access to model
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

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}