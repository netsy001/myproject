import * as api from '../api';

// creating action : action creators are functions that return actions

export const getPosts = () => async (dispatch) => {

    try {

        const { data } = await api.fetchPosts();
        //action is an object which takes in two parameters type, payload
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}


export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}
