import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadMyIncidentsRequest(loadMyIncidentsData) {
    return dispatch => {
        dispatch(LoadMyIncidentsRequest());
        if(loadMyIncidentsData){
            return fbConfigs.database.ref('/crimes').orderByChild('userEmail').equalTo(loadMyIncidentsData.email).once('value', snap => {
                const todo = [];
                snap.forEach(childSnapshot => {
                    var innerTodo = childSnapshot.val();
                    innerTodo.key = childSnapshot.key;
                    if(childSnapshot.hasChild('comments')){
                        var customComments = Object.keys(childSnapshot.val().comments).map(key=>{return {key:childSnapshot.val().comments[key]}})
                        console.log(customComments);
                        innerTodo.comments = customComments;
                        todo.push(innerTodo);
                    }else{
                        todo.push(innerTodo);
                    }
                })
                dispatch(loadMyIncidentsRequestSuccess(todo))
            });
        }else{
            dispatch(loadMyIncidentsRequestFailed())
        }
    }
}

function LoadMyIncidentsRequest() {
    return {
        type: ActionTypes.loadMyIncidentsRequest
    };
}

function loadMyIncidentsRequestSuccess(data) {
    return {
        type: ActionTypes.loadMyIncidentsRequestSuccess,
        data
    };
}

function loadMyIncidentsRequestFailed() {
    return {
        type: ActionTypes.loadMyIncidentsRequestFailed
    };
}