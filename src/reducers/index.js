import { combineReducers } from 'redux';


//Reducers



//***************************************************/

//Purple Bar Notification
const notificationBarTree = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
};

//***************************************************/

//TODO: Separar los reducers en dif files o dejar aca si no fueran muchos

export default combineReducers({
    notificationBarTree
});


