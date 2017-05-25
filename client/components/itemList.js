import React from 'react';
import { connect } from 'react-redux';
import { 
    getCards,deleteData,isLoading,likes,dislikes,bookmarked,
    currentCard
} from '../actions/index';
import Main from './Main.component';

  const mapStateToProps = (state) => {
        return {
            getData:state.getData,
            pageload:state.pageload,
            likedPosts:state.likedPosts,
            dislikedPosts:state.dislikedPosts,
            bookmarkedPosts:state.bookmarkedPosts,
            openedCard:state.openedCard
        };
    }

const mapDispatchToProps = (dispatch) => {
        return {
            getCards: (url) => dispatch(getCards(url)),
            deleteData:()=>dispatch(deleteData()),
            isLoading:(bool)=>dispatch(isLoading(bool)),
            likes:(id,count)=>dispatch(likes(id,count)),
            dislikes:(id,count)=>dispatch(dislikes(id,count)),
            bookmarked:(id,status)=>dispatch(bookmarked(id,status)),
            currentCard:(card)=>dispatch(currentCard(card))
        };
    }
    var App=connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
