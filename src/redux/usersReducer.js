import { types } from "./types";

const initialState = {
    users: []
}

export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case types.USERS:
            return {users: action.payload}
        case types.USER_INFO:
            return {users: [...state.users], userInfo: action.payload}
        
            default: return state
    }
}