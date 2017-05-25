export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function userFetchDataSuccess(users) {
    //console.log(items);
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}
var Bookmarks = [];
var Likes = [];
var Dislikes = [];

export function getUsers(url) {
    return (dispatch) => {
        fetch(url).then((response) => {
            return response;
        })
            .then((response) => response.json())
            .then((users) => dispatch(userFetchDataSuccess(users)))
            .catch(() => dispatch(itemsHasErrored(true)));
    }
}

export function addBookmarks(index, users, Bookmarks) {
    var flag = true, f = true;
    return (dispatch) => {
        for (var i = 0; i < Bookmarks.length; i++) {

            if (users[index].id == Bookmarks[i].id) {

                flag = false;
                Bookmarks.splice(i, 1);
                f = false;
            }
        }
        if (flag == true) {
            Bookmarks.push(users[index]);
        }
        dispatch(getBookmarks(Bookmarks));

    }
    console.log("Inside Add Bookmark", Bookmarks);
}
export function getBookmarks(bookmark) {

    return {
        type: 'DISPLAY_BOOK_MARKS',
        bookmark

    }
}
export function editLikes(index, users, TotalLikes) {
    var flag = true, f = true;
    return (dispatch) => {

        for (var i = 0; i < Likes.length; i++) {

            if (users[index].id == Likes[i].id) {

                flag = false;
                Likes.splice(i, 1);
                console.log(Likes.length);
                f = false;
            }

        }
        if (flag == true || (Likes.length == 0 && f == true))
            Likes.push(users[index]);

        dispatch(getTotalLikes(Likes));

    }
}
export function getTotalLikes(like) {

    return {
        type: 'DISPLAY_LIKES',
        like

    }
}
export function editDislikes(index, users, Dislikes) {
    var flag = true, f = true;
    return (dispatch) => {

        for (var i = 0; i < Dislikes.length; i++) {

            if (users[index].id == Dislikes[i].id) {

                flag = false;
                Dislikes.splice(i, 1);
                console.log(Dislikes.length);
                f = false;
            }

        }
        if (flag == true || (Dislikes.length == 0 && f == true))
            Dislikes.push(users[index]);

        dispatch(getTotalDislikes(Dislikes));

    }
}
export function getTotalDislikes(Dislike) {

    return {
        type: 'DISPLAY_DISLIKES',
        Dislike

    }
}
export function increment(users, index) {
    console.log("inside increment function ", users);
    return {
        type: 'INCREMENT_LIKES',
        users,
        index
    };
}
export function changeView(view) {
    return {
        type: 'CHANGE_VIEW',
        view
    }
}
