//reference axios npm documentation

import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:3001'});

export const fetchPosts = () => API.get('/posts');

export const createPost = (newPost) => API.post('/posts', newPost);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) =>API.delete(`/posts/${id}`);

export const signin =(formData) =>  API.post('/users/signin', formData);
export const signup =(formData) =>  API.post('/users/signup', formData);