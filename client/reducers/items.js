export function userItems(state = [], action) {
    console.log('inside reducer');
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;

        default:
            return state;
    }
}
export function LikePosts(state = [], action) {
        console.log("likes ",state);

    console.log('inside reducer');
    console.log(action);
    switch (action.type) {
        case 'DISPLAY_LIKES':
            return action.like;

        default:
            return state;
    }
}
export function DislikePosts(state = [], action) {
        console.log("Dislikes ",state);

    console.log('inside reducer');
    console.log(action);
    switch (action.type) {
        case 'DISPLAY_DISLIKES':
            return action.Dislike;
        default:
            return state;
    }
}
export  function userLikes(state = [], action) {
            console.log("userLikes ",state);
    switch (action.type) {
        case 'INCREMENT_LIKES':

            var index = action.index;
            console.log("userLikes ",state);
            return [
                ...state.slice(0, index),
                {...state[index], like: state[index].like + 1 },
                ...state.slice(index + 1)
            ];
    console.log(action);
    default:
    return state;
    }
}
export function BookmarkPosts(state = [], action) {
        console.log("Bookmarks ",state);

    console.log('inside reducer');
    console.log(action);
    switch (action.type) {
        case 'DISPLAY_BOOK_MARKS':
            return action.bookmark;

        default:
            return state;
    }
}
export function setView(state=1,action){
    switch(action.type){
        case 'CHANGE_VIEW':
            return action.view;
        default:
            return state;    
    }
}

