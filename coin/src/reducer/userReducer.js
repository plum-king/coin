import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "../action/types";

export default function(state={},action){
    switch(action.type){
        case REGISTER_USER:
            return {...state,success: action.payload};
            break;
        case LOGIN_USER:
            return {...state,loginSuccess:action.payload};
            break;
        case AUTH_USER:
            return {...state,isAuth:action.payload};
            break;
        case LOGOUT_USER:
            return {...state,success:action.payload};
            break;
        default:
            return state;
    }
}