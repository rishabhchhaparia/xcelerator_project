import axios from 'axios'

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsFetchDataSuccess(data) {
    return {
        type: 'FETCH_DATA',
        data
    };
}

export function isLoading(bool){
    return{
        type:'LOADING_STATUS',
        bool
    }
}

export function userFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}

export function deleteData(){
    return{
        type:'DELETE_DATA'
    }
}


export function likes(id,count){
    return{
        type:'LIKE',
        id,
        count
    }
}

export function dislikes(id,count){
    return{
        type:'DISLIKE',
        id,
        count
    }
}

export function bookmarked(id,status){
    return{
        type:'BOOKMARK',
        id,
        status
    }
}

export function currentCard(card){
    return{
        type:'CURRENT_CARD',
        card
    }
}

export function increment(users,index){
    console.log("inside increment",users);
    return{
        type:'INCREMENT_LIKES',
        users,
        index
    };
}

export function changeRoute(view){
    return {
        type:'ROUTE_CHANGED',
        view
    }
}

export function getCards(url){
    return (dispatch) => {
             return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
                dispatch(isLoading(false));
				dispatch(itemsFetchDataSuccess(response.data));
			})
			.catch(function(response){
				dispatch(itemsHasErrored(response.data));
        })
      }
}
