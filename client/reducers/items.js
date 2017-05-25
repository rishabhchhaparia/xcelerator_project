export function userItems(state = [], action) {
    console.log('insdide reducer');
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;

        default:
            return state;
    }
}
export function routeView(state=1,action){
    switch(action.type){
        case 'ROUTE_CHANGED':
            return action.view;
        default:
            return state;    
    }
}
export function getData(state=[],action){
    
    switch(action.type){
        case 'FETCH_DATA':
        {
            return action.data;
        }
        case 'DELETE_DATA':
            return [];
        default:
            return state;    
    }
}

export function pageload(state=true,action){
    switch(action.type){
        case 'LOADING_STATUS':
            return action.bool;
        default:
            return state;    
    }
}

export function openedCard(state={},action){
    switch(action.type){
        case 'ACTIVE_CARD':
            return action.card;
        default:
            return state;
    }
}

export function likedPosts(state=new Map(),action){
    switch(action.type){
        case 'LIKE':
            state.set(action.id,action.count);
            return state;
        default:
            return state;    
    }
}

export function dislikedPosts(state=new Map(),action){
    switch(action.type){
        case 'DISLIKE':
            state.set(action.id,action.count);
            return state;
        default:
            return state;    
    }    
}

export function bookmarkedPosts(state=new Map(),action){
        switch(action.type){
        case 'BOOKMARK':
            state.set(action.id,action.status);
            return state;
        default:
            return state;    
    }    
}

