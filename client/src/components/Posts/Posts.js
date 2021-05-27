import React from 'react';

import { useSelector } from 'react-redux';

import Post from './Post/Post';

function Posts() {

    const posts = useSelector((state) => state.posts);
    return (
        <div>
            <h1> posts</h1>
            <Post />
        </div>
    )
}

export default Posts;
