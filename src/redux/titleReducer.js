import { types } from "./types"

const initialState = {
    title: 'Lesson1'
}

export default function reducer (state = initialState, action) {
    if(action.type === types.HANDLE_CHANGE) {
        return {title: 'lesson2'}
    }

    return state
}