import { combineReducers } from 'redux';
//importing our reducers
import posts from './posts';
import auth from './auth';
export default combineReducers({ 
    //using all the individaul reducers 
    posts, auth
});