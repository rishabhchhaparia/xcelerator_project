import React from 'react';
import { connect } from 'react-redux';
import { getCards, getUsers, increment, addBookmarks, getBookmarks, changeView, editLikes, editDisLikes, currentCard, getTotalLikes, getTotalDislikes } from '../actions/items';
import Main from './Main.component';

const mapStateToProps = (state) => {
    return {
        cardDetails: state.cardDetails,
        users: state.userItems,
        bookmarked: state.BookmarkPosts,
        view: state.setView,
        likes: state.LikePosts,
        dislikes: state.DislikePosts,
        cardOpened: state.cardOpened

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBookmarks: (index, bookmarked) => dispatch(addBookmarks(index, bookmarked)),
        getCards: (url) => dispatch(getCards(url)),
        getUsers: (url) => dispatch(getUsers(url)),
        // increment: (users, index) => dispatch(increment(users, index)),
        // getBookmarks: () => dispatch(getBookmarks()),
        // changeView: (view) => dispatch(changeView(view)),
        editLikes: (index, likes) => dispatch(editLikes(index, likes)),
        editDisLikes: (index, disLikes) => dispatch(editDisLikes(index, disLikes)),
        currentCard:(card)=>dispatch(currentCard(card))

    };
}
var App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
