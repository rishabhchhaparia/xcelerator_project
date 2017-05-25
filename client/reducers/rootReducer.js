import { combineReducers } from 'redux';
import {getData,pageload,likedPosts,dislikedPosts,bookmarkedPosts, openedCard} from './items';

var rootReducer= combineReducers({
    getData,
    pageload,
    likedPosts,
    dislikedPosts,
    bookmarkedPosts,
    openedCard
});

export default rootReducer;