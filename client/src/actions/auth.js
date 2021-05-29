import * as api from '../api';


export const signin = (formData, history) => async (dispatch) => {

    try {

        const { data } = await api.fetchPosts();
        //action is an object which takes in two parameters type, payload
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const signup = (formData, history) => async (dispatch) => {

    try {

        const { data } = await api.fetchPosts();
        //action is an object which takes in two parameters type, payload
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}