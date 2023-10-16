import { types } from "./types";

export function changeTitleAction() {
    return {
        type: types.HANDLE_CHANGE
    }
}

export function asyncFunctionAction() {
    return function (dispatch) {
        setTimeout(() => {
            alert("hello")
        }, 2000)
    }
}

function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await reponse.json()
        dispatch(getUsersAction(data))
    }
}

export function fetchUserOneInfo(id) {
    return async function (dispatch) {
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await reponse.json()
        dispatch({
            type: types.USER_INFO,
            payload: data
        })
    }
}
