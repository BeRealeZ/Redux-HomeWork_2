import { types } from "./types";

function preloaderOn() {
  return {
    type: types.PRELOADER_ON,
  };
}

function preloaderOff() {
  return {
    type: types.PRELOADER_OFF,
  };
}

export function addUserAction(user) {
  return async function (dispatch) {
    dispatch(preloaderOn());

    const options = {
      method: "POST",
      headeres: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      options
    );

    if (response.status >= 200 && response.status <= 204) {
      dispatch(preloaderOff());
      alert("successfully");
    }

    if (response.status === 404) {
      dispatch(preloaderOff);
      alert("fail");
    }
  };
}

export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = () => ({
  type: types.FETCH_USERS_FAILURE,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status >= 200 && response.status <= 204) {
        const data = await response.json();
        dispatch(fetchUsersSuccess(data));
      } else {
        dispatch(fetchUsersFailure());
      }
    } catch (error) {
      dispatch(fetchUsersFailure());
    }
  };
};

