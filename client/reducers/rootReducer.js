import { combineReducers } from 'redux';
import { userItems, userLikes, BookmarkPosts, setView, LikePosts, DislikePosts } from './items';

var rootReducer = combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
    userItems,
    userLikes,
    BookmarkPosts,
    setView,
    LikePosts,
    DislikePosts
});

export default rootReducer;