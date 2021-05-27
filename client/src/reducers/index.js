import { combineReducers } from 'redux';
//importing our reducers
import posts from './posts';

export default combineReducers({ 
    //using all the individaul reducers 
    posts 
});