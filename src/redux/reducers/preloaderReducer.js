import { types } from "../types";

const initialState = {
  preloader: false,
  users: [],
  loading: false,
  error: null,
};

export default function preloaderReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRELOADER_ON:
      return { ...state, preloader: true };
    case types.PRELOADER_OFF:
      return { ...state, preloader: false };
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Failed to fetch users",
      };
    default:
      return state;
  }
}

