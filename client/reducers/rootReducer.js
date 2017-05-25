import { combineReducers } from 'redux';
import { userItems, userLikes, BookmarkPosts, setView, LikePosts, DislikePosts, cardDetails,cardOpened } from './items';

var rootReducer = combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
    userItems,
    userLikes,
    BookmarkPosts,
    setView,
    LikePosts,
    DislikePosts,
    cardDetails,
    cardOpened
});

export default rootReducer;